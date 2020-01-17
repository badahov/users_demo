(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[9],{154:function(e,t,r){"use strict";var n=r(55),a=r.n(n);t.a={path:"user/edit/:userId/:page",getComponent:function(e,t){Promise.all([r.e(1),r.e(2),r.e(0),r.e(3),r.e(5),r.e(4),r.e(7),r.e(6),r.e(8),r.e(9),r.e(21)]).then(r.bind(null,275)).then((function(e){return t(null,e.default)})).catch((function(){return a.a}))}}},273:function(e,t,r){},275:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(14),i=r(15),l=r(59),c=r(56),u=r(46),s=Object(i.applyMiddleware)(Object(l.a)("system"),u.a)(i.createStore)(Object(i.combineReducers)({system:Object(c.a)({name:"system",models:[{name:"user",points:["item","current"]}]})})),p=r(60),f=r(4),m=r(5);var b="interface-users/user",d="interface-users/user-edit",y="interface-users/user-current";function h(e,t,r){switch(e){case"userItem":return new f.e({data:t,pointApi:b,type:f.e.get}).result();case"userCurrent":return new f.e({domain:m.a.domain.auth,type:f.e.get,pointApi:y}).result();case"userEdit":return new f.e({data:t,pointApi:d}).result()}}var g=r(47),v=r.n(g),O=r(291),w=r(159),E=r(301),j=r(61),_=r(29),P=r(294),S=r(297),k=r(295),x=r(26);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?N(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:5}}},z=function(e){function t(){var e,r;I(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return q(N(r=D(this,(e=A(t)).call.apply(e,[this].concat(a)))),"handleSubmit",(function(e){e.preventDefault(),r.props.form.validateFieldsAndScroll((function(e,t){e||(t.operator_id=Number(r.props.user_id),r.props.submit(t))}))})),q(N(r),"handleConfirmBlur",(function(e){var t=e.target.value;r.setState({confirmDirty:r.state.confirmDirty||!!t})})),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=!this.props.item;return a.a.createElement(w.a,{tip:"Загрузка...",size:"large",spinning:t},a.a.createElement(j.a,null,a.a.createElement(_.a,{span:24},a.a.createElement(E.a,F({},B,{onSubmit:this.handleSubmit}),a.a.createElement(j.a,{gutter:16,style:{marginBottom:"50px"}},a.a.createElement(E.a.Item,{label:"Код",hasFeedback:!0},e("operator_code",{rules:[{required:!0,message:"Пожалуйста, ввидите код пользователя"}]})(a.a.createElement(P.a,{style:{width:"65%"},min:0,placeholder:"Код пользователя"}))),a.a.createElement(E.a.Item,{label:"Имя",hasFeedback:!0},e("operator_name",{rules:[{required:!0,message:"Пожалуйста, ввидите имя пользователя"}]})(a.a.createElement(S.a,{placeholder:"Имя пользователя"}))),a.a.createElement(E.a.Item,{label:"Логин",hasFeedback:!0},e("operator_login",{rules:[{required:!0,message:"Пожалуйста, ввидите логин пользователя"}]})(a.a.createElement(S.a,{placeholder:"Логин пользователя"}))),a.a.createElement(E.a.Item,{label:"Администратор"},e("is_admin",{valuePropName:"checked"})(a.a.createElement(k.a,null))),a.a.createElement(E.a.Item,{label:"Перепечать"},e("is_reprint_admin",{valuePropName:"checked"})(a.a.createElement(k.a,null)))),a.a.createElement(j.a,{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px 0 10px",background:"#fff",textAlign:"left"}},a.a.createElement(x.a,{type:"primary",htmlType:"submit"},"Изменить"))))))}}])&&T(r.prototype,n),o&&T(r,o),t}(n.Component);q(z,"defaultProps",{item:null});var U=z;function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){K(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var M=E.a.create({name:"user_data_form",mapPropsToFields:function(e){return{operator_code:E.a.createFormField(H({},e.item.operator_code,{value:e.item.operator_code})),operator_name:E.a.createFormField(H({},e.item.operator_name,{value:e.item.operator_name})),operator_login:E.a.createFormField(H({},e.item.operator_login,{value:e.item.operator_login})),is_admin:E.a.createFormField(H({},e.item.is_admin,{value:e.item.is_admin})),is_reprint_admin:E.a.createFormField(H({},e.item.is_reprint_admin,{value:e.item.is_reprint_admin}))}}})(U);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Z={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:5}}},$=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=Q(t).call(this,e),r=!a||"object"!==V(a)&&"function"!=typeof a?W(n):a,Y(W(r),"handleSubmit",(function(e){e.preventDefault(),r.props.form.validateFieldsAndScroll((function(e,t){e||(delete t.confirm,t.operator_id=Number(r.props.user_id),r.props.submit(t))}))})),Y(W(r),"handleConfirmBlur",(function(e){var t=e.target.value;r.setState({confirmDirty:r.state.confirmDirty||!!t})})),Y(W(r),"compareToFirstPassword",(function(e,t,n){var a=r.props.form;t&&t!==a.getFieldValue("password")?n("Пароли не совпадают!"):n()})),Y(W(r),"validateToNextPassword",(function(e,t,n){var a=r.props.form;t&&r.state.confirmDirty&&a.validateFields(["confirm"],{force:!0}),n()})),r.state={confirmDirty:!1},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return a.a.createElement(j.a,null,a.a.createElement(_.a,{span:24},a.a.createElement(E.a,G({},Z,{onSubmit:this.handleSubmit}),a.a.createElement(j.a,{gutter:16,style:{marginBottom:"50px"}},a.a.createElement(E.a.Item,{label:"Пароль",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Пожалуйста, введите пароль!"},{validator:this.validateToNextPassword}]})(a.a.createElement(S.a.Password,null))),a.a.createElement(E.a.Item,{label:"Повторить пароль",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Пожалуйста, повторите пароль!"},{validator:this.compareToFirstPassword}]})(a.a.createElement(S.a.Password,{onBlur:this.handleConfirmBlur})))),a.a.createElement(j.a,{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px 0 10px",background:"#fff",textAlign:"left"}},a.a.createElement(x.a,{type:"primary",htmlType:"submit"},"Изменить")))))}}])&&L(r.prototype,n),o&&L(r,o),t}(n.Component),ee=E.a.create({name:"user_password_form",mapPropsToFields:function(){return null}})($),te=r(69);function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ae(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function le(e,t){return(le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ue=te.a.Option,se={labelCol:{xs:{span:24},sm:{span:2}},wrapperCol:{xs:{span:24},sm:{span:15}}},pe=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=oe(t).call(this,e),r=!o||"object"!==re(o)&&"function"!=typeof o?ie(n):o,ce(ie(r),"handleSubmit",(function(e){e.preventDefault(),r.props.form.validateFieldsAndScroll((function(e,t){if(!e){t.operator_id=Number(r.props.user_id);var n=t.roles.map((function(e){return{id:Number(e)}}));t.roles=n,r.props.submit(t)}}))})),ce(ie(r),"handleSelectedChange",(function(e){r.setState({selected:e})})),ce(ie(r),"shouldComponentUpdate",(function(e,t){return t.options!==r.state.options||t.selected!==r.state.selected})),new f.e({pointApi:"interface-users/role-select"}).send().then((function(e){var t=[];e.map((function(e){t.push(a.a.createElement(ue,{key:e.id},e.title))})),r.setState({options:t})})),r.state={options:[],selected:[]},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&le(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return a.a.createElement(j.a,null,a.a.createElement(_.a,{span:24},a.a.createElement(E.a,ne({},se,{onSubmit:this.handleSubmit}),a.a.createElement(j.a,{gutter:16,style:{marginBottom:"50px"}},a.a.createElement(E.a.Item,{label:"Выбор ролей",hasFeedback:!0},e("roles",{})(a.a.createElement(te.a,{mode:"multiple",style:{width:"100%"},placeholder:"Пожалуйста, выберите роли",onChange:this.handleSelectedChange},this.state.options)))),a.a.createElement(j.a,{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px 0 10px",background:"#fff",textAlign:"left"}},a.a.createElement(x.a,{type:"primary",htmlType:"submit"},"Изменить")))))}}])&&ae(r.prototype,n),o&&ae(r,o),t}(n.Component);function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){be(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var de=E.a.create({name:"user_roles_form",mapPropsToFields:function(e){var t=[];return e.item.roles&&(t=e.item.roles.map((function(e){return String(e.id)}))),{roles:E.a.createFormField(me({},e.operator_code,{value:t}))}}})(pe),ye=r(11),he=r(298),ge=r(3),ve=r(111),Oe=O.a.Header,we=function(e){return a.a.createElement(Oe,null,a.a.createElement(he.a,{title:a.a.createElement("span",null,a.a.createElement(ge.a,{className:"trigger",type:e.collapsed?"menu-unfold":"menu-fold",onClick:e.toggle}),e.title),subTitle:e.subTitle,extra:e.extra}),a.a.createElement(ve.a,{mode:"horizontal"},a.a.createElement(ve.a.Item,{key:"team"},a.a.createElement(ye.a,{to:"/"},a.a.createElement(ge.a,{type:"team"}),"Пользователи")),a.a.createElement(ve.a.Item,{key:"role"},a.a.createElement(ye.a,{to:"/role"},a.a.createElement(ge.a,{type:"cluster"}),"Роли"))))},Ee=O.a.Sider,je=function(e){var t=e.collapsed,r=e.userId,n="1";switch(e.page){case"data":n="1";break;case"password":n="3";break;case"roles":n="4"}return a.a.createElement(Ee,{width:250,trigger:null,collapsible:!0,collapsed:t},a.a.createElement("div",{className:"logo"},"USER"),a.a.createElement(ve.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[n]},a.a.createElement(ve.a.Item,{key:"1"},a.a.createElement(ye.a,{to:"/user/edit/".concat(r,"/data")},a.a.createElement(ge.a,{type:"idcard"}),a.a.createElement("span",null,"Данные пользователя"))),a.a.createElement(ve.a.Item,{key:"3"},a.a.createElement(ye.a,{to:"/user/edit/".concat(r,"/password")},a.a.createElement(ge.a,{type:"safety"}),a.a.createElement("span",null,"Изменение пароля"))),a.a.createElement(ve.a.Item,{key:"4"},a.a.createElement(ye.a,{to:"/user/edit/".concat(r,"/roles")},a.a.createElement(ge.a,{type:"control"}),a.a.createElement("span",null,"Управление ролями")))))};function _e(e){return(_e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xe(e,t){return(xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Fe=O.a.Content,Ie=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=Se(t).call(this,e),r=!o||"object"!==_e(o)&&"function"!=typeof o?ke(n):o,Ce(ke(r),"toggle",(function(){r.setState({collapsed:!r.state.collapsed})})),Ce(ke(r),"renderTemplate",(function(e){var t,n=r.props,o=n.item,i=n.params.userId,l=n.modelEdit;switch(e){case"password":t=a.a.createElement(ee,{title:"Добавить пользователя",user_id:i,submit:l,wrappedComponentRef:function(e){return r.form=e}});break;case"roles":t=a.a.createElement(de,{title:"Добавить пользователя",user_id:i,item:o,submit:l,wrappedComponentRef:function(e){return r.form=e}});break;default:t=a.a.createElement(M,{title:"Добавить пользователя",user_id:i,item:o,submit:l,wrappedComponentRef:function(e){return r.form=e}})}return t})),r.state={collapsed:!1},e.modelServer(),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xe(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.item,r=e.current,n=e.params,o=n.page,i=n.userId,l=this.state.collapsed;if(t&&r){var c=t.operator_name,u=t.operator_login,s=!r;return a.a.createElement(O.a,null,a.a.createElement(je,{collapsed:l,page:o,userId:i}),a.a.createElement(O.a,null,a.a.createElement(v.a,{title:"Users"}),a.a.createElement(we,{title:c,subTitle:"login: ".concat(u),collapsed:l,toggle:this.toggle,extra:[a.a.createElement(f.c,{key:"logout-1"})]}),a.a.createElement(Fe,{className:"user-edit"},a.a.createElement(w.a,{tip:"Загрузка...",size:"large",spinning:s},this.renderTemplate(o)))))}return null}}])&&Pe(r.prototype,n),o&&Pe(r,o),t}(a.a.Component);Ie.defaultProps={params:{userId:null}};var Te=Ie;function De(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ne=Object(o.connectAdvanced)((function(e){var t={},r={},n=Object(p.a)(h,"system",e),a=function(e){return n("userItem",e)},i=function(e){return n("userEdit",e,(function(e){return a(t.location.query),e}))},l=function(){n("userCurrent"),a({id:t.params.userId})};return function(e,n){var a=function(e){return null===e},c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?De(Object(r),!0).forEach((function(t){Ae(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},n,{loading:!!a(e.system.userItem),item:a(e.system.userItem)?null:e.system.userItem.data,access:a(e.system.userItem)?null:e.system.userItem.access,current:a(e.system.userCurrent)?null:e.system.userCurrent.data,modelEdit:i,modelServer:l});return t=n,Object(o.shallowEqual)(r,c)||(r=c),r}}))(Te);r(273),t.default=function(e){var t=e.location,r=e.params;return a.a.createElement(o.Provider,{store:s},a.a.createElement(Ne,{location:t,params:r}))}}}]);
//# sourceMappingURL=edit.js.map