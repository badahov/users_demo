(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[8],{491:function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",(function(){return y})),r.d(e,"Request",(function(){return _})),r.d(e,"Response",(function(){return E})),r.d(e,"DOMException",(function(){return T})),r.d(e,"fetch",(function(){return B}));var o="URLSearchParams"in self,n="Symbol"in self&&"iterator"in Symbol,i="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in self,a="ArrayBuffer"in self;if(a)var h=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(t){return t&&h.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function d(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function y(t){this.map={},t instanceof y?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function p(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function b(t){var e=new FileReader,r=l(e);return e.readAsArrayBuffer(t),r}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&i&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||u(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var t,e,r,o=p(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=l(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(A)}),this.json=function(){return this.text().then(JSON.parse)},this}y.prototype.append=function(t,e){t=f(t),e=d(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},y.prototype.delete=function(t){delete this.map[f(t)]},y.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},y.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},y.prototype.set=function(t,e){this.map[f(t)]=d(e)},y.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},y.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),c(t)},y.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),c(t)},y.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),c(t)},n&&(y.prototype[Symbol.iterator]=y.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(t,e){var r,o,n=(e=e||{}).body;if(t instanceof _){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new y(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new y(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),v.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function A(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function E(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new y(e.headers),this.url=e.url||"",this._initBody(t)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},w.call(_.prototype),w.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var g=[301,302,303,307,308];E.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})};var T=self.DOMException;try{new T}catch(t){(T=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function B(t,e){return new Promise((function(r,o){var n=new _(t,e);if(n.signal&&n.signal.aborted)return o(new T("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t,e,o={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new y,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e)};o.url="responseURL"in s?s.responseURL:o.headers.get("X-Request-URL");var n="response"in s?s.response:s.responseText;r(new E(n,o))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new T("Aborted","AbortError"))},s.open(n.method,n.url,!0),"include"===n.credentials?s.withCredentials=!0:"omit"===n.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),n.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),n.signal&&(n.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&n.signal.removeEventListener("abort",a)}),s.send(void 0===n._bodyInit?null:n._bodyInit)}))}B.polyfill=!0,self.fetch||(self.fetch=B,self.Headers=y,self.Request=_,self.Response=E)}}]);
//# sourceMappingURL=whatwg-fetch.js.map