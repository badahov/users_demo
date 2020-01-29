(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[3],{16:function(e,n,t){"use strict";var r=t(0),o=t.n(r),u=t(1),a=t.n(u),i=o.a.createContext(null);var c=function(e){e()},s={notify:function(){}};function p(){var e=c,n=[],t=[];return{clear:function(){t=null,n=null},notify:function(){var r=n=t;e((function(){for(var e=0;e<r.length;e++)r[e]()}))},get:function(){return t},subscribe:function(e){var r=!0;return t===n&&(t=n.slice()),t.push(e),function(){r&&null!==n&&(r=!1,t===n&&(t=n.slice()),t.splice(t.indexOf(e),1))}}}}var d=function(){function e(e,n){this.store=e,this.parentSub=n,this.unsubscribe=null,this.listeners=s,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=e.prototype;return n.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return Boolean(this.unsubscribe)},n.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=p())},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=s)},e}();function f(e){var n=e.store,t=e.context,u=e.children,a=Object(r.useMemo)((function(){var e=new d(n);return e.onStateChange=e.notifyNestedSubs,{store:n,subscription:e}}),[n]),c=Object(r.useMemo)((function(){return n.getState()}),[n]);Object(r.useEffect)((function(){var e=a.subscription;return e.trySubscribe(),c!==n.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[a,c]);var s=t||i;return o.a.createElement(s.Provider,{value:a},u)}f.propTypes={store:a.a.shape({subscribe:a.a.func.isRequired,dispatch:a.a.func.isRequired,getState:a.a.func.isRequired}),context:a.a.object,children:a.a.any};var l=f,v=t(483),b=t(484),h=t(366),m=t.n(h),O=t(8),P=t.n(O),y=t(124),w="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,g=[],C=[null,null];function S(e,n){var t=e[1];return[n.payload,t+1]}var j=function(){return[null,0]};function x(e,n){void 0===n&&(n={});var t=n,u=t.getDisplayName,a=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,c=t.methodName,s=void 0===c?"connectAdvanced":c,p=t.renderCountProp,f=void 0===p?void 0:p,l=t.shouldHandleStateChanges,h=void 0===l||l,O=t.storeKey,x=void 0===O?"store":O,E=t.withRef,M=void 0!==E&&E,R=t.forwardRef,N=void 0!==R&&R,T=t.context,q=void 0===T?i:T,D=Object(b.a)(t,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);P()(void 0===f,"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),P()(!M,"withRef is removed. To access the wrapped instance, use a ref on the connected component");P()("store"===x,"storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");var B=q;return function(n){var t=n.displayName||n.name||"Component",u=a(t),i=Object(v.a)({},D,{getDisplayName:a,methodName:s,renderCountProp:f,shouldHandleStateChanges:h,storeKey:x,displayName:u,wrappedComponentName:t,WrappedComponent:n}),c=D.pure;var p=c?r.useMemo:function(e){return e()};function l(t){var a=Object(r.useMemo)((function(){var e=t.forwardedRef,n=Object(b.a)(t,["forwardedRef"]);return[t.context,e,n]}),[t]),c=a[0],s=a[1],f=a[2],l=Object(r.useMemo)((function(){return c&&c.Consumer&&Object(y.isContextConsumer)(o.a.createElement(c.Consumer,null))?c:B}),[c,B]),m=Object(r.useContext)(l),O=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch),x=Boolean(m)&&Boolean(m.store);P()(O||x,'Could not find "store" in the context of "'+u+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+u+" in connect options.");var E=O?t.store:m.store,M=Object(r.useMemo)((function(){return function(n){return e(n.dispatch,i)}(E)}),[E]),R=Object(r.useMemo)((function(){if(!h)return C;var e=new d(E,O?null:m.subscription),n=e.notifyNestedSubs.bind(e);return[e,n]}),[E,O,m]),N=R[0],T=R[1],q=Object(r.useMemo)((function(){return O?m:Object(v.a)({},m,{subscription:N})}),[O,m,N]),D=Object(r.useReducer)(S,g,j),W=D[0][0],_=D[1];if(W&&W.error)throw W.error;var k=Object(r.useRef)(),H=Object(r.useRef)(f),U=Object(r.useRef)(),F=Object(r.useRef)(!1),K=p((function(){return U.current&&f===H.current?U.current:M(E.getState(),f)}),[E,W,f]);w((function(){H.current=f,k.current=K,F.current=!1,U.current&&(U.current=null,T())})),w((function(){if(h){var e=!1,n=null,t=function(){if(!e){var t,r,o=E.getState();try{t=M(o,H.current)}catch(e){r=e,n=e}r||(n=null),t===k.current?F.current||T():(k.current=t,U.current=t,F.current=!0,_({type:"STORE_UPDATED",payload:{error:r}}))}};N.onStateChange=t,N.trySubscribe(),t();return function(){if(e=!0,N.tryUnsubscribe(),N.onStateChange=null,n)throw n}}}),[E,N,M]);var A=Object(r.useMemo)((function(){return o.a.createElement(n,Object(v.a)({},K,{ref:s}))}),[s,n,K]);return Object(r.useMemo)((function(){return h?o.a.createElement(l.Provider,{value:q},A):A}),[l,A,q])}var O=c?o.a.memo(l):l;if(O.WrappedComponent=n,O.displayName=u,N){var E=o.a.forwardRef((function(e,n){return o.a.createElement(O,Object(v.a)({},e,{forwardedRef:n}))}));return E.displayName=u,E.WrappedComponent=n,m()(E,n)}return m()(O,n)}}var E=Object.prototype.hasOwnProperty;function M(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}function R(e,n){if(M(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(var o=0;o<t.length;o++)if(!E.call(n,t[o])||!M(e[t[o]],n[t[o]]))return!1;return!0}var N=t(11);function T(e){return function(n,t){var r=e(n,t);function o(){return r}return o.dependsOnOwnProps=!1,o}}function q(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function D(e,n){return function(n,t){t.displayName;var r=function(e,n){return r.dependsOnOwnProps?r.mapToProps(e,n):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(n,t){r.mapToProps=e,r.dependsOnOwnProps=q(e);var o=r(n,t);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=q(o),o=r(n,t)),o},r}}var B=[function(e){return"function"==typeof e?D(e):void 0},function(e){return e?void 0:T((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?T((function(n){return Object(N.b)(e,n)})):void 0}];var W=[function(e){return"function"==typeof e?D(e):void 0},function(e){return e?void 0:T((function(){return{}}))}];function _(e,n,t){return Object(v.a)({},t,{},e,{},n)}var k=[function(e){return"function"==typeof e?function(e){return function(n,t){t.displayName;var r,o=t.pure,u=t.areMergedPropsEqual,a=!1;return function(n,t,i){var c=e(n,t,i);return a?o&&u(c,r)||(r=c):(a=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return _}}];function H(e,n,t,r){return function(o,u){return t(e(o,u),n(r,u),u)}}function U(e,n,t,r,o){var u,a,i,c,s,p=o.areStatesEqual,d=o.areOwnPropsEqual,f=o.areStatePropsEqual,l=!1;function v(o,l){var v,b,h=!d(l,a),m=!p(o,u);return u=o,a=l,h&&m?(i=e(u,a),n.dependsOnOwnProps&&(c=n(r,a)),s=t(i,c,a)):h?(e.dependsOnOwnProps&&(i=e(u,a)),n.dependsOnOwnProps&&(c=n(r,a)),s=t(i,c,a)):m?(v=e(u,a),b=!f(v,i),i=v,b&&(s=t(i,c,a)),s):s}return function(o,p){return l?v(o,p):(i=e(u=o,a=p),c=n(r,a),s=t(i,c,a),l=!0,s)}}function F(e,n){var t=n.initMapStateToProps,r=n.initMapDispatchToProps,o=n.initMergeProps,u=Object(b.a)(n,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=t(e,u),i=r(e,u),c=o(e,u);return(u.pure?U:H)(a,i,c,e,u)}function K(e,n,t){for(var r=n.length-1;r>=0;r--){var o=n[r](e);if(o)return o}return function(n,r){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+r.wrappedComponentName+".")}}function A(e,n){return e===n}var J,I,L,Y,z,G,Q,V,X,Z,$,ee,ne=(L=(I=void 0===J?{}:J).connectHOC,Y=void 0===L?x:L,z=I.mapStateToPropsFactories,G=void 0===z?W:z,Q=I.mapDispatchToPropsFactories,V=void 0===Q?B:Q,X=I.mergePropsFactories,Z=void 0===X?k:X,$=I.selectorFactory,ee=void 0===$?F:$,function(e,n,t,r){void 0===r&&(r={});var o=r,u=o.pure,a=void 0===u||u,i=o.areStatesEqual,c=void 0===i?A:i,s=o.areOwnPropsEqual,p=void 0===s?R:s,d=o.areStatePropsEqual,f=void 0===d?R:d,l=o.areMergedPropsEqual,h=void 0===l?R:l,m=Object(b.a)(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),O=K(e,G,"mapStateToProps"),P=K(n,V,"mapDispatchToProps"),y=K(t,Z,"mergeProps");return Y(ee,Object(v.a)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:O,initMapDispatchToProps:P,initMergeProps:y,pure:a,areStatesEqual:c,areOwnPropsEqual:p,areStatePropsEqual:f,areMergedPropsEqual:h},m))});function te(){var e=Object(r.useContext)(i);return P()(e,"could not find react-redux context value; please ensure the component is wrapped in a <Provider>"),e}function re(e){void 0===e&&(e=i);var n=e===i?te:function(){return Object(r.useContext)(e)};return function(){return n().store}}var oe=re();!function(e){void 0===e&&(e=i);var n=e===i?oe:re(e)}();var ue=function(e,n){return e===n};!function(e){void 0===e&&(e=i);var n=e===i?te:function(){return Object(r.useContext)(e)}}();var ae,ie=t(13);t.d(n,"a",(function(){return l})),t.d(n,"c",(function(){return x})),t.d(n,"b",(function(){return ne})),t.d(n,"d",(function(){return R})),ae=ie.unstable_batchedUpdates,c=ae}}]);
//# sourceMappingURL=react-redux.js.map