(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[10],{156:function(e,t,n){"use strict";var r=n(56),o=n.n(r);t.a={path:"role",getComponent:function(e,t){Promise.all([n.e(1),n.e(2),n.e(0),n.e(3),n.e(5),n.e(4),n.e(7),n.e(6),n.e(8),n.e(10),n.e(20)]).then(n.bind(null,276)).then((function(e){return t(null,e.default)})).catch((function(){return o.a}))}}},275:function(e,t,n){},276:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"user",(function(){return d})),n.d(r,"role",(function(){return b}));var o=n(0),i=n.n(o),a=n(15),l=n(10),c=n(46),s=n(55),u={model:"role",api:{permission:"interface-users/permission",rolePermission:"interface-users/role-permission",roles:"interface-users/roles",roleAdd:"interface-users/role-add",roleEdit:"interface-users/role-edit",roleDelete:"interface-users/role-delete",userCurrent:"interface-users/user-current",userEdit:"interface-users/user-edit"},middleware:["PERMISSION","ROLE","USER_CURRENT","USER_ITEM"]},p=function(e){return function(t){return function(n){if(!u.middleware.includes(n.type))return t(n);Object(s.a)(e,n)}}},m=function(e){return function(t){return function(n){if(!u.middleware.includes(n.type))return t(n);Object(s.a)(e,n)}}},f=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.includes(n.type)?n.data:t}},d=Object(l.combineReducers)({action:f(["".concat("USER","_ITEM_LOADING")]),current:f(["".concat("USER","_CURRENT_LOADED")]),item:f(["".concat("USER","_ITEM_LOADED")])}),y=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.includes(n.type)?n.data:t}},b=Object(l.combineReducers)({permission:y(["PERMISSION_LOADED"]),role:y(["ROLE_LOADED"])}),E=Object(l.applyMiddleware)(p,m,c.a)(l.createStore)(Object(l.combineReducers)(r)),h=n(4),v=n(5),S=u.api;function O(e,t,n){return new h.e({pointApi:S.userEdit,data:e}).result().then((function(e){e&&n instanceof Function&&n(t)}))}function g(){return{type:"USER_CURRENT",actions:["USER_CURRENT_LOADING","USER_CURRENT_LOADED","USER_CURRENT_LOAD_FAILURE"],promise:new h.e({domain:v.a.domain.auth,type:h.e.get,pointApi:S.userCurrent}).result()}}function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"USER_EDIT",actions:["USER_EDIT_LOADED"],model:O(e,t,n)}}var _=u.api;function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h.e.post;return new h.e({pointApi:e,type:n,data:t})}function I(e,t,n){switch(e){case"item":return w(_.permission,t,h.e.get).result();case"switch":return w(_.rolePermission,t,h.e.post).result().then((function(e){if(e)return w(_.permission,{id:t.role_id},h.e.get).result()}))}}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;switch(e){case"items":return w(_.roles,t,h.e.get).result();case"add":return w(_.roleAdd,t,h.e.post).result().then((function(e){if(e)return w(_.roles).result()}));case"edit":return w(_.roleEdit,t,h.e.post).result().then((function(e){if(e)return w(_.roles).result(n)}));case"delete":return w(_.roleDelete,t,h.e.post).result(n).then((function(e){if(e)return w(_.roles).result()}))}}function P(e,t,n){return{type:"PERMISSION",actions:["PERMISSION_LOADING","PERMISSION_LOADED","PERMISSION_LOAD_FAILURE"],promise:I(e,t)}}function A(e,t,n){return{type:"ROLE",actions:["ROLE_LOADING","ROLE_LOADED","ROLE_LOAD_FAILURE"],promise:j(e,t,n)}}var C=n(47),k=n.n(C),D=n(2),N=n.n(D),L=n(12),T=n(292),U=n(303),F=n(300),x=n(112),M=n(3),q=n(299),z=n(26),G=n(160),B=n(59),J=n(29),K=n(301),H=n(297),V=n(298),Q=n(281),W=n(294),X=n(302),Y=n(293);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ae=z.a.Group,le=V.a.Search,ce=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=ne(t).call(this,e),n=!o||"object"!==ee(o)&&"function"!=typeof o?re(r):o,ie(re(n),"handleSubmit",(function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll((function(e,t){e||(delete t.confirm,n.props.actionRole("add",t))}))})),ie(re(n),"onClose",(function(){n.props.onClose()})),ie(re(n),"onRoleEditAction",(function(e,t){var n=e.target.parentElement.parentElement.parentElement.parentElement,r=n.querySelector(".link-role-name-".concat(t)),o=n.querySelector(".input-role-name-".concat(t)),i=n.querySelector(".btn-role-edit-".concat(t)),a=n.querySelector(".btn-role-delete-".concat(t)),l=n.querySelector(".btn-role-save-".concat(t));r.style.display="none",o.style.display="inline",i.style.display="none",a.style.display="none",l&&(l.style.display="inline")})),ie(re(n),"onRoleDelete",(function(e){n.props.actionRole("delete",{id:e},(function(e){return"ok"===e.status?(e.msg&&(Q.a.success(e.msg),n.props.onRoleSelect(0)),!e.result||e.result):e.msg?(Q.a.error(n._errorMsg(e.msg)),!1):void 0}))})),ie(re(n),"onRoleEdit",(function(e,t,r){var o=e.target.parentElement.parentElement.parentElement.parentElement;n.props.actionRole("edit",{id:t,name:r},(function(e){if("ok"===e.status){if(e.msg&&Q.a.success(e.msg),e.result){var r=o.querySelector(".link-role-name-".concat(t)),i=o.querySelector(".input-role-name-".concat(t)),a=o.querySelector(".btn-role-edit-".concat(t)),l=o.querySelector(".btn-role-delete-".concat(t)),c=o.querySelector(".btn-role-save-".concat(t));return r.style.display="inline",i.style.display="none",a.style.display="inline",l.style.display="inline",c&&(c.style.display="none"),e.result}return!0}if(e.msg)return Q.a.error(n._errorMsg(e.msg)),!1}))})),ie(re(n),"shouldComponentUpdate",(function(e,t){return n.props.visible!==e.visible&&n.setState({visible:e.visible}),!0})),n.state={visible:e.visible},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return i.a.createElement(W.a,{title:this.props.title,width:550,onClose:this.onClose,visible:this.state.visible,zIndex:1050},i.a.createElement(B.a,{style:{marginBottom:"20px"}},i.a.createElement(J.a,{span:24},i.a.createElement(X.a,{layout:"inline",onSubmit:this.handleSubmit},i.a.createElement(X.a.Item,{hasFeedback:!0},t("name",{})(i.a.createElement(V.a,{placeholder:"Название новой роли"}))),i.a.createElement(X.a.Item,null,i.a.createElement(z.a,{type:"primary",htmlType:"submit"},"Добавить")))),i.a.createElement(J.a,{span:24},i.a.createElement(K.a,{size:"small",style:{marginTop:"10px"},bordered:!0,dataSource:this.props.roleList,renderItem:function(t){return i.a.createElement(K.a.Item,{className:"list-role-item list-role-item-".concat(t.id),actions:t.editable?[i.a.createElement(ae,null,i.a.createElement(z.a,{className:"btn-role-edit btn-role-edit-".concat(t.id),onClick:function(n){return e.onRoleEditAction(n,t.id)},size:"small",icon:"edit"}),i.a.createElement(Y.a,{title:"Удалить роль?",onConfirm:function(){return e.onRoleDelete(t.id)},okText:"Да",cancelText:"Нет",placement:"left",zIndex:1050},i.a.createElement(z.a,{className:"btn-role-delete btn-role-delete-".concat(t.id),size:"small",icon:"delete"})))]:null},i.a.createElement(L.a,{onClick:function(n){e.props.onRoleSelect(n,t.id)},className:"link-role-name link-role-name-".concat(t.id),style:{width:"100%"}},t.name),i.a.createElement(le,{className:"input-role-name input-role-name-".concat(t.id),placeholder:"Название новой роли",enterButton:i.a.createElement(M.a,{type:"save"}),size:"small",defaultValue:t.name,onSearch:function(n,r){return e.onRoleEdit(r,t.id,n)}}))}}))))}}])&&te(n.prototype,r),o&&te(n,o),t}(o.Component);ie(ce,"defaultProps",{visible:!0,visibleId:null,successionId:null,operationId:null,inputSourceId:null,stageId:null,title:null});var se=X.a.create({name:"user_add_form",mapPropsToFields:function(e){return{title:X.a.createFormField($({},e.sourceTitle,{value:e.sourceTitle}))}}})(ce);function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be=T.a.Header,Ee=T.a.Content,he=T.a.Sider,ve=U.a.Panel,Se=F.a.Meta,Oe=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=me(t).call(this,e),n=!o||"object"!==ue(o)&&"function"!=typeof o?fe(r):o,ye(fe(n),"toggle",(function(){n.setState({collapsed:!n.state.collapsed})})),ye(fe(n),"onClose",(function(){n.setState({visibleSourceAddForm:!1})})),ye(fe(n),"onOpen",(function(){n.setState({visibleSourceAddForm:!n.state.visibleSourceAddForm,visibleId:1})})),ye(fe(n),"onRoleSelect",(function(e,t){for(var r=0;r<n.props.role.length;r++){var o=n.props.role[r];if(o.id===t){n.setState({selectRoleName:o.name,selectRoleId:o.id}),n.props.actionPermission("item",{id:o.id});break}}document.querySelectorAll(".list-role-item").forEach((function(e){e.setAttribute("style","background: #fff")})),document.querySelector(".list-role-item-".concat(t)).setAttribute("style","background: #fafafa")})),ye(fe(n),"shouldComponentUpdate",(function(e,t){return e.permission!==n.props.permission||t.visibleSourceAddForm!==n.state.visibleSourceAddForm||t.collapsed!==n.state.collapsed||e.role!==n.props.role})),ye(fe(n),"permissionsSwitch",(function(e,t,r){n.props.actionPermission("switch",{enabled:r,permission_id:t,role_id:n.state.selectRoleId})})),n.state={selectRoleName:"Гость",selectRoleId:0,collapsed:!0,visibleSourceAddForm:!1,visibleId:null,items:e.items,loading:!0,operationId:""},n.props.actionCurrent(),n.props.actionRole("items"),n.props.actionPermission("item",{id:0}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this;if(this.props.current){var t=!this.props.current;return i.a.createElement(T.a,null,i.a.createElement(he,{width:300,trigger:null,collapsible:!0,collapsed:this.state.collapsed},i.a.createElement("div",{className:"logo"},"USER"),i.a.createElement(x.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["2"]},i.a.createElement(x.a.Item,{key:"1"},i.a.createElement(L.a,{to:"/"},i.a.createElement(M.a,{type:"team"}),i.a.createElement("span",null,"Пользователи"))),i.a.createElement(x.a.Item,{key:"2"},i.a.createElement(L.a,{to:"/role"},i.a.createElement(M.a,{type:"cluster"}),i.a.createElement("span",null,"Роли"))),i.a.createElement(x.a.ItemGroup,{key:"roles",title:""},this.props.role?this.props.role.map((function(t){return i.a.createElement(x.a.Item,{onClick:function(n){e.onRoleSelect(n,t.id)},key:"role-".concat(t.id)},i.a.createElement(M.a,{type:"property-safety"}),i.a.createElement("span",null,t.name))})):null))),i.a.createElement(T.a,null,i.a.createElement(k.a,{title:this.state.selectRoleName}),i.a.createElement(be,null,i.a.createElement(q.a,{title:i.a.createElement("span",null,i.a.createElement(M.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),"Управление ролями"),subTitle:"текущая: ".concat(this.state.selectRoleName),extra:[i.a.createElement(z.a,{key:"add-role",className:"btn-user-add",onClick:function(){return e.onOpen()},type:"primary",size:"small"},"Управление ролями"),i.a.createElement(h.c,{key:"logout-1"})]})),i.a.createElement(Ee,{className:"user-list"},i.a.createElement(G.a,{tip:"Загрузка...",size:"large",spinning:t},i.a.createElement(B.a,null,i.a.createElement(J.a,{span:24},i.a.createElement(U.a,{defaultActiveKey:["1"]},this.props.permission.modules?this.props.permission.modules.map((function(t){return i.a.createElement(ve,{header:"".concat(t.name,": ").concat(t.desc),key:t.group},i.a.createElement(K.a,{grid:{gutter:16,xs:1,sm:1,md:2,lg:3,xl:4,xxl:4},dataSource:t.permissions,renderItem:function(t,n){return i.a.createElement(K.a.Item,null,i.a.createElement(L.a,{onClick:function(){e.permissionsSwitch(t.group,t.id,t.enabled)}},i.a.createElement(H.a,{content:t.desc,title:t.name},i.a.createElement(F.a,{className:N()("permissions-default",{"permissions-enabled":t.enabled}),size:"small"},i.a.createElement(Se,{avatar:t.enabled?i.a.createElement(M.a,{type:"check"}):i.a.createElement(M.a,{type:"stop"}),title:t.name})))))}}))})):null)),i.a.createElement(se,{visible:this.state.visibleSourceAddForm,visibleId:this.state.visibleId,title:"Роли",onRoleSelect:this.onRoleSelect,roleList:this.props.role,actionRole:this.props.actionRole,onClose:this.onClose,wrappedComponentRef:function(t){return e.form=t}}))))))}return null}}])&&pe(n.prototype,r),o&&pe(n,o),t}(i.a.Component),ge=Object(a.connect)((function(e){return{access:e.user.access,current:e.user.current,role:e.role.role,permission:e.role.permission}}),(function(e){return Object(l.bindActionCreators)({actionCurrent:g,actionEdit:R,actionPermission:P,actionRole:A,dispatch:e},e)}))(Oe);n(275);function Re(e){return(Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ie(e,t){return!t||"object"!==Re(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pe(e,t){return(Pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ae=function(e){function t(){return _e(this,t),Ie(this,je(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pe(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return i.a.createElement(a.Provider,{store:E},i.a.createElement(ge,{header:this.props.header,location:this.props.location,params:this.props.params}))}}])&&we(n.prototype,r),o&&we(n,o),t}(o.Component);t.default=Ae}}]);
//# sourceMappingURL=role.js.map