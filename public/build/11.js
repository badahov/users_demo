(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[11],{276:function(e,t,n){"use strict";(function(e){n.d(t,"c",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return s});var r=n(80),o=e.env.API_AUTH;function a(){return{login:"",password:""}}function i(){var t=o+e.env.SET_POINT+"interface-users/user-current",n=(new FormData,new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest));return n.withCredentials=!0,n.open("GET",t,!0),n.send(),n}function u(e){var t=Object(r.b)(),n=o+"api/users/pass_restoring/?token="+t,a=new FormData;for(var i in e)a.append(i,e[i]);var u=new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest);return u.open("POST",n,!0),u.send(a),u}function s(t){var n=o+e.env.SET_POINT+"/auth/login",r=new FormData;for(var a in t)r.append(a,t[a]);var i=new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest);return i.open("POST",n,!0),i.withCredentials=!0,i.send(r),i}}).call(this,n(27))},391:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"auth",function(){return h});var o=n(1),a=n.n(o),i=n(71),u=n(67),s=n(113),c=n(79),l=n.n(c),f=n(80);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(e){return function(t){return function(n){switch(n.type){case"AUTH_LOGIN_DEFAULT":var r=p(n.actions,1)[0];e.dispatch({type:r,data:n.promise});break;case"AUTH_LOGIN":var o=p(n.actions,3),a=o[0];o[1],o[2],e.dispatch({type:a}),n.promise.onload=function(){var e=JSON.parse(this.responseText);switch(n.promise.status){case 403:l.a.error("Недостаточно прав");break;case 401:l.a.error("Ошибка логина или пароля.");break;case 200:"error"!==e.status&&Object(f.a)()}},n.promise.onerror=function(){l.a.error("Error")};break;case"AUTH_CURRENT_USER":var i=p(n.actions,3),u=i[0],s=i[1];i[2],e.dispatch({type:u}),n.promise.onload=function(){var t=JSON.parse(this.responseText);switch(n.promise.status){case 403:l.a.error("Недостаточно прав");break;case 401:l.a.error("Ошибка логина или пароля.");break;case 200:"error"!==t.status&&e.dispatch({type:s,data:t.result})}};break;default:return t(n);case"AUTH_FORGOT_PASSWORD":var c=p(n.actions,3),d=c[0];c[1],c[2],e.dispatch({type:d}),n.promise.onload=function(){"AUTH_FORGOT_PASSWORD_NOT_ALLOWED"===JSON.parse(this.responseText).error?l.a.error("Ошибка LOGIN."):Object(f.a)()},n.promise.onerror=function(){403==JSON.parse(this.responseText).status?l.a.error("Недостаточно прав"):l.a.error("Error")}}}}},m=n(141),h=Object(m.combineForms)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_LOGIN_DEFAULT_LOADING":return t.data;default:return e}},current:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_CURRENT_USER_LOADED":return t.data;default:return e}},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_AUTH_FORGOT_PASSWORD_LOADED":return t.data;default:return e}}},"auth"),b=Object(u.applyMiddleware)(d,s.a)(u.createStore)(Object(u.combineReducers)(r)),y=n(124),O=n.n(y),v=n(276);function w(){return{type:"AUTH_LOGIN_DEFAULT",actions:["AUTH_LOGIN_DEFAULT_LOADING"],promise:Object(v.c)()}}function _(e){return{type:"AUTH_LOGIN",actions:["AUTH_LOGIN_LOADING","AUTH_LOGIN_LOADED","AUTH_LOGIN_LOAD_FAILURE"],promise:Object(v.b)(e)}}var T=n(431),E=n(323),g=n(328),S=n(434),A=n(440),L=n(138);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=T.a.Content,k=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=this,o=(e=R(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==D(o)&&"function"!=typeof o?j(r):o,H(j(n),"state",{confirmDirty:!1,autoCompleteResult:[]}),H(j(n),"handleSubmit",function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll(function(e,t){e||new Promise(function(e){n.props.authLogin(t),setTimeout(function(){e(!0)},1e3)})})}),H(j(n),"validateToNextPassword",function(e,t,r){var o=n.props.form;t&&n.state.confirmDirty&&o.validateFields(["confirm"],{force:!0}),r()}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return a.a.createElement(T.a,{className:"auth"},a.a.createElement(O.a,{title:"Авторизация"}),a.a.createElement(I,null,a.a.createElement(E.a,{className:"form-box animated fadeInDown"},a.a.createElement(g.a,{span:10,offset:7},a.a.createElement("h1",{className:"logo-name"},"SUP"),a.a.createElement("h3",null,"Добро пожаловать")),a.a.createElement(g.a,{span:10,offset:7},a.a.createElement(S.a,N({},{wrapperCol:{xs:{span:24},sm:{span:24},md:{span:14,offset:5},lg:{span:10,offset:7}}},{onSubmit:this.handleSubmit}),a.a.createElement(S.a.Item,null,e("login",{rules:[{required:!0,message:"Впишите логин",whitespace:!0}]})(a.a.createElement(A.a,{placeholder:"Логин"}))),a.a.createElement(S.a.Item,null,e("password",{rules:[{required:!0,message:"Впишите пароль"},{validator:this.validateToNextPassword}]})(a.a.createElement(A.a.Password,{placeholder:"Пароль"}))),a.a.createElement(S.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},a.a.createElement(L.a,{type:"primary",htmlType:"submit"},"Войти")))))))}}])&&P(n.prototype,r),o&&P(n,o),t}(),x=S.a.create({name:"register"})(k),G=Object(i.connect)(function(e){return{login:e.auth.login}},function(e){return Object(u.bindActionCreators)({authLogin:_,authLoginDefault:w,dispatch:e},e)})(x);n(391);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return J});var J=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,X(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){return a.a.createElement(i.Provider,{store:b},a.a.createElement(G,null))}}])&&q(n.prototype,r),u&&q(n,u),t}()},80:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return c}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return p});var r=n(114),o=n.n(r),a=n(8),i=n(79),u=n.n(i),s=e.env.API_AUTH;function c(){return o.a.get("token")}function l(t){var n=s+e.env.SET_POINT+"/auth/get-xdomain-token",r=new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest);r.open("POST",n,!0),r.withCredentials=!0,r.send(),r.onload=function(){switch(this.status){case 401:f();break;case 200:var n=JSON.parse(this.responseText),r=t.split("/"),o=r[0]+"//"+r[2]+e.env.SET_POINT+"auth/login",a=new FormData;a.append("xdomainToken",n.xdomainToken);var i=new XMLHttpRequest;i.open("POST",o,!0),i.withCredentials=!0,i.send(a),i.onload=function(){JSON.parse(this.responseText);switch(this.status){case 401:f();break;case 200:location.reload()}}}}}function f(){a.c.push("/login")}function p(){a.c.push("/")}u.a.options={closeButton:!0,progressBar:!0,showMethod:"slideDown",timeOut:4e3}}).call(this,n(27))}}]);