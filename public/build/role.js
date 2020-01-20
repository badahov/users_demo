(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[9],{166:function(e,t,n){"use strict";var r=n(63),l=n.n(r);t.a={path:"role",getComponent:function(e,t){Promise.all([n.e(1),n.e(2),n.e(0),n.e(3),n.e(5),n.e(4),n.e(7),n.e(6),n.e(9),n.e(19)]).then(n.bind(null,293)).then((function(e){return t(null,e.default)})).catch((function(){return l.a}))}}},289:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(21),o=n(22),s=n(67),i=n(64),c=n(54),u=Object(o.applyMiddleware)(Object(s.a)("system"),c.a)(o.createStore)(Object(o.combineReducers)({system:Object(i.a)({name:"system",models:[{name:"user",points:["current"]},{name:"role",points:["items"]},{name:"permission",points:["item"]}]})})),m=n(4),p=n.n(m),d=n(68),f=n(5),y=n(6);function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.e.post;return new f.e({pointApi:e,type:n,data:t})}var E={user:{item:"interface-users/user",current:"interface-users/user-current"},role:{items:"interface-users/roles",add:"interface-users/role-add",edit:"interface-users/role-edit",delete:"interface-users/role-delete"},permission:{item:"interface-users/permission",switch:"interface-users/role-permission"}};function h(e,t,n){switch(e){case"roleItems":return b(E.role.items,t,f.e.get).result();case"roleAdd":return b(E.role.add,t,f.e.post).result().then((function(e){}));case"roleEdit":return b(E.role.edit,t,f.e.post).result().then((function(e){}));case"roleDelete":return b(E.role.delete,t,f.e.post).result(n).then((function(e){if(e)return b(h.roles).result()}));case"permissionItem":return b(E.permission.item,t,f.e.get).result();case"permissionSwitch":return b(E.permission.switch,t,f.e.post).result().then((function(e){}));case"userItem":return new f.e({data:t,pointApi:E.item,type:f.e.get}).result();case"userCurrent":return new f.e({domain:y.a.domain.auth,type:f.e.get,pointApi:E.user.current}).result();case"userEdit":return new f.e({data:t,pointApi:E.edit}).result()}}var v=n(12),g=n.n(v),S=n(13),O=n.n(S),w=n(16),I=n.n(w),k=n(17),j=n.n(k),R=n(7),C=n.n(R),A=n(18),P=n.n(A),D=n(55),N=n.n(D),q=n(2),F=n.n(q),x=n(15),_=n(305),z=n(316),T=n(313),M=n(121),U=n(3),B=n(312),G=n(33),J=n(170),K=n(69),L=n(36),H=n(314),V=n(310),Q=n(315),W=n(311),X=n(295),Y=n(307),Z=n(306),$=G.a.Group,ee=W.a.Search,te=function(e){function t(e){var n;return g()(this,t),n=I()(this,j()(t).call(this,e)),p()(C()(n),"handleSubmit",(function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll((function(e,t){e||(delete t.confirm,n.props.actionAdd(t))}))})),p()(C()(n),"onClose",(function(){n.props.onClose()})),p()(C()(n),"onRoleEditAction",(function(e,t){var n=e.target.parentElement.parentElement.parentElement.parentElement,r=n.querySelector(".link-role-name-".concat(t)),l=n.querySelector(".input-role-name-".concat(t)),a=n.querySelector(".btn-role-edit-".concat(t)),o=n.querySelector(".btn-role-delete-".concat(t)),s=n.querySelector(".btn-role-save-".concat(t));r.style.display="none",l.style.display="inline",a.style.display="none",o.style.display="none",s&&(s.style.display="inline")})),p()(C()(n),"onRoleDelete",(function(e){n.props.actionDelete({id:e},(function(e){return"ok"===e.status?(e.msg&&(X.a.success(e.msg),n.props.onRoleSelect(0)),!e.result||e.result):e.msg?(X.a.error(n._errorMsg(e.msg)),!1):void 0}))})),p()(C()(n),"onRoleEdit",(function(e,t,r){var l=e.target.parentElement.parentElement.parentElement.parentElement;n.props.actionEdit({id:t,name:r},(function(e){if("ok"===e.status){if(e.msg&&X.a.success(e.msg),e.result){var r=l.querySelector(".link-role-name-".concat(t)),a=l.querySelector(".input-role-name-".concat(t)),o=l.querySelector(".btn-role-edit-".concat(t)),s=l.querySelector(".btn-role-delete-".concat(t)),i=l.querySelector(".btn-role-save-".concat(t));return r.style.display="inline",a.style.display="none",o.style.display="inline",s.style.display="inline",i&&(i.style.display="none"),e.result}return!0}if(e.msg)return X.a.error(n._errorMsg(e.msg)),!1}))})),p()(C()(n),"shouldComponentUpdate",(function(e,t){return n.props.visible!==e.visible&&n.setState({visible:e.visible}),!0})),n.state={visible:e.visible},n}return P()(t,e),O()(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return l.a.createElement(Y.a,{title:this.props.title,width:550,onClose:this.onClose,visible:this.state.visible,zIndex:1050},l.a.createElement(K.a,{style:{marginBottom:"20px"}},l.a.createElement(L.a,{span:24},l.a.createElement(Q.a,{layout:"inline",onSubmit:this.handleSubmit},l.a.createElement(Q.a.Item,{hasFeedback:!0},t("name",{})(l.a.createElement(W.a,{placeholder:"Название новой роли"}))),l.a.createElement(Q.a.Item,null,l.a.createElement(G.a,{type:"primary",htmlType:"submit"},"Добавить")))),l.a.createElement(L.a,{span:24},l.a.createElement(H.a,{size:"small",style:{marginTop:"10px"},bordered:!0,dataSource:this.props.roleList,renderItem:function(t){return l.a.createElement(H.a.Item,{className:"list-role-item list-role-item-".concat(t.id),actions:t.editable?[l.a.createElement($,null,l.a.createElement(G.a,{className:"btn-role-edit btn-role-edit-".concat(t.id),onClick:function(n){return e.onRoleEditAction(n,t.id)},size:"small",icon:"edit"}),l.a.createElement(Z.a,{title:"Удалить роль?",onConfirm:function(){return e.onRoleDelete(t.id)},okText:"Да",cancelText:"Нет",placement:"left",zIndex:1050},l.a.createElement(G.a,{className:"btn-role-delete btn-role-delete-".concat(t.id),size:"small",icon:"delete"})))]:null},l.a.createElement(x.a,{onClick:function(n){e.props.onRoleSelect(n,t.id)},className:"link-role-name link-role-name-".concat(t.id),style:{width:"100%"}},t.name),l.a.createElement(ee,{className:"input-role-name input-role-name-".concat(t.id),placeholder:"Название новой роли",enterButton:l.a.createElement(U.a,{type:"save"}),size:"small",defaultValue:t.name,onSearch:function(n,r){return e.onRoleEdit(r,t.id,n)}}))}}))))}}]),t}(r.Component);p()(te,"defaultProps",{visible:!0,visibleId:null,successionId:null,operationId:null,inputSourceId:null,stageId:null,title:null});var ne=te;function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=Q.a.create({name:"user_add_form",mapPropsToFields:function(e){return{title:Q.a.createFormField(le({},e.sourceTitle,{value:e.sourceTitle}))}}})(ne),oe=_.a.Header,se=_.a.Content,ie=_.a.Sider,ce=z.a.Panel,ue=T.a.Meta,me=function(e){function t(e){var n;return g()(this,t),n=I()(this,j()(t).call(this,e)),p()(C()(n),"toggle",(function(){n.setState({collapsed:!n.state.collapsed})})),p()(C()(n),"onClose",(function(){n.setState({visibleSourceAddForm:!1})})),p()(C()(n),"onOpen",(function(){n.setState({visibleSourceAddForm:!n.state.visibleSourceAddForm,visibleId:1})})),p()(C()(n),"onRoleSelect",(function(e,t){for(var r=0;r<n.props.role.length;r++){var l=n.props.role[r];if(l.id===t){n.setState({selectRoleName:l.name,selectRoleId:l.id}),n.props.modelPermissionItem({id:l.id});break}}document.querySelectorAll(".list-role-item").forEach((function(e){e.setAttribute("style","background: #fff")})),document.querySelector(".list-role-item-".concat(t)).setAttribute("style","background: #fafafa")})),p()(C()(n),"shouldComponentUpdate",(function(e,t){return e.permission!==n.props.permission||t.visibleSourceAddForm!==n.state.visibleSourceAddForm||t.collapsed!==n.state.collapsed||e.role!==n.props.role})),p()(C()(n),"permissionsSwitch",(function(e,t,r){n.props.modelPermissionSwitch({enabled:r,permission_id:t,role_id:n.state.selectRoleId})})),n.state={selectRoleName:"Гость",selectRoleId:0,collapsed:!0,visibleSourceAddForm:!1,visibleId:null,items:e.items,loading:!0,operationId:""},e.modelServer(),n}return P()(t,e),O()(t,[{key:"render",value:function(){var e=this;if(this.props.current){var t=!this.props.current;return l.a.createElement(_.a,null,l.a.createElement(ie,{width:300,trigger:null,collapsible:!0,collapsed:this.state.collapsed},l.a.createElement("div",{className:"logo"},"USER"),l.a.createElement(M.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["2"]},l.a.createElement(M.a.Item,{key:"1"},l.a.createElement(x.a,{to:"/"},l.a.createElement(U.a,{type:"team"}),l.a.createElement("span",null,"Пользователи"))),l.a.createElement(M.a.Item,{key:"2"},l.a.createElement(x.a,{to:"/role"},l.a.createElement(U.a,{type:"cluster"}),l.a.createElement("span",null,"Роли"))),l.a.createElement(M.a.ItemGroup,{key:"roles",title:""},this.props.role?this.props.role.map((function(t){return l.a.createElement(M.a.Item,{onClick:function(n){e.onRoleSelect(n,t.id)},key:"role-".concat(t.id)},l.a.createElement(U.a,{type:"property-safety"}),l.a.createElement("span",null,t.name))})):null))),l.a.createElement(_.a,null,l.a.createElement(N.a,{title:this.state.selectRoleName}),l.a.createElement(oe,null,l.a.createElement(B.a,{title:l.a.createElement("span",null,l.a.createElement(U.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),"Управление ролями"),subTitle:"текущая: ".concat(this.state.selectRoleName),extra:[l.a.createElement(G.a,{key:"add-role",className:"btn-user-add",onClick:function(){return e.onOpen()},type:"primary",size:"small"},"Управление ролями"),l.a.createElement(f.c,{key:"logout-1"})]})),l.a.createElement(se,{className:"user-list"},l.a.createElement(J.a,{tip:"Загрузка...",size:"large",spinning:t},l.a.createElement(K.a,null,l.a.createElement(L.a,{span:24},l.a.createElement(z.a,{defaultActiveKey:["1"]},this.props.permission.modules?this.props.permission.modules.map((function(t){return l.a.createElement(ce,{header:"".concat(t.name,": ").concat(t.desc),key:t.group},l.a.createElement(H.a,{grid:{gutter:16,xs:1,sm:1,md:2,lg:3,xl:4,xxl:4},dataSource:t.permissions,renderItem:function(t,n){return l.a.createElement(H.a.Item,null,l.a.createElement(x.a,{onClick:function(){e.permissionsSwitch(t.group,t.id,t.enabled)}},l.a.createElement(V.a,{content:t.desc,title:t.name},l.a.createElement(T.a,{className:F()("permissions-default",{"permissions-enabled":t.enabled}),size:"small"},l.a.createElement(ue,{avatar:t.enabled?l.a.createElement(U.a,{type:"check"}):l.a.createElement(U.a,{type:"stop"}),title:t.name})))))}}))})):null)),l.a.createElement(ae,{visible:this.state.visibleSourceAddForm,visibleId:this.state.visibleId,title:"Роли",roleList:this.props.role,onRoleSelect:this.onRoleSelect,actionDelete:this.props.modelRoleDelete,actionEdit:this.props.modelRoleEdit,actionAdd:this.props.modelRoleAdd,onClose:this.onClose,wrappedComponentRef:function(t){return e.form=t}}))))))}return null}}]),t}(l.a.Component);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var de=Object(a.connectAdvanced)((function(e){var t="system",n={},r=Object(d.a)(h,t,e),l=function(){return r("roleItems")},o=function(e){return r("permissionItem",e)},s=function(e){return r("permissionSwitch",e)},i=function(e){return r("roleAdd",e,(function(e){return e}))},c=function(e){return r("roleEdit",e,(function(e){return e}))},u=function(e){return r("roleDelete",e,(function(e){return e}))},m=function(){r("userCurrent"),l(),o({id:0})};return function(e,t){var r=function(e){return null===e},d=!!r(e.system.userCurrent),f=r(e.system.roleItems)?null:e.system.roleItems,y=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{loading:d,permission:r(e.system.permissionItem)?null:e.system.permissionItem,role:f,access:r(e.system.userCurrent)?null:e.system.userCurrent.access,current:r(e.system.userCurrent)?null:e.system.userCurrent.data,modelServer:m,modelRoleItems:l,modelPermissionItem:o,modelPermissionSwitch:s,modelRoleDelete:u,modelRoleEdit:c,modelRoleAdd:i});return t,Object(a.shallowEqual)(n,y)||(n=y),n}}))(me);n(289),t.default=function(e){var t=e.location,n=e.params;return l.a.createElement(a.Provider,{store:u},l.a.createElement(de,{location:t,params:n}))}}}]);
//# sourceMappingURL=role.js.map