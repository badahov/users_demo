(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[9],{182:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(65);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(242),l=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"type","POST"),a(this,"data",null),a(this,"pointApi",null),a(this,"domain",r.a.domain.api),a(this,"send",function(){return n._fetch()}),a(this,"result",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return n.send().then(function(t){return e instanceof Function?e(t):"ok"===t.status?(t.msg&&n._success(t.msg),!t.result||t.result):t.msg?(n._error(n._errorMsg(t.msg)),!1):void 0})}),a(this,"_getUrl",function(){var t="";if(n.type===e.get){var o=null;n.data&&(o=n._getParams(n.data)),t=o?n.domain+r.a.server.setPoint+n.pointApi+r.a.server.prefix+o:n.domain+r.a.server.setPoint+n.pointApi}else t=n.domain+r.a.server.setPoint+n.pointApi;return t}),a(this,"_getFetchParam",function(){return n.type===e.get?{method:e.get,headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}:{method:e.post,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n.data),credentials:"include"}}),a(this,"_fetch",function(){var e=n._getUrl(),t=n._getFetchParam();return i(e,t).then(function(t){if(200===t.status)return t.json();if(500===t.status)throw n._error(r.a.error[t.status]),t.statusText;if(404===t.status)throw n._error(r.a.error[t.status]),t.statusText;if(417===t.status)throw t.json().then(function(e){e.status?n._error(r.a.error[t.status]):n._error(n._errorMsg(e.msg))}),t.statusText;if(423===t.status)throw n._error(r.a.error[t.status]),t.statusText;if(401!==t.status)throw 403===t.status?(n._error(r.a.error[t.status]),t.statusText):t.statusText;n._requestXdomainToken(e)})}),a(this,"_error",function(e){r.a.message.error(e)}),a(this,"_success",function(e){r.a.message.success(e)}),a(this,"_errorMsg",function(e){if("string"==typeof e)return e;var t=['<ul class="list-unstyled">'];return e.map(function(e){return t.push("<li>"+e+"</li>")}),t.push("</ul>"),t.join(" ")}),a(this,"_getParams",function(e){return Object.keys(e).map(function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))}).join("&")}),void 0!==t.type&&(this.type=t.type),void 0!==t.data&&(this.data=t.data),void 0!==t.pointApi&&(this.pointApi=t.pointApi),void 0!==t.domain&&(this.domain=t.domain)}var t,n,l;return t=e,(n=[{key:"_requestXdomainToken",value:function(e){var t=r.a.domain.auth+r.a.server.setPoint+"/auth/get-xdomain-token",n=new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest);n.open("POST",t,!0),n.withCredentials=!0,n.send();var o=this;n.onload=function(){switch(this.status){case 401:o._loginPage();break;case 200:var t=JSON.parse(this.responseText),n=e.split("/"),a=n[0]+"//"+n[2]+r.a.server.setPoint+"auth/login",i=new FormData;i.append("xdomainToken",t.xdomainToken);var l=new XMLHttpRequest;l.open("POST",a,!0),l.withCredentials=!0,l.send(i),l.onload=function(){switch(this.status){case 401:o._loginPage();break;case 200:location.reload()}}}}}},{key:"_loginPage",value:function(){r.a.history.push("/login")}}])&&o(t.prototype,n),l&&o(t,l),e}();a(l,"post","POST"),a(l,"get","GET")},187:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=function(e,t){var n=r(t.actions,3),o=n[0],a=n[1],i=n[2];"Promise"===t.promise.constructor.name?(e.dispatch({type:o,data:!0}),t.promise.then(function(t){e.dispatch({type:a,data:t}),e.dispatch({type:o,data:!1})},function(t){e.dispatch({type:i,error:t})})):(e.dispatch({type:o,data:!0}),e.dispatch({type:a,data:t.promise}),e.dispatch({type:o,data:!1}))}},195:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var r=n(65),o=n(1),a=n.n(o),i=n(475),l=n(197),s=n(29);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=i.a.confirm,y=function(e){function t(){var e,n,o,a,i,l,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,d=new Array(u),y=0;y<u;y++)d[y]=arguments[y];return o=this,n=!(a=(e=p(t)).call.apply(e,[this].concat(d)))||"object"!==c(a)&&"function"!=typeof a?f(o):a,i=f(n),s=function(){m({title:"Вы хотите выйти?",okText:"Да",okType:"danger",cancelText:"Нет",onOk:function(){var e=r.a.domain.auth+r.a.server.setPoint+"/auth/log-out",t=new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest);t.open("POST",e,!0),t.withCredentials=!0,t.send(),t.onload=function(){var e=r.a.domain.api+r.a.server.setPoint+"/auth/log-out",t=new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest);t.open("POST",e,!0),t.withCredentials=!0,t.send(),t.onload=function(){r.a.page.login()}}},onCancel:function(){console.log("Cancel handle logout")}})},(l="handleLogout")in i?Object.defineProperty(i,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[l]=s,n}var n,i,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o["Component"]),n=t,(i=[{key:"render",value:function(){return a.a.createElement(l.a,{type:"danger",size:"small",onClick:this.handleLogout},a.a.createElement(s.a,{type:"logout"})," Выход")}}])&&u(n.prototype,i),y&&u(n,y),t}()},460:function(e,t,n){},470:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"user",function(){return m}),n.d(r,"role",function(){return b});var o=n(1),a=n.n(o),i=n(172),l=n(170),s=n(198),c=n(187),u={model:"role",api:{permission:"interface-users/permission",rolePermission:"interface-users/role-permission",roles:"interface-users/roles",roleAdd:"interface-users/role-add",roleEdit:"interface-users/role-edit",roleDelete:"interface-users/role-delete",userCurrent:"interface-users/user-current",userEdit:"interface-users/user-edit"},middleware:["PERMISSION","ROLE","USER_CURRENT","USER_ITEM"]},p=function(e){return function(t){return function(n){if(!u.middleware.includes(n.type))return t(n);Object(c.a)(e,n)}}},f=function(e){return function(t){return function(n){if(!u.middleware.includes(n.type))return t(n);Object(c.a)(e,n)}}},d=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.includes(n.type)?n.data:t}},m=Object(l.combineReducers)({action:d(["".concat("USER","_ITEM_LOADING")]),current:d(["".concat("USER","_CURRENT_LOADED")]),item:d(["".concat("USER","_ITEM_LOADED")])}),y=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.includes(n.type)?n.data:t}},b=Object(l.combineReducers)({permission:y(["PERMISSION_LOADED"]),role:y(["ROLE_LOADED"])}),h=Object(l.applyMiddleware)(p,f,s.a)(l.createStore)(Object(l.combineReducers)(r)),v=n(208),E=n.n(v),g=n(17),O=n.n(g),S=n(23),_=n(182),w=n(65),R=u.api;function P(e,t,n){return new _.a({pointApi:R.userEdit,data:e}).result().then(function(e){e&&n instanceof Function&&n(t)})}function j(){return{type:"USER_CURRENT",actions:["USER_CURRENT_LOADING","USER_CURRENT_LOADED","USER_CURRENT_LOAD_FAILURE"],promise:new _.a({domain:w.a.domain.auth,type:_.a.get,pointApi:R.userCurrent}).result()}}function k(e){return{type:"USER_EDIT",actions:["USER_EDIT_LOADED"],model:P(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,arguments.length>2&&void 0!==arguments[2]?arguments[2]:null)}}var T=u.api;function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_.a.post;return new _.a({pointApi:e,type:n,data:t})}function A(e,t,n){switch(e){case"item":return I(T.permission,t,_.a.get).result();case"switch":return I(T.rolePermission,t,_.a.post).result().then(function(e){if(e)return I(T.permission,{id:t.role_id},_.a.get).result()})}}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;switch(e){case"items":return I(T.roles,t,_.a.get).result();case"add":return I(T.roleAdd,t,_.a.post).result().then(function(e){if(e)return I(T.roles).result()});case"edit":return I(T.roleEdit,t,_.a.post).result().then(function(e){if(e)return I(T.roles).result(n)});case"delete":return I(T.roleDelete,t,_.a.post).result(n).then(function(e){if(e)return I(T.roles).result()})}}function D(e,t,n){return{type:"PERMISSION",actions:["PERMISSION_LOADING","PERMISSION_LOADED","PERMISSION_LOAD_FAILURE"],promise:A(e,t)}}function L(e,t,n){return{type:"ROLE",actions:["ROLE_LOADING","ROLE_LOADED","ROLE_LOAD_FAILURE"],promise:C(e,t,n)}}var N=n(466),x=n(474),U=n(468),q=n(464),M=n(29),F=n(473),X=n(197),z=n(450),H=n(333),G=n(338),J=n(477),B=n(467),K=n(195),V=n(476),Q=n(160),W=n(463),Y=n(472),Z=n(448);function $(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach(function(t){ie(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le=X.a.Group,se=V.a.Search,ce=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=re(t).call(this,e),n=!o||"object"!==te(o)&&"function"!=typeof o?oe(r):o,ie(oe(n),"handleSubmit",function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll(function(e,t){e||(delete t.confirm,n.props.actionRole("add",t))})}),ie(oe(n),"onClose",function(){n.props.onClose()}),ie(oe(n),"onRoleEditAction",function(e,t){var n=e.target.parentElement.parentElement.parentElement.parentElement,r=n.querySelector(".link-role-name-".concat(t)),o=n.querySelector(".input-role-name-".concat(t)),a=n.querySelector(".btn-role-edit-".concat(t)),i=n.querySelector(".btn-role-delete-".concat(t)),l=n.querySelector(".btn-role-save-".concat(t));r.style.display="none",o.style.display="inline",a.style.display="none",i.style.display="none",l&&(l.style.display="inline")}),ie(oe(n),"onRoleDelete",function(e){n.props.actionRole("delete",{id:e},function(e){return"ok"===e.status?(e.msg&&(Q.a.success(e.msg),n.props.onRoleSelect(0)),!e.result||e.result):e.msg?(Q.a.error(n._errorMsg(e.msg)),!1):void 0})}),ie(oe(n),"onRoleEdit",function(e,t,r){var o=e.target.parentElement.parentElement.parentElement.parentElement;n.props.actionRole("edit",{id:t,name:r},function(e){if("ok"===e.status){if(e.msg&&Q.a.success(e.msg),e.result){var r=o.querySelector(".link-role-name-".concat(t)),a=o.querySelector(".input-role-name-".concat(t)),i=o.querySelector(".btn-role-edit-".concat(t)),l=o.querySelector(".btn-role-delete-".concat(t)),s=o.querySelector(".btn-role-save-".concat(t));return r.style.display="inline",a.style.display="none",i.style.display="inline",l.style.display="inline",s&&(s.style.display="none"),e.result}return!0}if(e.msg)return Q.a.error(n._errorMsg(e.msg)),!1})}),ie(oe(n),"shouldComponentUpdate",function(e,t){return n.props.visible!==e.visible&&n.setState({visible:e.visible}),!0}),n.state={visible:e.visible},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return a.a.createElement(W.a,{title:this.props.title,width:550,onClose:this.onClose,visible:this.state.visible,zIndex:1050},a.a.createElement(H.a,{style:{marginBottom:"20px"}},a.a.createElement(G.a,{span:24},a.a.createElement(Y.a,{layout:"inline",onSubmit:this.handleSubmit},a.a.createElement(Y.a.Item,{hasFeedback:!0},t("name",{})(a.a.createElement(V.a,{placeholder:"Название новой роли"}))),a.a.createElement(Y.a.Item,null,a.a.createElement(X.a,{type:"primary",htmlType:"submit"},"Добавить")))),a.a.createElement(G.a,{span:24},a.a.createElement(J.a,{size:"small",style:{marginTop:"10px"},bordered:!0,dataSource:this.props.roleList,renderItem:function(t){return a.a.createElement(J.a.Item,{className:"list-role-item list-role-item-".concat(t.id),actions:t.editable?[a.a.createElement(le,null,a.a.createElement(X.a,{className:"btn-role-edit btn-role-edit-".concat(t.id),onClick:function(n){return e.onRoleEditAction(n,t.id)},size:"small",icon:"edit"}),a.a.createElement(Z.a,{title:"Удалить роль?",onConfirm:function(){return e.onRoleDelete(t.id)},okText:"Да",cancelText:"Нет",placement:"left",zIndex:1050},a.a.createElement(X.a,{className:"btn-role-delete btn-role-delete-".concat(t.id),size:"small",icon:"delete"})))]:null},a.a.createElement(S.a,{onClick:function(n){e.props.onRoleSelect(n,t.id)},className:"link-role-name link-role-name-".concat(t.id),style:{width:"100%"}},t.name),a.a.createElement(se,{className:"input-role-name input-role-name-".concat(t.id),placeholder:"Название новой роли",enterButton:a.a.createElement(M.a,{type:"save"}),size:"small",defaultValue:t.name,onSearch:function(n,r){return e.onRoleEdit(r,t.id,n)}}))}}))))}}])&&ne(n.prototype,r),i&&ne(n,i),t}();ie(ce,"defaultProps",{visible:!0,visibleId:null,successionId:null,operationId:null,inputSourceId:null,stageId:null,title:null});var ue=Y.a.create({name:"user_add_form",mapPropsToFields:function(e){return{title:Y.a.createFormField(ee({},e.sourceTitle,{value:e.sourceTitle}))}}})(ce);function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var he=N.a.Header,ve=N.a.Content,Ee=N.a.Sider,ge=x.a.Panel,Oe=U.a.Meta,Se=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=de(t).call(this,e),n=!o||"object"!==pe(o)&&"function"!=typeof o?me(r):o,be(me(n),"toggle",function(){n.setState({collapsed:!n.state.collapsed})}),be(me(n),"onClose",function(){n.setState({visibleSourceAddForm:!1})}),be(me(n),"onOpen",function(){n.setState({visibleSourceAddForm:!n.state.visibleSourceAddForm,visibleId:1})}),be(me(n),"onRoleSelect",function(e,t){for(var r=0;r<n.props.role.length;r++){var o=n.props.role[r];if(o.id===t){n.setState({selectRoleName:o.name,selectRoleId:o.id}),n.props.actionPermission("item",{id:o.id});break}}document.querySelectorAll(".list-role-item").forEach(function(e){e.setAttribute("style","background: #fff")}),document.querySelector(".list-role-item-".concat(t)).setAttribute("style","background: #fafafa")}),be(me(n),"shouldComponentUpdate",function(e,t){return e.permission!==n.props.permission||t.visibleSourceAddForm!==n.state.visibleSourceAddForm||t.collapsed!==n.state.collapsed||e.role!==n.props.role}),be(me(n),"permissionsSwitch",function(e,t,r){n.props.actionPermission("switch",{enabled:r,permission_id:t,role_id:n.state.selectRoleId})}),n.state={selectRoleName:"Гость",selectRoleId:0,collapsed:!0,visibleSourceAddForm:!1,visibleId:null,items:e.items,loading:!0,operationId:""},n.props.actionCurrent(),n.props.actionRole("items"),n.props.actionPermission("item",{id:0}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;if(this.props.current){var t=!this.props.current;return a.a.createElement(N.a,null,a.a.createElement(Ee,{width:300,trigger:null,collapsible:!0,collapsed:this.state.collapsed},a.a.createElement("div",{className:"logo"},"USER"),a.a.createElement(q.b,{theme:"dark",mode:"inline",defaultSelectedKeys:["2"]},a.a.createElement(q.b.Item,{key:"1"},a.a.createElement(S.a,{to:"/"},a.a.createElement(M.a,{type:"team"}),a.a.createElement("span",null,"Пользователи"))),a.a.createElement(q.b.Item,{key:"2"},a.a.createElement(S.a,{to:"/role"},a.a.createElement(M.a,{type:"cluster"}),a.a.createElement("span",null,"Роли"))),a.a.createElement(q.b.ItemGroup,{key:"roles",title:""},this.props.role?this.props.role.map(function(t){return a.a.createElement(q.b.Item,{onClick:function(n){e.onRoleSelect(n,t.id)},key:"role-".concat(t.id)},a.a.createElement(M.a,{type:"property-safety"}),a.a.createElement("span",null,t.name))}):null))),a.a.createElement(N.a,null,a.a.createElement(E.a,{title:this.state.selectRoleName}),a.a.createElement(he,null,a.a.createElement(F.a,{title:a.a.createElement("span",null,a.a.createElement(M.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),"Управление ролями"),subTitle:"текущая: ".concat(this.state.selectRoleName),extra:[a.a.createElement(X.a,{key:"add-role",className:"btn-user-add",onClick:function(){return e.onOpen()},type:"primary",size:"small"},"Управление ролями"),a.a.createElement(K.a,{key:"logout-1"})]})),a.a.createElement(ve,{className:"user-list"},a.a.createElement(z.a,{tip:"Загрузка...",size:"large",spinning:t},a.a.createElement(H.a,null,a.a.createElement(G.a,{span:24},a.a.createElement(x.a,{defaultActiveKey:["1"]},this.props.permission.modules?this.props.permission.modules.map(function(t){return a.a.createElement(ge,{header:"".concat(t.name,": ").concat(t.desc),key:t.group},a.a.createElement(J.a,{grid:{gutter:16,xs:1,sm:1,md:2,lg:3,xl:4,xxl:4},dataSource:t.permissions,renderItem:function(t,n){return a.a.createElement(J.a.Item,null,a.a.createElement(S.a,{onClick:function(){e.permissionsSwitch(t.group,t.id,t.enabled)}},a.a.createElement(B.a,{content:t.desc,title:t.name},a.a.createElement(U.a,{className:O()("permissions-default",{"permissions-enabled":t.enabled}),size:"small"},a.a.createElement(Oe,{avatar:t.enabled?a.a.createElement(M.a,{type:"check"}):a.a.createElement(M.a,{type:"stop"}),title:t.name})))))}}))}):null)),a.a.createElement(ue,{visible:this.state.visibleSourceAddForm,visibleId:this.state.visibleId,title:"Роли",onRoleSelect:this.onRoleSelect,roleList:this.props.role,actionRole:this.props.actionRole,onClose:this.onClose,wrappedComponentRef:function(t){return e.form=t}}))))))}return null}}])&&fe(n.prototype,r),o&&fe(n,o),t}(),_e=Object(i.connect)(function(e){return{access:e.user.access,current:e.user.current,role:e.role.role,permission:e.role.permission}},function(e){return Object(l.bindActionCreators)({actionCurrent:j,actionEdit:k,actionPermission:D,actionRole:L,dispatch:e},e)})(Se);n(460);function we(e){return(we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pe(e,t){return!t||"object"!==we(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ke(e,t){return(ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Te=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Pe(this,je(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ke(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){return a.a.createElement(i.Provider,{store:h},a.a.createElement(_e,{header:this.props.header,location:this.props.location,params:this.props.params}))}}])&&Re(n.prototype,r),l&&Re(n,l),t}();t.default=Te}}]);
//# sourceMappingURL=9.js.map