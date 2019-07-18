(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[12],{132:function(e,t,n){"use strict";t.a={path:"role",getComponent:function(e,t){Promise.all([n.e(1),n.e(2),n.e(0),n.e(6),n.e(5),n.e(3),n.e(4),n.e(8),n.e(7),n.e(10),n.e(12),n.e(19)]).then(function(e){t(null,n(222).default)}.bind(null,n)).catch(n.oe)}}},221:function(e,t,n){},222:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"user",function(){return f}),n.d(r,"role",function(){return b});var o=n(0),i=n.n(o),l=n(18),a=n(8),c=n(42),s=n(35),u={model:"role",api:{permission:"interface-users/permission",rolePermission:"interface-users/role-permission",roles:"interface-users/roles",roleAdd:"interface-users/role-add",roleEdit:"interface-users/role-edit",roleDelete:"interface-users/role-delete",userCurrent:"interface-users/user-current",userEdit:"interface-users/user-edit"},middleware:["PERMISSION","ROLE","USER_CURRENT","USER_ITEM"]},p=function(e){return function(t){return function(n){if(!u.middleware.includes(n.type))return t(n);Object(s.a)(e,n)}}},m=function(e){return function(t){return function(n){if(!u.middleware.includes(n.type))return t(n);Object(s.a)(e,n)}}},d=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.includes(n.type)?n.data:t}},f=Object(a.combineReducers)({action:d(["".concat("USER","_ITEM_LOADING")]),current:d(["".concat("USER","_CURRENT_LOADED")]),item:d(["".concat("USER","_ITEM_LOADED")])}),y=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.includes(n.type)?n.data:t}},b=Object(a.combineReducers)({permission:y(["PERMISSION_LOADED"]),role:y(["ROLE_LOADED"])}),E=Object(a.applyMiddleware)(p,m,c.a)(a.createStore)(Object(a.combineReducers)(r)),h=n(43),v=n.n(h),S=n(2),O=n.n(S),g=n(10),R=n(6),_=n(5),w=u.api;function I(e,t,n){return new R.d({pointApi:w.userEdit,data:e}).result().then(function(e){e&&n instanceof Function&&n(t)})}function P(){return{type:"USER_CURRENT",actions:["USER_CURRENT_LOADING","USER_CURRENT_LOADED","USER_CURRENT_LOAD_FAILURE"],promise:new R.d({domain:_.a.domain.auth,type:R.d.get,pointApi:w.userCurrent}).result()}}function j(e){return{type:"USER_EDIT",actions:["USER_EDIT_LOADED"],model:I(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,arguments.length>2&&void 0!==arguments[2]?arguments[2]:null)}}var A=u.api;function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R.d.post;return new R.d({pointApi:e,type:n,data:t})}function k(e,t,n){switch(e){case"item":return C(A.permission,t,R.d.get).result();case"switch":return C(A.rolePermission,t,R.d.post).result().then(function(e){if(e)return C(A.permission,{id:t.role_id},R.d.get).result()})}}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;switch(e){case"items":return C(A.roles,t,R.d.get).result();case"add":return C(A.roleAdd,t,R.d.post).result().then(function(e){if(e)return C(A.roles).result()});case"edit":return C(A.roleEdit,t,R.d.post).result().then(function(e){if(e)return C(A.roles).result(n)});case"delete":return C(A.roleDelete,t,R.d.post).result(n).then(function(e){if(e)return C(A.roles).result()})}}function N(e,t,n){return{type:"PERMISSION",actions:["PERMISSION_LOADING","PERMISSION_LOADED","PERMISSION_LOAD_FAILURE"],promise:k(e,t)}}function L(e,t,n){return{type:"ROLE",actions:["ROLE_LOADING","ROLE_LOADED","ROLE_LOAD_FAILURE"],promise:D(e,t,n)}}var T=n(233),U=n(243),F=n(241),x=n(101),M=n(4),q=n(240),z=n(22),G=n(133),B=n(53),J=n(28),K=n(244),H=n(238),V=n(239),Q=n(227),W=n(235),X=n(242),Y=n(234);function Z(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach(function(t){ie(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le=z.a.Group,ae=V.a.Search,ce=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=ne(t).call(this,e),n=!o||"object"!==ee(o)&&"function"!=typeof o?re(r):o,ie(re(n),"handleSubmit",function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll(function(e,t){e||(delete t.confirm,n.props.actionRole("add",t))})}),ie(re(n),"onClose",function(){n.props.onClose()}),ie(re(n),"onRoleEditAction",function(e,t){var n=e.target.parentElement.parentElement.parentElement.parentElement,r=n.querySelector(".link-role-name-".concat(t)),o=n.querySelector(".input-role-name-".concat(t)),i=n.querySelector(".btn-role-edit-".concat(t)),l=n.querySelector(".btn-role-delete-".concat(t)),a=n.querySelector(".btn-role-save-".concat(t));r.style.display="none",o.style.display="inline",i.style.display="none",l.style.display="none",a&&(a.style.display="inline")}),ie(re(n),"onRoleDelete",function(e){n.props.actionRole("delete",{id:e},function(e){return"ok"===e.status?(e.msg&&(Q.a.success(e.msg),n.props.onRoleSelect(0)),!e.result||e.result):e.msg?(Q.a.error(n._errorMsg(e.msg)),!1):void 0})}),ie(re(n),"onRoleEdit",function(e,t,r){var o=e.target.parentElement.parentElement.parentElement.parentElement;n.props.actionRole("edit",{id:t,name:r},function(e){if("ok"===e.status){if(e.msg&&Q.a.success(e.msg),e.result){var r=o.querySelector(".link-role-name-".concat(t)),i=o.querySelector(".input-role-name-".concat(t)),l=o.querySelector(".btn-role-edit-".concat(t)),a=o.querySelector(".btn-role-delete-".concat(t)),c=o.querySelector(".btn-role-save-".concat(t));return r.style.display="inline",i.style.display="none",l.style.display="inline",a.style.display="inline",c&&(c.style.display="none"),e.result}return!0}if(e.msg)return Q.a.error(n._errorMsg(e.msg)),!1})}),ie(re(n),"shouldComponentUpdate",function(e,t){return n.props.visible!==e.visible&&n.setState({visible:e.visible}),!0}),n.state={visible:e.visible},n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return i.a.createElement(W.a,{title:this.props.title,width:550,onClose:this.onClose,visible:this.state.visible,zIndex:1050},i.a.createElement(B.a,{style:{marginBottom:"20px"}},i.a.createElement(J.a,{span:24},i.a.createElement(X.a,{layout:"inline",onSubmit:this.handleSubmit},i.a.createElement(X.a.Item,{hasFeedback:!0},t("name",{})(i.a.createElement(V.a,{placeholder:"Название новой роли"}))),i.a.createElement(X.a.Item,null,i.a.createElement(z.a,{type:"primary",htmlType:"submit"},"Добавить")))),i.a.createElement(J.a,{span:24},i.a.createElement(K.a,{size:"small",style:{marginTop:"10px"},bordered:!0,dataSource:this.props.roleList,renderItem:function(t){return i.a.createElement(K.a.Item,{className:"list-role-item list-role-item-".concat(t.id),actions:t.editable?[i.a.createElement(le,null,i.a.createElement(z.a,{className:"btn-role-edit btn-role-edit-".concat(t.id),onClick:function(n){return e.onRoleEditAction(n,t.id)},size:"small",icon:"edit"}),i.a.createElement(Y.a,{title:"Удалить роль?",onConfirm:function(){return e.onRoleDelete(t.id)},okText:"Да",cancelText:"Нет",placement:"left",zIndex:1050},i.a.createElement(z.a,{className:"btn-role-delete btn-role-delete-".concat(t.id),size:"small",icon:"delete"})))]:null},i.a.createElement(g.a,{onClick:function(n){e.props.onRoleSelect(n,t.id)},className:"link-role-name link-role-name-".concat(t.id),style:{width:"100%"}},t.name),i.a.createElement(ae,{className:"input-role-name input-role-name-".concat(t.id),placeholder:"Название новой роли",enterButton:i.a.createElement(M.a,{type:"save"}),size:"small",defaultValue:t.name,onSearch:function(n,r){return e.onRoleEdit(r,t.id,n)}}))}}))))}}])&&te(n.prototype,r),l&&te(n,l),t}();ie(ce,"defaultProps",{visible:!0,visibleId:null,successionId:null,operationId:null,inputSourceId:null,stageId:null,title:null});var se=X.a.create({name:"user_add_form",mapPropsToFields:function(e){return{title:X.a.createFormField($({},e.sourceTitle,{value:e.sourceTitle}))}}})(ce);function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fe(e,t){return(fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}console.log("role index");var be=T.a.Header,Ee=T.a.Content,he=T.a.Sider,ve=U.a.Panel,Se=F.a.Meta,Oe=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=me(t).call(this,e),n=!o||"object"!==ue(o)&&"function"!=typeof o?de(r):o,ye(de(n),"toggle",function(){n.setState({collapsed:!n.state.collapsed})}),ye(de(n),"onClose",function(){n.setState({visibleSourceAddForm:!1})}),ye(de(n),"onOpen",function(){n.setState({visibleSourceAddForm:!n.state.visibleSourceAddForm,visibleId:1})}),ye(de(n),"onRoleSelect",function(e,t){for(var r=0;r<n.props.role.length;r++){var o=n.props.role[r];if(o.id===t){n.setState({selectRoleName:o.name,selectRoleId:o.id}),n.props.actionPermission("item",{id:o.id});break}}document.querySelectorAll(".list-role-item").forEach(function(e){e.setAttribute("style","background: #fff")}),document.querySelector(".list-role-item-".concat(t)).setAttribute("style","background: #fafafa")}),ye(de(n),"shouldComponentUpdate",function(e,t){return e.permission!==n.props.permission||t.visibleSourceAddForm!==n.state.visibleSourceAddForm||t.collapsed!==n.state.collapsed||e.role!==n.props.role}),ye(de(n),"permissionsSwitch",function(e,t,r){n.props.actionPermission("switch",{enabled:r,permission_id:t,role_id:n.state.selectRoleId})}),n.state={selectRoleName:"Гость",selectRoleId:0,collapsed:!0,visibleSourceAddForm:!1,visibleId:null,items:e.items,loading:!0,operationId:""},n.props.actionCurrent(),n.props.actionRole("items"),n.props.actionPermission("item",{id:0}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}(t,i.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;if(this.props.current){var t=!this.props.current;return i.a.createElement(T.a,null,i.a.createElement(he,{width:300,trigger:null,collapsible:!0,collapsed:this.state.collapsed},i.a.createElement("div",{className:"logo"},"USER"),i.a.createElement(x.b,{theme:"dark",mode:"inline",defaultSelectedKeys:["2"]},i.a.createElement(x.b.Item,{key:"1"},i.a.createElement(g.a,{to:"/"},i.a.createElement(M.a,{type:"team"}),i.a.createElement("span",null,"Пользователи"))),i.a.createElement(x.b.Item,{key:"2"},i.a.createElement(g.a,{to:"/role"},i.a.createElement(M.a,{type:"cluster"}),i.a.createElement("span",null,"Роли"))),i.a.createElement(x.b.ItemGroup,{key:"roles",title:""},this.props.role?this.props.role.map(function(t){return i.a.createElement(x.b.Item,{onClick:function(n){e.onRoleSelect(n,t.id)},key:"role-".concat(t.id)},i.a.createElement(M.a,{type:"property-safety"}),i.a.createElement("span",null,t.name))}):null))),i.a.createElement(T.a,null,i.a.createElement(v.a,{title:this.state.selectRoleName}),i.a.createElement(be,null,i.a.createElement(q.a,{title:i.a.createElement("span",null,i.a.createElement(M.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),"Управление ролями"),subTitle:"текущая: ".concat(this.state.selectRoleName),extra:[i.a.createElement(z.a,{key:"add-role",className:"btn-user-add",onClick:function(){return e.onOpen()},type:"primary",size:"small"},"Управление ролями"),i.a.createElement(R.b,{key:"logout-1"})]})),i.a.createElement(Ee,{className:"user-list"},i.a.createElement(G.a,{tip:"Загрузка...",size:"large",spinning:t},i.a.createElement(B.a,null,i.a.createElement(J.a,{span:24},i.a.createElement(U.a,{defaultActiveKey:["1"]},this.props.permission.modules?this.props.permission.modules.map(function(t){return i.a.createElement(ve,{header:"".concat(t.name,": ").concat(t.desc),key:t.group},i.a.createElement(K.a,{grid:{gutter:16,xs:1,sm:1,md:2,lg:3,xl:4,xxl:4},dataSource:t.permissions,renderItem:function(t,n){return i.a.createElement(K.a.Item,null,i.a.createElement(g.a,{onClick:function(){e.permissionsSwitch(t.group,t.id,t.enabled)}},i.a.createElement(H.a,{content:t.desc,title:t.name},i.a.createElement(F.a,{className:O()("permissions-default",{"permissions-enabled":t.enabled}),size:"small"},i.a.createElement(Se,{avatar:t.enabled?i.a.createElement(M.a,{type:"check"}):i.a.createElement(M.a,{type:"stop"}),title:t.name})))))}}))}):null)),i.a.createElement(se,{visible:this.state.visibleSourceAddForm,visibleId:this.state.visibleId,title:"Роли",onRoleSelect:this.onRoleSelect,roleList:this.props.role,actionRole:this.props.actionRole,onClose:this.onClose,wrappedComponentRef:function(t){return e.form=t}}))))))}return null}}])&&pe(n.prototype,r),o&&pe(n,o),t}(),ge=Object(l.connect)(function(e){return{access:e.user.access,current:e.user.current,role:e.role.role,permission:e.role.permission}},function(e){return Object(a.bindActionCreators)({actionCurrent:P,actionEdit:j,actionPermission:N,actionRole:L,dispatch:e},e)})(Oe);n(221);function Re(e){return(Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function we(e,t){return!t||"object"!==Re(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ie(e){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pe(e,t){return(Pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var je=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),we(this,Ie(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pe(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){return i.a.createElement(l.Provider,{store:E},i.a.createElement(ge,{header:this.props.header,location:this.props.location,params:this.props.params}))}}])&&_e(n.prototype,r),a&&_e(n,a),t}();t.default=je}}]);
//# sourceMappingURL=role.js.map