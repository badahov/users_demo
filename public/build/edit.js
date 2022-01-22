(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[6],{161:function(e,t,r){"use strict";var n=r(37),a=r.n(n);t.a={path:"user/edit/:userId/:page",getComponent:function(e,t){Promise.all([r.e(1),r.e(0),r.e(3),r.e(2),r.e(5),r.e(4),r.e(6),r.e(18)]).then(r.bind(null,289)).then((function(e){return t(null,e.default)})).catch((function(){return a.a}))}}},285:function(e,t,r){},289:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(1),i=r.n(o),l=r(16),u=r(10),s=r(51),c=r(63),p=r(60),m=Object(u.a)(Object(c.a)("system"),s.a)(u.d)(Object(u.c)({system:Object(p.a)({name:"system",models:[{name:"user",points:["item","current"]}]})})),f=r(64),d=r(21),b=r(4),y="interface-users/user",g="interface-users/user-edit",h="interface-users/user-current";function v(e,t,r){switch(e){case"userItem":return new d.a({data:t,pointApi:y,type:"GET"}).result();case"userCurrent":return new d.a({domain:b.a.domain.auth,type:"GET",pointApi:h}).result();case"userEdit":return new d.a({data:t,pointApi:g}).result(r);default:return null}}var O=r(31),_=r(304),E=r(165),w=r(59),j=r(314),P=r(65),R=r(33),q=r(307),S=r(310),C=r(308),k=r(29);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?A(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var z={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:5}}},U=function(e){function t(){var e,r;x(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return B(A(r=I(this,(e=D(t)).call.apply(e,[this].concat(a)))),"handleSubmit",(function(e){e.preventDefault();var t=r.props,n=t.form,a=t.user_id,o=t.submit;n.validateFieldsAndScroll((function(e,t){e||(t.operator_id=Number(a),o(t))}))})),B(A(r),"handleConfirmBlur",(function(e){var t=e.target.value,n=r.state.confirmDirty;r.setState({confirmDirty:n||!!t})})),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.item,r=e.form.getFieldDecorator,n=!t;return a.a.createElement(E.a,{tip:"Загрузка...",size:"large",spinning:n},a.a.createElement(P.a,null,a.a.createElement(R.a,{span:24},a.a.createElement(j.a,{labelCol:z.labelCol,wrapperCol:z.wrapperCol,onSubmit:this.handleSubmit},a.a.createElement(P.a,{gutter:16,style:{marginBottom:"50px"}},a.a.createElement(j.a.Item,{label:"Код",hasFeedback:!0},r("operator_code",{rules:[{required:!0,message:"Пожалуйста, ввидите код пользователя"}]})(a.a.createElement(q.a,{style:{width:"65%"},min:0,placeholder:"Код пользователя"}))),a.a.createElement(j.a.Item,{label:"Имя",hasFeedback:!0},r("operator_name",{rules:[{required:!0,message:"Пожалуйста, ввидите имя пользователя"}]})(a.a.createElement(S.a,{placeholder:"Имя пользователя"}))),a.a.createElement(j.a.Item,{label:"Логин",hasFeedback:!0},r("operator_login",{rules:[{required:!0,message:"Пожалуйста, ввидите логин пользователя"}]})(a.a.createElement(S.a,{placeholder:"Логин пользователя"}))),a.a.createElement(j.a.Item,{label:"Администратор"},r("is_admin",{valuePropName:"checked"})(a.a.createElement(C.a,null))),a.a.createElement(j.a.Item,{label:"Перепечать"},r("is_reprint_admin",{valuePropName:"checked"})(a.a.createElement(C.a,null)))),a.a.createElement(P.a,{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px 0 10px",background:"#fff",textAlign:"left"}},a.a.createElement(k.a,{type:"primary",htmlType:"submit"},"Изменить"))))))}}])&&F(r.prototype,n),o&&F(r,o),t}(n.Component);U.propTypes={form:i.a.objectOf(i.a.func).isRequired,user_id:i.a.string.isRequired,submit:i.a.func.isRequired,item:i.a.shape({is_admin:i.a.bool.isRequired,is_reprint_admin:i.a.bool.isRequired,operator_code:i.a.number.isRequired,operator_id:i.a.number.isRequired,operator_login:i.a.string.isRequired,operator_name:i.a.string.isRequired,operator_token:i.a.string.isRequired}).isRequired};var G=U;function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){K(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var V=j.a.create({name:"user_data_form",mapPropsToFields:function(e){return{operator_code:j.a.createFormField(H({},e.item.operator_code,{value:e.item.operator_code})),operator_name:j.a.createFormField(H({},e.item.operator_name,{value:e.item.operator_name})),operator_login:j.a.createFormField(H({},e.item.operator_login,{value:e.item.operator_login})),is_admin:j.a.createFormField(H({},e.item.is_admin,{value:e.item.is_admin})),is_reprint_admin:j.a.createFormField(H({},e.item.is_reprint_admin,{value:e.item.is_reprint_admin}))}}})(G);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Z={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:5}}},$=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=Q(t).call(this,e),r=!a||"object"!==L(a)&&"function"!=typeof a?W(n):a,Y(W(r),"handleSubmit",(function(e){var t=r.props,n=t.form,a=t.user_id,o=t.submit;e.preventDefault(),n.validateFieldsAndScroll((function(e,t){e||(delete t.confirm,t.operator_id=Number(a),o(t))}))})),Y(W(r),"handleConfirmBlur",(function(e){var t=e.target.value,n=r.state.confirmDirty;r.setState({confirmDirty:n||!!t})})),Y(W(r),"compareToFirstPassword",(function(e,t,n){var a=r.props.form;t&&t!==a.getFieldValue("password")?n("Пароли не совпадают!"):n()})),Y(W(r),"validateToNextPassword",(function(e,t,n){var a=r.props.form,o=r.state.confirmDirty;t&&o&&a.validateFields(["confirm"],{force:!0}),n()})),r.state={confirmDirty:!1},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return a.a.createElement(P.a,null,a.a.createElement(R.a,{span:24},a.a.createElement(j.a,{labelCol:Z.labelCol,wrapperCol:Z.wrapperCol,onSubmit:this.handleSubmit},a.a.createElement(P.a,{gutter:16,style:{marginBottom:"50px"}},a.a.createElement(j.a.Item,{label:"Пароль",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Пожалуйста, введите пароль!"},{validator:this.validateToNextPassword}]})(a.a.createElement(S.a.Password,null))),a.a.createElement(j.a.Item,{label:"Повторить пароль",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Пожалуйста, повторите пароль!"},{validator:this.compareToFirstPassword}]})(a.a.createElement(S.a.Password,{onBlur:this.handleConfirmBlur})))),a.a.createElement(P.a,{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px 0 10px",background:"#fff",textAlign:"left"}},a.a.createElement(k.a,{type:"primary",htmlType:"submit"},"Изменить")))))}}])&&M(r.prototype,n),o&&M(r,o),t}(n.Component);$.defaultProps={item:null},$.propTypes={form:i.a.objectOf(i.a.func).isRequired,user_id:i.a.string.isRequired,submit:i.a.func.isRequired,item:i.a.shape({is_admin:i.a.bool.isRequired,is_reprint_admin:i.a.bool.isRequired,operator_code:i.a.number.isRequired,operator_id:i.a.number.isRequired,operator_login:i.a.string.isRequired,operator_name:i.a.string.isRequired,operator_token:i.a.string.isRequired})};var ee=$,te=j.a.create({name:"user_password_form"})(ee),re=r(22),ne=r.n(re),ae=r(37),oe=r.n(ae),ie=r(74);function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function me(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var fe=ie.a.Option,de={labelCol:{xs:{span:24},sm:{span:2}},wrapperCol:{xs:{span:24},sm:{span:15}}},be=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=se(t).call(this,e),r=!o||"object"!==le(o)&&"function"!=typeof o?ce(n):o,me(ce(r),"handleSubmit",(function(e){e.preventDefault();var t=r.props,n=t.form,a=t.user_id,o=t.submit;n.validateFieldsAndScroll((function(e,t){if(!e){t.operator_id=Number(a);var r=ne()(t.roles,(function(e){return{id:Number(e)}}));t.roles=r,o(t)}}))})),me(ce(r),"handleSelectedChange",(function(e){r.setState({selected:e})})),me(ce(r),"shouldComponentUpdate",(function(e,t){var n=r.state,a=n.options,o=n.selected;return t.options!==a||t.selected!==o})),new d.a({pointApi:"interface-users/role-select"}).send().then((function(e){var t=ne()(e,(function(e){return a.a.createElement(fe,{key:e.id},e.title)}));return r.setState({options:t}),t})).catch((function(){return oe.a})),r.state={options:[],selected:[]},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.options;return a.a.createElement(P.a,null,a.a.createElement(R.a,{span:24},a.a.createElement(j.a,{labelCol:de.labelCol,wrapperCol:de.wrapperCol,onSubmit:this.handleSubmit},a.a.createElement(P.a,{gutter:16,style:{marginBottom:"50px"}},a.a.createElement(j.a.Item,{label:"Выбор ролей",hasFeedback:!0},e("roles",{})(a.a.createElement(ie.a,{mode:"multiple",style:{width:"100%"},placeholder:"Пожалуйста, выберите роли",onChange:this.handleSelectedChange},t)))),a.a.createElement(P.a,{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px 0 10px",background:"#fff",textAlign:"left"}},a.a.createElement(k.a,{type:"primary",htmlType:"submit"},"Изменить")))))}}])&&ue(r.prototype,n),o&&ue(r,o),t}(n.Component);be.propTypes={form:i.a.objectOf(i.a.func).isRequired,user_id:i.a.string.isRequired,submit:i.a.func.isRequired,item:i.a.shape({is_admin:i.a.bool.isRequired,is_reprint_admin:i.a.bool.isRequired,operator_code:i.a.number.isRequired,operator_id:i.a.number.isRequired,operator_login:i.a.string.isRequired,operator_name:i.a.string.isRequired,operator_token:i.a.string.isRequired}).isRequired};var ye=be;function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){ve(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ve(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Oe=j.a.create({name:"user_roles_form",mapPropsToFields:function(e){var t=[];return e.item.roles&&(t=ne()(e.item.roles,(function(e){return String(e.id)}))),{roles:j.a.createFormField(he({},e.operator_code,{value:t}))}}})(ye),_e=r(11),Ee=r(311),we=r(3),je=r(119),Pe=_.a.Header,Re=function(e){var t=e.collapsed,r=e.toggle,n=e.title,o=e.subTitle,i=e.extra;return a.a.createElement(Pe,null,a.a.createElement(Ee.a,{title:a.a.createElement("span",null,a.a.createElement(we.a,{className:"trigger",type:t?"menu-unfold":"menu-fold",onClick:r}),n),subTitle:o,extra:i}),a.a.createElement(je.a,{mode:"horizontal"},a.a.createElement(je.a.Item,{key:"team"},a.a.createElement(_e.a,{to:"/"},a.a.createElement(we.a,{type:"team"}),"Пользователи")),a.a.createElement(je.a.Item,{key:"role"},a.a.createElement(_e.a,{to:"/role"},a.a.createElement(we.a,{type:"cluster"}),"Роли"))))};Re.propTypes={title:i.a.string.isRequired,subTitle:i.a.string.isRequired,collapsed:i.a.bool.isRequired,extra:i.a.arrayOf(i.a.oneOfType([i.a.element.isRequired])).isRequired,toggle:i.a.func.isRequired};var qe=Re,Se=_.a.Sider,Ce=function(e){var t,r=e.collapsed,n=e.userId;switch(e.page){case"data":t="1";break;case"password":t="3";break;case"roles":t="4";break;default:t="1"}return a.a.createElement(Se,{width:250,trigger:null,collapsible:!0,collapsed:r},a.a.createElement("div",{className:"logo"},"USER"),a.a.createElement(je.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[t]},a.a.createElement(je.a.Item,{key:"1"},a.a.createElement(_e.a,{to:"/user/edit/".concat(n,"/data")},a.a.createElement(we.a,{type:"idcard"}),a.a.createElement("span",null,"Данные пользователя"))),a.a.createElement(je.a.Item,{key:"3"},a.a.createElement(_e.a,{to:"/user/edit/".concat(n,"/password")},a.a.createElement(we.a,{type:"safety"}),a.a.createElement("span",null,"Изменение пароля"))),a.a.createElement(je.a.Item,{key:"4"},a.a.createElement(_e.a,{to:"/user/edit/".concat(n,"/roles")},a.a.createElement(we.a,{type:"control"}),a.a.createElement("span",null,"Управление ролями")))))};Ce.propTypes={page:i.a.string.isRequired,collapsed:i.a.bool.isRequired,userId:i.a.string.isRequired};var ke=Ce,Te=r(36);function xe(e){return(xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ie(e){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function De(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Be=_.a.Content,ze={},Ue=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=Ie(t).call(this,e),r=!o||"object"!==xe(o)&&"function"!=typeof o?De(n):o,Ne(De(r),"toggle",(function(){var e=r.state.collapsed;r.setState({collapsed:!e})})),Ne(De(r),"renderTemplate",(function(e){var t,n=r.props,o=n.item,i=n.params.userId,l=n.modelEdit;switch(e){case"password":t=a.a.createElement(te,{title:"Добавить пользователя",user_id:i,submit:l,wrappedComponentRef:function(e){r.form=e}});break;case"roles":t=a.a.createElement(Oe,{title:"Добавить пользователя",user_id:i,item:o,submit:l,wrappedComponentRef:function(e){r.form=e}});break;default:t=a.a.createElement(V,{title:"Добавить пользователя",user_id:i,item:o,submit:l,wrappedComponentRef:function(e){r.form=e}})}return t})),r.state={collapsed:!1},e.modelServer(),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.item,r=e.current,n=e.params,o=n.page,i=n.userId,l=this.state.collapsed;if(t&&r){var u=t.operator_name,s=t.operator_login,c=!r;return a.a.createElement(O.b,{context:ze},a.a.createElement(_.a,null,a.a.createElement(ke,{collapsed:l,page:o,userId:i}),a.a.createElement(_.a,null,a.a.createElement(O.a,{title:"Users"}),a.a.createElement(qe,{title:u,subTitle:"login: ".concat(s),collapsed:l,toggle:this.toggle,extra:[a.a.createElement(w.a,{key:"logout-1"})]}),a.a.createElement(Be,{className:"user-edit"},a.a.createElement(E.a,{tip:"Загрузка...",size:"large",spinning:c},this.renderTemplate(o))))))}return null}}])&&Fe(r.prototype,n),o&&Fe(r,o),t}(a.a.Component);Ue.defaultProps={params:{userId:null},item:null,current:null},Ue.propTypes={current:Te.b,modelServer:i.a.func.isRequired,modelEdit:i.a.func.isRequired,params:i.a.shape({userId:i.a.string.isRequired,page:i.a.string.isRequired}),item:i.a.shape({is_admin:i.a.bool.isRequired,is_reprint_admin:i.a.bool.isRequired,operator_code:i.a.number.isRequired,operator_id:i.a.number.isRequired,operator_login:i.a.string.isRequired,operator_name:i.a.string.isRequired,operator_token:i.a.string.isRequired})};var Ge=Ue;function Je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function He(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ke=Object(l.c)((function(e){var t={},r={},n=Object(f.a)(v,"system",e),a=function(e){return n("userItem",e)},o=function(e){return n("userEdit",e,(function(e){return a({id:t.params.userId}),e}))},i=function(){n("userCurrent"),a({id:t.params.userId})};return function(e,n){var a=function(e){return null===e},u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(r),!0).forEach((function(t){He(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},n,{loading:a(e.system.userItem),item:a(e.system.userItem)?null:e.system.userItem.data,access:a(e.system.userItem)?null:e.system.userItem.access,current:a(e.system.userCurrent)?null:e.system.userCurrent.data,modelEdit:o,modelServer:i});return t=n,Object(l.d)(r,u)||(r=u),r}}))(Ge),Ve=(r(285),function(e){var t=e.location,r=e.params;return a.a.createElement(l.a,{store:m},a.a.createElement(Ke,{location:t,params:r}))});Ve.propTypes={location:i.a.oneOfType([i.a.any]).isRequired,params:i.a.oneOfType([i.a.any]).isRequired};t.default=Ve}}]);
//# sourceMappingURL=edit.js.map