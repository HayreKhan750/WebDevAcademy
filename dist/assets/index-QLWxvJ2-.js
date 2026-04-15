(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))N(S);new MutationObserver(S=>{for(const L of S)if(L.type==="childList")for(const C of L.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&N(C)}).observe(document,{childList:!0,subtree:!0});function p(S){const L={};return S.integrity&&(L.integrity=S.integrity),S.referrerPolicy&&(L.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?L.credentials="include":S.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function N(S){if(S.ep)return;S.ep=!0;const L=p(S);fetch(S.href,L)}})();function vp(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var Vl={exports:{}},$r={},Yl={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function wp(){if(Kd)return oe;Kd=1;var y=Symbol.for("react.element"),E=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),C=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),ee=Symbol.iterator;function J(h){return h===null||typeof h!="object"?null:(h=ee&&h[ee]||h["@@iterator"],typeof h=="function"?h:null)}var ce={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pe=Object.assign,ae={};function R(h,v,le){this.props=h,this.context=v,this.refs=ae,this.updater=le||ce}R.prototype.isReactComponent={},R.prototype.setState=function(h,v){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,v,"setState")},R.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Ae(){}Ae.prototype=R.prototype;function ve(h,v,le){this.props=h,this.context=v,this.refs=ae,this.updater=le||ce}var de=ve.prototype=new Ae;de.constructor=ve,pe(de,R.prototype),de.isPureReactComponent=!0;var se=Array.isArray,re=Object.prototype.hasOwnProperty,we={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function D(h,v,le){var ie,he={},me=null,je=null;if(v!=null)for(ie in v.ref!==void 0&&(je=v.ref),v.key!==void 0&&(me=""+v.key),v)re.call(v,ie)&&!X.hasOwnProperty(ie)&&(he[ie]=v[ie]);var ye=arguments.length-2;if(ye===1)he.children=le;else if(1<ye){for(var Pe=Array(ye),rt=0;rt<ye;rt++)Pe[rt]=arguments[rt+2];he.children=Pe}if(h&&h.defaultProps)for(ie in ye=h.defaultProps,ye)he[ie]===void 0&&(he[ie]=ye[ie]);return{$$typeof:y,type:h,key:me,ref:je,props:he,_owner:we.current}}function B(h,v){return{$$typeof:y,type:h.type,key:v,ref:h.ref,props:h.props,_owner:h._owner}}function te(h){return typeof h=="object"&&h!==null&&h.$$typeof===y}function ge(h){var v={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(le){return v[le]})}var ne=/\/+/g;function fe(h,v){return typeof h=="object"&&h!==null&&h.key!=null?ge(""+h.key):v.toString(36)}function Fe(h,v,le,ie,he){var me=typeof h;(me==="undefined"||me==="boolean")&&(h=null);var je=!1;if(h===null)je=!0;else switch(me){case"string":case"number":je=!0;break;case"object":switch(h.$$typeof){case y:case E:je=!0}}if(je)return je=h,he=he(je),h=ie===""?"."+fe(je,0):ie,se(he)?(le="",h!=null&&(le=h.replace(ne,"$&/")+"/"),Fe(he,v,le,"",function(rt){return rt})):he!=null&&(te(he)&&(he=B(he,le+(!he.key||je&&je.key===he.key?"":(""+he.key).replace(ne,"$&/")+"/")+h)),v.push(he)),1;if(je=0,ie=ie===""?".":ie+":",se(h))for(var ye=0;ye<h.length;ye++){me=h[ye];var Pe=ie+fe(me,ye);je+=Fe(me,v,le,Pe,he)}else if(Pe=J(h),typeof Pe=="function")for(h=Pe.call(h),ye=0;!(me=h.next()).done;)me=me.value,Pe=ie+fe(me,ye++),je+=Fe(me,v,le,Pe,he);else if(me==="object")throw v=String(h),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return je}function Q(h,v,le){if(h==null)return h;var ie=[],he=0;return Fe(h,ie,"","",function(me){return v.call(le,me,he++)}),ie}function Ce(h){if(h._status===-1){var v=h._result;v=v(),v.then(function(le){(h._status===0||h._status===-1)&&(h._status=1,h._result=le)},function(le){(h._status===0||h._status===-1)&&(h._status=2,h._result=le)}),h._status===-1&&(h._status=0,h._result=v)}if(h._status===1)return h._result.default;throw h._result}var Ee={current:null},T={transition:null},K={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:T,ReactCurrentOwner:we};function O(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:Q,forEach:function(h,v,le){Q(h,function(){v.apply(this,arguments)},le)},count:function(h){var v=0;return Q(h,function(){v++}),v},toArray:function(h){return Q(h,function(v){return v})||[]},only:function(h){if(!te(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},oe.Component=R,oe.Fragment=p,oe.Profiler=S,oe.PureComponent=ve,oe.StrictMode=N,oe.Suspense=f,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,oe.act=O,oe.cloneElement=function(h,v,le){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var ie=pe({},h.props),he=h.key,me=h.ref,je=h._owner;if(v!=null){if(v.ref!==void 0&&(me=v.ref,je=we.current),v.key!==void 0&&(he=""+v.key),h.type&&h.type.defaultProps)var ye=h.type.defaultProps;for(Pe in v)re.call(v,Pe)&&!X.hasOwnProperty(Pe)&&(ie[Pe]=v[Pe]===void 0&&ye!==void 0?ye[Pe]:v[Pe])}var Pe=arguments.length-2;if(Pe===1)ie.children=le;else if(1<Pe){ye=Array(Pe);for(var rt=0;rt<Pe;rt++)ye[rt]=arguments[rt+2];ie.children=ye}return{$$typeof:y,type:h.type,key:he,ref:me,props:ie,_owner:je}},oe.createContext=function(h){return h={$$typeof:C,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:L,_context:h},h.Consumer=h},oe.createElement=D,oe.createFactory=function(h){var v=D.bind(null,h);return v.type=h,v},oe.createRef=function(){return{current:null}},oe.forwardRef=function(h){return{$$typeof:i,render:h}},oe.isValidElement=te,oe.lazy=function(h){return{$$typeof:H,_payload:{_status:-1,_result:h},_init:Ce}},oe.memo=function(h,v){return{$$typeof:P,type:h,compare:v===void 0?null:v}},oe.startTransition=function(h){var v=T.transition;T.transition={};try{h()}finally{T.transition=v}},oe.unstable_act=O,oe.useCallback=function(h,v){return Ee.current.useCallback(h,v)},oe.useContext=function(h){return Ee.current.useContext(h)},oe.useDebugValue=function(){},oe.useDeferredValue=function(h){return Ee.current.useDeferredValue(h)},oe.useEffect=function(h,v){return Ee.current.useEffect(h,v)},oe.useId=function(){return Ee.current.useId()},oe.useImperativeHandle=function(h,v,le){return Ee.current.useImperativeHandle(h,v,le)},oe.useInsertionEffect=function(h,v){return Ee.current.useInsertionEffect(h,v)},oe.useLayoutEffect=function(h,v){return Ee.current.useLayoutEffect(h,v)},oe.useMemo=function(h,v){return Ee.current.useMemo(h,v)},oe.useReducer=function(h,v,le){return Ee.current.useReducer(h,v,le)},oe.useRef=function(h){return Ee.current.useRef(h)},oe.useState=function(h){return Ee.current.useState(h)},oe.useSyncExternalStore=function(h,v,le){return Ee.current.useSyncExternalStore(h,v,le)},oe.useTransition=function(){return Ee.current.useTransition()},oe.version="18.3.1",oe}var Xd;function to(){return Xd||(Xd=1,Yl.exports=wp()),Yl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function jp(){if(Zd)return $r;Zd=1;var y=to(),E=Symbol.for("react.element"),p=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,S=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function C(i,f,P){var H,ee={},J=null,ce=null;P!==void 0&&(J=""+P),f.key!==void 0&&(J=""+f.key),f.ref!==void 0&&(ce=f.ref);for(H in f)N.call(f,H)&&!L.hasOwnProperty(H)&&(ee[H]=f[H]);if(i&&i.defaultProps)for(H in f=i.defaultProps,f)ee[H]===void 0&&(ee[H]=f[H]);return{$$typeof:E,type:i,key:J,ref:ce,props:ee,_owner:S.current}}return $r.Fragment=p,$r.jsx=C,$r.jsxs=C,$r}var ec;function kp(){return ec||(ec=1,Vl.exports=jp()),Vl.exports}var t=kp(),G=to();const Np=vp(G);var Bn={},Jl={exports:{}},st={},Ql={exports:{}},Gl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc;function Sp(){return tc||(tc=1,function(y){function E(T,K){var O=T.length;T.push(K);e:for(;0<O;){var h=O-1>>>1,v=T[h];if(0<S(v,K))T[h]=K,T[O]=v,O=h;else break e}}function p(T){return T.length===0?null:T[0]}function N(T){if(T.length===0)return null;var K=T[0],O=T.pop();if(O!==K){T[0]=O;e:for(var h=0,v=T.length,le=v>>>1;h<le;){var ie=2*(h+1)-1,he=T[ie],me=ie+1,je=T[me];if(0>S(he,O))me<v&&0>S(je,he)?(T[h]=je,T[me]=O,h=me):(T[h]=he,T[ie]=O,h=ie);else if(me<v&&0>S(je,O))T[h]=je,T[me]=O,h=me;else break e}}return K}function S(T,K){var O=T.sortIndex-K.sortIndex;return O!==0?O:T.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var L=performance;y.unstable_now=function(){return L.now()}}else{var C=Date,i=C.now();y.unstable_now=function(){return C.now()-i}}var f=[],P=[],H=1,ee=null,J=3,ce=!1,pe=!1,ae=!1,R=typeof setTimeout=="function"?setTimeout:null,Ae=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function de(T){for(var K=p(P);K!==null;){if(K.callback===null)N(P);else if(K.startTime<=T)N(P),K.sortIndex=K.expirationTime,E(f,K);else break;K=p(P)}}function se(T){if(ae=!1,de(T),!pe)if(p(f)!==null)pe=!0,Ce(re);else{var K=p(P);K!==null&&Ee(se,K.startTime-T)}}function re(T,K){pe=!1,ae&&(ae=!1,Ae(D),D=-1),ce=!0;var O=J;try{for(de(K),ee=p(f);ee!==null&&(!(ee.expirationTime>K)||T&&!ge());){var h=ee.callback;if(typeof h=="function"){ee.callback=null,J=ee.priorityLevel;var v=h(ee.expirationTime<=K);K=y.unstable_now(),typeof v=="function"?ee.callback=v:ee===p(f)&&N(f),de(K)}else N(f);ee=p(f)}if(ee!==null)var le=!0;else{var ie=p(P);ie!==null&&Ee(se,ie.startTime-K),le=!1}return le}finally{ee=null,J=O,ce=!1}}var we=!1,X=null,D=-1,B=5,te=-1;function ge(){return!(y.unstable_now()-te<B)}function ne(){if(X!==null){var T=y.unstable_now();te=T;var K=!0;try{K=X(!0,T)}finally{K?fe():(we=!1,X=null)}}else we=!1}var fe;if(typeof ve=="function")fe=function(){ve(ne)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,Q=Fe.port2;Fe.port1.onmessage=ne,fe=function(){Q.postMessage(null)}}else fe=function(){R(ne,0)};function Ce(T){X=T,we||(we=!0,fe())}function Ee(T,K){D=R(function(){T(y.unstable_now())},K)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(T){T.callback=null},y.unstable_continueExecution=function(){pe||ce||(pe=!0,Ce(re))},y.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<T?Math.floor(1e3/T):5},y.unstable_getCurrentPriorityLevel=function(){return J},y.unstable_getFirstCallbackNode=function(){return p(f)},y.unstable_next=function(T){switch(J){case 1:case 2:case 3:var K=3;break;default:K=J}var O=J;J=K;try{return T()}finally{J=O}},y.unstable_pauseExecution=function(){},y.unstable_requestPaint=function(){},y.unstable_runWithPriority=function(T,K){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=J;J=T;try{return K()}finally{J=O}},y.unstable_scheduleCallback=function(T,K,O){var h=y.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?h+O:h):O=h,T){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=O+v,T={id:H++,callback:K,priorityLevel:T,startTime:O,expirationTime:v,sortIndex:-1},O>h?(T.sortIndex=O,E(P,T),p(f)===null&&T===p(P)&&(ae?(Ae(D),D=-1):ae=!0,Ee(se,O-h))):(T.sortIndex=v,E(f,T),pe||ce||(pe=!0,Ce(re))),T},y.unstable_shouldYield=ge,y.unstable_wrapCallback=function(T){var K=J;return function(){var O=J;J=K;try{return T.apply(this,arguments)}finally{J=O}}}}(Gl)),Gl}var sc;function Cp(){return sc||(sc=1,Ql.exports=Sp()),Ql.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc;function Pp(){if(rc)return st;rc=1;var y=to(),E=Cp();function p(e){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)s+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N=new Set,S={};function L(e,s){C(e,s),C(e+"Capture",s)}function C(e,s){for(S[e]=s,e=0;e<s.length;e++)N.add(s[e])}var i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H={},ee={};function J(e){return f.call(ee,e)?!0:f.call(H,e)?!1:P.test(e)?ee[e]=!0:(H[e]=!0,!1)}function ce(e,s,r,n){if(r!==null&&r.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pe(e,s,r,n){if(s===null||typeof s>"u"||ce(e,s,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function ae(e,s,r,n,a,l,o){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=s,this.sanitizeURL=l,this.removeEmptyString=o}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new ae(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var s=e[0];R[s]=new ae(s,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new ae(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new ae(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new ae(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new ae(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ae=/[\-:]([a-z])/g;function ve(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var s=e.replace(Ae,ve);R[s]=new ae(s,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var s=e.replace(Ae,ve);R[s]=new ae(s,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var s=e.replace(Ae,ve);R[s]=new ae(s,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function de(e,s,r,n){var a=R.hasOwnProperty(s)?R[s]:null;(a!==null?a.type!==0:n||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(pe(s,r,a,n)&&(r=null),n||a===null?J(s)&&(r===null?e.removeAttribute(s):e.setAttribute(s,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(s=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(s):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,s,r):e.setAttribute(s,r))))}var se=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),we=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),ge=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),T=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,h;function v(e){if(h===void 0)try{throw Error()}catch(r){var s=r.stack.trim().match(/\n( *(at )?)/);h=s&&s[1]||""}return`
`+h+e}var le=!1;function ie(e,s){if(!e||le)return"";le=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(g){var n=g}Reflect.construct(e,[],s)}else{try{s.call()}catch(g){n=g}e.call(s.prototype)}else{try{throw Error()}catch(g){n=g}e()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var a=g.stack.split(`
`),l=n.stack.split(`
`),o=a.length-1,d=l.length-1;1<=o&&0<=d&&a[o]!==l[d];)d--;for(;1<=o&&0<=d;o--,d--)if(a[o]!==l[d]){if(o!==1||d!==1)do if(o--,d--,0>d||a[o]!==l[d]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=d);break}}}finally{le=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?v(e):""}function he(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case we:return"Portal";case B:return"Profiler";case D:return"StrictMode";case fe:return"Suspense";case Fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ge:return(e.displayName||"Context")+".Consumer";case te:return(e._context.displayName||"Context")+".Provider";case ne:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return s=e.displayName||null,s!==null?s:me(e.type)||"Memo";case Ce:s=e._payload,e=e._init;try{return me(e(s))}catch{}}return null}function je(e){var s=e.type;switch(e.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=s.render,e=e.displayName||e.name||"",s.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(s);case 8:return s===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pe(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function rt(e){var s=Pe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s),n=""+e[s];if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,l=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,l.call(this,o)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Lr(e){e._valueTracker||(e._valueTracker=rt(e))}function so(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var r=s.getValue(),n="";return e&&(n=Pe(e)?e.checked?"true":"false":e.value),e=n,e!==r?(s.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zn(e,s){var r=s.checked;return O({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ro(e,s){var r=s.defaultValue==null?"":s.defaultValue,n=s.checked!=null?s.checked:s.defaultChecked;r=ye(s.value!=null?s.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function no(e,s){s=s.checked,s!=null&&de(e,"checked",s,!1)}function ea(e,s){no(e,s);var r=ye(s.value),n=s.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}s.hasOwnProperty("value")?ta(e,s.type,r):s.hasOwnProperty("defaultValue")&&ta(e,s.type,ye(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(e.defaultChecked=!!s.defaultChecked)}function ao(e,s,r){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var n=s.type;if(!(n!=="submit"&&n!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+e._wrapperState.initialValue,r||s===e.value||(e.value=s),e.defaultValue=s}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ta(e,s,r){(s!=="number"||Dr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Us=Array.isArray;function gs(e,s,r,n){if(e=e.options,s){s={};for(var a=0;a<r.length;a++)s["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=s.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ye(r),s=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}s!==null||e[a].disabled||(s=e[a])}s!==null&&(s.selected=!0)}}function sa(e,s){if(s.dangerouslySetInnerHTML!=null)throw Error(p(91));return O({},s,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lo(e,s){var r=s.value;if(r==null){if(r=s.children,s=s.defaultValue,r!=null){if(s!=null)throw Error(p(92));if(Us(r)){if(1<r.length)throw Error(p(93));r=r[0]}s=r}s==null&&(s=""),r=s}e._wrapperState={initialValue:ye(r)}}function oo(e,s){var r=ye(s.value),n=ye(s.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),s.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function io(e){var s=e.textContent;s===e._wrapperState.initialValue&&s!==""&&s!==null&&(e.value=s)}function co(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ra(e,s){return e==null||e==="http://www.w3.org/1999/xhtml"?co(s):e==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,uo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(s,r,n,a)})}:e}(function(e,s){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=s;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;s.firstChild;)e.appendChild(s.firstChild)}});function Vs(e,s){if(s){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=s;return}}e.textContent=s}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nc=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(e){Nc.forEach(function(s){s=s+e.charAt(0).toUpperCase()+e.substring(1),Ys[s]=Ys[e]})});function po(e,s,r){return s==null||typeof s=="boolean"||s===""?"":r||typeof s!="number"||s===0||Ys.hasOwnProperty(e)&&Ys[e]?(""+s).trim():s+"px"}function ho(e,s){e=e.style;for(var r in s)if(s.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=po(r,s[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var Sc=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(e,s){if(s){if(Sc[e]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(p(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(p(61))}if(s.style!=null&&typeof s.style!="object")throw Error(p(62))}}function aa(e,s){if(e.indexOf("-")===-1)return typeof s.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function oa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,fs=null,ys=null;function mo(e){if(e=xr(e)){if(typeof ia!="function")throw Error(p(280));var s=e.stateNode;s&&(s=nn(s),ia(e.stateNode,e.type,s))}}function xo(e){fs?ys?ys.push(e):ys=[e]:fs=e}function go(){if(fs){var e=fs,s=ys;if(ys=fs=null,mo(e),s)for(e=0;e<s.length;e++)mo(s[e])}}function fo(e,s){return e(s)}function yo(){}var da=!1;function bo(e,s,r){if(da)return e(s,r);da=!0;try{return fo(e,s,r)}finally{da=!1,(fs!==null||ys!==null)&&(yo(),go())}}function Js(e,s){var r=e.stateNode;if(r===null)return null;var n=nn(r);if(n===null)return null;r=n[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(p(231,s,typeof r));return r}var ca=!1;if(i)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){ca=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{ca=!1}function Cc(e,s,r,n,a,l,o,d,c){var g=Array.prototype.slice.call(arguments,3);try{s.apply(r,g)}catch(w){this.onError(w)}}var Gs=!1,Ir=null,Or=!1,ua=null,Pc={onError:function(e){Gs=!0,Ir=e}};function Tc(e,s,r,n,a,l,o,d,c){Gs=!1,Ir=null,Cc.apply(Pc,arguments)}function Ec(e,s,r,n,a,l,o,d,c){if(Tc.apply(this,arguments),Gs){if(Gs){var g=Ir;Gs=!1,Ir=null}else throw Error(p(198));Or||(Or=!0,ua=g)}}function ss(e){var s=e,r=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(r=s.return),e=s.return;while(e)}return s.tag===3?r:null}function vo(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function wo(e){if(ss(e)!==e)throw Error(p(188))}function $c(e){var s=e.alternate;if(!s){if(s=ss(e),s===null)throw Error(p(188));return s!==e?null:e}for(var r=e,n=s;;){var a=r.return;if(a===null)break;var l=a.alternate;if(l===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===r)return wo(a),e;if(l===n)return wo(a),s;l=l.sibling}throw Error(p(188))}if(r.return!==n.return)r=a,n=l;else{for(var o=!1,d=a.child;d;){if(d===r){o=!0,r=a,n=l;break}if(d===n){o=!0,n=a,r=l;break}d=d.sibling}if(!o){for(d=l.child;d;){if(d===r){o=!0,r=l,n=a;break}if(d===n){o=!0,n=l,r=a;break}d=d.sibling}if(!o)throw Error(p(189))}}if(r.alternate!==n)throw Error(p(190))}if(r.tag!==3)throw Error(p(188));return r.stateNode.current===r?e:s}function jo(e){return e=$c(e),e!==null?ko(e):null}function ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var s=ko(e);if(s!==null)return s;e=e.sibling}return null}var No=E.unstable_scheduleCallback,So=E.unstable_cancelCallback,Mc=E.unstable_shouldYield,Ac=E.unstable_requestPaint,De=E.unstable_now,Lc=E.unstable_getCurrentPriorityLevel,pa=E.unstable_ImmediatePriority,Co=E.unstable_UserBlockingPriority,zr=E.unstable_NormalPriority,Dc=E.unstable_LowPriority,Po=E.unstable_IdlePriority,qr=null,jt=null;function Hc(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(qr,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:zc,Ic=Math.log,Oc=Math.LN2;function zc(e){return e>>>=0,e===0?32:31-(Ic(e)/Oc|0)|0}var _r=64,Rr=4194304;function Ks(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,s){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,l=e.pingedLanes,o=r&268435455;if(o!==0){var d=o&~a;d!==0?n=Ks(d):(l&=o,l!==0&&(n=Ks(l)))}else o=r&~a,o!==0?n=Ks(o):l!==0&&(n=Ks(l));if(n===0)return 0;if(s!==0&&s!==n&&(s&a)===0&&(a=n&-n,l=s&-s,a>=l||a===16&&(l&4194240)!==0))return s;if((n&4)!==0&&(n|=r&16),s=e.entangledLanes,s!==0)for(e=e.entanglements,s&=n;0<s;)r=31-mt(s),a=1<<r,n|=e[r],s&=~a;return n}function qc(e,s){switch(e){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _c(e,s){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-mt(l),d=1<<o,c=a[o];c===-1?((d&r)===0||(d&n)!==0)&&(a[o]=qc(d,s)):c<=s&&(e.expiredLanes|=d),l&=~d}}function ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function To(){var e=_r;return _r<<=1,(_r&4194240)===0&&(_r=64),e}function ma(e){for(var s=[],r=0;31>r;r++)s.push(e);return s}function Xs(e,s,r){e.pendingLanes|=s,s!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,s=31-mt(s),e[s]=r}function Rc(e,s){var r=e.pendingLanes&~s;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=s,e.mutableReadLanes&=s,e.entangledLanes&=s,s=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-mt(r),l=1<<a;s[a]=0,n[a]=-1,e[a]=-1,r&=~l}}function xa(e,s){var r=e.entangledLanes|=s;for(e=e.entanglements;r;){var n=31-mt(r),a=1<<n;a&s|e[n]&s&&(e[n]|=s),r&=~a}}var be=0;function Eo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var $o,ga,Mo,Ao,Lo,fa=!1,Wr=[],It=null,Ot=null,zt=null,Zs=new Map,er=new Map,qt=[],Fc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Do(e,s){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Zs.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(s.pointerId)}}function tr(e,s,r,n,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:s,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[a]},s!==null&&(s=xr(s),s!==null&&ga(s)),e):(e.eventSystemFlags|=n,s=e.targetContainers,a!==null&&s.indexOf(a)===-1&&s.push(a),e)}function Wc(e,s,r,n,a){switch(s){case"focusin":return It=tr(It,e,s,r,n,a),!0;case"dragenter":return Ot=tr(Ot,e,s,r,n,a),!0;case"mouseover":return zt=tr(zt,e,s,r,n,a),!0;case"pointerover":var l=a.pointerId;return Zs.set(l,tr(Zs.get(l)||null,e,s,r,n,a)),!0;case"gotpointercapture":return l=a.pointerId,er.set(l,tr(er.get(l)||null,e,s,r,n,a)),!0}return!1}function Ho(e){var s=rs(e.target);if(s!==null){var r=ss(s);if(r!==null){if(s=r.tag,s===13){if(s=vo(r),s!==null){e.blockedOn=s,Lo(e.priority,function(){Mo(r)});return}}else if(s===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var r=ba(e.domEventName,e.eventSystemFlags,s[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);la=n,r.target.dispatchEvent(n),la=null}else return s=xr(r),s!==null&&ga(s),e.blockedOn=r,!1;s.shift()}return!0}function Io(e,s,r){Br(e)&&r.delete(s)}function Bc(){fa=!1,It!==null&&Br(It)&&(It=null),Ot!==null&&Br(Ot)&&(Ot=null),zt!==null&&Br(zt)&&(zt=null),Zs.forEach(Io),er.forEach(Io)}function sr(e,s){e.blockedOn===s&&(e.blockedOn=null,fa||(fa=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,Bc)))}function rr(e){function s(a){return sr(a,e)}if(0<Wr.length){sr(Wr[0],e);for(var r=1;r<Wr.length;r++){var n=Wr[r];n.blockedOn===e&&(n.blockedOn=null)}}for(It!==null&&sr(It,e),Ot!==null&&sr(Ot,e),zt!==null&&sr(zt,e),Zs.forEach(s),er.forEach(s),r=0;r<qt.length;r++)n=qt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<qt.length&&(r=qt[0],r.blockedOn===null);)Ho(r),r.blockedOn===null&&qt.shift()}var bs=se.ReactCurrentBatchConfig,Ur=!0;function Uc(e,s,r,n){var a=be,l=bs.transition;bs.transition=null;try{be=1,ya(e,s,r,n)}finally{be=a,bs.transition=l}}function Vc(e,s,r,n){var a=be,l=bs.transition;bs.transition=null;try{be=4,ya(e,s,r,n)}finally{be=a,bs.transition=l}}function ya(e,s,r,n){if(Ur){var a=ba(e,s,r,n);if(a===null)Ia(e,s,n,Vr,r),Do(e,n);else if(Wc(a,e,s,r,n))n.stopPropagation();else if(Do(e,n),s&4&&-1<Fc.indexOf(e)){for(;a!==null;){var l=xr(a);if(l!==null&&$o(l),l=ba(e,s,r,n),l===null&&Ia(e,s,n,Vr,r),l===a)break;a=l}a!==null&&n.stopPropagation()}else Ia(e,s,n,null,r)}}var Vr=null;function ba(e,s,r,n){if(Vr=null,e=oa(n),e=rs(e),e!==null)if(s=ss(e),s===null)e=null;else if(r=s.tag,r===13){if(e=vo(s),e!==null)return e;e=null}else if(r===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null);return Vr=e,null}function Oo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lc()){case pa:return 1;case Co:return 4;case zr:case Dc:return 16;case Po:return 536870912;default:return 16}default:return 16}}var _t=null,va=null,Yr=null;function zo(){if(Yr)return Yr;var e,s=va,r=s.length,n,a="value"in _t?_t.value:_t.textContent,l=a.length;for(e=0;e<r&&s[e]===a[e];e++);var o=r-e;for(n=1;n<=o&&s[r-n]===a[l-n];n++);return Yr=a.slice(e,1<n?1-n:void 0)}function Jr(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function qo(){return!1}function nt(e){function s(r,n,a,l,o){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(r=e[d],this[d]=r?r(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Qr:qo,this.isPropagationStopped=qo,this}return O(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),s}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=nt(vs),nr=O({},vs,{view:0,detail:0}),Yc=nt(nr),ja,ka,ar,Gr=O({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(ja=e.screenX-ar.screenX,ka=e.screenY-ar.screenY):ka=ja=0,ar=e),ja)},movementY:function(e){return"movementY"in e?e.movementY:ka}}),_o=nt(Gr),Jc=O({},Gr,{dataTransfer:0}),Qc=nt(Jc),Gc=O({},nr,{relatedTarget:0}),Na=nt(Gc),Kc=O({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xc=nt(Kc),Zc=O({},vs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eu=nt(Zc),tu=O({},vs,{data:0}),Ro=nt(tu),su={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function au(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=nu[e])?!!s[e]:!1}function Sa(){return au}var lu=O({},nr,{key:function(e){if(e.key){var s=su[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ru[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ou=nt(lu),iu=O({},Gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fo=nt(iu),du=O({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),cu=nt(du),uu=O({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),pu=nt(uu),hu=O({},Gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mu=nt(hu),xu=[9,13,27,32],Ca=i&&"CompositionEvent"in window,lr=null;i&&"documentMode"in document&&(lr=document.documentMode);var gu=i&&"TextEvent"in window&&!lr,Wo=i&&(!Ca||lr&&8<lr&&11>=lr),Bo=" ",Uo=!1;function Vo(e,s){switch(e){case"keyup":return xu.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ws=!1;function fu(e,s){switch(e){case"compositionend":return Yo(s);case"keypress":return s.which!==32?null:(Uo=!0,Bo);case"textInput":return e=s.data,e===Bo&&Uo?null:e;default:return null}}function yu(e,s){if(ws)return e==="compositionend"||!Ca&&Vo(e,s)?(e=zo(),Yr=va=_t=null,ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Wo&&s.locale!=="ko"?null:s.data;default:return null}}var bu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jo(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!bu[e.type]:s==="textarea"}function Qo(e,s,r,n){xo(n),s=tn(s,"onChange"),0<s.length&&(r=new wa("onChange","change",null,r,n),e.push({event:r,listeners:s}))}var or=null,ir=null;function vu(e){hi(e,0)}function Kr(e){var s=Cs(e);if(so(s))return e}function wu(e,s){if(e==="change")return s}var Go=!1;if(i){var Pa;if(i){var Ta="oninput"in document;if(!Ta){var Ko=document.createElement("div");Ko.setAttribute("oninput","return;"),Ta=typeof Ko.oninput=="function"}Pa=Ta}else Pa=!1;Go=Pa&&(!document.documentMode||9<document.documentMode)}function Xo(){or&&(or.detachEvent("onpropertychange",Zo),ir=or=null)}function Zo(e){if(e.propertyName==="value"&&Kr(ir)){var s=[];Qo(s,ir,e,oa(e)),bo(vu,s)}}function ju(e,s,r){e==="focusin"?(Xo(),or=s,ir=r,or.attachEvent("onpropertychange",Zo)):e==="focusout"&&Xo()}function ku(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kr(ir)}function Nu(e,s){if(e==="click")return Kr(s)}function Su(e,s){if(e==="input"||e==="change")return Kr(s)}function Cu(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var xt=typeof Object.is=="function"?Object.is:Cu;function dr(e,s){if(xt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var r=Object.keys(e),n=Object.keys(s);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!f.call(s,a)||!xt(e[a],s[a]))return!1}return!0}function ei(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ti(e,s){var r=ei(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=s&&n>=s)return{node:r,offset:s-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ei(r)}}function si(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?si(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function ri(){for(var e=window,s=Dr();s instanceof e.HTMLIFrameElement;){try{var r=typeof s.contentWindow.location.href=="string"}catch{r=!1}if(r)e=s.contentWindow;else break;s=Dr(e.document)}return s}function Ea(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}function Pu(e){var s=ri(),r=e.focusedElem,n=e.selectionRange;if(s!==r&&r&&r.ownerDocument&&si(r.ownerDocument.documentElement,r)){if(n!==null&&Ea(r)){if(s=n.start,e=n.end,e===void 0&&(e=s),"selectionStart"in r)r.selectionStart=s,r.selectionEnd=Math.min(e,r.value.length);else if(e=(s=r.ownerDocument||document)&&s.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,l=Math.min(n.start,a);n=n.end===void 0?l:Math.min(n.end,a),!e.extend&&l>n&&(a=n,n=l,l=a),a=ti(r,l);var o=ti(r,n);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(s=s.createRange(),s.setStart(a.node,a.offset),e.removeAllRanges(),l>n?(e.addRange(s),e.extend(o.node,o.offset)):(s.setEnd(o.node,o.offset),e.addRange(s)))}}for(s=[],e=r;e=e.parentNode;)e.nodeType===1&&s.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<s.length;r++)e=s[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tu=i&&"documentMode"in document&&11>=document.documentMode,js=null,$a=null,cr=null,Ma=!1;function ni(e,s,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ma||js==null||js!==Dr(n)||(n=js,"selectionStart"in n&&Ea(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),cr&&dr(cr,n)||(cr=n,n=tn($a,"onSelect"),0<n.length&&(s=new wa("onSelect","select",null,s,r),e.push({event:s,listeners:n}),s.target=js)))}function Xr(e,s){var r={};return r[e.toLowerCase()]=s.toLowerCase(),r["Webkit"+e]="webkit"+s,r["Moz"+e]="moz"+s,r}var ks={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionend:Xr("Transition","TransitionEnd")},Aa={},ai={};i&&(ai=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Zr(e){if(Aa[e])return Aa[e];if(!ks[e])return e;var s=ks[e],r;for(r in s)if(s.hasOwnProperty(r)&&r in ai)return Aa[e]=s[r];return e}var li=Zr("animationend"),oi=Zr("animationiteration"),ii=Zr("animationstart"),di=Zr("transitionend"),ci=new Map,ui="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,s){ci.set(e,s),L(s,[e])}for(var La=0;La<ui.length;La++){var Da=ui[La],Eu=Da.toLowerCase(),$u=Da[0].toUpperCase()+Da.slice(1);Rt(Eu,"on"+$u)}Rt(li,"onAnimationEnd"),Rt(oi,"onAnimationIteration"),Rt(ii,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(di,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),L("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),L("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),L("onBeforeInput",["compositionend","keypress","textInput","paste"]),L("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),L("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),L("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mu=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function pi(e,s,r){var n=e.type||"unknown-event";e.currentTarget=r,Ec(n,s,void 0,e),e.currentTarget=null}function hi(e,s){s=(s&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var l=void 0;if(s)for(var o=n.length-1;0<=o;o--){var d=n[o],c=d.instance,g=d.currentTarget;if(d=d.listener,c!==l&&a.isPropagationStopped())break e;pi(a,d,g),l=c}else for(o=0;o<n.length;o++){if(d=n[o],c=d.instance,g=d.currentTarget,d=d.listener,c!==l&&a.isPropagationStopped())break e;pi(a,d,g),l=c}}}if(Or)throw e=ua,Or=!1,ua=null,e}function Ne(e,s){var r=s[Fa];r===void 0&&(r=s[Fa]=new Set);var n=e+"__bubble";r.has(n)||(mi(s,e,2,!1),r.add(n))}function Ha(e,s,r){var n=0;s&&(n|=4),mi(r,e,n,s)}var en="_reactListening"+Math.random().toString(36).slice(2);function pr(e){if(!e[en]){e[en]=!0,N.forEach(function(r){r!=="selectionchange"&&(Mu.has(r)||Ha(r,!1,e),Ha(r,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[en]||(s[en]=!0,Ha("selectionchange",!1,s))}}function mi(e,s,r,n){switch(Oo(s)){case 1:var a=Uc;break;case 4:a=Vc;break;default:a=ya}r=a.bind(null,s,r,e),a=void 0,!ca||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(s,r,{capture:!0,passive:a}):e.addEventListener(s,r,!0):a!==void 0?e.addEventListener(s,r,{passive:a}):e.addEventListener(s,r,!1)}function Ia(e,s,r,n,a){var l=n;if((s&1)===0&&(s&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var d=n.stateNode.containerInfo;if(d===a||d.nodeType===8&&d.parentNode===a)break;if(o===4)for(o=n.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;d!==null;){if(o=rs(d),o===null)return;if(c=o.tag,c===5||c===6){n=l=o;continue e}d=d.parentNode}}n=n.return}bo(function(){var g=l,w=oa(r),j=[];e:{var b=ci.get(e);if(b!==void 0){var $=wa,q=e;switch(e){case"keypress":if(Jr(r)===0)break e;case"keydown":case"keyup":$=ou;break;case"focusin":q="focus",$=Na;break;case"focusout":q="blur",$=Na;break;case"beforeblur":case"afterblur":$=Na;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=_o;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Qc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=cu;break;case li:case oi:case ii:$=Xc;break;case di:$=pu;break;case"scroll":$=Yc;break;case"wheel":$=mu;break;case"copy":case"cut":case"paste":$=eu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Fo}var _=(s&4)!==0,He=!_&&e==="scroll",m=_?b!==null?b+"Capture":null:b;_=[];for(var u=g,x;u!==null;){x=u;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,m!==null&&(k=Js(u,m),k!=null&&_.push(hr(u,k,x)))),He)break;u=u.return}0<_.length&&(b=new $(b,q,null,r,w),j.push({event:b,listeners:_}))}}if((s&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",b&&r!==la&&(q=r.relatedTarget||r.fromElement)&&(rs(q)||q[Pt]))break e;if(($||b)&&(b=w.window===w?w:(b=w.ownerDocument)?b.defaultView||b.parentWindow:window,$?(q=r.relatedTarget||r.toElement,$=g,q=q?rs(q):null,q!==null&&(He=ss(q),q!==He||q.tag!==5&&q.tag!==6)&&(q=null)):($=null,q=g),$!==q)){if(_=_o,k="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(_=Fo,k="onPointerLeave",m="onPointerEnter",u="pointer"),He=$==null?b:Cs($),x=q==null?b:Cs(q),b=new _(k,u+"leave",$,r,w),b.target=He,b.relatedTarget=x,k=null,rs(w)===g&&(_=new _(m,u+"enter",q,r,w),_.target=x,_.relatedTarget=He,k=_),He=k,$&&q)t:{for(_=$,m=q,u=0,x=_;x;x=Ns(x))u++;for(x=0,k=m;k;k=Ns(k))x++;for(;0<u-x;)_=Ns(_),u--;for(;0<x-u;)m=Ns(m),x--;for(;u--;){if(_===m||m!==null&&_===m.alternate)break t;_=Ns(_),m=Ns(m)}_=null}else _=null;$!==null&&xi(j,b,$,_,!1),q!==null&&He!==null&&xi(j,He,q,_,!0)}}e:{if(b=g?Cs(g):window,$=b.nodeName&&b.nodeName.toLowerCase(),$==="select"||$==="input"&&b.type==="file")var F=wu;else if(Jo(b))if(Go)F=Su;else{F=ku;var V=ju}else($=b.nodeName)&&$.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(F=Nu);if(F&&(F=F(e,g))){Qo(j,F,r,w);break e}V&&V(e,b,g),e==="focusout"&&(V=b._wrapperState)&&V.controlled&&b.type==="number"&&ta(b,"number",b.value)}switch(V=g?Cs(g):window,e){case"focusin":(Jo(V)||V.contentEditable==="true")&&(js=V,$a=g,cr=null);break;case"focusout":cr=$a=js=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,ni(j,r,w);break;case"selectionchange":if(Tu)break;case"keydown":case"keyup":ni(j,r,w)}var Y;if(Ca)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else ws?Vo(e,r)&&(Z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Z="onCompositionStart");Z&&(Wo&&r.locale!=="ko"&&(ws||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&ws&&(Y=zo()):(_t=w,va="value"in _t?_t.value:_t.textContent,ws=!0)),V=tn(g,Z),0<V.length&&(Z=new Ro(Z,e,null,r,w),j.push({event:Z,listeners:V}),Y?Z.data=Y:(Y=Yo(r),Y!==null&&(Z.data=Y)))),(Y=gu?fu(e,r):yu(e,r))&&(g=tn(g,"onBeforeInput"),0<g.length&&(w=new Ro("onBeforeInput","beforeinput",null,r,w),j.push({event:w,listeners:g}),w.data=Y))}hi(j,s)})}function hr(e,s,r){return{instance:e,listener:s,currentTarget:r}}function tn(e,s){for(var r=s+"Capture",n=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Js(e,r),l!=null&&n.unshift(hr(e,l,a)),l=Js(e,s),l!=null&&n.push(hr(e,l,a))),e=e.return}return n}function Ns(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xi(e,s,r,n,a){for(var l=s._reactName,o=[];r!==null&&r!==n;){var d=r,c=d.alternate,g=d.stateNode;if(c!==null&&c===n)break;d.tag===5&&g!==null&&(d=g,a?(c=Js(r,l),c!=null&&o.unshift(hr(r,c,d))):a||(c=Js(r,l),c!=null&&o.push(hr(r,c,d)))),r=r.return}o.length!==0&&e.push({event:s,listeners:o})}var Au=/\r\n?/g,Lu=/\u0000|\uFFFD/g;function gi(e){return(typeof e=="string"?e:""+e).replace(Au,`
`).replace(Lu,"")}function sn(e,s,r){if(s=gi(s),gi(e)!==s&&r)throw Error(p(425))}function rn(){}var Oa=null,za=null;function qa(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var _a=typeof setTimeout=="function"?setTimeout:void 0,Du=typeof clearTimeout=="function"?clearTimeout:void 0,fi=typeof Promise=="function"?Promise:void 0,Hu=typeof queueMicrotask=="function"?queueMicrotask:typeof fi<"u"?function(e){return fi.resolve(null).then(e).catch(Iu)}:_a;function Iu(e){setTimeout(function(){throw e})}function Ra(e,s){var r=s,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),rr(s);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);rr(s)}function Ft(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return e}function yi(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(s===0)return e;s--}else r==="/$"&&s++}e=e.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),kt="__reactFiber$"+Ss,mr="__reactProps$"+Ss,Pt="__reactContainer$"+Ss,Fa="__reactEvents$"+Ss,Ou="__reactListeners$"+Ss,zu="__reactHandles$"+Ss;function rs(e){var s=e[kt];if(s)return s;for(var r=e.parentNode;r;){if(s=r[Pt]||r[kt]){if(r=s.alternate,s.child!==null||r!==null&&r.child!==null)for(e=yi(e);e!==null;){if(r=e[kt])return r;e=yi(e)}return s}e=r,r=e.parentNode}return null}function xr(e){return e=e[kt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cs(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function nn(e){return e[mr]||null}var Wa=[],Ps=-1;function Wt(e){return{current:e}}function Se(e){0>Ps||(e.current=Wa[Ps],Wa[Ps]=null,Ps--)}function ke(e,s){Ps++,Wa[Ps]=e.current,e.current=s}var Bt={},Ue=Wt(Bt),Ke=Wt(!1),ns=Bt;function Ts(e,s){var r=e.type.contextTypes;if(!r)return Bt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===s)return n.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in r)a[l]=s[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),a}function Xe(e){return e=e.childContextTypes,e!=null}function an(){Se(Ke),Se(Ue)}function bi(e,s,r){if(Ue.current!==Bt)throw Error(p(168));ke(Ue,s),ke(Ke,r)}function vi(e,s,r){var n=e.stateNode;if(s=s.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in s))throw Error(p(108,je(e)||"Unknown",a));return O({},r,n)}function ln(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,ns=Ue.current,ke(Ue,e),ke(Ke,Ke.current),!0}function wi(e,s,r){var n=e.stateNode;if(!n)throw Error(p(169));r?(e=vi(e,s,ns),n.__reactInternalMemoizedMergedChildContext=e,Se(Ke),Se(Ue),ke(Ue,e)):Se(Ke),ke(Ke,r)}var Tt=null,on=!1,Ba=!1;function ji(e){Tt===null?Tt=[e]:Tt.push(e)}function qu(e){on=!0,ji(e)}function Ut(){if(!Ba&&Tt!==null){Ba=!0;var e=0,s=be;try{var r=Tt;for(be=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Tt=null,on=!1}catch(a){throw Tt!==null&&(Tt=Tt.slice(e+1)),No(pa,Ut),a}finally{be=s,Ba=!1}}return null}var Es=[],$s=0,dn=null,cn=0,it=[],dt=0,as=null,Et=1,$t="";function ls(e,s){Es[$s++]=cn,Es[$s++]=dn,dn=e,cn=s}function ki(e,s,r){it[dt++]=Et,it[dt++]=$t,it[dt++]=as,as=e;var n=Et;e=$t;var a=32-mt(n)-1;n&=~(1<<a),r+=1;var l=32-mt(s)+a;if(30<l){var o=a-a%5;l=(n&(1<<o)-1).toString(32),n>>=o,a-=o,Et=1<<32-mt(s)+a|r<<a|n,$t=l+e}else Et=1<<l|r<<a|n,$t=e}function Ua(e){e.return!==null&&(ls(e,1),ki(e,1,0))}function Va(e){for(;e===dn;)dn=Es[--$s],Es[$s]=null,cn=Es[--$s],Es[$s]=null;for(;e===as;)as=it[--dt],it[dt]=null,$t=it[--dt],it[dt]=null,Et=it[--dt],it[dt]=null}var at=null,lt=null,Te=!1,gt=null;function Ni(e,s){var r=ht(5,null,null,0);r.elementType="DELETED",r.stateNode=s,r.return=e,s=e.deletions,s===null?(e.deletions=[r],e.flags|=16):s.push(r)}function Si(e,s){switch(e.tag){case 5:var r=e.type;return s=s.nodeType!==1||r.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(e.stateNode=s,at=e,lt=Ft(s.firstChild),!0):!1;case 6:return s=e.pendingProps===""||s.nodeType!==3?null:s,s!==null?(e.stateNode=s,at=e,lt=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(r=as!==null?{id:Et,overflow:$t}:null,e.memoizedState={dehydrated:s,treeContext:r,retryLane:1073741824},r=ht(18,null,null,0),r.stateNode=s,r.return=e,e.child=r,at=e,lt=null,!0):!1;default:return!1}}function Ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ja(e){if(Te){var s=lt;if(s){var r=s;if(!Si(e,s)){if(Ya(e))throw Error(p(418));s=Ft(r.nextSibling);var n=at;s&&Si(e,s)?Ni(n,r):(e.flags=e.flags&-4097|2,Te=!1,at=e)}}else{if(Ya(e))throw Error(p(418));e.flags=e.flags&-4097|2,Te=!1,at=e}}}function Ci(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function un(e){if(e!==at)return!1;if(!Te)return Ci(e),Te=!0,!1;var s;if((s=e.tag!==3)&&!(s=e.tag!==5)&&(s=e.type,s=s!=="head"&&s!=="body"&&!qa(e.type,e.memoizedProps)),s&&(s=lt)){if(Ya(e))throw Pi(),Error(p(418));for(;s;)Ni(e,s),s=Ft(s.nextSibling)}if(Ci(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,s=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(s===0){lt=Ft(e.nextSibling);break e}s--}else r!=="$"&&r!=="$!"&&r!=="$?"||s++}e=e.nextSibling}lt=null}}else lt=at?Ft(e.stateNode.nextSibling):null;return!0}function Pi(){for(var e=lt;e;)e=Ft(e.nextSibling)}function Ms(){lt=at=null,Te=!1}function Qa(e){gt===null?gt=[e]:gt.push(e)}var _u=se.ReactCurrentBatchConfig;function gr(e,s,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(p(309));var n=r.stateNode}if(!n)throw Error(p(147,e));var a=n,l=""+e;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===l?s.ref:(s=function(o){var d=a.refs;o===null?delete d[l]:d[l]=o},s._stringRef=l,s)}if(typeof e!="string")throw Error(p(284));if(!r._owner)throw Error(p(290,e))}return e}function pn(e,s){throw e=Object.prototype.toString.call(s),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e))}function Ti(e){var s=e._init;return s(e._payload)}function Ei(e){function s(m,u){if(e){var x=m.deletions;x===null?(m.deletions=[u],m.flags|=16):x.push(u)}}function r(m,u){if(!e)return null;for(;u!==null;)s(m,u),u=u.sibling;return null}function n(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function a(m,u){return m=Zt(m,u),m.index=0,m.sibling=null,m}function l(m,u,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<u?(m.flags|=2,u):x):(m.flags|=2,u)):(m.flags|=1048576,u)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function d(m,u,x,k){return u===null||u.tag!==6?(u=_l(x,m.mode,k),u.return=m,u):(u=a(u,x),u.return=m,u)}function c(m,u,x,k){var F=x.type;return F===X?w(m,u,x.props.children,k,x.key):u!==null&&(u.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ce&&Ti(F)===u.type)?(k=a(u,x.props),k.ref=gr(m,u,x),k.return=m,k):(k=In(x.type,x.key,x.props,null,m.mode,k),k.ref=gr(m,u,x),k.return=m,k)}function g(m,u,x,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==x.containerInfo||u.stateNode.implementation!==x.implementation?(u=Rl(x,m.mode,k),u.return=m,u):(u=a(u,x.children||[]),u.return=m,u)}function w(m,u,x,k,F){return u===null||u.tag!==7?(u=ms(x,m.mode,k,F),u.return=m,u):(u=a(u,x),u.return=m,u)}function j(m,u,x){if(typeof u=="string"&&u!==""||typeof u=="number")return u=_l(""+u,m.mode,x),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case re:return x=In(u.type,u.key,u.props,null,m.mode,x),x.ref=gr(m,null,u),x.return=m,x;case we:return u=Rl(u,m.mode,x),u.return=m,u;case Ce:var k=u._init;return j(m,k(u._payload),x)}if(Us(u)||K(u))return u=ms(u,m.mode,x,null),u.return=m,u;pn(m,u)}return null}function b(m,u,x,k){var F=u!==null?u.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return F!==null?null:d(m,u,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case re:return x.key===F?c(m,u,x,k):null;case we:return x.key===F?g(m,u,x,k):null;case Ce:return F=x._init,b(m,u,F(x._payload),k)}if(Us(x)||K(x))return F!==null?null:w(m,u,x,k,null);pn(m,x)}return null}function $(m,u,x,k,F){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(x)||null,d(u,m,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case re:return m=m.get(k.key===null?x:k.key)||null,c(u,m,k,F);case we:return m=m.get(k.key===null?x:k.key)||null,g(u,m,k,F);case Ce:var V=k._init;return $(m,u,x,V(k._payload),F)}if(Us(k)||K(k))return m=m.get(x)||null,w(u,m,k,F,null);pn(u,k)}return null}function q(m,u,x,k){for(var F=null,V=null,Y=u,Z=u=0,Re=null;Y!==null&&Z<x.length;Z++){Y.index>Z?(Re=Y,Y=null):Re=Y.sibling;var xe=b(m,Y,x[Z],k);if(xe===null){Y===null&&(Y=Re);break}e&&Y&&xe.alternate===null&&s(m,Y),u=l(xe,u,Z),V===null?F=xe:V.sibling=xe,V=xe,Y=Re}if(Z===x.length)return r(m,Y),Te&&ls(m,Z),F;if(Y===null){for(;Z<x.length;Z++)Y=j(m,x[Z],k),Y!==null&&(u=l(Y,u,Z),V===null?F=Y:V.sibling=Y,V=Y);return Te&&ls(m,Z),F}for(Y=n(m,Y);Z<x.length;Z++)Re=$(Y,m,Z,x[Z],k),Re!==null&&(e&&Re.alternate!==null&&Y.delete(Re.key===null?Z:Re.key),u=l(Re,u,Z),V===null?F=Re:V.sibling=Re,V=Re);return e&&Y.forEach(function(es){return s(m,es)}),Te&&ls(m,Z),F}function _(m,u,x,k){var F=K(x);if(typeof F!="function")throw Error(p(150));if(x=F.call(x),x==null)throw Error(p(151));for(var V=F=null,Y=u,Z=u=0,Re=null,xe=x.next();Y!==null&&!xe.done;Z++,xe=x.next()){Y.index>Z?(Re=Y,Y=null):Re=Y.sibling;var es=b(m,Y,xe.value,k);if(es===null){Y===null&&(Y=Re);break}e&&Y&&es.alternate===null&&s(m,Y),u=l(es,u,Z),V===null?F=es:V.sibling=es,V=es,Y=Re}if(xe.done)return r(m,Y),Te&&ls(m,Z),F;if(Y===null){for(;!xe.done;Z++,xe=x.next())xe=j(m,xe.value,k),xe!==null&&(u=l(xe,u,Z),V===null?F=xe:V.sibling=xe,V=xe);return Te&&ls(m,Z),F}for(Y=n(m,Y);!xe.done;Z++,xe=x.next())xe=$(Y,m,Z,xe.value,k),xe!==null&&(e&&xe.alternate!==null&&Y.delete(xe.key===null?Z:xe.key),u=l(xe,u,Z),V===null?F=xe:V.sibling=xe,V=xe);return e&&Y.forEach(function(bp){return s(m,bp)}),Te&&ls(m,Z),F}function He(m,u,x,k){if(typeof x=="object"&&x!==null&&x.type===X&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case re:e:{for(var F=x.key,V=u;V!==null;){if(V.key===F){if(F=x.type,F===X){if(V.tag===7){r(m,V.sibling),u=a(V,x.props.children),u.return=m,m=u;break e}}else if(V.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ce&&Ti(F)===V.type){r(m,V.sibling),u=a(V,x.props),u.ref=gr(m,V,x),u.return=m,m=u;break e}r(m,V);break}else s(m,V);V=V.sibling}x.type===X?(u=ms(x.props.children,m.mode,k,x.key),u.return=m,m=u):(k=In(x.type,x.key,x.props,null,m.mode,k),k.ref=gr(m,u,x),k.return=m,m=k)}return o(m);case we:e:{for(V=x.key;u!==null;){if(u.key===V)if(u.tag===4&&u.stateNode.containerInfo===x.containerInfo&&u.stateNode.implementation===x.implementation){r(m,u.sibling),u=a(u,x.children||[]),u.return=m,m=u;break e}else{r(m,u);break}else s(m,u);u=u.sibling}u=Rl(x,m.mode,k),u.return=m,m=u}return o(m);case Ce:return V=x._init,He(m,u,V(x._payload),k)}if(Us(x))return q(m,u,x,k);if(K(x))return _(m,u,x,k);pn(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,u!==null&&u.tag===6?(r(m,u.sibling),u=a(u,x),u.return=m,m=u):(r(m,u),u=_l(x,m.mode,k),u.return=m,m=u),o(m)):r(m,u)}return He}var As=Ei(!0),$i=Ei(!1),hn=Wt(null),mn=null,Ls=null,Ga=null;function Ka(){Ga=Ls=mn=null}function Xa(e){var s=hn.current;Se(hn),e._currentValue=s}function Za(e,s,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,n!==null&&(n.childLanes|=s)):n!==null&&(n.childLanes&s)!==s&&(n.childLanes|=s),e===r)break;e=e.return}}function Ds(e,s){mn=e,Ga=Ls=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&s)!==0&&(Ze=!0),e.firstContext=null)}function ct(e){var s=e._currentValue;if(Ga!==e)if(e={context:e,memoizedValue:s,next:null},Ls===null){if(mn===null)throw Error(p(308));Ls=e,mn.dependencies={lanes:0,firstContext:e}}else Ls=Ls.next=e;return s}var os=null;function el(e){os===null?os=[e]:os.push(e)}function Mi(e,s,r,n){var a=s.interleaved;return a===null?(r.next=r,el(s)):(r.next=a.next,a.next=r),s.interleaved=r,Mt(e,n)}function Mt(e,s){e.lanes|=s;var r=e.alternate;for(r!==null&&(r.lanes|=s),r=e,e=e.return;e!==null;)e.childLanes|=s,r=e.alternate,r!==null&&(r.childLanes|=s),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Vt=!1;function tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ai(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,s){return{eventTime:e,lane:s,tag:0,payload:null,callback:null,next:null}}function Yt(e,s,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ue&2)!==0){var a=n.pending;return a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s,Mt(e,r)}return a=n.interleaved,a===null?(s.next=s,el(n)):(s.next=a.next,a.next=s),n.interleaved=s,Mt(e,r)}function xn(e,s,r){if(s=s.updateQueue,s!==null&&(s=s.shared,(r&4194240)!==0)){var n=s.lanes;n&=e.pendingLanes,r|=n,s.lanes=r,xa(e,r)}}function Li(e,s){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?a=l=o:l=l.next=o,r=r.next}while(r!==null);l===null?a=l=s:l=l.next=s}else a=l=s;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=s:e.next=s,r.lastBaseUpdate=s}function gn(e,s,r,n){var a=e.updateQueue;Vt=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var c=d,g=c.next;c.next=null,o===null?l=g:o.next=g,o=c;var w=e.alternate;w!==null&&(w=w.updateQueue,d=w.lastBaseUpdate,d!==o&&(d===null?w.firstBaseUpdate=g:d.next=g,w.lastBaseUpdate=c))}if(l!==null){var j=a.baseState;o=0,w=g=c=null,d=l;do{var b=d.lane,$=d.eventTime;if((n&b)===b){w!==null&&(w=w.next={eventTime:$,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var q=e,_=d;switch(b=s,$=r,_.tag){case 1:if(q=_.payload,typeof q=="function"){j=q.call($,j,b);break e}j=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=_.payload,b=typeof q=="function"?q.call($,j,b):q,b==null)break e;j=O({},j,b);break e;case 2:Vt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,b=a.effects,b===null?a.effects=[d]:b.push(d))}else $={eventTime:$,lane:b,tag:d.tag,payload:d.payload,callback:d.callback,next:null},w===null?(g=w=$,c=j):w=w.next=$,o|=b;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;b=d,d=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);if(w===null&&(c=j),a.baseState=c,a.firstBaseUpdate=g,a.lastBaseUpdate=w,s=a.shared.interleaved,s!==null){a=s;do o|=a.lane,a=a.next;while(a!==s)}else l===null&&(a.shared.lanes=0);cs|=o,e.lanes=o,e.memoizedState=j}}function Di(e,s,r){if(e=s.effects,s.effects=null,e!==null)for(s=0;s<e.length;s++){var n=e[s],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(p(191,a));a.call(n)}}}var fr={},Nt=Wt(fr),yr=Wt(fr),br=Wt(fr);function is(e){if(e===fr)throw Error(p(174));return e}function sl(e,s){switch(ke(br,s),ke(yr,e),ke(Nt,fr),e=s.nodeType,e){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ra(null,"");break;default:e=e===8?s.parentNode:s,s=e.namespaceURI||null,e=e.tagName,s=ra(s,e)}Se(Nt),ke(Nt,s)}function Hs(){Se(Nt),Se(yr),Se(br)}function Hi(e){is(br.current);var s=is(Nt.current),r=ra(s,e.type);s!==r&&(ke(yr,e),ke(Nt,r))}function rl(e){yr.current===e&&(Se(Nt),Se(yr))}var $e=Wt(0);function fn(e){for(var s=e;s!==null;){if(s.tag===13){var r=s.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var nl=[];function al(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var yn=se.ReactCurrentDispatcher,ll=se.ReactCurrentBatchConfig,ds=0,Me=null,Oe=null,qe=null,bn=!1,vr=!1,wr=0,Ru=0;function Ve(){throw Error(p(321))}function ol(e,s){if(s===null)return!1;for(var r=0;r<s.length&&r<e.length;r++)if(!xt(e[r],s[r]))return!1;return!0}function il(e,s,r,n,a,l){if(ds=l,Me=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,yn.current=e===null||e.memoizedState===null?Uu:Vu,e=r(n,a),vr){l=0;do{if(vr=!1,wr=0,25<=l)throw Error(p(301));l+=1,qe=Oe=null,s.updateQueue=null,yn.current=Yu,e=r(n,a)}while(vr)}if(yn.current=jn,s=Oe!==null&&Oe.next!==null,ds=0,qe=Oe=Me=null,bn=!1,s)throw Error(p(300));return e}function dl(){var e=wr!==0;return wr=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Me.memoizedState=qe=e:qe=qe.next=e,qe}function ut(){if(Oe===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var s=qe===null?Me.memoizedState:qe.next;if(s!==null)qe=s,Oe=e;else{if(e===null)throw Error(p(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},qe===null?Me.memoizedState=qe=e:qe=qe.next=e}return qe}function jr(e,s){return typeof s=="function"?s(e):s}function cl(e){var s=ut(),r=s.queue;if(r===null)throw Error(p(311));r.lastRenderedReducer=e;var n=Oe,a=n.baseQueue,l=r.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}n.baseQueue=a=l,r.pending=null}if(a!==null){l=a.next,n=n.baseState;var d=o=null,c=null,g=l;do{var w=g.lane;if((ds&w)===w)c!==null&&(c=c.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),n=g.hasEagerState?g.eagerState:e(n,g.action);else{var j={lane:w,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};c===null?(d=c=j,o=n):c=c.next=j,Me.lanes|=w,cs|=w}g=g.next}while(g!==null&&g!==l);c===null?o=n:c.next=d,xt(n,s.memoizedState)||(Ze=!0),s.memoizedState=n,s.baseState=o,s.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do l=a.lane,Me.lanes|=l,cs|=l,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[s.memoizedState,r.dispatch]}function ul(e){var s=ut(),r=s.queue;if(r===null)throw Error(p(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,l=s.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);xt(l,s.memoizedState)||(Ze=!0),s.memoizedState=l,s.baseQueue===null&&(s.baseState=l),r.lastRenderedState=l}return[l,n]}function Ii(){}function Oi(e,s){var r=Me,n=ut(),a=s(),l=!xt(n.memoizedState,a);if(l&&(n.memoizedState=a,Ze=!0),n=n.queue,pl(_i.bind(null,r,n,e),[e]),n.getSnapshot!==s||l||qe!==null&&qe.memoizedState.tag&1){if(r.flags|=2048,kr(9,qi.bind(null,r,n,a,s),void 0,null),_e===null)throw Error(p(349));(ds&30)!==0||zi(r,s,a)}return a}function zi(e,s,r){e.flags|=16384,e={getSnapshot:s,value:r},s=Me.updateQueue,s===null?(s={lastEffect:null,stores:null},Me.updateQueue=s,s.stores=[e]):(r=s.stores,r===null?s.stores=[e]:r.push(e))}function qi(e,s,r,n){s.value=r,s.getSnapshot=n,Ri(s)&&Fi(e)}function _i(e,s,r){return r(function(){Ri(s)&&Fi(e)})}function Ri(e){var s=e.getSnapshot;e=e.value;try{var r=s();return!xt(e,r)}catch{return!0}}function Fi(e){var s=Mt(e,1);s!==null&&vt(s,e,1,-1)}function Wi(e){var s=St();return typeof e=="function"&&(e=e()),s.memoizedState=s.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},s.queue=e,e=e.dispatch=Bu.bind(null,Me,e),[s.memoizedState,e]}function kr(e,s,r,n){return e={tag:e,create:s,destroy:r,deps:n,next:null},s=Me.updateQueue,s===null?(s={lastEffect:null,stores:null},Me.updateQueue=s,s.lastEffect=e.next=e):(r=s.lastEffect,r===null?s.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,s.lastEffect=e)),e}function Bi(){return ut().memoizedState}function vn(e,s,r,n){var a=St();Me.flags|=e,a.memoizedState=kr(1|s,r,void 0,n===void 0?null:n)}function wn(e,s,r,n){var a=ut();n=n===void 0?null:n;var l=void 0;if(Oe!==null){var o=Oe.memoizedState;if(l=o.destroy,n!==null&&ol(n,o.deps)){a.memoizedState=kr(s,r,l,n);return}}Me.flags|=e,a.memoizedState=kr(1|s,r,l,n)}function Ui(e,s){return vn(8390656,8,e,s)}function pl(e,s){return wn(2048,8,e,s)}function Vi(e,s){return wn(4,2,e,s)}function Yi(e,s){return wn(4,4,e,s)}function Ji(e,s){if(typeof s=="function")return e=e(),s(e),function(){s(null)};if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function Qi(e,s,r){return r=r!=null?r.concat([e]):null,wn(4,4,Ji.bind(null,s,e),r)}function hl(){}function Gi(e,s){var r=ut();s=s===void 0?null:s;var n=r.memoizedState;return n!==null&&s!==null&&ol(s,n[1])?n[0]:(r.memoizedState=[e,s],e)}function Ki(e,s){var r=ut();s=s===void 0?null:s;var n=r.memoizedState;return n!==null&&s!==null&&ol(s,n[1])?n[0]:(e=e(),r.memoizedState=[e,s],e)}function Xi(e,s,r){return(ds&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=r):(xt(r,s)||(r=To(),Me.lanes|=r,cs|=r,e.baseState=!0),s)}function Fu(e,s){var r=be;be=r!==0&&4>r?r:4,e(!0);var n=ll.transition;ll.transition={};try{e(!1),s()}finally{be=r,ll.transition=n}}function Zi(){return ut().memoizedState}function Wu(e,s,r){var n=Kt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ed(e))td(s,r);else if(r=Mi(e,s,r,n),r!==null){var a=Ge();vt(r,e,n,a),sd(r,s,n)}}function Bu(e,s,r){var n=Kt(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ed(e))td(s,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=s.lastRenderedReducer,l!==null))try{var o=s.lastRenderedState,d=l(o,r);if(a.hasEagerState=!0,a.eagerState=d,xt(d,o)){var c=s.interleaved;c===null?(a.next=a,el(s)):(a.next=c.next,c.next=a),s.interleaved=a;return}}catch{}finally{}r=Mi(e,s,a,n),r!==null&&(a=Ge(),vt(r,e,n,a),sd(r,s,n))}}function ed(e){var s=e.alternate;return e===Me||s!==null&&s===Me}function td(e,s){vr=bn=!0;var r=e.pending;r===null?s.next=s:(s.next=r.next,r.next=s),e.pending=s}function sd(e,s,r){if((r&4194240)!==0){var n=s.lanes;n&=e.pendingLanes,r|=n,s.lanes=r,xa(e,r)}}var jn={readContext:ct,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},Uu={readContext:ct,useCallback:function(e,s){return St().memoizedState=[e,s===void 0?null:s],e},useContext:ct,useEffect:Ui,useImperativeHandle:function(e,s,r){return r=r!=null?r.concat([e]):null,vn(4194308,4,Ji.bind(null,s,e),r)},useLayoutEffect:function(e,s){return vn(4194308,4,e,s)},useInsertionEffect:function(e,s){return vn(4,2,e,s)},useMemo:function(e,s){var r=St();return s=s===void 0?null:s,e=e(),r.memoizedState=[e,s],e},useReducer:function(e,s,r){var n=St();return s=r!==void 0?r(s):s,n.memoizedState=n.baseState=s,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},n.queue=e,e=e.dispatch=Wu.bind(null,Me,e),[n.memoizedState,e]},useRef:function(e){var s=St();return e={current:e},s.memoizedState=e},useState:Wi,useDebugValue:hl,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=Wi(!1),s=e[0];return e=Fu.bind(null,e[1]),St().memoizedState=e,[s,e]},useMutableSource:function(){},useSyncExternalStore:function(e,s,r){var n=Me,a=St();if(Te){if(r===void 0)throw Error(p(407));r=r()}else{if(r=s(),_e===null)throw Error(p(349));(ds&30)!==0||zi(n,s,r)}a.memoizedState=r;var l={value:r,getSnapshot:s};return a.queue=l,Ui(_i.bind(null,n,l,e),[e]),n.flags|=2048,kr(9,qi.bind(null,n,l,r,s),void 0,null),r},useId:function(){var e=St(),s=_e.identifierPrefix;if(Te){var r=$t,n=Et;r=(n&~(1<<32-mt(n)-1)).toString(32)+r,s=":"+s+"R"+r,r=wr++,0<r&&(s+="H"+r.toString(32)),s+=":"}else r=Ru++,s=":"+s+"r"+r.toString(32)+":";return e.memoizedState=s},unstable_isNewReconciler:!1},Vu={readContext:ct,useCallback:Gi,useContext:ct,useEffect:pl,useImperativeHandle:Qi,useInsertionEffect:Vi,useLayoutEffect:Yi,useMemo:Ki,useReducer:cl,useRef:Bi,useState:function(){return cl(jr)},useDebugValue:hl,useDeferredValue:function(e){var s=ut();return Xi(s,Oe.memoizedState,e)},useTransition:function(){var e=cl(jr)[0],s=ut().memoizedState;return[e,s]},useMutableSource:Ii,useSyncExternalStore:Oi,useId:Zi,unstable_isNewReconciler:!1},Yu={readContext:ct,useCallback:Gi,useContext:ct,useEffect:pl,useImperativeHandle:Qi,useInsertionEffect:Vi,useLayoutEffect:Yi,useMemo:Ki,useReducer:ul,useRef:Bi,useState:function(){return ul(jr)},useDebugValue:hl,useDeferredValue:function(e){var s=ut();return Oe===null?s.memoizedState=e:Xi(s,Oe.memoizedState,e)},useTransition:function(){var e=ul(jr)[0],s=ut().memoizedState;return[e,s]},useMutableSource:Ii,useSyncExternalStore:Oi,useId:Zi,unstable_isNewReconciler:!1};function ft(e,s){if(e&&e.defaultProps){s=O({},s),e=e.defaultProps;for(var r in e)s[r]===void 0&&(s[r]=e[r]);return s}return s}function ml(e,s,r,n){s=e.memoizedState,r=r(n,s),r=r==null?s:O({},s,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var kn={isMounted:function(e){return(e=e._reactInternals)?ss(e)===e:!1},enqueueSetState:function(e,s,r){e=e._reactInternals;var n=Ge(),a=Kt(e),l=At(n,a);l.payload=s,r!=null&&(l.callback=r),s=Yt(e,l,a),s!==null&&(vt(s,e,a,n),xn(s,e,a))},enqueueReplaceState:function(e,s,r){e=e._reactInternals;var n=Ge(),a=Kt(e),l=At(n,a);l.tag=1,l.payload=s,r!=null&&(l.callback=r),s=Yt(e,l,a),s!==null&&(vt(s,e,a,n),xn(s,e,a))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var r=Ge(),n=Kt(e),a=At(r,n);a.tag=2,s!=null&&(a.callback=s),s=Yt(e,a,n),s!==null&&(vt(s,e,n,r),xn(s,e,n))}};function rd(e,s,r,n,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,o):s.prototype&&s.prototype.isPureReactComponent?!dr(r,n)||!dr(a,l):!0}function nd(e,s,r){var n=!1,a=Bt,l=s.contextType;return typeof l=="object"&&l!==null?l=ct(l):(a=Xe(s)?ns:Ue.current,n=s.contextTypes,l=(n=n!=null)?Ts(e,a):Bt),s=new s(r,l),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=kn,e.stateNode=s,s._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),s}function ad(e,s,r,n){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(r,n),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(r,n),s.state!==e&&kn.enqueueReplaceState(s,s.state,null)}function xl(e,s,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},tl(e);var l=s.contextType;typeof l=="object"&&l!==null?a.context=ct(l):(l=Xe(s)?ns:Ue.current,a.context=Ts(e,l)),a.state=e.memoizedState,l=s.getDerivedStateFromProps,typeof l=="function"&&(ml(e,s,l,r),a.state=e.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&kn.enqueueReplaceState(a,a.state,null),gn(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Is(e,s){try{var r="",n=s;do r+=he(n),n=n.return;while(n);var a=r}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:s,stack:a,digest:null}}function gl(e,s,r){return{value:e,source:null,stack:r??null,digest:s??null}}function fl(e,s){try{console.error(s.value)}catch(r){setTimeout(function(){throw r})}}var Ju=typeof WeakMap=="function"?WeakMap:Map;function ld(e,s,r){r=At(-1,r),r.tag=3,r.payload={element:null};var n=s.value;return r.callback=function(){$n||($n=!0,Al=n),fl(e,s)},r}function od(e,s,r){r=At(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=s.value;r.payload=function(){return n(a)},r.callback=function(){fl(e,s)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){fl(e,s),typeof n!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var o=s.stack;this.componentDidCatch(s.value,{componentStack:o!==null?o:""})}),r}function id(e,s,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Ju;var a=new Set;n.set(s,a)}else a=n.get(s),a===void 0&&(a=new Set,n.set(s,a));a.has(r)||(a.add(r),e=ip.bind(null,e,s,r),s.then(e,e))}function dd(e){do{var s;if((s=e.tag===13)&&(s=e.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return e;e=e.return}while(e!==null);return null}function cd(e,s,r,n,a){return(e.mode&1)===0?(e===s?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(s=At(-1,1),s.tag=2,Yt(r,s,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Qu=se.ReactCurrentOwner,Ze=!1;function Qe(e,s,r,n){s.child=e===null?$i(s,null,r,n):As(s,e.child,r,n)}function ud(e,s,r,n,a){r=r.render;var l=s.ref;return Ds(s,a),n=il(e,s,r,n,l,a),r=dl(),e!==null&&!Ze?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~a,Lt(e,s,a)):(Te&&r&&Ua(s),s.flags|=1,Qe(e,s,n,a),s.child)}function pd(e,s,r,n,a){if(e===null){var l=r.type;return typeof l=="function"&&!ql(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(s.tag=15,s.type=l,hd(e,s,l,n,a)):(e=In(r.type,null,n,s,s.mode,a),e.ref=s.ref,e.return=s,s.child=e)}if(l=e.child,(e.lanes&a)===0){var o=l.memoizedProps;if(r=r.compare,r=r!==null?r:dr,r(o,n)&&e.ref===s.ref)return Lt(e,s,a)}return s.flags|=1,e=Zt(l,n),e.ref=s.ref,e.return=s,s.child=e}function hd(e,s,r,n,a){if(e!==null){var l=e.memoizedProps;if(dr(l,n)&&e.ref===s.ref)if(Ze=!1,s.pendingProps=n=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Ze=!0);else return s.lanes=e.lanes,Lt(e,s,a)}return yl(e,s,r,n,a)}function md(e,s,r){var n=s.pendingProps,a=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(zs,ot),ot|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:e,cachePool:null,transitions:null},s.updateQueue=null,ke(zs,ot),ot|=e,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,ke(zs,ot),ot|=n}else l!==null?(n=l.baseLanes|r,s.memoizedState=null):n=r,ke(zs,ot),ot|=n;return Qe(e,s,a,r),s.child}function xd(e,s){var r=s.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(s.flags|=512,s.flags|=2097152)}function yl(e,s,r,n,a){var l=Xe(r)?ns:Ue.current;return l=Ts(s,l),Ds(s,a),r=il(e,s,r,n,l,a),n=dl(),e!==null&&!Ze?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~a,Lt(e,s,a)):(Te&&n&&Ua(s),s.flags|=1,Qe(e,s,r,a),s.child)}function gd(e,s,r,n,a){if(Xe(r)){var l=!0;ln(s)}else l=!1;if(Ds(s,a),s.stateNode===null)Sn(e,s),nd(s,r,n),xl(s,r,n,a),n=!0;else if(e===null){var o=s.stateNode,d=s.memoizedProps;o.props=d;var c=o.context,g=r.contextType;typeof g=="object"&&g!==null?g=ct(g):(g=Xe(r)?ns:Ue.current,g=Ts(s,g));var w=r.getDerivedStateFromProps,j=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function";j||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==n||c!==g)&&ad(s,o,n,g),Vt=!1;var b=s.memoizedState;o.state=b,gn(s,n,o,a),c=s.memoizedState,d!==n||b!==c||Ke.current||Vt?(typeof w=="function"&&(ml(s,r,w,n),c=s.memoizedState),(d=Vt||rd(s,r,d,n,b,c,g))?(j||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(s.flags|=4194308)):(typeof o.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=n,s.memoizedState=c),o.props=n,o.state=c,o.context=g,n=d):(typeof o.componentDidMount=="function"&&(s.flags|=4194308),n=!1)}else{o=s.stateNode,Ai(e,s),d=s.memoizedProps,g=s.type===s.elementType?d:ft(s.type,d),o.props=g,j=s.pendingProps,b=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=ct(c):(c=Xe(r)?ns:Ue.current,c=Ts(s,c));var $=r.getDerivedStateFromProps;(w=typeof $=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==j||b!==c)&&ad(s,o,n,c),Vt=!1,b=s.memoizedState,o.state=b,gn(s,n,o,a);var q=s.memoizedState;d!==j||b!==q||Ke.current||Vt?(typeof $=="function"&&(ml(s,r,$,n),q=s.memoizedState),(g=Vt||rd(s,r,g,n,b,q,c)||!1)?(w||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,q,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,q,c)),typeof o.componentDidUpdate=="function"&&(s.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(s.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(s.flags|=1024),s.memoizedProps=n,s.memoizedState=q),o.props=n,o.state=q,o.context=c,n=g):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(s.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(s.flags|=1024),n=!1)}return bl(e,s,r,n,l,a)}function bl(e,s,r,n,a,l){xd(e,s);var o=(s.flags&128)!==0;if(!n&&!o)return a&&wi(s,r,!1),Lt(e,s,l);n=s.stateNode,Qu.current=s;var d=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return s.flags|=1,e!==null&&o?(s.child=As(s,e.child,null,l),s.child=As(s,null,d,l)):Qe(e,s,d,l),s.memoizedState=n.state,a&&wi(s,r,!0),s.child}function fd(e){var s=e.stateNode;s.pendingContext?bi(e,s.pendingContext,s.pendingContext!==s.context):s.context&&bi(e,s.context,!1),sl(e,s.containerInfo)}function yd(e,s,r,n,a){return Ms(),Qa(a),s.flags|=256,Qe(e,s,r,n),s.child}var vl={dehydrated:null,treeContext:null,retryLane:0};function wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function bd(e,s,r){var n=s.pendingProps,a=$e.current,l=!1,o=(s.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(a&2)!==0),d?(l=!0,s.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ke($e,a&1),e===null)return Ja(s),e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((s.mode&1)===0?s.lanes=1:e.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(o=n.children,e=n.fallback,l?(n=s.mode,l=s.child,o={mode:"hidden",children:o},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=On(o,n,0,null),e=ms(e,n,r,null),l.return=s,e.return=s,l.sibling=e,s.child=l,s.child.memoizedState=wl(r),s.memoizedState=vl,e):jl(s,o));if(a=e.memoizedState,a!==null&&(d=a.dehydrated,d!==null))return Gu(e,s,o,n,d,a,r);if(l){l=n.fallback,o=s.mode,a=e.child,d=a.sibling;var c={mode:"hidden",children:n.children};return(o&1)===0&&s.child!==a?(n=s.child,n.childLanes=0,n.pendingProps=c,s.deletions=null):(n=Zt(a,c),n.subtreeFlags=a.subtreeFlags&14680064),d!==null?l=Zt(d,l):(l=ms(l,o,r,null),l.flags|=2),l.return=s,n.return=s,n.sibling=l,s.child=n,n=l,l=s.child,o=e.child.memoizedState,o=o===null?wl(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~r,s.memoizedState=vl,n}return l=e.child,e=l.sibling,n=Zt(l,{mode:"visible",children:n.children}),(s.mode&1)===0&&(n.lanes=r),n.return=s,n.sibling=null,e!==null&&(r=s.deletions,r===null?(s.deletions=[e],s.flags|=16):r.push(e)),s.child=n,s.memoizedState=null,n}function jl(e,s){return s=On({mode:"visible",children:s},e.mode,0,null),s.return=e,e.child=s}function Nn(e,s,r,n){return n!==null&&Qa(n),As(s,e.child,null,r),e=jl(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Gu(e,s,r,n,a,l,o){if(r)return s.flags&256?(s.flags&=-257,n=gl(Error(p(422))),Nn(e,s,o,n)):s.memoizedState!==null?(s.child=e.child,s.flags|=128,null):(l=n.fallback,a=s.mode,n=On({mode:"visible",children:n.children},a,0,null),l=ms(l,a,o,null),l.flags|=2,n.return=s,l.return=s,n.sibling=l,s.child=n,(s.mode&1)!==0&&As(s,e.child,null,o),s.child.memoizedState=wl(o),s.memoizedState=vl,l);if((s.mode&1)===0)return Nn(e,s,o,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var d=n.dgst;return n=d,l=Error(p(419)),n=gl(l,n,void 0),Nn(e,s,o,n)}if(d=(o&e.childLanes)!==0,Ze||d){if(n=_e,n!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(n.suspendedLanes|o))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Mt(e,a),vt(n,e,a,-1))}return zl(),n=gl(Error(p(421))),Nn(e,s,o,n)}return a.data==="$?"?(s.flags|=128,s.child=e.child,s=dp.bind(null,e),a._reactRetry=s,null):(e=l.treeContext,lt=Ft(a.nextSibling),at=s,Te=!0,gt=null,e!==null&&(it[dt++]=Et,it[dt++]=$t,it[dt++]=as,Et=e.id,$t=e.overflow,as=s),s=jl(s,n.children),s.flags|=4096,s)}function vd(e,s,r){e.lanes|=s;var n=e.alternate;n!==null&&(n.lanes|=s),Za(e.return,s,r)}function kl(e,s,r,n,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(l.isBackwards=s,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=a)}function wd(e,s,r){var n=s.pendingProps,a=n.revealOrder,l=n.tail;if(Qe(e,s,n.children,r),n=$e.current,(n&2)!==0)n=n&1|2,s.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vd(e,r,s);else if(e.tag===19)vd(e,r,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ke($e,n),(s.mode&1)===0)s.memoizedState=null;else switch(a){case"forwards":for(r=s.child,a=null;r!==null;)e=r.alternate,e!==null&&fn(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=s.child,s.child=null):(a=r.sibling,r.sibling=null),kl(s,!1,a,r,l);break;case"backwards":for(r=null,a=s.child,s.child=null;a!==null;){if(e=a.alternate,e!==null&&fn(e)===null){s.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}kl(s,!0,r,null,l);break;case"together":kl(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Sn(e,s){(s.mode&1)===0&&e!==null&&(e.alternate=null,s.alternate=null,s.flags|=2)}function Lt(e,s,r){if(e!==null&&(s.dependencies=e.dependencies),cs|=s.lanes,(r&s.childLanes)===0)return null;if(e!==null&&s.child!==e.child)throw Error(p(153));if(s.child!==null){for(e=s.child,r=Zt(e,e.pendingProps),s.child=r,r.return=s;e.sibling!==null;)e=e.sibling,r=r.sibling=Zt(e,e.pendingProps),r.return=s;r.sibling=null}return s.child}function Ku(e,s,r){switch(s.tag){case 3:fd(s),Ms();break;case 5:Hi(s);break;case 1:Xe(s.type)&&ln(s);break;case 4:sl(s,s.stateNode.containerInfo);break;case 10:var n=s.type._context,a=s.memoizedProps.value;ke(hn,n._currentValue),n._currentValue=a;break;case 13:if(n=s.memoizedState,n!==null)return n.dehydrated!==null?(ke($e,$e.current&1),s.flags|=128,null):(r&s.child.childLanes)!==0?bd(e,s,r):(ke($e,$e.current&1),e=Lt(e,s,r),e!==null?e.sibling:null);ke($e,$e.current&1);break;case 19:if(n=(r&s.childLanes)!==0,(e.flags&128)!==0){if(n)return wd(e,s,r);s.flags|=128}if(a=s.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ke($e,$e.current),n)break;return null;case 22:case 23:return s.lanes=0,md(e,s,r)}return Lt(e,s,r)}var jd,Nl,kd,Nd;jd=function(e,s){for(var r=s.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break;for(;r.sibling===null;){if(r.return===null||r.return===s)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Nl=function(){},kd=function(e,s,r,n){var a=e.memoizedProps;if(a!==n){e=s.stateNode,is(Nt.current);var l=null;switch(r){case"input":a=Zn(e,a),n=Zn(e,n),l=[];break;case"select":a=O({},a,{value:void 0}),n=O({},n,{value:void 0}),l=[];break;case"textarea":a=sa(e,a),n=sa(e,n),l=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=rn)}na(r,n);var o;r=null;for(g in a)if(!n.hasOwnProperty(g)&&a.hasOwnProperty(g)&&a[g]!=null)if(g==="style"){var d=a[g];for(o in d)d.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(S.hasOwnProperty(g)?l||(l=[]):(l=l||[]).push(g,null));for(g in n){var c=n[g];if(d=a!=null?a[g]:void 0,n.hasOwnProperty(g)&&c!==d&&(c!=null||d!=null))if(g==="style")if(d){for(o in d)!d.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&d[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(l||(l=[]),l.push(g,r)),r=c;else g==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,d=d?d.__html:void 0,c!=null&&d!==c&&(l=l||[]).push(g,c)):g==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(g,""+c):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(S.hasOwnProperty(g)?(c!=null&&g==="onScroll"&&Ne("scroll",e),l||d===c||(l=[])):(l=l||[]).push(g,c))}r&&(l=l||[]).push("style",r);var g=l;(s.updateQueue=g)&&(s.flags|=4)}},Nd=function(e,s,r,n){r!==n&&(s.flags|=4)};function Nr(e,s){if(!Te)switch(e.tailMode){case"hidden":s=e.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ye(e){var s=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(s)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,s}function Xu(e,s,r){var n=s.pendingProps;switch(Va(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(s),null;case 1:return Xe(s.type)&&an(),Ye(s),null;case 3:return n=s.stateNode,Hs(),Se(Ke),Se(Ue),al(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(un(s)?s.flags|=4:e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,gt!==null&&(Hl(gt),gt=null))),Nl(e,s),Ye(s),null;case 5:rl(s);var a=is(br.current);if(r=s.type,e!==null&&s.stateNode!=null)kd(e,s,r,n,a),e.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!n){if(s.stateNode===null)throw Error(p(166));return Ye(s),null}if(e=is(Nt.current),un(s)){n=s.stateNode,r=s.type;var l=s.memoizedProps;switch(n[kt]=s,n[mr]=l,e=(s.mode&1)!==0,r){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<ur.length;a++)Ne(ur[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":ro(n,l),Ne("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},Ne("invalid",n);break;case"textarea":lo(n,l),Ne("invalid",n)}na(r,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var d=l[o];o==="children"?typeof d=="string"?n.textContent!==d&&(l.suppressHydrationWarning!==!0&&sn(n.textContent,d,e),a=["children",d]):typeof d=="number"&&n.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&sn(n.textContent,d,e),a=["children",""+d]):S.hasOwnProperty(o)&&d!=null&&o==="onScroll"&&Ne("scroll",n)}switch(r){case"input":Lr(n),ao(n,l,!0);break;case"textarea":Lr(n),io(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=rn)}n=a,s.updateQueue=n,n!==null&&(s.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=co(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[kt]=s,e[mr]=n,jd(e,s,!1,!1),s.stateNode=e;e:{switch(o=aa(r,n),r){case"dialog":Ne("cancel",e),Ne("close",e),a=n;break;case"iframe":case"object":case"embed":Ne("load",e),a=n;break;case"video":case"audio":for(a=0;a<ur.length;a++)Ne(ur[a],e);a=n;break;case"source":Ne("error",e),a=n;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),a=n;break;case"details":Ne("toggle",e),a=n;break;case"input":ro(e,n),a=Zn(e,n),Ne("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=O({},n,{value:void 0}),Ne("invalid",e);break;case"textarea":lo(e,n),a=sa(e,n),Ne("invalid",e);break;default:a=n}na(r,a),d=a;for(l in d)if(d.hasOwnProperty(l)){var c=d[l];l==="style"?ho(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&uo(e,c)):l==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Vs(e,c):typeof c=="number"&&Vs(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(S.hasOwnProperty(l)?c!=null&&l==="onScroll"&&Ne("scroll",e):c!=null&&de(e,l,c,o))}switch(r){case"input":Lr(e),ao(e,n,!1);break;case"textarea":Lr(e),io(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ye(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?gs(e,!!n.multiple,l,!1):n.defaultValue!=null&&gs(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=rn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ye(s),null;case 6:if(e&&s.stateNode!=null)Nd(e,s,e.memoizedProps,n);else{if(typeof n!="string"&&s.stateNode===null)throw Error(p(166));if(r=is(br.current),is(Nt.current),un(s)){if(n=s.stateNode,r=s.memoizedProps,n[kt]=s,(l=n.nodeValue!==r)&&(e=at,e!==null))switch(e.tag){case 3:sn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sn(n.nodeValue,r,(e.mode&1)!==0)}l&&(s.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[kt]=s,s.stateNode=n}return Ye(s),null;case 13:if(Se($e),n=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&lt!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Pi(),Ms(),s.flags|=98560,l=!1;else if(l=un(s),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(p(318));if(l=s.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));l[kt]=s}else Ms(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ye(s),l=!1}else gt!==null&&(Hl(gt),gt=null),l=!0;if(!l)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=r,s):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(s.child.flags|=8192,(s.mode&1)!==0&&(e===null||($e.current&1)!==0?ze===0&&(ze=3):zl())),s.updateQueue!==null&&(s.flags|=4),Ye(s),null);case 4:return Hs(),Nl(e,s),e===null&&pr(s.stateNode.containerInfo),Ye(s),null;case 10:return Xa(s.type._context),Ye(s),null;case 17:return Xe(s.type)&&an(),Ye(s),null;case 19:if(Se($e),l=s.memoizedState,l===null)return Ye(s),null;if(n=(s.flags&128)!==0,o=l.rendering,o===null)if(n)Nr(l,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(o=fn(e),o!==null){for(s.flags|=128,Nr(l,!1),n=o.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),s.subtreeFlags=0,n=r,r=s.child;r!==null;)l=r,e=n,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ke($e,$e.current&1|2),s.child}e=e.sibling}l.tail!==null&&De()>qs&&(s.flags|=128,n=!0,Nr(l,!1),s.lanes=4194304)}else{if(!n)if(e=fn(o),e!==null){if(s.flags|=128,n=!0,r=e.updateQueue,r!==null&&(s.updateQueue=r,s.flags|=4),Nr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Te)return Ye(s),null}else 2*De()-l.renderingStartTime>qs&&r!==1073741824&&(s.flags|=128,n=!0,Nr(l,!1),s.lanes=4194304);l.isBackwards?(o.sibling=s.child,s.child=o):(r=l.last,r!==null?r.sibling=o:s.child=o,l.last=o)}return l.tail!==null?(s=l.tail,l.rendering=s,l.tail=s.sibling,l.renderingStartTime=De(),s.sibling=null,r=$e.current,ke($e,n?r&1|2:r&1),s):(Ye(s),null);case 22:case 23:return Ol(),n=s.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(s.flags|=8192),n&&(s.mode&1)!==0?(ot&1073741824)!==0&&(Ye(s),s.subtreeFlags&6&&(s.flags|=8192)):Ye(s),null;case 24:return null;case 25:return null}throw Error(p(156,s.tag))}function Zu(e,s){switch(Va(s),s.tag){case 1:return Xe(s.type)&&an(),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return Hs(),Se(Ke),Se(Ue),al(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 5:return rl(s),null;case 13:if(Se($e),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(p(340));Ms()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return Se($e),null;case 4:return Hs(),null;case 10:return Xa(s.type._context),null;case 22:case 23:return Ol(),null;case 24:return null;default:return null}}var Cn=!1,Je=!1,ep=typeof WeakSet=="function"?WeakSet:Set,I=null;function Os(e,s){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Le(e,s,n)}else r.current=null}function Sl(e,s,r){try{r()}catch(n){Le(e,s,n)}}var Sd=!1;function tp(e,s){if(Oa=Ur,e=ri(),Ea(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var o=0,d=-1,c=-1,g=0,w=0,j=e,b=null;t:for(;;){for(var $;j!==r||a!==0&&j.nodeType!==3||(d=o+a),j!==l||n!==0&&j.nodeType!==3||(c=o+n),j.nodeType===3&&(o+=j.nodeValue.length),($=j.firstChild)!==null;)b=j,j=$;for(;;){if(j===e)break t;if(b===r&&++g===a&&(d=o),b===l&&++w===n&&(c=o),($=j.nextSibling)!==null)break;j=b,b=j.parentNode}j=$}r=d===-1||c===-1?null:{start:d,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(za={focusedElem:e,selectionRange:r},Ur=!1,I=s;I!==null;)if(s=I,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,I=e;else for(;I!==null;){s=I;try{var q=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var _=q.memoizedProps,He=q.memoizedState,m=s.stateNode,u=m.getSnapshotBeforeUpdate(s.elementType===s.type?_:ft(s.type,_),He);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var x=s.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(k){Le(s,s.return,k)}if(e=s.sibling,e!==null){e.return=s.return,I=e;break}I=s.return}return q=Sd,Sd=!1,q}function Sr(e,s,r){var n=s.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Sl(s,r,l)}a=a.next}while(a!==n)}}function Pn(e,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==s)}}function Cl(e){var s=e.ref;if(s!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof s=="function"?s(e):s.current=e}}function Cd(e){var s=e.alternate;s!==null&&(e.alternate=null,Cd(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&(delete s[kt],delete s[mr],delete s[Fa],delete s[Ou],delete s[zu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pd(e){return e.tag===5||e.tag===3||e.tag===4}function Td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,s,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,s?r.nodeType===8?r.parentNode.insertBefore(e,s):r.insertBefore(e,s):(r.nodeType===8?(s=r.parentNode,s.insertBefore(e,r)):(s=r,s.appendChild(e)),r=r._reactRootContainer,r!=null||s.onclick!==null||(s.onclick=rn));else if(n!==4&&(e=e.child,e!==null))for(Pl(e,s,r),e=e.sibling;e!==null;)Pl(e,s,r),e=e.sibling}function Tl(e,s,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,s?r.insertBefore(e,s):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Tl(e,s,r),e=e.sibling;e!==null;)Tl(e,s,r),e=e.sibling}var We=null,yt=!1;function Jt(e,s,r){for(r=r.child;r!==null;)Ed(e,s,r),r=r.sibling}function Ed(e,s,r){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(qr,r)}catch{}switch(r.tag){case 5:Je||Os(r,s);case 6:var n=We,a=yt;We=null,Jt(e,s,r),We=n,yt=a,We!==null&&(yt?(e=We,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):We.removeChild(r.stateNode));break;case 18:We!==null&&(yt?(e=We,r=r.stateNode,e.nodeType===8?Ra(e.parentNode,r):e.nodeType===1&&Ra(e,r),rr(e)):Ra(We,r.stateNode));break;case 4:n=We,a=yt,We=r.stateNode.containerInfo,yt=!0,Jt(e,s,r),We=n,yt=a;break;case 0:case 11:case 14:case 15:if(!Je&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&Sl(r,s,o),a=a.next}while(a!==n)}Jt(e,s,r);break;case 1:if(!Je&&(Os(r,s),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(d){Le(r,s,d)}Jt(e,s,r);break;case 21:Jt(e,s,r);break;case 22:r.mode&1?(Je=(n=Je)||r.memoizedState!==null,Jt(e,s,r),Je=n):Jt(e,s,r);break;default:Jt(e,s,r)}}function $d(e){var s=e.updateQueue;if(s!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new ep),s.forEach(function(n){var a=cp.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function bt(e,s){var r=s.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var l=e,o=s,d=o;e:for(;d!==null;){switch(d.tag){case 5:We=d.stateNode,yt=!1;break e;case 3:We=d.stateNode.containerInfo,yt=!0;break e;case 4:We=d.stateNode.containerInfo,yt=!0;break e}d=d.return}if(We===null)throw Error(p(160));Ed(l,o,a),We=null,yt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(g){Le(a,s,g)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Md(s,e),s=s.sibling}function Md(e,s){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(s,e),Ct(e),n&4){try{Sr(3,e,e.return),Pn(3,e)}catch(_){Le(e,e.return,_)}try{Sr(5,e,e.return)}catch(_){Le(e,e.return,_)}}break;case 1:bt(s,e),Ct(e),n&512&&r!==null&&Os(r,r.return);break;case 5:if(bt(s,e),Ct(e),n&512&&r!==null&&Os(r,r.return),e.flags&32){var a=e.stateNode;try{Vs(a,"")}catch(_){Le(e,e.return,_)}}if(n&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=r!==null?r.memoizedProps:l,d=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&no(a,l),aa(d,o);var g=aa(d,l);for(o=0;o<c.length;o+=2){var w=c[o],j=c[o+1];w==="style"?ho(a,j):w==="dangerouslySetInnerHTML"?uo(a,j):w==="children"?Vs(a,j):de(a,w,j,g)}switch(d){case"input":ea(a,l);break;case"textarea":oo(a,l);break;case"select":var b=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var $=l.value;$!=null?gs(a,!!l.multiple,$,!1):b!==!!l.multiple&&(l.defaultValue!=null?gs(a,!!l.multiple,l.defaultValue,!0):gs(a,!!l.multiple,l.multiple?[]:"",!1))}a[mr]=l}catch(_){Le(e,e.return,_)}}break;case 6:if(bt(s,e),Ct(e),n&4){if(e.stateNode===null)throw Error(p(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(_){Le(e,e.return,_)}}break;case 3:if(bt(s,e),Ct(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{rr(s.containerInfo)}catch(_){Le(e,e.return,_)}break;case 4:bt(s,e),Ct(e);break;case 13:bt(s,e),Ct(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Ml=De())),n&4&&$d(e);break;case 22:if(w=r!==null&&r.memoizedState!==null,e.mode&1?(Je=(g=Je)||w,bt(s,e),Je=g):bt(s,e),Ct(e),n&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!w&&(e.mode&1)!==0)for(I=e,w=e.child;w!==null;){for(j=I=w;I!==null;){switch(b=I,$=b.child,b.tag){case 0:case 11:case 14:case 15:Sr(4,b,b.return);break;case 1:Os(b,b.return);var q=b.stateNode;if(typeof q.componentWillUnmount=="function"){n=b,r=b.return;try{s=n,q.props=s.memoizedProps,q.state=s.memoizedState,q.componentWillUnmount()}catch(_){Le(n,r,_)}}break;case 5:Os(b,b.return);break;case 22:if(b.memoizedState!==null){Dd(j);continue}}$!==null?($.return=b,I=$):Dd(j)}w=w.sibling}e:for(w=null,j=e;;){if(j.tag===5){if(w===null){w=j;try{a=j.stateNode,g?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=j.stateNode,c=j.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,d.style.display=po("display",o))}catch(_){Le(e,e.return,_)}}}else if(j.tag===6){if(w===null)try{j.stateNode.nodeValue=g?"":j.memoizedProps}catch(_){Le(e,e.return,_)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;w===j&&(w=null),j=j.return}w===j&&(w=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:bt(s,e),Ct(e),n&4&&$d(e);break;case 21:break;default:bt(s,e),Ct(e)}}function Ct(e){var s=e.flags;if(s&2){try{e:{for(var r=e.return;r!==null;){if(Pd(r)){var n=r;break e}r=r.return}throw Error(p(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Vs(a,""),n.flags&=-33);var l=Td(e);Tl(e,l,a);break;case 3:case 4:var o=n.stateNode.containerInfo,d=Td(e);Pl(e,d,o);break;default:throw Error(p(161))}}catch(c){Le(e,e.return,c)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function sp(e,s,r){I=e,Ad(e)}function Ad(e,s,r){for(var n=(e.mode&1)!==0;I!==null;){var a=I,l=a.child;if(a.tag===22&&n){var o=a.memoizedState!==null||Cn;if(!o){var d=a.alternate,c=d!==null&&d.memoizedState!==null||Je;d=Cn;var g=Je;if(Cn=o,(Je=c)&&!g)for(I=a;I!==null;)o=I,c=o.child,o.tag===22&&o.memoizedState!==null?Hd(a):c!==null?(c.return=o,I=c):Hd(a);for(;l!==null;)I=l,Ad(l),l=l.sibling;I=a,Cn=d,Je=g}Ld(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,I=l):Ld(e)}}function Ld(e){for(;I!==null;){var s=I;if((s.flags&8772)!==0){var r=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Je||Pn(5,s);break;case 1:var n=s.stateNode;if(s.flags&4&&!Je)if(r===null)n.componentDidMount();else{var a=s.elementType===s.type?r.memoizedProps:ft(s.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=s.updateQueue;l!==null&&Di(s,l,n);break;case 3:var o=s.updateQueue;if(o!==null){if(r=null,s.child!==null)switch(s.child.tag){case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}Di(s,o,r)}break;case 5:var d=s.stateNode;if(r===null&&s.flags&4){r=d;var c=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var g=s.alternate;if(g!==null){var w=g.memoizedState;if(w!==null){var j=w.dehydrated;j!==null&&rr(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}Je||s.flags&512&&Cl(s)}catch(b){Le(s,s.return,b)}}if(s===e){I=null;break}if(r=s.sibling,r!==null){r.return=s.return,I=r;break}I=s.return}}function Dd(e){for(;I!==null;){var s=I;if(s===e){I=null;break}var r=s.sibling;if(r!==null){r.return=s.return,I=r;break}I=s.return}}function Hd(e){for(;I!==null;){var s=I;try{switch(s.tag){case 0:case 11:case 15:var r=s.return;try{Pn(4,s)}catch(c){Le(s,r,c)}break;case 1:var n=s.stateNode;if(typeof n.componentDidMount=="function"){var a=s.return;try{n.componentDidMount()}catch(c){Le(s,a,c)}}var l=s.return;try{Cl(s)}catch(c){Le(s,l,c)}break;case 5:var o=s.return;try{Cl(s)}catch(c){Le(s,o,c)}}}catch(c){Le(s,s.return,c)}if(s===e){I=null;break}var d=s.sibling;if(d!==null){d.return=s.return,I=d;break}I=s.return}}var rp=Math.ceil,Tn=se.ReactCurrentDispatcher,El=se.ReactCurrentOwner,pt=se.ReactCurrentBatchConfig,ue=0,_e=null,Ie=null,Be=0,ot=0,zs=Wt(0),ze=0,Cr=null,cs=0,En=0,$l=0,Pr=null,et=null,Ml=0,qs=1/0,Dt=null,$n=!1,Al=null,Qt=null,Mn=!1,Gt=null,An=0,Tr=0,Ll=null,Ln=-1,Dn=0;function Ge(){return(ue&6)!==0?De():Ln!==-1?Ln:Ln=De()}function Kt(e){return(e.mode&1)===0?1:(ue&2)!==0&&Be!==0?Be&-Be:_u.transition!==null?(Dn===0&&(Dn=To()),Dn):(e=be,e!==0||(e=window.event,e=e===void 0?16:Oo(e.type)),e)}function vt(e,s,r,n){if(50<Tr)throw Tr=0,Ll=null,Error(p(185));Xs(e,r,n),((ue&2)===0||e!==_e)&&(e===_e&&((ue&2)===0&&(En|=r),ze===4&&Xt(e,Be)),tt(e,n),r===1&&ue===0&&(s.mode&1)===0&&(qs=De()+500,on&&Ut()))}function tt(e,s){var r=e.callbackNode;_c(e,s);var n=Fr(e,e===_e?Be:0);if(n===0)r!==null&&So(r),e.callbackNode=null,e.callbackPriority=0;else if(s=n&-n,e.callbackPriority!==s){if(r!=null&&So(r),s===1)e.tag===0?qu(Od.bind(null,e)):ji(Od.bind(null,e)),Hu(function(){(ue&6)===0&&Ut()}),r=null;else{switch(Eo(n)){case 1:r=pa;break;case 4:r=Co;break;case 16:r=zr;break;case 536870912:r=Po;break;default:r=zr}r=Ud(r,Id.bind(null,e))}e.callbackPriority=s,e.callbackNode=r}}function Id(e,s){if(Ln=-1,Dn=0,(ue&6)!==0)throw Error(p(327));var r=e.callbackNode;if(_s()&&e.callbackNode!==r)return null;var n=Fr(e,e===_e?Be:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||s)s=Hn(e,n);else{s=n;var a=ue;ue|=2;var l=qd();(_e!==e||Be!==s)&&(Dt=null,qs=De()+500,ps(e,s));do try{lp();break}catch(d){zd(e,d)}while(!0);Ka(),Tn.current=l,ue=a,Ie!==null?s=0:(_e=null,Be=0,s=ze)}if(s!==0){if(s===2&&(a=ha(e),a!==0&&(n=a,s=Dl(e,a))),s===1)throw r=Cr,ps(e,0),Xt(e,n),tt(e,De()),r;if(s===6)Xt(e,n);else{if(a=e.current.alternate,(n&30)===0&&!np(a)&&(s=Hn(e,n),s===2&&(l=ha(e),l!==0&&(n=l,s=Dl(e,l))),s===1))throw r=Cr,ps(e,0),Xt(e,n),tt(e,De()),r;switch(e.finishedWork=a,e.finishedLanes=n,s){case 0:case 1:throw Error(p(345));case 2:hs(e,et,Dt);break;case 3:if(Xt(e,n),(n&130023424)===n&&(s=Ml+500-De(),10<s)){if(Fr(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Ge(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=_a(hs.bind(null,e,et,Dt),s);break}hs(e,et,Dt);break;case 4:if(Xt(e,n),(n&4194240)===n)break;for(s=e.eventTimes,a=-1;0<n;){var o=31-mt(n);l=1<<o,o=s[o],o>a&&(a=o),n&=~l}if(n=a,n=De()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*rp(n/1960))-n,10<n){e.timeoutHandle=_a(hs.bind(null,e,et,Dt),n);break}hs(e,et,Dt);break;case 5:hs(e,et,Dt);break;default:throw Error(p(329))}}}return tt(e,De()),e.callbackNode===r?Id.bind(null,e):null}function Dl(e,s){var r=Pr;return e.current.memoizedState.isDehydrated&&(ps(e,s).flags|=256),e=Hn(e,s),e!==2&&(s=et,et=r,s!==null&&Hl(s)),e}function Hl(e){et===null?et=e:et.push.apply(et,e)}function np(e){for(var s=e;;){if(s.flags&16384){var r=s.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],l=a.getSnapshot;a=a.value;try{if(!xt(l(),a))return!1}catch{return!1}}}if(r=s.child,s.subtreeFlags&16384&&r!==null)r.return=s,s=r;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Xt(e,s){for(s&=~$l,s&=~En,e.suspendedLanes|=s,e.pingedLanes&=~s,e=e.expirationTimes;0<s;){var r=31-mt(s),n=1<<r;e[r]=-1,s&=~n}}function Od(e){if((ue&6)!==0)throw Error(p(327));_s();var s=Fr(e,0);if((s&1)===0)return tt(e,De()),null;var r=Hn(e,s);if(e.tag!==0&&r===2){var n=ha(e);n!==0&&(s=n,r=Dl(e,n))}if(r===1)throw r=Cr,ps(e,0),Xt(e,s),tt(e,De()),r;if(r===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=s,hs(e,et,Dt),tt(e,De()),null}function Il(e,s){var r=ue;ue|=1;try{return e(s)}finally{ue=r,ue===0&&(qs=De()+500,on&&Ut())}}function us(e){Gt!==null&&Gt.tag===0&&(ue&6)===0&&_s();var s=ue;ue|=1;var r=pt.transition,n=be;try{if(pt.transition=null,be=1,e)return e()}finally{be=n,pt.transition=r,ue=s,(ue&6)===0&&Ut()}}function Ol(){ot=zs.current,Se(zs)}function ps(e,s){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Du(r)),Ie!==null)for(r=Ie.return;r!==null;){var n=r;switch(Va(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&an();break;case 3:Hs(),Se(Ke),Se(Ue),al();break;case 5:rl(n);break;case 4:Hs();break;case 13:Se($e);break;case 19:Se($e);break;case 10:Xa(n.type._context);break;case 22:case 23:Ol()}r=r.return}if(_e=e,Ie=e=Zt(e.current,null),Be=ot=s,ze=0,Cr=null,$l=En=cs=0,et=Pr=null,os!==null){for(s=0;s<os.length;s++)if(r=os[s],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,l=r.pending;if(l!==null){var o=l.next;l.next=a,n.next=o}r.pending=n}os=null}return e}function zd(e,s){do{var r=Ie;try{if(Ka(),yn.current=jn,bn){for(var n=Me.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}bn=!1}if(ds=0,qe=Oe=Me=null,vr=!1,wr=0,El.current=null,r===null||r.return===null){ze=1,Cr=s,Ie=null;break}e:{var l=e,o=r.return,d=r,c=s;if(s=Be,d.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=c,w=d,j=w.tag;if((w.mode&1)===0&&(j===0||j===11||j===15)){var b=w.alternate;b?(w.updateQueue=b.updateQueue,w.memoizedState=b.memoizedState,w.lanes=b.lanes):(w.updateQueue=null,w.memoizedState=null)}var $=dd(o);if($!==null){$.flags&=-257,cd($,o,d,l,s),$.mode&1&&id(l,g,s),s=$,c=g;var q=s.updateQueue;if(q===null){var _=new Set;_.add(c),s.updateQueue=_}else q.add(c);break e}else{if((s&1)===0){id(l,g,s),zl();break e}c=Error(p(426))}}else if(Te&&d.mode&1){var He=dd(o);if(He!==null){(He.flags&65536)===0&&(He.flags|=256),cd(He,o,d,l,s),Qa(Is(c,d));break e}}l=c=Is(c,d),ze!==4&&(ze=2),Pr===null?Pr=[l]:Pr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,s&=-s,l.lanes|=s;var m=ld(l,c,s);Li(l,m);break e;case 1:d=c;var u=l.type,x=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Qt===null||!Qt.has(x)))){l.flags|=65536,s&=-s,l.lanes|=s;var k=od(l,d,s);Li(l,k);break e}}l=l.return}while(l!==null)}Rd(r)}catch(F){s=F,Ie===r&&r!==null&&(Ie=r=r.return);continue}break}while(!0)}function qd(){var e=Tn.current;return Tn.current=jn,e===null?jn:e}function zl(){(ze===0||ze===3||ze===2)&&(ze=4),_e===null||(cs&268435455)===0&&(En&268435455)===0||Xt(_e,Be)}function Hn(e,s){var r=ue;ue|=2;var n=qd();(_e!==e||Be!==s)&&(Dt=null,ps(e,s));do try{ap();break}catch(a){zd(e,a)}while(!0);if(Ka(),ue=r,Tn.current=n,Ie!==null)throw Error(p(261));return _e=null,Be=0,ze}function ap(){for(;Ie!==null;)_d(Ie)}function lp(){for(;Ie!==null&&!Mc();)_d(Ie)}function _d(e){var s=Bd(e.alternate,e,ot);e.memoizedProps=e.pendingProps,s===null?Rd(e):Ie=s,El.current=null}function Rd(e){var s=e;do{var r=s.alternate;if(e=s.return,(s.flags&32768)===0){if(r=Xu(r,s,ot),r!==null){Ie=r;return}}else{if(r=Zu(r,s),r!==null){r.flags&=32767,Ie=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Ie=null;return}}if(s=s.sibling,s!==null){Ie=s;return}Ie=s=e}while(s!==null);ze===0&&(ze=5)}function hs(e,s,r){var n=be,a=pt.transition;try{pt.transition=null,be=1,op(e,s,r,n)}finally{pt.transition=a,be=n}return null}function op(e,s,r,n){do _s();while(Gt!==null);if((ue&6)!==0)throw Error(p(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(Rc(e,l),e===_e&&(Ie=_e=null,Be=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Mn||(Mn=!0,Ud(zr,function(){return _s(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=pt.transition,pt.transition=null;var o=be;be=1;var d=ue;ue|=4,El.current=null,tp(e,r),Md(r,e),Pu(za),Ur=!!Oa,za=Oa=null,e.current=r,sp(r),Ac(),ue=d,be=o,pt.transition=l}else e.current=r;if(Mn&&(Mn=!1,Gt=e,An=a),l=e.pendingLanes,l===0&&(Qt=null),Hc(r.stateNode),tt(e,De()),s!==null)for(n=e.onRecoverableError,r=0;r<s.length;r++)a=s[r],n(a.value,{componentStack:a.stack,digest:a.digest});if($n)throw $n=!1,e=Al,Al=null,e;return(An&1)!==0&&e.tag!==0&&_s(),l=e.pendingLanes,(l&1)!==0?e===Ll?Tr++:(Tr=0,Ll=e):Tr=0,Ut(),null}function _s(){if(Gt!==null){var e=Eo(An),s=pt.transition,r=be;try{if(pt.transition=null,be=16>e?16:e,Gt===null)var n=!1;else{if(e=Gt,Gt=null,An=0,(ue&6)!==0)throw Error(p(331));var a=ue;for(ue|=4,I=e.current;I!==null;){var l=I,o=l.child;if((I.flags&16)!==0){var d=l.deletions;if(d!==null){for(var c=0;c<d.length;c++){var g=d[c];for(I=g;I!==null;){var w=I;switch(w.tag){case 0:case 11:case 15:Sr(8,w,l)}var j=w.child;if(j!==null)j.return=w,I=j;else for(;I!==null;){w=I;var b=w.sibling,$=w.return;if(Cd(w),w===g){I=null;break}if(b!==null){b.return=$,I=b;break}I=$}}}var q=l.alternate;if(q!==null){var _=q.child;if(_!==null){q.child=null;do{var He=_.sibling;_.sibling=null,_=He}while(_!==null)}}I=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,I=o;else e:for(;I!==null;){if(l=I,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Sr(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,I=m;break e}I=l.return}}var u=e.current;for(I=u;I!==null;){o=I;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,I=x;else e:for(o=u;I!==null;){if(d=I,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Pn(9,d)}}catch(F){Le(d,d.return,F)}if(d===o){I=null;break e}var k=d.sibling;if(k!==null){k.return=d.return,I=k;break e}I=d.return}}if(ue=a,Ut(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(qr,e)}catch{}n=!0}return n}finally{be=r,pt.transition=s}}return!1}function Fd(e,s,r){s=Is(r,s),s=ld(e,s,1),e=Yt(e,s,1),s=Ge(),e!==null&&(Xs(e,1,s),tt(e,s))}function Le(e,s,r){if(e.tag===3)Fd(e,e,r);else for(;s!==null;){if(s.tag===3){Fd(s,e,r);break}else if(s.tag===1){var n=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Qt===null||!Qt.has(n))){e=Is(r,e),e=od(s,e,1),s=Yt(s,e,1),e=Ge(),s!==null&&(Xs(s,1,e),tt(s,e));break}}s=s.return}}function ip(e,s,r){var n=e.pingCache;n!==null&&n.delete(s),s=Ge(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(Be&r)===r&&(ze===4||ze===3&&(Be&130023424)===Be&&500>De()-Ml?ps(e,0):$l|=r),tt(e,s)}function Wd(e,s){s===0&&((e.mode&1)===0?s=1:(s=Rr,Rr<<=1,(Rr&130023424)===0&&(Rr=4194304)));var r=Ge();e=Mt(e,s),e!==null&&(Xs(e,s,r),tt(e,r))}function dp(e){var s=e.memoizedState,r=0;s!==null&&(r=s.retryLane),Wd(e,r)}function cp(e,s){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(p(314))}n!==null&&n.delete(s),Wd(e,r)}var Bd;Bd=function(e,s,r){if(e!==null)if(e.memoizedProps!==s.pendingProps||Ke.current)Ze=!0;else{if((e.lanes&r)===0&&(s.flags&128)===0)return Ze=!1,Ku(e,s,r);Ze=(e.flags&131072)!==0}else Ze=!1,Te&&(s.flags&1048576)!==0&&ki(s,cn,s.index);switch(s.lanes=0,s.tag){case 2:var n=s.type;Sn(e,s),e=s.pendingProps;var a=Ts(s,Ue.current);Ds(s,r),a=il(null,s,n,e,a,r);var l=dl();return s.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xe(n)?(l=!0,ln(s)):l=!1,s.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,tl(s),a.updater=kn,s.stateNode=a,a._reactInternals=s,xl(s,n,e,r),s=bl(null,s,n,!0,l,r)):(s.tag=0,Te&&l&&Ua(s),Qe(null,s,a,r),s=s.child),s;case 16:n=s.elementType;e:{switch(Sn(e,s),e=s.pendingProps,a=n._init,n=a(n._payload),s.type=n,a=s.tag=pp(n),e=ft(n,e),a){case 0:s=yl(null,s,n,e,r);break e;case 1:s=gd(null,s,n,e,r);break e;case 11:s=ud(null,s,n,e,r);break e;case 14:s=pd(null,s,n,ft(n.type,e),r);break e}throw Error(p(306,n,""))}return s;case 0:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:ft(n,a),yl(e,s,n,a,r);case 1:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:ft(n,a),gd(e,s,n,a,r);case 3:e:{if(fd(s),e===null)throw Error(p(387));n=s.pendingProps,l=s.memoizedState,a=l.element,Ai(e,s),gn(s,n,null,r);var o=s.memoizedState;if(n=o.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},s.updateQueue.baseState=l,s.memoizedState=l,s.flags&256){a=Is(Error(p(423)),s),s=yd(e,s,n,r,a);break e}else if(n!==a){a=Is(Error(p(424)),s),s=yd(e,s,n,r,a);break e}else for(lt=Ft(s.stateNode.containerInfo.firstChild),at=s,Te=!0,gt=null,r=$i(s,null,n,r),s.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ms(),n===a){s=Lt(e,s,r);break e}Qe(e,s,n,r)}s=s.child}return s;case 5:return Hi(s),e===null&&Ja(s),n=s.type,a=s.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,qa(n,a)?o=null:l!==null&&qa(n,l)&&(s.flags|=32),xd(e,s),Qe(e,s,o,r),s.child;case 6:return e===null&&Ja(s),null;case 13:return bd(e,s,r);case 4:return sl(s,s.stateNode.containerInfo),n=s.pendingProps,e===null?s.child=As(s,null,n,r):Qe(e,s,n,r),s.child;case 11:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:ft(n,a),ud(e,s,n,a,r);case 7:return Qe(e,s,s.pendingProps,r),s.child;case 8:return Qe(e,s,s.pendingProps.children,r),s.child;case 12:return Qe(e,s,s.pendingProps.children,r),s.child;case 10:e:{if(n=s.type._context,a=s.pendingProps,l=s.memoizedProps,o=a.value,ke(hn,n._currentValue),n._currentValue=o,l!==null)if(xt(l.value,o)){if(l.children===a.children&&!Ke.current){s=Lt(e,s,r);break e}}else for(l=s.child,l!==null&&(l.return=s);l!==null;){var d=l.dependencies;if(d!==null){o=l.child;for(var c=d.firstContext;c!==null;){if(c.context===n){if(l.tag===1){c=At(-1,r&-r),c.tag=2;var g=l.updateQueue;if(g!==null){g=g.shared;var w=g.pending;w===null?c.next=c:(c.next=w.next,w.next=c),g.pending=c}}l.lanes|=r,c=l.alternate,c!==null&&(c.lanes|=r),Za(l.return,r,s),d.lanes|=r;break}c=c.next}}else if(l.tag===10)o=l.type===s.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(p(341));o.lanes|=r,d=o.alternate,d!==null&&(d.lanes|=r),Za(o,r,s),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===s){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Qe(e,s,a.children,r),s=s.child}return s;case 9:return a=s.type,n=s.pendingProps.children,Ds(s,r),a=ct(a),n=n(a),s.flags|=1,Qe(e,s,n,r),s.child;case 14:return n=s.type,a=ft(n,s.pendingProps),a=ft(n.type,a),pd(e,s,n,a,r);case 15:return hd(e,s,s.type,s.pendingProps,r);case 17:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:ft(n,a),Sn(e,s),s.tag=1,Xe(n)?(e=!0,ln(s)):e=!1,Ds(s,r),nd(s,n,a),xl(s,n,a,r),bl(null,s,n,!0,e,r);case 19:return wd(e,s,r);case 22:return md(e,s,r)}throw Error(p(156,s.tag))};function Ud(e,s){return No(e,s)}function up(e,s,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,s,r,n){return new up(e,s,r,n)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pp(e){if(typeof e=="function")return ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ne)return 11;if(e===Q)return 14}return 2}function Zt(e,s){var r=e.alternate;return r===null?(r=ht(e.tag,s,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=s,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,s=e.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function In(e,s,r,n,a,l){var o=2;if(n=e,typeof e=="function")ql(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case X:return ms(r.children,a,l,s);case D:o=8,a|=8;break;case B:return e=ht(12,r,s,a|2),e.elementType=B,e.lanes=l,e;case fe:return e=ht(13,r,s,a),e.elementType=fe,e.lanes=l,e;case Fe:return e=ht(19,r,s,a),e.elementType=Fe,e.lanes=l,e;case Ee:return On(r,a,l,s);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:o=10;break e;case ge:o=9;break e;case ne:o=11;break e;case Q:o=14;break e;case Ce:o=16,n=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return s=ht(o,r,s,a),s.elementType=e,s.type=n,s.lanes=l,s}function ms(e,s,r,n){return e=ht(7,e,n,s),e.lanes=r,e}function On(e,s,r,n){return e=ht(22,e,n,s),e.elementType=Ee,e.lanes=r,e.stateNode={isHidden:!1},e}function _l(e,s,r){return e=ht(6,e,null,s),e.lanes=r,e}function Rl(e,s,r){return s=ht(4,e.children!==null?e.children:[],e.key,s),s.lanes=r,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}function hp(e,s,r,n,a){this.tag=s,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Fl(e,s,r,n,a,l,o,d,c){return e=new hp(e,s,r,d,c),s===1?(s=1,l===!0&&(s|=8)):s=0,l=ht(3,null,null,s),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},tl(l),e}function mp(e,s,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:n==null?null:""+n,children:e,containerInfo:s,implementation:r}}function Vd(e){if(!e)return Bt;e=e._reactInternals;e:{if(ss(e)!==e||e.tag!==1)throw Error(p(170));var s=e;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xe(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(p(171))}if(e.tag===1){var r=e.type;if(Xe(r))return vi(e,r,s)}return s}function Yd(e,s,r,n,a,l,o,d,c){return e=Fl(r,n,!0,e,a,l,o,d,c),e.context=Vd(null),r=e.current,n=Ge(),a=Kt(r),l=At(n,a),l.callback=s??null,Yt(r,l,a),e.current.lanes=a,Xs(e,a,n),tt(e,n),e}function zn(e,s,r,n){var a=s.current,l=Ge(),o=Kt(a);return r=Vd(r),s.context===null?s.context=r:s.pendingContext=r,s=At(l,o),s.payload={element:e},n=n===void 0?null:n,n!==null&&(s.callback=n),e=Yt(a,s,o),e!==null&&(vt(e,a,o,l),xn(e,a,o)),o}function qn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jd(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<s?r:s}}function Wl(e,s){Jd(e,s),(e=e.alternate)&&Jd(e,s)}function xp(){return null}var Qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bl(e){this._internalRoot=e}_n.prototype.render=Bl.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(p(409));zn(e,s,null,null)},_n.prototype.unmount=Bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;us(function(){zn(null,e,null,null)}),s[Pt]=null}};function _n(e){this._internalRoot=e}_n.prototype.unstable_scheduleHydration=function(e){if(e){var s=Ao();e={blockedOn:null,target:e,priority:s};for(var r=0;r<qt.length&&s!==0&&s<qt[r].priority;r++);qt.splice(r,0,e),r===0&&Ho(e)}};function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gd(){}function gp(e,s,r,n,a){if(a){if(typeof n=="function"){var l=n;n=function(){var g=qn(o);l.call(g)}}var o=Yd(s,n,e,0,null,!1,!1,"",Gd);return e._reactRootContainer=o,e[Pt]=o.current,pr(e.nodeType===8?e.parentNode:e),us(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var d=n;n=function(){var g=qn(c);d.call(g)}}var c=Fl(e,0,!1,null,null,!1,!1,"",Gd);return e._reactRootContainer=c,e[Pt]=c.current,pr(e.nodeType===8?e.parentNode:e),us(function(){zn(s,c,r,n)}),c}function Fn(e,s,r,n,a){var l=r._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var d=a;a=function(){var c=qn(o);d.call(c)}}zn(s,o,e,a)}else o=gp(r,s,e,a,n);return qn(o)}$o=function(e){switch(e.tag){case 3:var s=e.stateNode;if(s.current.memoizedState.isDehydrated){var r=Ks(s.pendingLanes);r!==0&&(xa(s,r|1),tt(s,De()),(ue&6)===0&&(qs=De()+500,Ut()))}break;case 13:us(function(){var n=Mt(e,1);if(n!==null){var a=Ge();vt(n,e,1,a)}}),Wl(e,1)}},ga=function(e){if(e.tag===13){var s=Mt(e,134217728);if(s!==null){var r=Ge();vt(s,e,134217728,r)}Wl(e,134217728)}},Mo=function(e){if(e.tag===13){var s=Kt(e),r=Mt(e,s);if(r!==null){var n=Ge();vt(r,e,s,n)}Wl(e,s)}},Ao=function(){return be},Lo=function(e,s){var r=be;try{return be=e,s()}finally{be=r}},ia=function(e,s,r){switch(s){case"input":if(ea(e,r),s=r.name,r.type==="radio"&&s!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<r.length;s++){var n=r[s];if(n!==e&&n.form===e.form){var a=nn(n);if(!a)throw Error(p(90));so(n),ea(n,a)}}}break;case"textarea":oo(e,r);break;case"select":s=r.value,s!=null&&gs(e,!!r.multiple,s,!1)}},fo=Il,yo=us;var fp={usingClientEntryPoint:!1,Events:[xr,Cs,nn,xo,go,Il]},Er={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yp={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jo(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||xp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wn.isDisabled&&Wn.supportsFiber)try{qr=Wn.inject(yp),jt=Wn}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fp,st.createPortal=function(e,s){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ul(s))throw Error(p(200));return mp(e,s,null,r)},st.createRoot=function(e,s){if(!Ul(e))throw Error(p(299));var r=!1,n="",a=Qd;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(n=s.identifierPrefix),s.onRecoverableError!==void 0&&(a=s.onRecoverableError)),s=Fl(e,1,!1,null,null,r,!1,n,a),e[Pt]=s.current,pr(e.nodeType===8?e.parentNode:e),new Bl(s)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=jo(s),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return us(e)},st.hydrate=function(e,s,r){if(!Rn(s))throw Error(p(200));return Fn(null,e,s,!0,r)},st.hydrateRoot=function(e,s,r){if(!Ul(e))throw Error(p(405));var n=r!=null&&r.hydratedSources||null,a=!1,l="",o=Qd;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),s=Yd(s,null,e,1,r??null,a,!1,l,o),e[Pt]=s.current,pr(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[r,a]:s.mutableSourceEagerHydrationData.push(r,a);return new _n(s)},st.render=function(e,s,r){if(!Rn(s))throw Error(p(200));return Fn(null,e,s,!1,r)},st.unmountComponentAtNode=function(e){if(!Rn(e))throw Error(p(40));return e._reactRootContainer?(us(function(){Fn(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1},st.unstable_batchedUpdates=Il,st.unstable_renderSubtreeIntoContainer=function(e,s,r,n){if(!Rn(r))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return Fn(e,s,r,!1,n)},st.version="18.3.1-next-f1338f8080-20240426",st}var nc;function Tp(){if(nc)return Jl.exports;nc=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(E){console.error(E)}}return y(),Jl.exports=Pp(),Jl.exports}var ac;function Ep(){if(ac)return Bn;ac=1;var y=Tp();return Bn.createRoot=y.createRoot,Bn.hydrateRoot=y.hydrateRoot,Bn}var $p=Ep();const Mp=y=>y instanceof Error?y.message+`
`+y.stack:JSON.stringify(y,null,2);class Ap extends Np.Component{constructor(E){super(E),this.state={hasError:!1,error:null}}static getDerivedStateFromError(E){return{hasError:!0,error:E}}render(){return this.state.hasError?t.jsxs("div",{className:"p-4 border border-red-500 rounded",children:[t.jsx("h2",{className:"text-red-500",children:"Something went wrong."}),t.jsx("pre",{className:"mt-2 text-sm",children:Mp(this.state.error)})]}):this.props.children}}/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Lp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=y=>y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(y,E)=>{const p=G.forwardRef(({color:N="currentColor",size:S=24,strokeWidth:L=2,absoluteStrokeWidth:C,className:i="",children:f,...P},H)=>G.createElement("svg",{ref:H,...Lp,width:S,height:S,stroke:N,strokeWidth:C?Number(L)*24/Number(S):L,className:["lucide",`lucide-${Dp(y)}`,i].join(" "),...P},[...E.map(([ee,J])=>G.createElement(ee,J)),...Array.isArray(f)?f:[f]]));return p.displayName=`${y}`,p};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=A("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=A("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=A("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=A("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=A("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=A("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=A("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=A("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=A("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=A("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=A("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=A("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=A("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=A("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=A("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=A("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=A("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=A("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=A("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=A("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=A("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=A("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=A("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=A("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=A("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=A("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=A("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=A("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=A("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=A("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=A("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=A("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=A("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=A("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=A("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=A("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=A("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=A("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=A("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=A("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=A("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=A("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=A("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=A("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=A("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=A("MousePointer",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=A("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=A("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=A("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=A("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=A("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=A("Regex",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=A("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=A("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=A("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=A("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=A("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=A("SquareFunction",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=A("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=A("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=A("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=A("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=A("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=A("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=A("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=A("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=A("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=A("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=A("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=A("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function U({initialCode:y,language:E="html",title:p="Code Editor"}){const[N,S]=G.useState(y),[L,C]=G.useState(""),[i,f]=G.useState(!1),[P,H]=G.useState(!1),[ee,J]=G.useState("code");G.useEffect(()=>{S(y)},[y]);const ce=()=>{if(f(!0),J("preview"),E==="javascript")try{const R=[],Ae={log:(...de)=>R.push(de.map(String).join(" ")),error:(...de)=>R.push(`Error: ${de.map(String).join(" ")}`),warn:(...de)=>R.push(`Warning: ${de.map(String).join(" ")}`)};new Function("console",N)(Ae),setTimeout(()=>{C(R.length>0?R.join(`
`):"Code executed successfully! (no output)"),f(!1)},100)}catch(R){setTimeout(()=>{C(`Error: ${R instanceof Error?R.message:String(R)}`),f(!1)},100)}else setTimeout(()=>{C(N),f(!1)},100)},pe=()=>{S(y),C("")},ae=()=>{navigator.clipboard.writeText(N),H(!0),setTimeout(()=>H(!1),2e3)};return t.jsxs("div",{className:"rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700",children:[t.jsxs("div",{className:"bg-gray-800 dark:bg-gray-900 px-4 py-2 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsxs("div",{className:"flex gap-1.5",children:[t.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),t.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),t.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"})]}),t.jsx("span",{className:"text-gray-400 text-sm ml-2",children:p})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>J("code"),className:`p-2 rounded-lg transition-colors ${ee==="code"?"bg-gray-700 text-white":"text-gray-400 hover:text-white"}`,children:t.jsx(Gn,{className:"w-4 h-4"})}),t.jsx("button",{onClick:()=>J("preview"),className:`p-2 rounded-lg transition-colors ${ee==="preview"?"bg-gray-700 text-white":"text-gray-400 hover:text-white"}`,children:t.jsx(xs,{className:"w-4 h-4"})}),t.jsx("button",{onClick:ae,className:"p-2 rounded-lg text-gray-400 hover:text-white transition-colors",children:P?t.jsx(zp,{className:"w-4 h-4 text-green-500"}):t.jsx(Wp,{className:"w-4 h-4"})}),t.jsx("button",{onClick:pe,className:"p-2 rounded-lg text-gray-400 hover:text-white transition-colors",children:t.jsx(bc,{className:"w-4 h-4"})}),t.jsxs("button",{onClick:ce,disabled:i,className:"flex items-center gap-2 px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50",children:[t.jsx(Kn,{className:"w-4 h-4"}),"Run"]})]})]}),ee==="code"?t.jsx("textarea",{value:N,onChange:R=>S(R.target.value),className:"w-full h-64 md:h-80 p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none",spellCheck:!1}):t.jsx("div",{className:"h-64 md:h-80 bg-white dark:bg-gray-800 p-4 overflow-auto",children:E==="html"?t.jsx("iframe",{srcDoc:N,className:"w-full h-full border-0",sandbox:"allow-scripts",title:"Preview"}):t.jsxs("div",{className:"font-mono text-sm",children:[t.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-2",children:[t.jsx(Jn,{className:"w-4 h-4"}),t.jsx("span",{children:"Output:"})]}),t.jsx("pre",{className:"text-gray-800 dark:text-gray-200 whitespace-pre-wrap",children:L||'Click "Run" to execute your code...'})]})}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-700 px-4 py-2 flex items-center justify-between text-sm",children:[t.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:E==="html"?"HTML + CSS + JavaScript":"JavaScript"}),t.jsxs("span",{className:"text-gray-500 dark:text-gray-400",children:[N.length," characters"]})]})]})}function ts({type:y,content:E,title:p,description:N}){const[S,L]=G.useState(!1);return t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden",children:[t.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-white",children:p}),N&&t.jsx("p",{className:"text-sm text-white/80 mt-1",children:N})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[y==="animation"&&t.jsx("button",{onClick:()=>L(!S),className:"p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors",children:S?t.jsx(sh,{className:"w-5 h-5 text-white"}):t.jsx(Kn,{className:"w-5 h-5 text-white"})}),t.jsx("button",{onClick:()=>L(!1),className:"p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors",children:t.jsx(bc,{className:"w-5 h-5 text-white"})})]})]})}),t.jsx("div",{className:`p-6 ${y==="animation"&&S?"animate-pulse":""}`,children:E}),t.jsxs("div",{className:"px-6 py-3 bg-gray-50 dark:bg-gray-700/50 flex items-center justify-between",children:[t.jsxs("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide",children:[y," Demo"]}),t.jsx(Ht,{className:"w-4 h-4 text-gray-400"})]})]})}function z({question:y,hint:E,solution:p,validationCode:N,acceptedAnswers:S,requiredKeywords:L,onComplete:C}){const[i,f]=G.useState(""),[P,H]=G.useState(!1),[ee,J]=G.useState(!1),[ce,pe]=G.useState(null),ae=X=>{let D=X.replace(/\/\/.*$/gm,"");return D=D.replace(/#.*$/gm,""),D=D.replace(/\/\*[\s\S]*?\*\//g,""),D=D.replace(/<!--[\s\S]*?-->/g,""),D},R=X=>X.trim().toLowerCase().replace(/\s+/g," ").replace(/[.,!?;:'"()[\]{}]/g,"").replace(/<[^>]*>/g,"").replace(/[']/g,""),Ae=(X,D)=>{const B=X.length,te=D.length,ge=Array(B+1).fill(null).map(()=>Array(te+1).fill(0));for(let ne=0;ne<=B;ne++)ge[ne][0]=ne;for(let ne=0;ne<=te;ne++)ge[0][ne]=ne;for(let ne=1;ne<=B;ne++)for(let fe=1;fe<=te;fe++)X[ne-1]===D[fe-1]?ge[ne][fe]=ge[ne-1][fe-1]:ge[ne][fe]=Math.min(ge[ne-1][fe-1],ge[ne-1][fe],ge[ne][fe-1])+1;return ge[B][te]},ve=(X,D)=>{if(X===D)return 100;if(X.length===0||D.length===0)return 0;const B=Ae(X,D),te=Math.max(X.length,D.length);return Math.round((1-B/te)*100)},de=(X,D)=>{if(D.length===0)return!0;const te=R(X).split(" ").filter(fe=>fe.length>0);let ge=0;for(const fe of D){const Fe=R(fe);let Q=!1;for(const Ce of te)if(Ce===Fe||Ce.includes(Fe)||Fe.includes(Ce)){Q=!0;break}Q&&ge++}return ge/D.length*100>=75},se=(X,D)=>{const B=R(X);for(const te of D){const ge=R(te);if(B===ge||ve(B,ge)>=80)return!0}return!1},re=(X,D)=>{try{const te=ae(X).replace(/"/g,'\\"').replace(/`/g,"\\`"),ge=D.replace("{answer}",`"${te}"`);return new Function(ge)()}catch{return!1}},we=()=>{if(!i.trim()){pe("incorrect");return}let X=!1;N?X=re(i,N):S&&S.length>0?X=se(i,S):L&&L.length>0?X=de(i,L):p?X=se(i,[p]):X=!1,pe(X?"correct":"incorrect"),X&&(C==null||C())};return t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden",children:[t.jsx("div",{className:"bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center",children:t.jsx(Gn,{className:"w-6 h-6 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-white",children:"Practice Exercise"}),t.jsx("p",{className:"text-sm text-white/80",children:"Test your understanding"})]})]})}),t.jsxs("div",{className:"p-6 space-y-6",children:[t.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:t.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:y})}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Your Answer"}),t.jsx("textarea",{value:i,onChange:X=>f(X.target.value),className:"w-full p-4 bg-gray-900 text-gray-100 font-mono text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none",rows:4,placeholder:"Write your code or answer here..."})]}),ce&&t.jsx("div",{className:`p-4 rounded-xl ${ce==="correct"?"bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200":"bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"}`,children:t.jsxs("div",{className:"flex items-center gap-3",children:[ce==="correct"?t.jsx(M,{className:"w-6 h-6"}):t.jsx(Xl,{className:"w-6 h-6"}),t.jsxs("div",{children:[t.jsx("p",{className:"font-bold",children:ce==="correct"?"Correct!":"Not quite right"}),t.jsx("p",{className:"text-sm opacity-80",children:ce==="correct"?"Great job! Move on to the next topic.":"Try again or check the hint for help."})]})]})}),t.jsxs("div",{className:"flex flex-wrap gap-3",children:[t.jsxs("button",{onClick:we,className:"flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity",children:[t.jsx(M,{className:"w-5 h-5"}),"Check Answer"]}),E&&t.jsxs("button",{onClick:()=>H(!P),className:"flex items-center gap-2 px-4 py-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 font-medium rounded-xl hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors",children:[t.jsx(oc,{className:"w-5 h-5"}),P?"Hide Hint":"Show Hint"]}),p&&t.jsxs("button",{onClick:()=>J(!ee),className:"flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",children:[t.jsx(xs,{className:"w-5 h-5"}),ee?"Hide Solution":"Show Solution"]})]}),P&&E&&t.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4",children:t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx(oc,{className:"w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5"}),t.jsxs("div",{children:[t.jsx("p",{className:"font-medium text-yellow-800 dark:text-yellow-200 mb-1",children:"Hint"}),t.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm",children:E})]})]})}),ee&&p&&t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4",children:[t.jsx("p",{className:"font-medium text-purple-800 dark:text-purple-200 mb-2",children:"Solution"}),t.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto",children:p})]})]})]})}function W({questions:y,title:E="Knowledge Quiz",onComplete:p}){const[N,S]=G.useState(0),[L,C]=G.useState(null),[i,f]=G.useState(!1),[P,H]=G.useState(0),[ee,J]=G.useState(!1),[ce,pe]=G.useState([]),ae=se=>{if(L!==null)return;C(se),f(!0);const re=[...ce,se];pe(re),se===y[N].correctAnswer&&H(P+1)},R=()=>{N<y.length-1?(S(N+1),C(null),f(!1)):(J(!0),p==null||p(P+(L===y[N].correctAnswer,0)))},Ae=()=>{S(0),C(null),f(!1),H(0),J(!1),pe([])},ve=Math.round(P/y.length*100);if(ee)return t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden",children:[t.jsxs("div",{className:`px-6 py-8 text-center ${ve>=80?"bg-gradient-to-r from-green-500 to-emerald-600":ve>=50?"bg-gradient-to-r from-yellow-500 to-orange-500":"bg-gradient-to-r from-red-500 to-pink-600"}`,children:[t.jsx(Ar,{className:"w-16 h-16 text-white mx-auto mb-4"}),t.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Quiz Complete!"}),t.jsxs("p",{className:"text-white/90 text-lg",children:["You scored ",P," out of ",y.length]})]}),t.jsxs("div",{className:"p-6 space-y-6",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"inline-flex items-center justify-center w-32 h-32 rounded-full bg-gray-100 dark:bg-gray-700 mb-4",children:t.jsxs("span",{className:`text-4xl font-bold ${ve>=80?"text-green-600":ve>=50?"text-yellow-600":"text-red-600"}`,children:[ve,"%"]})}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:ve>=80?"Excellent work!":ve>=50?"Good effort!":"Keep practicing!"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"font-medium text-gray-800 dark:text-white",children:"Question Review"}),y.map((se,re)=>t.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-lg ${ce[re]===se.correctAnswer?"bg-green-50 dark:bg-green-900/20":"bg-red-50 dark:bg-red-900/20"}`,children:[ce[re]===se.correctAnswer?t.jsx(M,{className:"w-5 h-5 text-green-600"}):t.jsx(Xl,{className:"w-5 h-5 text-red-600"}),t.jsxs("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Question ",re+1,": ",ce[re]===se.correctAnswer?"Correct":"Incorrect"]})]},re))]}),t.jsx("button",{onClick:Ae,className:"w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity",children:"Try Again"})]})]});const de=y[N];return t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden",children:[t.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(cc,{className:"w-8 h-8 text-white"}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-white",children:E}),t.jsx("p",{className:"text-sm text-white/80",children:"Test your knowledge"})]})]}),t.jsxs("div",{className:"text-white text-right",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Progress"}),t.jsxs("p",{className:"font-bold",children:[N+1,"/",y.length]})]})]}),t.jsx("div",{className:"mt-4 bg-white/20 rounded-full h-2",children:t.jsx("div",{className:"bg-white rounded-full h-2 transition-all duration-300",style:{width:`${(N+1)/y.length*100}%`}})})]}),t.jsxs("div",{className:"p-6 space-y-6",children:[t.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:t.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium text-lg",children:de.question})}),t.jsx("div",{className:"space-y-3",children:de.options.map((se,re)=>{let we="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600";return L!==null&&(re===de.correctAnswer?we="bg-green-100 dark:bg-green-900/30 border-green-500":re===L&&(we="bg-red-100 dark:bg-red-900/30 border-red-500")),t.jsx("button",{onClick:()=>ae(re),disabled:L!==null,className:`w-full p-4 rounded-xl border-2 text-left transition-all ${we}
                  ${L===null?"border-transparent":"border-2"}
                  ${L!==null&&re!==de.correctAnswer&&re!==L?"opacity-50":""}
                `,children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${L!==null?re===de.correctAnswer?"bg-green-500 text-white":re===L?"bg-red-500 text-white":"bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300":"bg-blue-500 text-white"}`,children:String.fromCharCode(65+re)}),t.jsx("span",{className:"text-gray-800 dark:text-gray-200",children:se}),L!==null&&re===de.correctAnswer&&t.jsx(M,{className:"w-5 h-5 text-green-600 ml-auto"}),L!==null&&re===L&&re!==de.correctAnswer&&t.jsx(Xl,{className:"w-5 h-5 text-red-600 ml-auto"})]})},re)})}),i&&de.explanation&&t.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4",children:t.jsxs("p",{className:"text-blue-800 dark:text-blue-200 text-sm",children:[t.jsx("strong",{children:"Explanation:"})," ",de.explanation]})}),L!==null&&t.jsx("button",{onClick:R,className:"w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity",children:N<y.length-1?t.jsxs(t.Fragment,{children:["Next Question",t.jsx(Ht,{className:"w-5 h-5"})]}):t.jsxs(t.Fragment,{children:["See Results",t.jsx(Ar,{className:"w-5 h-5"})]})})]})]})}function uh({progress:y,updateProgress:E}){const[p,N]=G.useState("internet-basics"),S=i=>{E("chapter1",i,!0)},L={"internet-basics":{id:"internet-basics",title:"What is the Internet?",icon:t.jsx(Ws,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Understanding the Internet"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["The ",t.jsx("strong",{children:"Internet"}),' (sometimes called "the Net") is a ',t.jsx("strong",{children:"global system of interconnected computer networks"})," that use the standard Internet protocol suite (TCP/IP) to link billions of devices worldwide."]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Key Internet Facts:"}),t.jsxs("ul",{className:"space-y-2 text-blue-700 dark:text-blue-300",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"It's a network of networks - millions of private, public, academic, business, and government networks"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Linked by a broad array of electronic, wireless, and optical networking technologies"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"No centralized governance - each network sets its own policies"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Internet Services"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx(Fs,{className:"w-4 h-4"})," World Wide Web"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"The most widely used part of the Internet - a system of information resources accessed through hypertext"})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx(wt,{className:"w-4 h-4"})," Communication"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Email, VoIP, Video Conferencing, IRC, and more"})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx(Zl,{className:"w-4 h-4"})," File Transfer"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"FTP, Gopher, and other protocols for sharing files"})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx(eo,{className:"w-4 h-4"})," Directory Services"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"DNS (Domain Name System), LDAP for network management"})]})]})]}),t.jsx(ts,{type:"diagram",title:"How the Internet Works",description:"Visual representation of internet connectivity",content:t.jsxs("div",{className:"flex flex-col items-center gap-6",children:[t.jsxs("div",{className:"flex items-center justify-center gap-4 flex-wrap",children:[t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-xl p-4 text-center w-32",children:[t.jsx(Fs,{className:"w-8 h-8 text-blue-600 mx-auto mb-2"}),t.jsx("p",{className:"text-sm font-medium text-blue-800 dark:text-blue-200",children:"Your Computer"})]}),t.jsx("div",{className:"text-2xl text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-green-100 dark:bg-green-900/30 rounded-xl p-4 text-center w-32",children:[t.jsx(wt,{className:"w-8 h-8 text-green-600 mx-auto mb-2"}),t.jsx("p",{className:"text-sm font-medium text-green-800 dark:text-green-200",children:"Router"})]}),t.jsx("div",{className:"text-2xl text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-purple-100 dark:bg-purple-900/30 rounded-xl p-4 text-center w-32",children:[t.jsx(Ws,{className:"w-8 h-8 text-purple-600 mx-auto mb-2"}),t.jsx("p",{className:"text-sm font-medium text-purple-800 dark:text-purple-200",children:"Internet"})]}),t.jsx("div",{className:"text-2xl text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-orange-100 dark:bg-orange-900/30 rounded-xl p-4 text-center w-32",children:[t.jsx(wt,{className:"w-8 h-8 text-orange-600 mx-auto mb-2"}),t.jsx("p",{className:"text-sm font-medium text-orange-800 dark:text-orange-200",children:"Web Server"})]})]}),t.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 text-center max-w-md",children:"Data travels through multiple networks using standardized protocols until it reaches the destination server"})]})})]}),exercise:t.jsx(z,{question:"What is the main protocol suite that the Internet uses for communication?",hint:"Think about the two main protocols that work together: one for transport and one for addressing",solution:"TCP/IP (Transmission Control Protocol/Internet Protocol)"}),quiz:{questions:[{question:"What does the Internet use as its standard protocol suite?",options:["HTTP/HTTPS","TCP/IP","FTP/SMTP","All of the above"],correctAnswer:1,explanation:"TCP/IP (Transmission Control Protocol/Internet Protocol) is the foundational protocol suite of the Internet."},{question:"Which organization directs the technical standards of the Internet?",options:["ICANN","IETF","W3C","Both ICANN and IETF"],correctAnswer:3,explanation:"ICANN manages domain names while IETF standardizes core protocols like IPv4/IPv6."}]}},"www-basics":{id:"www-basics",title:"World Wide Web (WWW)",icon:t.jsx(Ws,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"World Wide Web"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["The ",t.jsx("strong",{children:"World Wide Web (WWW)"})," was created in 1991 by ",t.jsx("strong",{children:"Tim Berners-Lee"})," and his team. It introduced ",t.jsx("strong",{children:"hypertext"})," - a method of connecting content through hyperlinks that revolutionized information sharing."]}),t.jsxs("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"Key Innovation: Hypertext"}),t.jsx("p",{className:"text-white/90",children:'Hypertext allows you to click on words or phrases to instantly navigate to related content, creating a "web" of interconnected documents across the globe.'})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"How Web Browsing Works"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0",children:"1"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h5",{className:"font-bold text-gray-800 dark:text-white",children:"DNS Lookup"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Your browser asks the DNS server to convert a domain name (like google.com) into an IP address"})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0",children:"2"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h5",{className:"font-bold text-gray-800 dark:text-white",children:"TCP/IP Connection"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Your browser opens a TCP connection to the web server (typically on port 80)"})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0",children:"3"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h5",{className:"font-bold text-gray-800 dark:text-white",children:"HTTP Request"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Browser sends an HTTP request (like GET /index.html) to fetch the page"})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0",children:"4"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h5",{className:"font-bold text-gray-800 dark:text-white",children:"HTTP Response"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Server responds with HTML, CSS, JavaScript, and other resources"})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0",children:"5"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h5",{className:"font-bold text-gray-800 dark:text-white",children:"Rendering"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Browser renders the content on screen"})]})]})]})]}),t.jsx(ts,{type:"diagram",title:"Web Request Flow",description:"See how a web page is loaded step by step",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between gap-2",children:[t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx(Fs,{className:"w-6 h-6 text-blue-600 mx-auto mb-1"}),t.jsx("p",{className:"text-xs font-medium text-blue-800 dark:text-blue-200",children:"Browser"})]}),t.jsx("div",{className:"text-blue-500 font-mono text-sm",children:"HTTP"}),t.jsx("div",{className:"bg-gray-200 dark:bg-gray-600 rounded-full px-2 py-1 text-xs",children:"→"})]}),t.jsxs("div",{className:"flex items-center justify-between gap-2",children:[t.jsxs("div",{className:"bg-yellow-100 dark:bg-yellow-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx(wt,{className:"w-6 h-6 text-yellow-600 mx-auto mb-1"}),t.jsx("p",{className:"text-xs font-medium text-yellow-800 dark:text-yellow-200",children:"DNS"})]}),t.jsx("div",{className:"text-yellow-500 font-mono text-sm",children:"IP"}),t.jsx("div",{className:"bg-gray-200 dark:bg-gray-600 rounded-full px-2 py-1 text-xs",children:"↓"})]}),t.jsxs("div",{className:"flex items-center justify-between gap-2",children:[t.jsxs("div",{className:"bg-green-100 dark:bg-green-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx(wt,{className:"w-6 h-6 text-green-600 mx-auto mb-1"}),t.jsx("p",{className:"text-xs font-medium text-green-800 dark:text-green-200",children:"Web Server"})]}),t.jsx("div",{className:"text-green-500 font-mono text-sm",children:"HTML"}),t.jsx("div",{className:"bg-gray-200 dark:bg-gray-600 rounded-full px-2 py-1 text-xs",children:"←"})]})]})}),t.jsx(W,{questions:[{question:"Who invented the World Wide Web in 1991?",options:["Bill Gates","Tim Berners-Lee","Steve Jobs","Vint Cerf"],correctAnswer:1,explanation:"Tim Berners-Lee invented the World Wide Web in 1991, introducing hypertext to connect documents through hyperlinks."},{question:"What is the main purpose of DNS in web browsing?",options:["To encrypt data between browser and server","To translate domain names to IP addresses","To store website files","To manage user sessions"],correctAnswer:1,explanation:"DNS (Domain Name System) acts like the internet's phonebook, translating human-readable domain names into IP addresses that computers use."},{question:"In what order does a browser load a webpage?",options:["HTTP Request → DNS Lookup → Rendering → TCP Connection","DNS Lookup → TCP Connection → HTTP Request → Rendering","TCP Connection → HTTP Request → DNS Lookup → Rendering","Rendering → HTTP Request → DNS Lookup → TCP Connection"],correctAnswer:1,explanation:"The correct order is: DNS Lookup (resolve domain), TCP Connection (connect to server), HTTP Request (ask for page), then Rendering (display content)."}]}),t.jsx(z,{question:"Explain what happens when you type 'https://www.google.com' in your browser. Walk through the complete process from DNS lookup to displaying the page.",hint:"Think about the steps: DNS resolution, TCP connection, HTTP request, server processing, HTTP response, and browser rendering",solution:"1. Browser checks local cache for IP address\\n2. If not found, browser queries DNS server for www.google.com\\n3. DNS returns IP address (e.g., 142.250.185.206)\\n4. Browser establishes TCP connection on port 443 (HTTPS)\\n5. Browser sends HTTP GET request for the homepage\\n6. Server processes request and returns HTML, CSS, JS files\\n7. Browser renders the content and displays the page",acceptedAnswers:["dns lookup, ip address, tcp connection, http request, server response, browser rendering","browser checks cache, dns query, ip address returned, tcp connection established, http get request, server processes, html response, browser renders page"]})]})},tcpip:{id:"tcpip",title:"TCP/IP Protocol Suite",icon:t.jsx(eo,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"TCP/IP Protocol Suite"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"TCP/IP"})," is a set of protocols developed to allow cooperating computers to share resources across a network. It's the foundational technology of the Internet."]}),t.jsxs("div",{className:"bg-gradient-to-br from-green-400 to-blue-500 rounded-xl p-6 mb-6 text-white",children:[t.jsx("h4",{className:"font-bold mb-2",children:"TCP vs IP"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold mb-1",children:"IP (Internet Protocol)"}),t.jsx("p",{className:"text-sm",children:"Network Layer - Provides addressing and routing"})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold mb-1",children:"TCP (Transmission Control)"}),t.jsx("p",{className:"text-sm",children:"Transport Layer - Ensures reliable delivery"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"TCP/IP Layers"}),t.jsx("div",{className:"space-y-3",children:[{layer:"Application Layer",protocols:"HTTP, FTP, SMTP, DNS, Telnet",color:"red"},{layer:"Transport Layer",protocols:"TCP, UDP",color:"blue"},{layer:"Internet Layer",protocols:"IP, ICMP, ARP",color:"green"},{layer:"Network Interface",protocols:"Ethernet, Wi-Fi, PPP",color:"purple"}].map((i,f)=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-32 p-3 bg-${i.color}-100 dark:bg-${i.color}-900/30 rounded-lg`,children:t.jsx("p",{className:`text-sm font-bold text-${i.color}-800 dark:text-${i.color}-200`,children:i.layer})}),t.jsx("div",{className:"flex-1 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg",children:t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.protocols})})]},f))})]}),t.jsx(ts,{type:"diagram",title:"TCP/IP vs OSI Model",description:"Compare network protocol layers",content:t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h5",{className:"font-bold text-center text-gray-800 dark:text-white mb-2",children:"OSI Model"}),["Application","Presentation","Session","Transport","Network","Data Link","Physical"].map((i,f)=>t.jsx("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 text-center",children:t.jsx("p",{className:"text-xs font-medium text-blue-800 dark:text-blue-200",children:i})},f))]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h5",{className:"font-bold text-center text-gray-800 dark:text-white mb-2",children:"TCP/IP Model"}),["Application","Transport","Internet","Network Interface"].map((i,f)=>t.jsx("div",{className:"bg-green-100 dark:bg-green-900/30 rounded-lg p-2 text-center",children:t.jsx("p",{className:"text-xs font-medium text-green-800 dark:text-green-200",children:i})},f))]})]})}),t.jsx(W,{questions:[{question:"Which layer of the TCP/IP model handles IP addresses and routing?",options:["Application Layer","Transport Layer","Internet Layer","Network Interface Layer"],correctAnswer:2,explanation:"The Internet Layer (equivalent to Network Layer in OSI) is responsible for IP addressing and routing packets across networks."},{question:"What is the main difference between TCP and UDP?",options:["TCP is faster than UDP","TCP guarantees delivery, UDP does not","TCP is used for emails, UDP for websites","There is no difference"],correctAnswer:1,explanation:"TCP (Transmission Control Protocol) provides reliable, ordered delivery with error checking. UDP (User Datagram Protocol) is faster but doesn't guarantee delivery or order."},{question:"Which HTTP protocol operates at the Application Layer of TCP/IP?",options:["IP","TCP","HTTP","Ethernet"],correctAnswer:2,explanation:"HTTP (Hypertext Transfer Protocol) operates at the Application Layer, along with other application protocols like FTP, SMTP, and DNS."}]}),t.jsx(z,{question:"If you're building a video streaming application where speed is critical but some data loss is acceptable, which protocol would you choose between TCP and UDP? Explain your reasoning.",hint:"Think about the characteristics: reliability vs speed, guaranteed delivery vs faster transmission",solution:"UDP would be better for video streaming because:\\n1. UDP is faster - it doesn't wait for acknowledgments or retransmit lost packets\\n2. For video streaming, slightly lost data (a few dropped frames) is acceptable\\n3. TCP's reliability features would add latency that degrades the streaming experience\\n4. Real-time protocols like RTSP, RTMP use UDP under the hood for this reason",acceptedAnswers:["udp is faster and better for video streaming because speed is critical and some data loss is acceptable tcp would add latency","i would choose udp because it is connectionless and faster tcp adds latency and is for reliable delivery video streaming needs speed","udp because it provides faster transmission without guaranteed delivery which is acceptable for video streaming tcp reliability adds latency"]})]})},http:{id:"http",title:"HTTP Protocol",icon:t.jsx(Gp,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"HTTP - Hypertext Transfer Protocol"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["HTTP is a ",t.jsx("strong",{children:"stateless protocol"})," that governs how browsers and servers communicate. Each request is independent - the server doesn't remember previous requests."]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"HTTP Methods"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[{method:"GET",desc:"Retrieve data from server",color:"green"},{method:"POST",desc:"Send data to server",color:"blue"},{method:"PUT",desc:"Update/replace data",color:"yellow"},{method:"DELETE",desc:"Remove data",color:"red"},{method:"HEAD",desc:"Get headers only",color:"gray"},{method:"PATCH",desc:"Partial update",color:"purple"}].map((i,f)=>t.jsxs("div",{className:"flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3",children:[t.jsx("span",{className:`px-2 py-1 bg-${i.color}-500 text-white text-xs font-bold rounded`,children:i.method}),t.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3 mt-6",children:"HTTP Status Codes"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3",children:[{range:"1xx",name:"Informational",example:"100 Continue",color:"gray"},{range:"2xx",name:"Success",example:"200 OK, 201 Created",color:"green"},{range:"3xx",name:"Redirection",example:"301 Moved, 304 Not Modified",color:"blue"},{range:"4xx",name:"Client Error",example:"404 Not Found, 400 Bad Request",color:"red"}].map((i,f)=>t.jsxs("div",{className:`bg-${i.color}-50 dark:bg-${i.color}-900/20 border border-${i.color}-200 dark:border-${i.color}-800 rounded-xl p-4`,children:[t.jsx("p",{className:`text-2xl font-bold text-${i.color}-600 dark:text-${i.color}-400`,children:i.range}),t.jsx("p",{className:"text-sm font-medium text-gray-800 dark:text-white",children:i.name}),t.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:i.example})]},f))})]}),t.jsx(U,{title:"HTTP Request Example",language:"javascript",initialCode:`// Simulating an HTTP GET request
const httpRequest = \`GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
Accept-Language: en-US
Connection: keep-alive

\`;

// This is what your browser sends to get a webpage
console.log("HTTP GET Request:");
console.log(httpRequest);
console.log("\\n--- Response Headers ---");
console.log("HTTP/1.1 200 OK");
console.log("Content-Type: text/html");
console.log("Content-Length: 1234");
console.log("Server: Apache/2.4"`}),t.jsx(W,{questions:[{question:"Which HTTP status code indicates 'Page Not Found'?",options:["200 OK","301 Moved","404 Not Found","500 Internal Server Error"],correctAnswer:2,explanation:"404 is the standard response when the server cannot find the requested resource."},{question:"What type of protocol is HTTP?",options:["Stateful","Stateless","Connection-oriented only","Connectionless only"],correctAnswer:1,explanation:"HTTP is stateless - each request is independent and the server doesn't maintain session state."}]}),t.jsx(z,{question:"You need to design an API for a blog application. Define which HTTP methods you would use for each of these operations and explain your choices:\\n1. Getting a list of all blog posts\\n2. Creating a new blog post\\n3. Updating an existing post\\n4. Deleting a post\\n5. Getting a single post by ID",hint:"Think about CRUD operations (Create, Read, Update, Delete) and which HTTP methods correspond to each",solution:"1. GET /posts - Retrieve all posts (Read operation)\\n2. POST /posts - Create new post (Create operation)\\n3. PUT /posts/:id or PATCH /posts/:id - Update existing post (Update operation)\\n4. DELETE /posts/:id - Delete a post (Delete operation)\\n5. GET /posts/:id - Retrieve single post (Read operation)\\n\\nHTTP Methods Map:\\n- GET = Read\\n- POST = Create\\n- PUT = Full Update\\n- PATCH = Partial Update\\n- DELETE = Delete"})]})},"dns-url":{id:"dns-url",title:"DNS and URLs",icon:t.jsx(Zl,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Domain Name System (DNS)"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["DNS is like the ",t.jsx("strong",{children:"phonebook of the Internet"}),". It translates human-readable domain names (like google.com) into IP addresses (like 142.250.185.206) that computers use to identify each other."]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Why do we need DNS?"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300 mb-3",children:"Humans are better at remembering words than numbers. DNS makes the web easier to navigate."}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"flex-1 text-center p-3 bg-white dark:bg-gray-800 rounded-lg",children:[t.jsx("p",{className:"text-gray-500 text-sm mb-1",children:"Hard to remember"}),t.jsx("p",{className:"font-mono text-red-600",children:"192.68.20.50"})]}),t.jsx("div",{className:"text-2xl text-blue-500",children:"→"}),t.jsxs("div",{className:"flex-1 text-center p-3 bg-white dark:bg-gray-800 rounded-lg",children:[t.jsx("p",{className:"text-gray-500 text-sm mb-1",children:"Easy to remember"}),t.jsx("p",{className:"font-mono text-green-600",children:"www.example.com"})]})]})]}),t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8",children:"URL Structure"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"A URL (Uniform Resource Locator) tells browsers how to access a resource. Let's break down its components:"}),t.jsxs("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-6",children:[t.jsxs("p",{className:"font-mono text-lg mb-4 break-all",children:[t.jsx("span",{className:"bg-white/20 px-2 rounded",children:"http"}),"://",t.jsx("span",{className:"bg-white/20 px-2 rounded",children:"www.example.com"}),":",t.jsx("span",{className:"bg-white/20 px-2 rounded",children:"80"}),"/",t.jsx("span",{className:"bg-white/20 px-2 rounded",children:"path/page.html"}),"?",t.jsx("span",{className:"bg-white/20 px-2 rounded",children:"name=value"})]}),t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-2 text-sm",children:[t.jsxs("div",{children:[t.jsx("strong",{children:"http"})," = Protocol"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"www"})," = Subdomain"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"example.com"})," = Domain"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"80"})," = Port"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"/path"})," = Path"]})]})]})]}),t.jsx(ts,{type:"diagram",title:"DNS Resolution Process",description:"How domain names are converted to IP addresses",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3 text-center w-28",children:[t.jsx(Fs,{className:"w-6 h-6 text-blue-600 mx-auto mb-1"}),t.jsx("p",{className:"text-xs font-medium text-blue-800 dark:text-blue-200",children:"User types URL"})]}),t.jsx(Kl,{className:"w-5 h-5 text-gray-400"}),t.jsx("div",{className:"bg-gray-100 dark:bg-gray-700 rounded-xl p-3 text-center flex-1",children:t.jsx("p",{className:"text-xs font-medium text-gray-600 dark:text-gray-400",children:"www.example.com"})})]}),t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"text-gray-400",children:"↓"})}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"bg-yellow-100 dark:bg-yellow-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx("p",{className:"text-xs font-bold text-yellow-800 dark:text-yellow-200",children:"Local DNS Resolver"}),t.jsx("p",{className:"text-xs text-yellow-600 dark:text-yellow-400",children:"Checks cache first"})]}),t.jsx("div",{className:"text-gray-400",children:"↓ (if not cached)"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"bg-green-100 dark:bg-green-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx("p",{className:"text-xs font-bold text-green-800 dark:text-green-200",children:"Root Server"}),t.jsx("p",{className:"text-xs text-green-600 dark:text-green-400",children:"Knows .com servers"})]}),t.jsx("div",{className:"text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-purple-100 dark:bg-purple-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx("p",{className:"text-xs font-bold text-purple-800 dark:text-purple-200",children:"TLD Server (.com)"}),t.jsx("p",{className:"text-xs text-purple-600 dark:text-purple-400",children:"Knows example.com"})]}),t.jsx("div",{className:"text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx("p",{className:"text-xs font-bold text-blue-800 dark:text-blue-200",children:"Authoritative DNS"}),t.jsx("p",{className:"text-xs text-blue-600 dark:text-blue-400",children:"Returns IP"})]})]})]})}),t.jsx(W,{questions:[{question:"What does DNS stand for?",options:["Domain Network System","Domain Name System","Data Network Service","Digital Name Server"],correctAnswer:1,explanation:"DNS stands for Domain Name System - it acts as the phonebook of the internet, translating domain names to IP addresses."},{question:"In the URL 'https://www.example.com:8080/path/page.html', what part represents the TLD (Top-Level Domain)?",options:[".com","www","example","8080"],correctAnswer:0,explanation:"The TLD (Top-Level Domain) is '.com' - it represents the highest level in the domain name system hierarchy."},{question:"What is the default port number for HTTP and HTTPS respectively?",options:["80, 443","443, 80","8080, 8443","3000, 3001"],correctAnswer:0,explanation:"HTTP uses port 80 by default, while HTTPS uses port 443. These well-known ports are reserved for web traffic."}]}),t.jsx(z,{question:"Break down this URL into its components and explain each part:\\nhttps://api.example.com:8443/users/profile?id=123&tab=activity",hint:"Look for: protocol, subdomain, domain, TLD, port, path, query parameters",solution:"Components breakdown:\\n1. Protocol: https - The secure version of HTTP\\n2. Subdomain: api - Indicates this is an API server\\n3. Domain: example - The registered domain name\\n4. TLD: .com - Top-level domain\\n5. Port: 8443 - Non-standard HTTPS port (commonly used for alternative SSL)\\n6. Path: /users/profile - Resource location on the server\\n7. Query String: ?id=123&tab=activity\\n   - id=123: Parameter named 'id' with value '123'\\n   - tab=activity: Parameter named 'tab' with value 'activity'\\n   - & separates multiple parameters",acceptedAnswers:["protocol https, subdomain api, domain example, tld com, port 8443, path users profile, query id and tab","https is protocol, api is subdomain, example is domain, com is tld, 8443 is port, users profile is path, id and tab are query parameters"]})]})},"client-server":{id:"client-server",title:"Client-Server Architecture",icon:t.jsx(wt,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Client-Server Model"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["The Internet revolves around the ",t.jsx("strong",{children:"client-server architecture"}),". Your computer (client) runs software that interacts with servers located on remote computers."]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[t.jsxs("div",{className:"bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white",children:[t.jsx("h4",{className:"font-bold text-xl mb-3",children:"Client"}),t.jsxs("ul",{className:"space-y-2 text-blue-100",children:[t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(M,{className:"w-4 h-4"}),t.jsx("span",{children:"Browser (Chrome, Firefox, Safari)"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(M,{className:"w-4 h-4"}),t.jsx("span",{children:"Makes requests to servers"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(M,{className:"w-4 h-4"}),t.jsx("span",{children:"Displays responses to users"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(M,{className:"w-4 h-4"}),t.jsx("span",{children:"Runs on user's device"})]})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white",children:[t.jsx("h4",{className:"font-bold text-xl mb-3",children:"Server"}),t.jsxs("ul",{className:"space-y-2 text-purple-100",children:[t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(M,{className:"w-4 h-4"}),t.jsx("span",{children:"Apache, Nginx, IIS"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(M,{className:"w-4 h-4"}),t.jsx("span",{children:"Responds to client requests"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(M,{className:"w-4 h-4"}),t.jsx("span",{children:"Stores and processes data"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(M,{className:"w-4 h-4"}),t.jsx("span",{children:"Runs in data centers"})]})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Three Models of Web Architecture"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx("span",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs",children:"1"}),"Static HTML Pages"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Server sends pre-created HTML files. Content doesn't change unless developer modifies the files."}),t.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[t.jsx("span",{className:"bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded",children:"Browser"}),t.jsx("span",{children:"→"}),t.jsx("span",{className:"bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded",children:"Request HTML"}),t.jsx("span",{children:"→"}),t.jsx("span",{className:"bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded",children:"Server"}),t.jsx("span",{children:"→"}),t.jsx("span",{className:"bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded",children:"Response HTML"})]})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx("span",{className:"w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs",children:"2"}),"CGI/Server-Side Scripts"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Server processes code (PHP, Python, Ruby) to generate dynamic content based on user input."}),t.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[t.jsx("span",{className:"bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded",children:"User Query"}),t.jsx("span",{children:"→"}),t.jsx("span",{className:"bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded",children:"CGI Script"}),t.jsx("span",{children:"→"}),t.jsx("span",{className:"bg-green-200 dark:bg-green-800 px-2 py-1 rounded",children:"Dynamic HTML"})]})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx("span",{className:"w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs",children:"3"}),"Full-Stack Applications"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Modern apps with databases, APIs, client-side rendering, and real-time updates."})]})]})]}),t.jsx(ts,{type:"diagram",title:"Client-Server Communication",description:"Request-Response cycle",content:t.jsx("div",{className:"flex flex-col items-center gap-4",children:t.jsxs("div",{className:"flex items-center gap-8",children:[t.jsxs("div",{className:"text-center",children:[t.jsx(Fs,{className:"w-16 h-16 text-blue-500 mx-auto mb-2"}),t.jsx("p",{className:"font-bold text-gray-800 dark:text-white",children:"Client (Browser)"}),t.jsx("p",{className:"text-xs text-gray-500",children:"HTTP Request"})]}),t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("div",{className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-sm",children:"GET /api/data HTTP/1.1"}),t.jsx("div",{className:"px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-sm",children:"HTTP/1.1 200 OK"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx(wt,{className:"w-16 h-16 text-purple-500 mx-auto mb-2"}),t.jsx("p",{className:"font-bold text-gray-800 dark:text-white",children:"Server"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Process & Respond"})]})]})})}),t.jsx(z,{question:"Which model would be best for a personal blog with rarely changing content?",hint:"Think about whether the content changes based on user input or stays the same for all visitors",solution:"Model 1 - Static HTML Pages would be most efficient for a personal blog"}),t.jsx(W,{questions:[{question:"In the client-server model, what does the client typically do?",options:["Stores data and processes requests","Makes requests and displays responses","Manages network routing","Handles DNS resolution"],correctAnswer:1,explanation:"The client (typically a web browser) makes requests to servers and displays the responses to users."},{question:"Which of the following is an example of server software?",options:["Chrome","Firefox","Apache","Safari"],correctAnswer:2,explanation:"Apache is a web server software that receives and responds to HTTP requests. Chrome, Firefox, and Safari are client browsers."},{question:"What type of content is best suited for Model 1 (Static HTML Pages)?",options:["User-specific dashboards","Real-time chat applications","Content that rarely changes for all visitors","E-commerce shopping carts"],correctAnswer:2,explanation:"Static HTML pages are best for content that remains the same for all visitors and rarely changes, like documentation or simple blogs."}]})]})},"web-security":{id:"web-security",title:"Web Security Basics",icon:t.jsx(ch,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Web Security Considerations"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Websites are always prone to security risks. Understanding common vulnerabilities helps you build more secure applications."}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{title:"SQL Injection",desc:"Attackers insert malicious SQL code into queries",color:"red",icon:"💉",prevention:"Use parameterized queries, input validation"},{title:"Cross-Site Scripting (XSS)",desc:"Injecting malicious scripts into web pages",color:"orange",icon:"⚠️",prevention:"Sanitize input, encode output, CSP headers"},{title:"CSRF",desc:"Tricking users into performing unintended actions",color:"yellow",icon:"🔄",prevention:"Use anti-CSRF tokens, SameSite cookies"},{title:"Man-in-the-Middle",desc:"Attackers intercept communication between parties",color:"purple",icon:"👤",prevention:"Use HTTPS, SSL/TLS encryption"}].map((i,f)=>t.jsxs("div",{className:`bg-${i.color}-50 dark:bg-${i.color}-900/20 border border-${i.color}-200 dark:border-${i.color}-800 rounded-xl p-4`,children:[t.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[t.jsx("span",{className:"text-2xl",children:i.icon}),t.jsx("h4",{className:`font-bold text-${i.color}-800 dark:text-${i.color}-200`,children:i.title})]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:i.desc}),t.jsxs("p",{className:"text-xs font-medium text-gray-500",children:["Prevention: ",i.prevention]})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Best Practices"}),t.jsx("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 space-y-3",children:["Keep all software updated (servers, libraries, frameworks)","Validate data on both client-side AND server-side","Use strong password policies with hashing (bcrypt)","Implement rate limiting to prevent brute force attacks","Use HTTPS everywhere (SSL/TLS certificates)","Follow the principle of least privilege","Regular security audits and penetration testing"].map((i,f)=>t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx(M,{className:"w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"}),t.jsx("span",{className:"text-green-800 dark:text-green-200",children:i})]},f))})]}),t.jsx(W,{questions:[{question:"What is SQL Injection?",options:["Flooding a server with requests","Inserting malicious SQL code into database queries","Intercepting network traffic","Stealing user passwords"],correctAnswer:1,explanation:"SQL Injection occurs when attackers insert malicious SQL code into queries, potentially gaining access to or destroying database data."},{question:"What does HTTPS provide that HTTP doesn't?",options:["Faster page loads","Better SEO","Encrypted communication","Better caching"],correctAnswer:2,explanation:"HTTPS uses SSL/TLS to encrypt data transmitted between the browser and server, protecting against eavesdropping and tampering."}]}),t.jsx(z,{question:"A user enters their name in a login form: 'admin' OR '1'='1'. Explain what this input could do if the application is vulnerable to SQL injection, and how you would prevent such attacks.",hint:"Think about how this input could manipulate the SQL query logic to bypass authentication",solution:"This is a classic SQL injection attack!\\n\\nIf vulnerable code is:\\nSELECT * FROM users WHERE username = 'input' AND password = 'pass'\\n\\nThe input 'admin' OR '1'='1' would become:\\nSELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = 'pass'\\n\\nSince '1'='1' is always true, this bypasses authentication!\\n\\nPrevention Methods:\\n1. Use Parameterized Queries (Prepared Statements):\\n   $stmt = $pdo->prepare('SELECT * FROM users WHERE username = ?');\\n   $stmt->execute([$input]);\\n\\n2. Input Validation - reject suspicious patterns like quotes, semicolons\\n3. Use ORM frameworks that handle escaping automatically\\n4. Apply principle of least privilege to database users\\n5. Escape special characters in user input"})]})}},C=Object.values(L);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx(Ws,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 1: Introduction to Internet Programming"}),t.jsx("p",{className:"text-white/80",children:"Learn the fundamentals of the Internet, WWW, HTTP, TCP/IP, DNS, and client-server architecture"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:C.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:C.map((i,f)=>{const P=p===i.id,H=y[`chapter1-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${P?"border-blue-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>N(P?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${H?"bg-green-100 dark:bg-green-900/30 text-green-600":"bg-blue-100 dark:bg-blue-900/30 text-blue-600"}`,children:H?t.jsx(M,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",P?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),P?t.jsx(Bs,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),P&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(W,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!H&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(M,{className:"w-5 h-5"}),"Mark as Complete"]}),H&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(M,{className:"w-5 h-5"}),"Completed"]})]})]})]},i.id)})})]})}function ph({progress:y,updateProgress:E}){const[p,N]=G.useState("html-basics"),S=i=>{E("chapter2",i,!0)},L={"html-basics":{id:"html-basics",title:"HTML Basics & Document Structure",icon:t.jsx(pc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"What is HTML?"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"HTML (HyperText Markup Language)"})," is the standard markup language for creating web pages. It describes the structure of a web page using elements."]}),t.jsxs("div",{className:"bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"The Three Core Web Technologies"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold",children:"HTML"}),t.jsx("p",{className:"text-sm",children:"Structure"})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold",children:"CSS"}),t.jsx("p",{className:"text-sm",children:"Presentation"})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold",children:"JavaScript"}),t.jsx("p",{className:"text-sm",children:"Behavior"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"HTML Tags"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Tags are enclosed in angle brackets. Most tags have an opening and closing tag, but some are self-closing."}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-4",children:[t.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"<tagname>content</tagname>"}),t.jsx("p",{className:"text-green-600 dark:text-green-400 mt-2",children:"// Opening tag"}),t.jsx("p",{className:"text-green-600 dark:text-green-400",children:"content"}),t.jsx("p",{className:"text-red-600 dark:text-red-400",children:"</tagname> // Closing tag"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Basic HTML Structure"})]}),t.jsx(U,{title:"Your First HTML Page",language:"html",initialCode:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to Web Development!</h1>
    <p>This is my first paragraph.</p>
    <p>HTML uses tags to structure content.</p>
</body>
</html>`}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-blue-800 dark:text-blue-200 mb-2",children:"Understanding the Structure"}),t.jsxs("ul",{className:"space-y-2 text-blue-700 dark:text-blue-300 text-sm",children:[t.jsxs("li",{children:[t.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:"<!DOCTYPE html>"})," - Declares HTML5 document type"]}),t.jsxs("li",{children:[t.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:"<html>"})," - Root element of the page"]}),t.jsxs("li",{children:[t.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:"<head>"})," - Contains metadata (not visible)"]}),t.jsxs("li",{children:[t.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:"<body>"})," - Contains visible content"]})]})]}),t.jsx(z,{question:"Write the HTML code to create a simple page with a heading 'Hello World' and a paragraph 'This is my first webpage.'",hint:"Remember to include DOCTYPE, html, head, body tags",solution:`<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is my first webpage.</p>
</body>
</html>`}),t.jsx(W,{questions:[{question:"What does HTML stand for?",options:["Hyper Text Markup Language","High Tech Modern Language","Home Tool Markup Language","Hyperlinks and Text Markup Language"],correctAnswer:0,explanation:"HTML stands for HyperText Markup Language - the standard language for creating web pages."},{question:"Which tag is used to define the main content visible to users?",options:["<head>","<meta>","<body>","<title>"],correctAnswer:2,explanation:"The <body> tag contains all the visible content of the webpage including headings, paragraphs, images, etc."},{question:"What is the correct HTML element for inserting a line break?",options:["<break>","<lb>","<br>","<newline>"],correctAnswer:2,explanation:"The <br> tag is a self-closing tag that inserts a single line break in HTML content."}]})]})},"text-formatting":{id:"text-formatting",title:"Text Formatting Tags",icon:t.jsx(wc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Formatting Text in HTML"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"HTML provides various tags to format text - making it bold, italic, underlined, and more."}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mb-6",children:[{tag:"<h1> to <h6>",desc:"Headings"},{tag:"<p>",desc:"Paragraph"},{tag:"<br>",desc:"Line break"},{tag:"<hr>",desc:"Horizontal rule"},{tag:"<strong>",desc:"Bold (important)"},{tag:"<em>",desc:"Italic (emphasis)"},{tag:"<u>",desc:"Underline"},{tag:"<mark>",desc:"Highlighted"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3",children:[t.jsx("code",{className:"text-sm text-blue-600 dark:text-blue-400",children:i.tag}),t.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:i.desc})]},f))})]}),t.jsx(U,{title:"Text Formatting Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>Text Formatting</title>
</head>
<body>
    <!-- Headings -->
    <h1>This is Heading 1</h1>
    <h2>This is Heading 2</h2>
    <h3>This is Heading 3</h3>

    <!-- Text Formatting -->
    <p>
        This is a <strong>bold</strong> text.<br>
        This is an <em>italic</em> text.<br>
        This is <u>underlined</u> text.<br>
        This is <mark>highlighted</mark> text.<br>
        This is <small>small</small> text.
    </p>

    <hr>

    <!-- Blockquote -->
    <blockquote>
        "The only way to do great work is to love what you do."
        <cite>— Steve Jobs</cite>
    </blockquote>

    <!-- Preformatted text -->
    <pre>
function hello() {
    console.log("Hello!");
}
    </pre>
</body>
</html>`}),t.jsx(ts,{type:"diagram",title:"Inline vs Block Elements",description:"Understanding how elements display",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl",children:[t.jsx("h5",{className:"font-bold text-blue-800 dark:text-blue-200 mb-2",children:"Block Elements"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Start on a new line, take full width"}),t.jsxs("div",{className:"border-2 border-blue-300 p-2",children:[t.jsx("div",{className:"bg-blue-200 p-2 text-center text-sm",children:"div"}),t.jsx("div",{className:"bg-blue-200 p-2 text-center text-sm mt-1",children:"p"}),t.jsx("div",{className:"bg-blue-200 p-2 text-center text-sm mt-1",children:"h1"})]})]}),t.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-xl",children:[t.jsx("h5",{className:"font-bold text-green-800 dark:text-green-200 mb-2",children:"Inline Elements"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Stay on same line, take only necessary width"}),t.jsxs("div",{className:"border-2 border-green-300 p-2",children:[t.jsx("span",{className:"bg-green-200 px-2 text-sm",children:"span"}),t.jsx("strong",{className:"bg-green-200 px-2 text-sm mx-1",children:"strong"}),t.jsx("em",{className:"bg-green-200 px-2 text-sm",children:"em"}),t.jsx("a",{className:"bg-green-200 px-2 text-sm mx-1",children:"a"})]})]})]})}),t.jsx(W,{questions:[{question:"Which tag is used for the most important heading?",options:["<heading>","<h6>","<h1>","<head>"],correctAnswer:2,explanation:"<h1> defines the most important heading, while <h6> defines the least important."},{question:"What's the difference between <strong> and <b>?",options:["There's no difference","<strong> indicates importance, <b> is just visual styling","<b> is for larger text","<strong> is deprecated"],correctAnswer:1,explanation:"<strong> has semantic meaning (important text), while <b> is purely visual. Use <strong> for accessibility."}]}),t.jsx(z,{question:"Create a webpage with an h1 heading 'My Portfolio', an h2 subheading 'About Me', and a paragraph that uses <strong> for important text, <em> for emphasis, <mark> to highlight 'web development', and <small> for copyright text.",hint:"Use heading tags h1 and h2, paragraph tags, and inline formatting tags",solution:`<!DOCTYPE html>
<html>
<head>
    <title>My Portfolio</title>
</head>
<body>
    <h1>My Portfolio</h1>
    <h2>About Me</h2>
    <p>
        Hello! I am a <strong>passionate developer</strong> who loves
        <em>creating amazing websites</em>. I specialize in
        <mark>web development</mark> and continuously learning new technologies.
        <br><br>
        <small>&copy; 2024 My Portfolio. All rights reserved.</small>
    </p>
</body>
</html>`}),t.jsx(z,{question:"Create a blockquote that contains a famous quote with <cite> for the author name, and a <pre> tag with a simple code snippet showing a function declaration.",hint:"Blockquote requires <blockquote> and <cite> tags. Preformatted text uses <pre> tag to preserve whitespace.",solution:`<blockquote>
    "The only way to do great work is to love what you do."
    <cite>— Steve Jobs</cite>
</blockquote>

<pre>
function greet(name) {
    console.log("Hello, " + name + "!");
    return true;
}
</pre>`})]})},"links-images":{id:"links-images",title:"Links and Images",icon:t.jsx(Jp,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Creating Links & Adding Images"}),t.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-white mb-3",children:"HTML Links (Anchor Tags)"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["Links are created using the ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"<a>"})," tag with the ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"href"})," attribute."]}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-blue-600",children:'<a href="url">Link Text</a>'}),t.jsx("p",{className:"text-gray-500 mt-2",children:"Target attributes:"}),t.jsx("p",{className:"text-green-600",children:"_self (default) - Same window"}),t.jsx("p",{className:"text-green-600",children:"_blank - New tab/window"})]})]}),t.jsx(U,{title:"Links Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>HTML Links</title>
</head>
<body>
    <h1>Links in HTML</h1>

    <h2>External Links</h2>
    <p>
        Visit <a href="https://www.google.com" target="_blank">Google</a> in a new tab.<br>
        Or go to <a href="https://www.wikipedia.org">Wikipedia</a> in the same tab.
    </p>

    <h2>Internal Links</h2>
    <p>
        <a href="#section1">Go to Section 1</a><br>
        <a href="#section2">Go to Section 2</a>
    </p>

    <h2 id="section1">Section 1</h2>
    <p>This is section 1 content.</p>

    <h2 id="section2">Section 2</h2>
    <p>This is section 2 content.</p>

    <h2>Email Links</h2>
    <p>
        <a href="mailto:example@email.com">Send Email</a>
    </p>

    <p><a href="#top">Back to top</a></p>
</body>
</html>`}),t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-white mb-3",children:"HTML Images"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["Images are added using the ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"<img>"})," tag. It's a self-closing tag that requires the ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"src"})," (source) and ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"alt"})," (alternative text) attributes."]})]}),t.jsx(U,{title:"Images Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>HTML Images</title>
</head>
<body>
    <h1>Images in HTML</h1>

    <!-- Basic Image -->
    <img src="https://picsum.photos/400/200" alt="Random beautiful image" width="400">

    <!-- Image with dimensions -->
    <img src="https://picsum.photos/200/200" alt="Square image" width="200" height="200">

    <!-- Image with styling -->
    <img src="https://picsum.photos/300/150" alt="Styled image"
         style="border-radius: 10px; border: 2px solid #333;">

    <!-- Image as link -->
    <a href="https://www.example.com">
        <img src="https://picsum.photos/200/100" alt="Clickable image">
    </a>

    <!-- Responsive image -->
    <img src="https://picsum.photos/800/300" alt="Responsive image"
         style="max-width: 100%; height: auto;">

    <!-- Figure with caption -->
    <figure>
        <img src="https://picsum.photos/300/200" alt="Caption example" width="300">
        <figcaption>This is a caption for the image</figcaption>
    </figure>
</body>
</html>`}),t.jsx(W,{questions:[{question:"Which attribute is required for the <img> tag?",options:["width","height","alt","title"],correctAnswer:2,explanation:"The alt attribute is required for accessibility and provides text if the image can't load."},{question:"What does target='_blank' do?",options:["Opens link in same tab","Opens link in a new tab or window","Closes the current page","Downloads the file"],correctAnswer:1,explanation:"target='_blank' opens the linked page in a new browser tab or window."}]}),t.jsx(z,{question:"Create a webpage with two images: 1) One using a relative path (e.g., images/logo.png), 2) One using an absolute path (e.g., https://picsum.photos/300/200). Use alt, width, and height attributes for each image.",hint:"Relative paths are relative to the current file location. Absolute paths include the full URL starting with http:// or https://",solution:`<!DOCTYPE html>
<html>
<head>
    <title>Image Paths Practice</title>
</head>
<body>
    <h1>Image Paths Practice</h1>

    <h2>Relative Path Image</h2>
    <img src="images/logo.png" alt="Website Logo" width="200" height="100">

    <h2>Absolute Path Image</h2>
    <img src="https://picsum.photos/300/200" alt="Random Beautiful Image" width="300" height="200">

    <p>Note: The relative image won't load without the actual file, but the absolute URL will work!</p>
</body>
</html>`}),t.jsx(z,{question:"Create a world map image with an image map that has 3 clickable regions (North America, Europe, Asia). When clicked, each region should open a different webpage using target='_blank' for a new tab.",hint:"Use the <map> and <area> tags. The area tag needs shape, coords, href, alt, and target attributes.",solution:`<!DOCTYPE html>
<html>
<head>
    <title>Image Map Practice</title>
</head>
<body>
    <h1>World Map with Clickable Regions</h1>

    <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
         alt="World Map"
         usemap="#worldmap"
         width="800" height="400"
         style="border: 2px solid #333;">

    <map name="worldmap">
        <!-- North America -->
        <area shape="rect"
              coords="50,50,250,200"
              href="https://en.wikipedia.org/wiki/North_America"
              alt="North America"
              target="_blank">

        <!-- Europe -->
        <area shape="rect"
              coords="350,50,500,180"
              href="https://en.wikipedia.org/wiki/Europe"
              alt="Europe"
              target="_blank">

        <!-- Asia -->
        <area shape="rect"
              coords="500,50,750,250"
              href="https://en.wikipedia.org/wiki/Asia"
              alt="Asia"
              target="_blank">
    </map>

    <p><em>Click on different regions of the map to learn more!</em></p>
</body>
</html>`}),t.jsx(z,{question:"Create two pages: page1.html and page2.html. In page1.html, create a link to page2.html using a relative path, and also create a link to a specific section (id='section2') on the same page.",hint:"Internal links use # followed by the id. External file links use the filename directly for files in the same folder.",solution:`<!-- page1.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Page 1</title>
</head>
<body>
    <h1 id="top">Welcome to Page 1</h1>

    <nav>
        <a href="#section2">Go to Section 2 on this page</a> |
        <a href="page2.html">Go to Page 2</a>
    </nav>

    <section id="section1">
        <h2>Section 1</h2>
        <p>This is section 1 content.</p>
    </section>

    <section id="section2">
        <h2>Section 2</h2>
        <p>This is section 2 content.</p>
        <a href="#top">Back to top</a>
    </section>
</body>
</html>

<!-- page2.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Page 2</title>
</head>
<body>
    <h1>Welcome to Page 2</h1>
    <p>This is a separate page linked from page1.html</p>
    <a href="page1.html">Back to Page 1</a>
</body>
</html>`})]})},lists:{id:"lists",title:"HTML Lists",icon:t.jsx(Xp,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Creating Lists"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["HTML supports three types of lists: ",t.jsx("strong",{children:"ordered"}),", ",t.jsx("strong",{children:"unordered"}),", and ",t.jsx("strong",{children:"description"})," lists."]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-blue-800 dark:text-blue-200 mb-2",children:"Unordered List"}),t.jsx("p",{className:"text-sm text-blue-700 dark:text-blue-300 mb-2",children:"<ul> with <li>"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Bulleted points"})]}),t.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-green-800 dark:text-green-200 mb-2",children:"Ordered List"}),t.jsx("p",{className:"text-sm text-green-700 dark:text-green-300 mb-2",children:"<ol> with <li>"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Numbered points"})]}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-purple-800 dark:text-purple-200 mb-2",children:"Description List"}),t.jsx("p",{className:"text-sm text-purple-700 dark:text-purple-300 mb-2",children:"<dl>, <dt>, <dd>"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Term-definition pairs"})]})]})]}),t.jsx(U,{title:"Lists Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>HTML Lists</title>
</head>
<body>
    <h1>Types of Lists</h1>

    <h2>Unordered List (Bullets)</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
    </ul>

    <h2>Ordered List (Numbers)</h2>
    <ol>
        <li>Plan the project</li>
        <li>Write the code</li>
        <li>Test thoroughly</li>
        <li>Deploy to production</li>
    </ol>

    <h2>Nested Lists</h2>
    <ul>
        <li>Frontend Development
            <ul>
                <li>HTML</li>
                <li>CSS
                    <ul>
                        <li>Flexbox</li>
                        <li>Grid</li>
                    </ul>
                </li>
                <li>JavaScript</li>
            </ul>
        </li>
        <li>Backend Development
            <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>SQL</li>
            </ul>
        </li>
    </ul>

    <h2>Description List</h2>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language - the standard markup language for web pages</dd>

        <dt>CSS</dt>
        <dd>Cascading Style Sheets - used for styling HTML elements</dd>

        <dt>JavaScript</dt>
        <dd>A programming language that adds interactivity to web pages</dd>
    </dl>
</body>
</html>`}),t.jsx(z,{question:"Create an ordered list of steps to make a cup of tea: 1) Boil water, 2) Add tea leaves, 3) Pour hot water, 4) Wait 3 minutes, 5) Enjoy!",hint:"Use <ol> for ordered list and <li> for each item",solution:`<ol>
    <li>Boil water</li>
    <li>Add tea leaves</li>
    <li>Pour hot water</li>
    <li>Wait 3 minutes</li>
    <li>Enjoy!</li>
</ol>`}),t.jsx(W,{questions:[{question:"Which tag is used to create an unordered (bulleted) list?",options:["<ol>","<ul>","<li>","<list>"],correctAnswer:1,explanation:"The <ul> tag creates an unordered list with bullet points, while <ol> creates an ordered/numbered list."},{question:"What is the correct way to create a nested list in HTML?",options:["Put one <ul> inside another <ul>","Use the <nested> tag","Use the <list> tag with type='nested'","Simply use more <li> elements"],correctAnswer:0,explanation:"Nested lists are created by placing a <ul> or <ol> inside an <li> element of the parent list."},{question:"Which HTML tag pair is used to create description list terms?",options:["<dd> and </dd>","<dt> and </dt>","<dl> and </dl>","<li> and </li>"],correctAnswer:1,explanation:"<dt> (description term) is used to define terms in a description list, while <dd> is used for the descriptions themselves."}]})]})},tables:{id:"tables",title:"HTML Tables",icon:t.jsx(dh,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Creating Tables"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Tables are used to display data in rows and columns. The main table elements are:"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-orange-600",children:"<table>"}),t.jsx("p",{className:"text-blue-600 ml-4",children:"<thead>"}),t.jsx("p",{className:"text-green-600 ml-8",children:"<tr>"}),t.jsx("p",{className:"text-purple-600 ml-12",children:"<th>Header</th>"}),t.jsx("p",{className:"text-green-600 ml-8",children:"</tr>"}),t.jsx("p",{className:"text-blue-600 ml-4",children:"</thead>"}),t.jsx("p",{className:"text-blue-600 ml-4",children:"<tbody>"}),t.jsx("p",{className:"text-green-600 ml-8",children:"<tr>"}),t.jsx("p",{className:"text-purple-600 ml-12",children:"<td>Data</td>"}),t.jsx("p",{className:"text-green-600 ml-8",children:"</tr>"}),t.jsx("p",{className:"text-blue-600 ml-4",children:"</tbody>"}),t.jsx("p",{className:"text-orange-600",children:"</table>"})]})]}),t.jsx(U,{title:"Tables Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>HTML Tables</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #333; padding: 12px; text-align: left; }
        th { background-color: #4CAF50; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>Student Grades Table</h1>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Math</th>
                <th>Science</th>
                <th>English</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Alice Johnson</td>
                <td>95</td>
                <td>88</td>
                <td>92</td>
                <td>275</td>
            </tr>
            <tr>
                <td>Bob Smith</td>
                <td>78</td>
                <td>85</td>
                <td>80</td>
                <td>243</td>
            </tr>
            <tr>
                <td>Carol Davis</td>
                <td>92</td>
                <td>90</td>
                <td>95</td>
                <td>277</td>
            </tr>
        </tbody>
    </table>

    <h2>Course Schedule</h2>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>9:00 AM</td>
                <td>Math</td>
                <td>Science</td>
                <td>Math</td>
            </tr>
            <tr>
                <td>11:00 AM</td>
                <td>English</td>
                <td>Art</td>
                <td>English</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`}),t.jsx(W,{questions:[{question:"What tag is used for table header cells?",options:["<td>","<th>","<tr>","<thead>"],correctAnswer:1,explanation:"<th> defines header cells which are typically bold and centered by default."},{question:"What attribute merges cells horizontally?",options:["rowspan","colspan","cellspacing","cellpadding"],correctAnswer:1,explanation:"colspan merges cells horizontally, while rowspan merges them vertically."}]}),t.jsx(z,{question:"Create an HTML table for a product catalog with columns: Product Name, Price, Stock Status. Include at least 4 products with realistic data. Use proper semantic table structure with thead and tbody.",hint:"Use table, thead, tbody, tr, th, and td tags. Add styling with CSS for better presentation.",solution:`<!DOCTYPE html>
<html>
<head>
    <title>Product Catalog</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #4CAF50; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
        tr:hover { background-color: #ddd; }
        .in-stock { color: green; font-weight: bold; }
        .out-of-stock { color: red; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Product Catalog</h1>
    <table>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Wireless Mouse</td>
                <td>$29.99</td>
                <td class="in-stock">In Stock</td>
            </tr>
            <tr>
                <td>Mechanical Keyboard</td>
                <td>$89.99</td>
                <td class="in-stock">In Stock</td>
            </tr>
            <tr>
                <td>USB-C Hub</td>
                <td>$45.00</td>
                <td class="out-of-stock">Out of Stock</td>
            </tr>
            <tr>
                <td>Webcam HD</td>
                <td>$79.99</td>
                <td class="in-stock">In Stock</td>
            </tr>
            <tr>
                <td>Monitor Stand</td>
                <td>$35.50</td>
                <td class="out-of-stock">Out of Stock</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`}),t.jsx(z,{question:"Create a class timetable using HTML tables with colspan and rowspan. The table should have time slots as rows and days of the week as columns. Merge cells where a class spans multiple periods.",hint:"Use colspan to merge horizontal cells and rowspan to merge vertical cells",solution:`<!DOCTYPE html>
<html>
<head>
    <title>Class Timetable</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #333; padding: 15px; text-align: center; }
        th { background-color: #2196F3; color: white; }
        td { background-color: #f9f9f9; }
        .math { background-color: #FFECB3; }
        .science { background-color: #C8E6C9; }
        .english { background-color: #BBDEFB; }
        .break { background-color: #E1BEE7; }
        .lunch { background-color: #FFCDD2; }
    </style>
</head>
<body>
    <h1>Weekly Class Timetable</h1>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>8:00 - 9:00</td>
                <td class="math" colspan="2">Mathematics</td>
                <td class="english" colspan="2">English</td>
                <td class="science">Science</td>
            </tr>
            <tr>
                <td>9:00 - 10:00</td>
                <td class="break" colspan="5">Short Break</td>
            </tr>
            <tr>
                <td>10:00 - 11:00</td>
                <td class="science">Science</td>
                <td class="english">English</td>
                <td class="math">Mathematics</td>
                <td class="science">Science</td>
                <td class="english">English</td>
            </tr>
            <tr>
                <td>11:00 - 12:00</td>
                <td class="english">English</td>
                <td class="science" colspan="2">Science Lab</td>
                <td class="math">Mathematics</td>
                <td class="math">Mathematics</td>
            </tr>
            <tr>
                <td>12:00 - 1:00</td>
                <td class="lunch" colspan="5">Lunch Break</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`})]})},forms:{id:"forms",title:"HTML Forms",icon:t.jsx(hc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"HTML Forms"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Forms are used to collect user input. They contain various form elements like text fields, checkboxes, radio buttons, and submit buttons."}),t.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-white mb-3",children:"Form Elements"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mb-6",children:[{tag:'<input type="text">',desc:"Text input"},{tag:'<input type="password">',desc:"Password"},{tag:'<input type="email">',desc:"Email input"},{tag:'<input type="checkbox">',desc:"Checkbox"},{tag:'<input type="radio">',desc:"Radio button"},{tag:"<select>",desc:"Dropdown"},{tag:"<textarea>",desc:"Multi-line text"},{tag:"<button>",desc:"Clickable button"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3",children:[t.jsx("code",{className:"text-xs text-blue-600 dark:text-blue-400",children:i.tag}),t.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:i.desc})]},f))})]}),t.jsx(U,{title:"Complete Form Example",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
    <style>
        form { max-width: 400px; margin: 0 auto; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, select, textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        button {
            width: 100%;
            padding: 10px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover { background: #45a049; }
    </style>
</head>
<body>
    <h1 style="text-align: center;">Registration Form</h1>

    <form action="/submit" method="POST">
        <div class="form-group">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name">
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="example@email.com">
        </div>

        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required minlength="8">
        </div>

        <div class="form-group">
            <label for="country">Country:</label>
            <select id="country" name="country">
                <option value="">Select a country</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
            </select>
        </div>

        <div class="form-group">
            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male" style="display: inline;">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female" style="display: inline;">Female</label>
        </div>

        <div class="form-group">
            <input type="checkbox" id="terms" name="terms" required>
            <label for="terms" style="display: inline;">I agree to the terms</label>
        </div>

        <div class="form-group">
            <label for="bio">Bio:</label>
            <textarea id="bio" name="bio" rows="4" placeholder="Tell us about yourself"></textarea>
        </div>

        <button type="submit">Register</button>
        <button type="reset">Reset</button>
    </form>
</body>
</html>`}),t.jsx(z,{question:"Create a simple login form with fields for username, password, and a submit button",hint:"Use input types 'text' and 'password', and don't forget the form tags!",solution:`<form action="/login" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Login</button>
</form>`}),t.jsx(W,{questions:[{question:"Which input type is used for single-select options where only one can be chosen?",options:["checkbox","text","radio","select"],correctAnswer:2,explanation:"Radio buttons (<input type='radio'>) are used when only one option can be selected from a group. Checkboxes allow multiple selections."},{question:"What does the 'required' attribute do in a form input?",options:["Pre-fills the field with default data","Makes the field mandatory before form submission","Encrypts the input data","Validates that the input contains only numbers"],correctAnswer:1,explanation:"The 'required' attribute prevents form submission if the field is empty, ensuring users provide necessary information."},{question:"Which element creates a multi-line text input area?",options:["<input type='textarea'>","<textarea>","<textbox>","<input type='multiline'>"],correctAnswer:1,explanation:"The <textarea> element creates a multi-line text input area that users can type multiple lines of text into."}]})]})},multimedia:{id:"multimedia",title:"HTML5 Multimedia",icon:t.jsx(Kn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Audio & Video in HTML5"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"HTML5 introduced native support for audio and video without needing plugins like Flash."}),t.jsxs("div",{className:"bg-gradient-to-r from-red-500 to-purple-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"Video Element"}),t.jsx("p",{className:"text-sm",children:"Supports MP4, WebM, and Ogg formats"})]}),t.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"Audio Element"}),t.jsx("p",{className:"text-sm",children:"Supports MP3, WAV, and Ogg formats"})]})]}),t.jsx(U,{title:"Multimedia Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>HTML5 Multimedia</title>
    <style>
        .media-container {
            margin: 20px 0;
            padding: 20px;
            background: #f5f5f5;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>HTML5 Multimedia</h1>

    <!-- Video Element -->
    <div class="media-container">
        <h2>Video Player</h2>
        <video width="400" controls poster="https://picsum.photos/400/200">
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
        <p><em>Video controls: Play, Pause, Volume, Fullscreen</em></p>
    </div>

    <!-- Audio Element -->
    <div class="media-container">
        <h2>Audio Player</h2>
        <audio controls>
            <source src="music.mp3" type="audio/mpeg">
            <source src="music.ogg" type="audio/ogg">
            Your browser does not support the audio element.
        </audio>
        <p><em>Audio controls: Play, Pause, Volume, Seek</em></p>
    </div>

    <!-- YouTube Embed -->
    <div class="media-container">
        <h2>Embedded YouTube Video</h2>
        <iframe
            width="400"
            height="225"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameborder="0"
            allowfullscreen>
        </iframe>
    </div>

    <!-- IFrame for Maps -->
    <div class="media-container">
        <h2>Embedded Google Maps</h2>
        <iframe
            width="400"
            height="300"
            src="https://www.google.com/maps/embed?pb=..."
            style="border:0;"
            allowfullscreen>
        </iframe>
    </div>
</body>
</html>`}),t.jsx(W,{questions:[{question:"Which attribute enables video controls like play/pause?",options:["controls","autoplay","muted","loop"],correctAnswer:0,explanation:"The controls attribute adds video controls (play, pause, volume, etc.) to the video player."},{question:"What element is used to embed external web content?",options:["<video>","<audio>","<iframe>","<embed>"],correctAnswer:2,explanation:"<iframe> is used to embed external content like YouTube videos, Google Maps, or other web pages."}]}),t.jsx(z,{question:"Create an HTML page with an embedded YouTube video using iframe. The video should have a width of 560px and height of 315px. Also add a fallback message for browsers that don't support iframes.",hint:"Use iframe with src pointing to a YouTube embed URL, and include width, height, and frameborder attributes",solution:`<!DOCTYPE html>
<html>
<head>
    <title>Embedded YouTube Video</title>
</head>
<body>
    <h1>Learning Web Development</h1>

    <h2>Introduction to HTML5</h2>

    <div class="video-container">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qz0aGYrrwhU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            Your browser does not support iframe.
        </iframe>
    </div>

    <p><em>Watch this video to learn the basics of HTML5!</em></p>
</body>
</html>`}),t.jsx(z,{question:"Create an audio player page that uses the HTML5 audio element. Include multiple source formats for browser compatibility (mp3, ogg, wav). Add attributes like controls, autoplay (commented out), loop, and muted.",hint:"Use the audio tag with multiple source elements inside it. The browser will use the first format it supports.",solution:`<!DOCTYPE html>
<html>
<head>
    <title>Audio Player</title>
</head>
<body>
    <h1>Music Player</h1>

    <h2>Relaxing Music</h2>

    <audio controls loop muted>
        <source src="music.mp3" type="audio/mpeg">
        <source src="music.ogg" type="audio/ogg">
        <source src="music.wav" type="audio/wav">
        Your browser does not support the audio element.
    </audio>

    <h2>Audio Features</h2>
    <ul>
        <li><strong>controls</strong> - Shows play, pause, volume buttons</li>
        <li><strong>loop</strong> - Repeats the audio continuously</li>
        <li><strong>autoplay</strong> - Starts playing automatically (currently disabled)</li>
        <li><strong>muted</strong> - Starts muted (remove for sound)</li>
    </ul>

    <p><em>Note: You need actual audio files for this to work!</em></p>
</body>
</html>`}),t.jsx(z,{question:"Create a video gallery page with two video elements. First video should autoplay and be muted. Second video should have a poster image and play controls. Include width and height for both.",hint:"Use video tag with autoplay, muted, controls attributes. Poster attribute shows an image before the video loads.",solution:`<!DOCTYPE html>
<html>
<head>
    <title>Video Gallery</title>
    <style>
        .video-wrapper {
            display: inline-block;
            margin: 20px;
            padding: 15px;
            background: #f5f5f5;
            border-radius: 10px;
        }
        h1 { text-align: center; }
        h3 { text-align: center; margin-bottom: 10px; }
    </style>
</head>
<body>
    <h1>Video Gallery</h1>

    <div class="video-wrapper">
        <h3>Autoplay Video (Muted)</h3>
        <video width="400" autoplay muted loop>
            <source src="background.mp4" type="video/mp4">
            <source src="background.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
        <p><small>This video autoplays with sound muted</small></p>
    </div>

    <div class="video-wrapper">
        <h3>Interactive Video</h3>
        <video width="400" controls poster="https://picsum.photos/400/225">
            <source src="presentation.mp4" type="video/mp4">
            <source src="presentation.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
        <p><small>Click play to start the video</small></p>
    </div>
</body>
</html>`})]})},semantic:{id:"semantic",title:"Semantic HTML",icon:t.jsx(fc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Semantic HTML Elements"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Semantic HTML elements clearly describe their meaning to both the browser and the developer. They improve accessibility and SEO."}),t.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-yellow-800 dark:text-yellow-200 mb-3",children:"Why Semantic HTML?"}),t.jsxs("ul",{className:"space-y-2 text-yellow-700 dark:text-yellow-300",children:[t.jsx("li",{children:"✅ Better accessibility for screen readers"}),t.jsx("li",{children:"✅ Improved SEO (Search Engine Optimization)"}),t.jsx("li",{children:"✅ Easier to maintain and understand code"}),t.jsx("li",{children:"✅ Standardized structure across websites"})]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{tag:"<header>",desc:"Introductory content or navigation links"},{tag:"<nav>",desc:"Navigation links section"},{tag:"<main>",desc:"Main content of the document"},{tag:"<article>",desc:"Self-contained content"},{tag:"<section>",desc:"Thematic grouping of content"},{tag:"<aside>",desc:"Content aside from main content"},{tag:"<footer>",desc:"Footer for a section or page"},{tag:"<figure>",desc:"Self-contained content (images, diagrams)"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3",children:[t.jsx("code",{className:"text-sm text-blue-600 dark:text-blue-400",children:i.tag}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:i.desc})]},f))})]}),t.jsx(U,{title:"Semantic HTML Structure",language:"html",initialCode:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic Page Layout</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; }
        header, nav, main, article, aside, footer {
            padding: 20px;
            margin: 10px;
            border-radius: 8px;
        }
        header { background: #333; color: white; }
        nav { background: #666; }
        nav a { color: white; margin-right: 15px; }
        main { background: #f4f4f4; }
        article { background: white; }
        aside { background: #ddd; }
        footer { background: #333; color: white; }
    </style>
</head>
<body>
    <header>
        <h1>My Personal Blog</h1>
        <p>Sharing thoughts on web development</p>
    </header>

    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
    </nav>

    <main>
        <article>
            <header>
                <h2>Understanding Semantic HTML</h2>
                <p>Published on January 15, 2024</p>
            </header>
            <p>Semantic HTML elements clearly describe their meaning...</p>
            <footer>
                <p>Author: John Doe | 5 min read</p>
            </footer>
        </article>

        <article>
            <header>
                <h2>CSS Grid vs Flexbox</h2>
                <p>Published on January 10, 2024</p>
            </header>
            <p>Both CSS Grid and Flexbox are powerful layout tools...</p>
            <footer>
                <p>Author: John Doe | 7 min read</p>
            </footer>
        </article>
    </main>

    <aside>
        <h3>About Me</h3>
        <p>Web developer passionate about accessibility.</p>
        <h3>Categories</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2024 My Personal Blog. All rights reserved.</p>
    </footer>
</body>
</html>`}),t.jsx(z,{question:"Convert this non-semantic HTML to semantic HTML using appropriate semantic tags: A div with id='header' containing navigation links, a div with id='main' containing articles, and a div with id='footer' containing copyright info.",hint:"Think about which semantic tags describe the purpose of each section",solution:`<header>
    <nav>
        <!-- navigation links here -->
    </nav>
</header>

<main>
    <article>
        <!-- article content here -->
    </article>
</main>

<footer>
    <p>&copy; 2024 Your Company</p>
</footer>`}),t.jsx(W,{questions:[{question:"Which semantic element should be used for the main navigation links of a website?",options:["<div class='nav'>","<navigation>","<nav>","<menu>"],correctAnswer:2,explanation:"The <nav> element is specifically designed for navigation links and helps screen readers and search engines understand the site's navigation structure."},{question:"What is the primary purpose of using semantic HTML elements?",options:["To make the page load faster","To improve code readability for developers only","To provide meaning and structure that browsers and assistive technologies can understand","To reduce the number of HTML tags needed"],correctAnswer:2,explanation:"Semantic HTML provides meaning to both browsers and developers, improving accessibility, SEO, and code maintainability."},{question:"Which element is most appropriate for a blog post that could stand alone as independent content?",options:["<div class='post'>","<section>","<article>","<main>"],correctAnswer:2,explanation:"The <article> element is designed for self-contained content that could be independently distributed or reused, like blog posts, news articles, or forum posts."}]})]})}},C=Object.values(L);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx(Gn,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 2: HTML Fundamentals"}),t.jsx("p",{className:"text-white/80",children:"Master HTML tags, elements, forms, tables, lists, images, and multimedia content"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:C.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:C.map((i,f)=>{const P=p===i.id,H=y[`chapter2-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${P?"border-orange-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>N(P?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${H?"bg-green-100 dark:bg-green-900/30 text-green-600":"bg-orange-100 dark:bg-orange-900/30 text-orange-600"}`,children:H?t.jsx(M,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",P?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),P?t.jsx(Bs,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),P&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(W,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!H&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(M,{className:"w-5 h-5"})," Mark as Complete"]}),H&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(M,{className:"w-5 h-5"})," Completed"]})]})]})]},i.id)})})]})}function hh({progress:y,updateProgress:E}){const[p,N]=G.useState("css-intro"),S=i=>{E("chapter3",i,!0)},L={"css-intro":{id:"css-intro",title:"Introduction to CSS",icon:t.jsx(Yn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"What is CSS?"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"CSS (Cascading Style Sheets)"})," is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."]}),t.jsxs("div",{className:"bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"Why Learn CSS?"}),t.jsxs("ul",{className:"space-y-2 text-white/90",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Control the visual design of web pages"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Separate content from presentation"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Create responsive, mobile-friendly designs"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Enable animations and interactive effects"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"CSS Syntax"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-blue-600 dark:text-blue-400",children:"/* Selector */"}),t.jsxs("p",{className:"text-purple-600 dark:text-purple-400",children:["h1 ",t.jsx("span",{className:"text-gray-500",children:"{"})]}),t.jsxs("p",{className:"ml-4 text-green-600 dark:text-green-400",children:["color: ",t.jsx("span",{className:"text-orange-500",children:"blue"}),";"]}),t.jsxs("p",{className:"ml-4 text-green-600 dark:text-green-400",children:["font-size: ",t.jsx("span",{className:"text-orange-500",children:"24px"}),";"]}),t.jsxs("p",{className:"ml-4 text-green-600 dark:text-green-400",children:["text-align: ",t.jsx("span",{className:"text-orange-500",children:"center"}),";"]}),t.jsx("p",{className:"text-gray-500",children:"}"})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{part:"Selector",desc:"Points to the HTML element you want to style",color:"blue"},{part:"Property",desc:"The attribute you want to change",color:"green"},{part:"Value",desc:"The new value for the property",color:"orange"}].map((i,f)=>t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center",children:[t.jsx("p",{className:"font-bold text-blue-800 dark:text-blue-200 mb-2",children:i.part}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]},f))})]}),t.jsx(U,{title:"Your First CSS",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>CSS Basics</title>
    <style>
        /* Change the background color */
        body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            padding: 20px;
        }

        /* Style the heading */
        h1 {
            color: #333;
            text-align: center;
        }

        /* Style paragraphs */
        p {
            color: #666;
            line-height: 1.6;
            font-size: 18px;
        }

        /* Style with class */
        .highlight {
            background-color: yellow;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>Welcome to CSS!</h1>
    <p>This is a normal paragraph.</p>
    <p class="highlight">This paragraph has a yellow highlight!</p>
</body>
</html>`}),t.jsx(z,{question:"Create a CSS rule that styles all paragraph elements with red text color and a font size of 16px.",hint:"Use the p element selector and define properties for color and font-size",solution:`p {
    color: red;
    font-size: 16px;
}`}),t.jsx(W,{questions:[{question:"What does CSS stand for?",options:["Computer Style Sheets","Cascading Style Sheets","Creative Style Syntax","Colorful Style Software"],correctAnswer:1,explanation:"CSS stands for Cascading Style Sheets - it's used to control the presentation and layout of HTML documents."},{question:"Which part of a CSS rule selects the element to style?",options:["Property","Value","Selector","Declaration"],correctAnswer:2,explanation:"The selector is the part that points to the HTML element you want to style (e.g., p, .class, #id)."},{question:"How do you include CSS directly in an HTML file?",options:["<css>","<style>","<script>","<link>"],correctAnswer:1,explanation:"The <style> tag is used to include CSS directly within an HTML document, typically in the <head> section."}]})]})},"css-selectors":{id:"css-selectors",title:"CSS Selectors",icon:t.jsx(gc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"CSS Selectors"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"Selectors"})," are patterns used to select the element(s) you want to style. CSS selectors can select elements based on their tag name, class, id, attributes, and more."]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Basic Selectors"}),t.jsx("div",{className:"space-y-3 mb-6",children:[{selector:"element",example:"p { }",desc:"Selects all paragraph elements"},{selector:".class",example:".highlight { }",desc:'Selects elements with class="highlight"'},{selector:"#id",example:"#header { }",desc:'Selects the element with id="header"'},{selector:"*",example:"* { }",desc:"Selects all elements"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center gap-4",children:[t.jsx("code",{className:"px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded font-mono",children:i.selector}),t.jsx("code",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-mono",children:i.example}),t.jsx("span",{className:"text-gray-600 dark:text-gray-400 flex-1",children:i.desc})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Combinators"}),t.jsx("div",{className:"space-y-3 mb-6",children:[{selector:"A B",example:"div p { }",desc:"Descendant selector - p inside div"},{selector:"A > B",example:"div > p { }",desc:"Child selector - direct child of div"},{selector:"A + B",example:"h1 + p { }",desc:"Adjacent sibling - p right after h1"},{selector:"A ~ B",example:"h1 ~ p { }",desc:"General sibling - all p after h1"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center gap-4",children:[t.jsx("code",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded font-mono",children:i.selector}),t.jsx("code",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-mono",children:i.example}),t.jsx("span",{className:"text-gray-600 dark:text-gray-400 flex-1",children:i.desc})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Pseudo-class Selectors"}),t.jsx("div",{className:"space-y-3 mb-6",children:[{selector:":hover",desc:"Mouse over element"},{selector:":focus",desc:"Element has focus"},{selector:":first-child",desc:"First child of parent"},{selector:":last-child",desc:"Last child of parent"},{selector:":nth-child(n)",desc:"Nth child of parent"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center gap-4",children:[t.jsx("code",{className:"px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded font-mono",children:i.selector}),t.jsx("span",{className:"text-gray-600 dark:text-gray-400 flex-1",children:i.desc})]},f))})]}),t.jsx(U,{title:"Practice CSS Selectors",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <style>
        /* Element selector */
        p { color: blue; }

        /* Class selector */
        .highlight { background: yellow; }

        /* ID selector */
        #special { border: 2px solid red; }

        /* Descendant selector */
        .container p { font-weight: bold; }

        /* Pseudo-class */
        a:hover { color: green; text-decoration: underline; }

        /* First child */
        li:first-child { color: purple; font-weight: bold; }
    </style>
</head>
<body>
    <h1 id="special">CSS Selectors Practice</h1>
    <div class="container">
        <p>I'm bold because I'm inside .container</p>
        <p>Me too!</p>
    </div>
    <p>I'm just a normal paragraph</p>
    <p class="highlight">I'm highlighted!</p>
    <a href="#">Hover over me!</a>
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ul>
</body>
</html>`}),t.jsx(W,{questions:[{question:"Which selector targets an element with id='main'?",options:[".main","#main","element.main","*main"],correctAnswer:1,explanation:"The # symbol is used for ID selectors in CSS."},{question:"What does the descendant selector (A B) do?",options:["Selects B that is a direct child of A","Selects B that is anywhere inside A","Selects A and B","Selects A only if it has B"],correctAnswer:1,explanation:"The descendant selector (space) selects all B elements that are nested anywhere inside A."}]}),t.jsx(z,{question:"Write CSS selectors for the following: 1) All paragraphs inside a div, 2) All buttons with class 'primary', 3) The element with id='submit', 4) The first child of any list",hint:"Use space for descendant, dot for class, hash for ID, and :first-child pseudo-class",solution:`/* 1) All paragraphs inside a div */
div p {
    color: blue;
}

/* 2) All buttons with class 'primary' */
button.primary {
    background-color: #007bff;
    color: white;
}

/* 3) The element with id='submit' */
#submit {
    font-weight: bold;
    padding: 10px 20px;
}

/* 4) The first child of any list */
li:first-child {
    font-weight: bold;
    color: red;
}`}),t.jsx(z,{question:"Create CSS rules using pseudo-classes to: 1) Style links when hovered, 2) Style the first paragraph of an article, 3) Style every other row (zebra striping) in a table, 4) Style form inputs when focused",hint:"Use :hover, :first-of-type, :nth-child(even), and :focus pseudo-classes",solution:`/* 1) Links on hover */
a:hover {
    color: #ff6600;
    text-decoration: underline;
}

/* 2) First paragraph of an article */
article p:first-of-type {
    font-size: 1.2em;
    font-weight: bold;
}

/* 3) Zebra striping in tables */
tr:nth-child(even) {
    background-color: #f2f2f2;
}

/* 4) Form inputs when focused */
input:focus, textarea:focus, select:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    outline: none;
}`})]})},"css-box-model":{id:"css-box-model",title:"CSS Box Model",icon:t.jsx(ic,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Understanding the Box Model"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["Every element in HTML is treated as a box. The ",t.jsx("strong",{children:"CSS Box Model"})," consists of: content, padding, border, and margin. These properties control the space around and within an element."]}),t.jsx(ts,{type:"diagram",title:"CSS Box Model Visualization",description:"See how each part of the box model works",content:t.jsxs("div",{className:"bg-yellow-100 dark:bg-yellow-900/30 rounded-xl p-8 max-w-md mx-auto",children:[t.jsx("p",{className:"text-center text-sm text-yellow-700 dark:text-yellow-300 mb-4",children:"Margin (outside)"}),t.jsxs("div",{className:"bg-orange-100 dark:bg-orange-900/30 rounded-lg p-1",children:[t.jsx("p",{className:"text-center text-sm text-orange-700 dark:text-orange-300",children:"Border"}),t.jsxs("div",{className:"bg-green-100 dark:bg-green-900/30 rounded p-1",children:[t.jsx("p",{className:"text-center text-sm text-green-700 dark:text-green-300",children:"Padding"}),t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded p-6 text-center",children:[t.jsx("p",{className:"font-bold text-blue-800 dark:text-blue-200",children:"Content"}),t.jsx("p",{className:"text-xs text-blue-600 dark:text-blue-400",children:"width × height"})]})]})]})]})}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3 mt-6",children:"Box Model Properties"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{prop:"content",desc:"The actual content area",example:"text, images, etc."},{prop:"padding",desc:"Space inside the border",example:"padding: 20px;"},{prop:"border",desc:"Line around padding",example:"border: 2px solid black;"},{prop:"margin",desc:"Space outside the border",example:"margin: 10px auto;"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("p",{className:"font-bold text-purple-600 dark:text-purple-400 mb-1",children:i.prop}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:i.desc}),t.jsx("code",{className:"text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded",children:i.example})]},f))}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Box-Sizing: Border-Box"}),t.jsxs("p",{className:"text-blue-700 dark:text-blue-300 mb-3",children:["By default, width/height only applies to content. Use ",t.jsx("code",{children:"box-sizing: border-box"})," to include padding and border in the total width/height!"]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold mb-2",children:"Without border-box:"}),t.jsx("p",{className:"text-sm text-gray-600",children:"width: 100px + 20px padding + 4px border = 124px total"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold mb-2",children:"With border-box:"}),t.jsx("p",{className:"text-sm text-gray-600",children:"width: 100px (includes padding + border) = 100px total"})]})]})]})]}),t.jsx(U,{title:"Box Model Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 200px;
            height: 100px;
            background-color: #3498db;
            color: white;
            padding: 20px;
            border: 5px solid #2c3e50;
            margin: 30px;
        }

        .box-content {
            box-sizing: border-box;
            width: 200px;
            height: 100px;
            background-color: #e74c3c;
            color: white;
            padding: 20px;
            border: 5px solid #c0392b;
            margin: 30px;
        }
    </style>
</head>
<body>
    <h3>Without box-sizing: border-box</h3>
    <div class="box">I'm a box with content + padding + border</div>

    <h3>With box-sizing: border-box</h3>
    <div class="box-content">I'm the same size but border-box!</div>

    <p>Notice: The red box (border-box) stays at exactly 200px wide,
    while the blue box is actually wider due to padding and border.</p>
</body>
</html>`}),t.jsx(z,{question:"Create a div with: total width of exactly 200px (using border-box), 15px padding, 3px solid blue border, and 20px margin on all sides.",hint:"Use box-sizing: border-box, padding, border, and margin properties",solution:`.box {
    box-sizing: border-box;
    width: 200px;
    padding: 15px;
    border: 3px solid blue;
    margin: 20px;
}`}),t.jsx(W,{questions:[{question:"What does margin control?",options:["Space inside the element","Space between elements","The border width","The content size"],correctAnswer:1,explanation:"Margin controls the space OUTSIDE the border, between elements."},{question:"Which property includes padding and border in the element's total width?",options:["margin: auto","box-sizing: border-box","display: flex","overflow: hidden"],correctAnswer:1,explanation:"box-sizing: border-box includes padding and border in the width/height calculation."}]})]})},"css-layout":{id:"css-layout",title:"CSS Layout (Display & Position)",icon:t.jsx(fc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"CSS Display Property"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["The ",t.jsx("strong",{children:"display"})," property determines how an element is displayed. Common values include block, inline, inline-block, and flex."]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{value:"block",desc:"Takes full width, starts on new line",example:"div, p, h1"},{value:"inline",desc:"Takes only needed width, stays in line",example:"span, a, strong"},{value:"inline-block",desc:"Like inline but can have width/height",example:"button, input"},{value:"none",desc:"Element is hidden and removed from flow",example:"display: none"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("code",{className:"px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded font-mono",children:i.value}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:i.desc}),t.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["e.g. ",i.example]})]},f))}),t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8",children:"CSS Position Property"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["The ",t.jsx("strong",{children:"position"})," property specifies the positioning method for an element."]}),t.jsx("div",{className:"space-y-3 mb-6",children:[{value:"static",desc:"Default. Normal document flow",note:"Not affected by top, bottom, left, right"},{value:"relative",desc:"Positioned relative to normal position",note:"Other elements ignore this element's space"},{value:"absolute",desc:"Positioned relative to nearest positioned ancestor",note:"Removed from normal document flow"},{value:"fixed",desc:"Positioned relative to viewport",note:"Stays in place when scrolling"},{value:"sticky",desc:"Switches between relative and fixed",note:"Sticks when scrolling reaches threshold"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[t.jsx("code",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded font-mono",children:i.value}),t.jsx("span",{className:"font-medium text-gray-800 dark:text-white",children:i.desc})]}),t.jsx("p",{className:"text-sm text-gray-500",children:i.note})]},f))})]}),t.jsx(U,{title:"Display and Position Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            margin: 10px;
        }

        .static {
            background: #3498db;
            position: static;
        }

        .relative {
            background: #e74c3c;
            position: relative;
            left: 50px;
            top: 20px;
        }

        .absolute {
            background: #2ecc71;
            position: absolute;
            right: 10px;
            top: 10px;
        }

        .fixed {
            background: #9b59b6;
            position: fixed;
            bottom: 10px;
            right: 10px;
        }

        .container {
            position: relative;
            background: #f0f0f0;
            padding: 20px;
            min-height: 200px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box static">Static</div>
        <div class="box relative">Relative (moved)</div>
        <div class="box absolute">Absolute (in container)</div>
    </div>
    <div class="box fixed">Fixed (viewport)</div>
</body>
</html>`}),t.jsx(z,{question:"Create a tooltip that appears above an element using position: absolute. The tooltip should be positioned 10px above its parent element.",hint:"Parent needs position: relative, tooltip needs position: absolute with top: -10px",solution:`.parent {
    position: relative;
}

.tooltip {
    position: absolute;
    bottom: 100%; /* Position above the element */
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 10px;
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
}`}),t.jsx(W,{questions:[{question:"What is the difference between display: inline and display: block?",options:["No difference","inline stays in same line, block takes full width","block is smaller than inline","inline cannot have padding"],correctAnswer:1,explanation:"Inline elements stay on the same line and only take needed width. Block elements start on a new line and take full width."},{question:"What happens when an element has position: absolute?",options:["It stays in normal document flow","It positions relative to the viewport","It positions relative to nearest positioned ancestor","It becomes fixed to the page"],correctAnswer:2,explanation:"position: absolute positions the element relative to the nearest positioned (not static) ancestor element."},{question:"What does z-index control?",options:["Horizontal position","Vertical position","Stack order of overlapping elements","Element size"],correctAnswer:2,explanation:"z-index controls the stacking order of elements. Higher values appear on top of lower values."}]}),t.jsx(z,{question:"Create a fixed navigation bar that stays at the top of the page when scrolling. The navbar should have a height of 60px, dark background, white text, and be positioned at the top with z-index to stay above other content.",hint:"Use position: fixed, top: 0, width: 100%, and z-index for layering",solution:`.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

/* Add padding to body to prevent content from hiding under navbar */
body {
    padding-top: 60px;
}`}),t.jsx(z,{question:"Create a card overlay effect where a dark semi-transparent overlay appears over an image when hovering. Use position: absolute and opacity transitions.",hint:"Parent needs position: relative, overlay needs position: absolute with opacity 0, change to opacity 1 on hover",solution:`.card {
    position: relative;
    width: 300px;
    height: 200px;
    overflow: hidden;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card:hover .overlay {
    opacity: 1;
}`})]})},"css-flexbox":{id:"css-flexbox",title:"CSS Flexbox",icon:t.jsx(Qp,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Flexbox Layout"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"Flexbox"})," is a one-dimensional layout method for arranging items in rows or columns. It makes complex layouts easy to implement with clean, maintainable code."]}),t.jsxs("div",{className:"bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Container Properties (Parent)"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:["display: flex","flex-direction","justify-content","align-items","flex-wrap","gap"].map((i,f)=>t.jsx("code",{className:"bg-white/20 px-2 py-1 rounded text-sm",children:i},f))})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"flex-direction Options"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:["row","row-reverse","column","column-reverse"].map((i,f)=>t.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 text-center",children:t.jsx("p",{className:"font-mono text-sm text-purple-600",children:i})},f))})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"justify-content Options"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-2",children:["flex-start","flex-end","center","space-between","space-around"].map((i,f)=>t.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 text-center",children:t.jsx("p",{className:"font-mono text-xs text-blue-600",children:i})},f))})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Item Properties (Children)"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[{prop:"flex-grow",desc:"How much to grow"},{prop:"flex-shrink",desc:"How much to shrink"},{prop:"flex-basis",desc:"Initial size"},{prop:"align-self",desc:"Override alignment"},{prop:"order",desc:"Display order"}].map((i,f)=>t.jsxs("div",{className:"bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3",children:[t.jsx("code",{className:"text-orange-700 dark:text-orange-300",children:i.prop}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]},f))})]}),t.jsx(U,{title:"Flexbox Gallery",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 20px;
            background: #f5f5f5;
        }

        .item {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            min-width: 100px;
        }

        .item:nth-child(2) {
            flex-grow: 2; /* Takes double space */
        }

        .item:nth-child(4) {
            flex-shrink: 0; /* Won't shrink */
        }
    </style>
</head>
<body>
    <h3>Flexbox Gallery</h3>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2 (grows)</div>
        <div class="item">3</div>
        <div class="item">4 (no shrink)</div>
        <div class="item">5</div>
    </div>

    <h3 style="margin-top: 30px;">Try changing flex-direction!</h3>
    <p>Add: flex-direction: column;</p>
</body>
</html>`}),t.jsx(W,{questions:[{question:"Which property creates a flex container?",options:["position: flex","display: flex","flex: container","layout: flexbox"],correctAnswer:1,explanation:"display: flex creates a flex container."},{question:"What does justify-content control?",options:["Vertical alignment of items","Horizontal alignment of items","Item order","Item size"],correctAnswer:1,explanation:"justify-content controls alignment along the main axis (horizontal in row direction)."}]}),t.jsx(z,{question:"Create a horizontal navigation bar using flexbox. The navbar should have a logo on the left, navigation links in the center, and a login button on the right.",hint:"Use display: flex, justify-content: space-between, and align-items: center on the container",solution:`.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    padding: 15px 30px;
    color: white;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #3498db;
}

.login-btn {
    background-color: #3498db;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s;
}

.login-btn:hover {
    background-color: #2980b9;
}`}),t.jsx(z,{question:"Create a responsive flexbox-based card layout where: cards are 300px wide, they wrap to new lines as needed, gaps between cards are 20px, and cards are vertically centered in the container.",hint:"Use flex-wrap: wrap, gap, and justify-content with center alignment",solution:`.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}

.card {
    width: 300px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.card-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}`})]})},"css-grid":{id:"css-grid",title:"CSS Grid",icon:t.jsx(xc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"CSS Grid Layout"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"CSS Grid"})," is a two-dimensional layout system that handles both columns and rows simultaneously. It's perfect for complex page layouts and gallery grids."]}),t.jsxs("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Grid Container Properties"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:["display: grid","grid-template-columns","grid-template-rows","grid-template-areas","gap","grid-column/row"].map((i,f)=>t.jsx("code",{className:"bg-white/20 px-2 py-1 rounded text-sm",children:i},f))})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Defining Grid Tracks"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["grid-template-columns: ",t.jsx("span",{className:"text-green-600",children:"100px 100px 100px"}),";"]}),t.jsxs("p",{className:"text-purple-600",children:["grid-template-columns: ",t.jsx("span",{className:"text-green-600",children:"1fr 2fr 1fr"}),";"]}),t.jsxs("p",{className:"text-purple-600",children:["grid-template-columns: ",t.jsx("span",{className:"text-green-600",children:"repeat(3, 1fr)"}),";"]}),t.jsxs("p",{className:"text-purple-600",children:["grid-template-columns: ",t.jsx("span",{className:"text-green-600",children:"repeat(auto-fit, minmax(200px, 1fr))"}),";"]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Grid Item Placement"}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsxs("p",{className:"text-blue-600",children:[".item ","{"]}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["grid-column: ",t.jsx("span",{className:"text-green-600",children:"1 / 3"}),"; ",t.jsx("span",{className:"text-gray-500",children:"/* span columns 1 to 3 */"})]}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["grid-row: ",t.jsx("span",{className:"text-green-600",children:"2 / 4"}),"; ",t.jsx("span",{className:"text-gray-500",children:"/* span rows 2 to 4 */"})]}),t.jsx("p",{className:"text-blue-600",children:"}"})]})]}),t.jsx(U,{title:"CSS Grid Layout",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
            gap: 15px;
            padding: 20px;
            background: #f5f5f5;
        }

        .grid-item {
            background: linear-gradient(135deg, #11998e, #38ef7d);
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
        }

        .wide {
            grid-column: span 2;
            background: linear-gradient(135deg, #fc4a1a, #f7b733);
        }

        .tall {
            grid-row: span 2;
            background: linear-gradient(135deg, #8e2de2, #4a00e0);
            padding: 50px;
        }
    </style>
</head>
<body>
    <h3>CSS Grid Layout</h3>
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item wide">2 (wide)</div>
        <div class="grid-item">3</div>
        <div class="grid-item tall">4 (tall)</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
    </div>
</body>
</html>`}),t.jsx(z,{question:"Create a responsive grid layout with 4 equal columns that automatically wraps to new rows as needed.",hint:"Use display: grid with grid-template-columns and repeat function with auto-fit or auto-fill",solution:`.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

/* For responsive behavior that wraps automatically: */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}`}),t.jsx(W,{questions:[{question:"What does 'fr' unit mean in CSS Grid?",options:["Fixed ratio","Fraction of available space","Full row","Frame reference"],correctAnswer:1,explanation:"fr stands for 'fraction unit' and represents a fraction of the available space in the grid container."},{question:"How do you make a grid item span 2 columns?",options:["column-span: 2","grid-column: span 2","columns: 2","grid-span: 2"],correctAnswer:1,explanation:"grid-column: span 2 makes an item span across 2 columns in the grid."}]}),t.jsx(z,{question:"Create a 3-column grid layout where the first column takes 2fr space, the middle takes 1fr, and the last takes 1fr. Add a gap of 20px between all items.",hint:"Use grid-template-columns with fr units to create unequal column widths",solution:`.grid-container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 20px;
}

/* Each grid item styling */
.grid-item {
    background: #3498db;
    color: white;
    padding: 30px;
    text-align: center;
    border-radius: 8px;
}

/* To make it responsive, use minmax: */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}`})]})},"css-colors-backgrounds":{id:"css-colors-backgrounds",title:"Colors and Backgrounds",icon:t.jsx(Yn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"CSS Colors"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"CSS supports multiple ways to specify colors: color names, HEX codes, RGB, RGBA, HSL, and HSLA."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Color Formats"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsx("p",{className:"text-red-500",children:"color: red;"}),t.jsx("p",{className:"text-purple-500",children:"color: #ff00ff;"}),t.jsx("p",{className:"text-blue-500",children:"color: rgb(0, 0, 255);"}),t.jsx("p",{className:"text-green-500",children:"color: rgba(0, 255, 0, 0.5);"}),t.jsx("p",{className:"text-teal-500",children:"color: hsl(180, 100%, 50%);"})]})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Background Properties"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsx("p",{children:"background-color"}),t.jsx("p",{children:"background-image"}),t.jsx("p",{children:"background-size"}),t.jsx("p",{children:"background-position"}),t.jsx("p",{children:"background-repeat"})]})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-3",children:"Gradient Syntax"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["background: ",t.jsx("span",{className:"text-green-600",children:"linear-gradient(direction, color1, color2)"}),";"]}),t.jsx("p",{className:"text-gray-500 mt-2",children:"/* Examples: */"}),t.jsx("p",{className:"text-blue-500",children:"linear-gradient(to right, red, yellow)"}),t.jsx("p",{className:"text-blue-500",children:"linear-gradient(45deg, blue, pink)"}),t.jsx("p",{className:"text-blue-500",children:"radial-gradient(circle, red, blue)"})]})]})]}),t.jsx(U,{title:"Colors and Gradients",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            padding: 30px;
            margin: 10px;
            border-radius: 10px;
            color: white;
            text-align: center;
        }

        .solid { background-color: #3498db; }

        .gradient-h {
            background: linear-gradient(to right, #667eea, #764ba2);
        }

        .gradient-d {
            background: linear-gradient(135deg, #f093fb, #f5576c);
        }

        .radial {
            background: radial-gradient(circle, #4facfe, #00f2fe);
        }

        .transparent {
            background: rgba(231, 76, 60, 0.7);
            border: 3px solid rgba(231, 76, 60, 1);
        }
    </style>
</head>
<body>
    <div class="box solid">Solid Color</div>
    <div class="box gradient-h">Horizontal Gradient</div>
    <div class="box gradient-d">Diagonal Gradient</div>
    <div class="box radial">Radial Gradient</div>
    <div class="box transparent">Semi-Transparent</div>
</body>
</html>`}),t.jsx(z,{question:"Create a button with a gradient background from purple to pink, white text, rounded corners, and a subtle shadow.",hint:"Use linear-gradient, text-shadow for text, border-radius for corners, and box-shadow",solution:`.gradient-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 25px;
    box-shadow: 0 4px 15px rgba(118, 75, 162, 0.4);
    cursor: pointer;
    transition: transform 0.2s;
}

.gradient-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(118, 75, 162, 0.6);
}`}),t.jsx(W,{questions:[{question:"What does rgba(255, 0, 0, 0.5) represent?",options:["Red with 50% opacity","Red with 50% brightness","Green with 50% opacity","Blue with 50% opacity"],correctAnswer:0,explanation:"rgba stands for Red, Green, Blue, Alpha. The last value (0.5) represents opacity/transparency."},{question:"What is the difference between linear-gradient and radial-gradient?",options:["No difference","linear goes in one direction, radial spreads from center","radial is faster","linear is deprecated"],correctAnswer:1,explanation:"linear-gradient creates a gradient in a specified direction (like left to right), while radial-gradient creates a circular gradient spreading from the center."}]}),t.jsx(z,{question:"Create a card with a background image that covers the entire card, with a dark overlay for text readability.",hint:"Use background-image, background-size: cover, and a pseudo-element or rgba overlay",solution:`.card {
    position: relative;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('image.jpg');
    background-size: cover;
    background-position: center;
    z-index: 1;
}

.card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
}

.card-content {
    position: relative;
    z-index: 3;
    color: white;
    padding: 20px;
}`})]})},"css-typography":{id:"css-typography",title:"CSS Typography",icon:t.jsx(wc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Text and Typography"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"CSS provides extensive control over text appearance including font families, sizes, weights, styles, and spacing."}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{prop:"font-family",example:"Arial, sans-serif"},{prop:"font-size",example:"16px, 1.5em, 2rem"},{prop:"font-weight",example:"normal, bold, 100-900"},{prop:"font-style",example:"normal, italic, oblique"},{prop:"text-align",example:"left, center, right, justify"},{prop:"text-decoration",example:"none, underline, line-through"},{prop:"line-height",example:"1.5, 24px"},{prop:"letter-spacing",example:"2px, -1px"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3",children:[t.jsx("code",{className:"text-purple-600 dark:text-purple-400",children:i.prop}),t.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["e.g. ",i.example]})]},f))}),t.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-yellow-800 dark:text-yellow-200 mb-3",children:"Google Fonts Example"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsx("p",{className:"text-green-600"}),t.jsx("p",{className:"text-blue-600",children:'<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">'}),t.jsx("p",{className:"text-green-600 mt-3",children:"/* In CSS */"}),t.jsxs("p",{className:"text-purple-600",children:["font-family: ",t.jsx("span",{className:"text-green-600",children:"'Roboto', sans-serif"}),";"]})]})]})]}),t.jsx(U,{title:"Typography Showcase",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Open+Sans&display=swap" rel="stylesheet">
    <style>
        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3em;
            font-weight: bold;
            text-align: center;
        }

        .uppercase {
            text-transform: uppercase;
            letter-spacing: 5px;
        }

        .shadow {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .fancy {
            font-style: italic;
            text-decoration: underline wavy red;
            line-height: 2;
        }

        p {
            font-family: 'Open Sans', sans-serif;
            font-size: 1.2em;
            line-height: 1.8;
            text-align: justify;
        }
    </style>
</head>
<body>
    <h1 class="shadow">Typography Demo</h1>
    <p class="uppercase">This text is uppercase with letter spacing</p>
    <p class="fancy">This paragraph has italic text, wavy underline, and double line height.</p>
    <p>This is normal paragraph text with proper line height for readability.</p>
</body>
</html>`}),t.jsx(W,{questions:[{question:"What is the difference between em and rem units?",options:["No difference","em is relative to parent, rem is relative to root","em is larger than rem","rem is deprecated"],correctAnswer:1,explanation:"em units are relative to the font-size of their parent element, while rem units are relative to the root (html) element's font-size."},{question:"Which property controls the space between lines of text?",options:["letter-spacing","word-spacing","line-height","text-indent"],correctAnswer:2,explanation:"line-height controls the space between lines of text, making paragraphs more readable."}]}),t.jsx(z,{question:"Create a styled heading with: Google Font 'Roboto', font-size of 3rem, bold weight, text-shadow effect, and uppercase text with letter-spacing of 4px.",hint:"Import Google Font in head, use font-family, font-size, font-weight, text-shadow, text-transform, and letter-spacing",solution:`/* In HTML head */
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">

/* CSS */
.heading {
    font-family: 'Roboto', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    color: #2c3e50;
    text-align: center;
}`}),t.jsx(z,{question:"Create a readable article layout with proper typography: body font-size of 18px with 1.6 line-height, paragraph text-align justified, first letter of first paragraph styled as drop cap, and hanging indents for blockquotes.",hint:"Use line-height, text-align, ::first-letter pseudo-element, and padding/margin for blockquotes",solution:`article {
    max-width: 700px;
    margin: 0 auto;
    font-family: 'Georgia', serif;
    font-size: 18px;
    line-height: 1.6;
}

article p {
    text-align: justify;
    margin-bottom: 1em;
}

article p:first-of-type::first-letter {
    font-size: 3em;
    float: left;
    line-height: 1;
    padding-right: 8px;
    color: #e74c3c;
    font-weight: bold;
}

blockquote {
    margin: 1.5em 0;
    padding: 1em 1.5em;
    border-left: 4px solid #3498db;
    background: #f9f9f9;
    font-style: italic;
    text-align: left;
}`})]})},"css-transitions-animations":{id:"css-transitions-animations",title:"Transitions and Animations",icon:t.jsx(Xn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"CSS Transitions"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"Transitions"})," allow you to smoothly animate changes to CSS properties over a specified duration."]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Transition Properties"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["transition: ",t.jsx("span",{className:"text-green-600",children:"property duration timing-function delay"}),";"]}),t.jsx("p",{className:"text-gray-500 mt-2",children:"/* Shorthand example: */"}),t.jsx("p",{className:"text-blue-500",children:"transition: all 0.3s ease-in-out;"}),t.jsx("p",{className:"text-blue-500",children:"transition: background-color 0.5s linear, transform 0.3s ease;"})]})]}),t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8",children:"CSS Animations"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"Animations"})," allow you to create more complex effects with multiple keyframes."]}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-3",children:"Animation Syntax"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["animation: ",t.jsx("span",{className:"text-green-600",children:"name duration timing-function delay iteration-count"}),";"]}),t.jsxs("p",{className:"mt-3 text-purple-600",children:["@keyframes ",t.jsx("span",{className:"text-green-600",children:"name"})," ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-500",children:["0% ","{"," /* starting state */ ","}"]}),t.jsxs("p",{className:"ml-4 text-blue-500",children:["50% ","{"," /* middle state */ ","}"]}),t.jsxs("p",{className:"ml-4 text-blue-500",children:["100% ","{"," /* ending state */ ","}"]}),t.jsx("p",{className:"text-purple-600",children:"}"})]})]})]}),t.jsx(U,{title:"Transitions and Animations",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: #3498db;
            margin: 20px;
            display: inline-block;
        }

        /* Transition on hover */
        .transition:hover {
            background: #e74c3c;
            transform: scale(1.2) rotate(10deg);
        }
        .transition {
            transition: all 0.3s ease;
        }

        /* Animation */
        .animated {
            animation: bounce 1s infinite alternate;
        }

        @keyframes bounce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
        }

        /* Pulsing animation */
        .pulse {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        p { margin-top: 30px; font-style: italic; }
    </style>
</head>
<body>
    <div class="box transition">Hover Me!</div>
    <div class="box animated">Bouncing</div>
    <div class="box pulse">Pulsing</div>
    <p>Hover over the first box to see the transition effect!</p>
</body>
</html>`}),t.jsx(W,{questions:[{question:"What does transition: all 0.5s ease do?",options:["Transitions all properties over 0.5 seconds with ease timing","Transitions only the color property","Transitions with no animation","Makes element invisible"],correctAnswer:0,explanation:"transition: all animates all animatable properties over 0.5 seconds with ease timing."},{question:"What is required to create a CSS animation?",options:["Only the animation property","@keyframes rule and animation property","JavaScript","No special requirements"],correctAnswer:1,explanation:"You need both @keyframes to define the animation stages AND the animation property to apply it."}]}),t.jsx(z,{question:"Create a CSS animation called 'fadeIn' that fades an element from opacity 0 to opacity 1 over 1 second. Apply it to a div with class 'animated'.",hint:"Define @keyframes with 0% and 100% states, then apply animation property",solution:`@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animated {
    animation: fadeIn 1s ease-out forwards;
}

/* Apply to multiple elements with delay */
.animated.delay-1 {
    animation-delay: 0.2s;
}

.animated.delay-2 {
    animation-delay: 0.4s;
}

.animated.delay-3 {
    animation-delay: 0.6s;
}`}),t.jsx(z,{question:"Create a loading spinner animation using CSS. The spinner should be a circle that rotates 360 degrees continuously. Include different timing functions (linear vs ease-in-out).",hint:"Use border-radius: 50%, border styling for partial circle, and infinite animation",solution:`.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Alternative with ease-in-out */
.spinner-slow {
    animation: spin 2s ease-in-out infinite;
}`})]})},"css-media-queries":{id:"css-media-queries",title:"Media Queries & Responsive Design",icon:t.jsx(Fs,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Responsive Design with Media Queries"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"Media queries"})," allow you to apply CSS styles based on device characteristics like screen width, height, and orientation. This is the foundation of responsive web design."]}),t.jsxs("div",{className:"bg-gradient-to-r from-teal-500 to-green-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Basic Syntax"}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-4 font-mono text-sm",children:[t.jsxs("p",{children:["@media ",t.jsx("span",{className:"text-yellow-300",children:"media-type"})," and ",t.jsx("span",{className:"text-yellow-300",children:"(condition)"})," ","{"]}),t.jsx("p",{className:"ml-4",children:"/* CSS rules */"}),t.jsx("p",{children:"}"})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Common Breakpoints"}),t.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6",children:t.jsx("div",{className:"space-y-2",children:[{size:"< 576px",desc:"Extra small devices (phones)"},{size:"576px - 768px",desc:"Small devices (tablets)"},{size:"768px - 992px",desc:"Medium devices (small laptops)"},{size:"992px - 1200px",desc:"Large devices (desktops)"},{size:"> 1200px",desc:"Extra large devices (large desktops)"}].map((i,f)=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("code",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-mono text-sm",children:i.size}),t.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:i.desc})]},f))})}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Mobile-First Approach"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsx("p",{className:"text-green-600",children:"/* Base styles (mobile) */"}),t.jsxs("p",{className:"text-purple-600",children:[".container ","{"," width: 100%; ","}"]}),t.jsx("p",{className:"mt-3 text-green-600",children:"/* Tablet and up */"}),t.jsxs("p",{className:"text-purple-600",children:["@media (min-width: 768px) ","{"," .container ","{"," width: 750px; ","}"," ","}"]}),t.jsx("p",{className:"mt-3 text-green-600",children:"/* Desktop and up */"}),t.jsxs("p",{className:"text-purple-600",children:["@media (min-width: 992px) ","{"," .container ","{"," width: 970px; ","}"," ","}"]})]})]})]}),t.jsx(U,{title:"Media Queries Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Arial, sans-serif; padding: 20px; }

        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .box {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 40px 20px;
            border-radius: 10px;
            text-align: center;
            flex: 1 1 100%;
        }

        h1 { margin-bottom: 20px; }

        /* Small devices (tablets) */
        @media (min-width: 576px) {
            .box { flex: 1 1 45%; }
        }

        /* Medium devices (laptops) */
        @media (min-width: 768px) {
            .box { flex: 1 1 30%; }
            h1 { color: blue; }
        }

        /* Large devices (desktops) */
        @media (min-width: 992px) {
            .box { flex: 1 1 20%; }
            h1 { color: green; font-size: 3em; }
        }
    </style>
</head>
<body>
    <h1>Resize the window!</h1>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
    </div>
</body>
</html>`}),t.jsx(z,{question:"Create a responsive layout that shows 1 column on mobile, 2 columns on tablets, and 4 columns on desktop screens.",hint:"Use media queries with min-width breakpoints at 576px and 992px. Use flexbox with flex-wrap and the flex property.",solution:`.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    flex: 1 1 100%; /* Mobile: full width */
}

/* Tablet */
@media (min-width: 576px) {
    .item { flex: 1 1 50%; }
}

/* Desktop */
@media (min-width: 992px) {
    .item { flex: 1 1 25%; }
}`}),t.jsx(W,{questions:[{question:"What does @media (max-width: 768px) target?",options:["All screens","Screens 768px or wider","Screens 768px or narrower","Print devices only"],correctAnswer:2,explanation:"max-width targets screens that are the specified width or narrower."},{question:"What is the mobile-first approach?",options:["Designing for mobile first, then adding styles for larger screens","Designing for desktop first, then mobile","Only supporting mobile devices","Using CSS frameworks"],correctAnswer:0,explanation:"Mobile-first means writing base styles for mobile, then using min-width media queries to add styles for larger screens."}]}),t.jsx(z,{question:"Create a complete responsive navigation that: shows a hamburger menu icon on mobile, displays full navigation on desktop (min-width: 768px), uses flexbox for layout, and includes smooth transitions for menu visibility.",hint:"Use media queries to toggle display between none and flex, use z-index for layering",solution:`.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333;
    padding: 15px;
}

.menu-toggle {
    display: block;
    font-size: 24px;
    color: white;
    cursor: pointer;
}

.nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background: #333;
    padding: 20px;
}

.nav-links.active {
    display: flex;
}

.nav-links a {
    color: white;
    padding: 10px 0;
    border-bottom: 1px solid #444;
}

/* Desktop styles */
@media (min-width: 768px) {
    .menu-toggle {
        display: none;
    }

    .nav-links {
        display: flex;
        flex-direction: row;
        position: static;
        width: auto;
        gap: 20px;
        padding: 0;
    }

    .nav-links a {
        border: none;
        padding: 0;
    }
}`})]})},"css-practical-exercise":{id:"css-practical-exercise",title:"Practical Exercise: Build a Card Component",icon:t.jsx(lh,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Challenge: Create a Responsive Card"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Now let's put everything together! Build a beautiful, responsive card component using all the CSS concepts you've learned."}),t.jsxs("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Requirements"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Card with shadow and rounded corners"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Image at the top"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Title and description"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Hover effect with transform"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Responsive: stack on mobile, row on desktop"})]})]})]})]}),t.jsx(U,{title:"Build Your Card Component",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Segoe UI', sans-serif;
            background: #f0f2f5;
            padding: 40px;
            min-height: 100vh;
        }

        /* Your task: Create the card container */
        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        /* Your task: Style the card */
        .card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            /* Add transition for hover effect */
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            /* Make it responsive */
            flex: 1 1 300px;
            max-width: 300px;
        }

        /* Your task: Add hover effect */
        .card:hover {
            /* Scale up slightly */
            /* Add stronger shadow */
        }

        /* Your task: Style the image */
        .card-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }

        /* Your task: Style the content */
        .card-content {
            padding: 20px;
        }

        .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 8px;
        }

        .card-description {
            color: #666;
            font-size: 0.9rem;
            line-height: 1.5;
        }

        /* Your task: Style the button */
        .card-button {
            display: inline-block;
            margin-top: 15px;
            padding: 10px 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            text-decoration: none;
            border-radius: 6px;
            transition: opacity 0.3s;
        }

        .card-button:hover {
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="card-container">
        <div class="card">
            <img src="https://picsum.photos/300/200?random=1" alt="Random" class="card-image">
            <div class="card-content">
                <h3 class="card-title">Card Title</h3>
                <p class="card-description">This is a description. Add your hover effects to make it interactive!</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
        </div>

        <div class="card">
            <img src="https://picsum.photos/300/200?random=2" alt="Random" class="card-image">
            <div class="card-content">
                <h3 class="card-title">Another Card</h3>
                <p class="card-description">Try adding more cards and see how flexbox handles the layout!</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
        </div>

        <div class="card">
            <img src="https://picsum.photos/300/200?random=3" alt="Random" class="card-image">
            <div class="card-content">
                <h3 class="card-title">Third Card</h3>
                <p class="card-description">Resize the window to see the responsive behavior!</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
        </div>
    </div>
</body>
</html>`}),t.jsx(W,{questions:[{question:"Which CSS property creates the shadow around the card?",options:["border","outline","box-shadow","drop-shadow"],correctAnswer:2,explanation:"box-shadow creates the shadow effect around an element."},{question:"What makes the card container responsive with flexbox?",options:["display: flex only","flex-wrap: wrap and flex: 1 1 300px","position: relative","margin: auto"],correctAnswer:1,explanation:"flex-wrap: wrap allows items to wrap, and flex: 1 1 300px makes cards grow/shrink but have a minimum width."}]}),t.jsx(z,{question:"Build a complete profile card component that includes: a circular avatar image with border, name and job title with proper typography, a brief bio, social media icons that change color on hover, and a 'Contact Me' button with gradient and hover effect.",hint:"Combine all CSS concepts: box-shadow, border-radius for circle, transitions for hover, flexbox for layout",solution:`.profile-card {
    width: 320px;
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.profile-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #667eea;
    margin-bottom: 20px;
}

.name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 5px;
}

.job-title {
    color: #667eea;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.bio {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 25px;
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, color 0.3s;
}

.social-icon:hover {
    background: #667eea;
    color: white;
}

.contact-btn {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.contact-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}`}),t.jsx(z,{question:"Create a complete dashboard layout using CSS Grid with: a sidebar navigation (250px wide), main content area (flexible), and a top header (60px height). The layout should be responsive - sidebar becomes a top navigation on mobile.",hint:"Use grid-template-columns, grid-template-rows, and media queries for responsiveness",solution:`.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px 1fr;
    min-height: 100vh;
}

.header {
    grid-column: 1 / -1;
    background: #2c3e50;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.sidebar {
    background: #34495e;
    color: white;
    padding: 20px;
}

.main-content {
    background: #ecf0f1;
    padding: 30px;
}

/* Mobile responsive */
@media (max-width: 768px) {
    .dashboard {
        grid-template-columns: 1fr;
        grid-template-rows: 60px auto 1fr;
    }

    .sidebar {
        display: none;
    }

    .mobile-nav {
        display: flex;
        background: #34495e;
        padding: 10px 20px;
        gap: 20px;
    }

    .mobile-nav a {
        color: white;
        text-decoration: none;
    }
}`})]})}},C=Object.values(L);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx(Yn,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 3: CSS - Styling the Web"}),t.jsx("p",{className:"text-white/80",children:"Master CSS: selectors, box model, flexbox, grid, animations, and responsive design"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:C.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:C.map((i,f)=>{const P=p===i.id,H=y[`chapter3-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${P?"border-pink-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>N(P?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${H?"bg-green-100 dark:bg-green-900/30 text-green-600":"bg-pink-100 dark:bg-pink-900/30 text-pink-600"}`,children:H?t.jsx(M,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",P?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),P?t.jsx(Bs,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),P&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(W,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!H&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(M,{className:"w-5 h-5"}),"Mark as Complete"]}),H&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(M,{className:"w-5 h-5"}),"Completed"]})]})]})]},i.id)})})]})}function mh({progress:y,updateProgress:E}){const[p,N]=G.useState("js-intro"),S=i=>{E("chapter4",i,!0)},L={"js-intro":{id:"js-intro",title:"Introduction to JavaScript",icon:t.jsx(Jn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"What is JavaScript?"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"JavaScript"})," is the programming language of the Web. It can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data."]}),t.jsxs("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"The Three Core Web Technologies"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg p-3",children:[t.jsx("p",{className:"font-bold",children:"HTML"}),t.jsx("p",{className:"text-sm",children:"Structure"})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-3",children:[t.jsx("p",{className:"font-bold",children:"CSS"}),t.jsx("p",{className:"text-sm",children:"Presentation"})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-3",children:[t.jsx("p",{className:"font-bold",children:"JavaScript"}),t.jsx("p",{className:"text-sm",children:"Behavior"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"JavaScript Can:"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:["Change HTML content dynamically","Change HTML attributes","Change HTML styles (CSS)","Show and hide HTML elements","Validate user input","Create interactive web applications"].map((i,f)=>t.jsxs("div",{className:"flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3",children:[t.jsx(M,{className:"w-5 h-5 text-green-600 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 dark:text-gray-300 text-sm",children:i})]},f))})]}),t.jsx(U,{title:"Your First JavaScript",language:"javascript",initialCode:`// JavaScript can output content in different ways
console.log("Hello, World!");

// Change HTML content
document.getElementById("demo").innerHTML = "Hello JavaScript!";

// Show an alert
alert("Welcome to JavaScript!");

// Write directly to document
document.write("This was written by JavaScript");

// Output styling
document.body.style.backgroundColor = "lightblue";`}),t.jsx(z,{question:"Write JavaScript code that outputs 'I am learning JavaScript' to the console and displays an alert saying 'Hello!'",hint:"Use console.log() for console output and alert() for popup messages",solution:`console.log("I am learning JavaScript");
alert("Hello!");`})]})},"js-variables":{id:"js-variables",title:"Variables and Data Types",icon:t.jsx(jc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Variables"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["Variables are containers for storing data values. In JavaScript, we use ",t.jsx("code",{children:"var"}),", ",t.jsx("code",{children:"let"}),", and ",t.jsx("code",{children:"const"})," to declare variables."]}),t.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-6",children:t.jsxs("div",{className:"space-y-3 font-mono text-sm",children:[t.jsxs("div",{className:"p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg",children:[t.jsxs("p",{className:"text-blue-800 dark:text-blue-200",children:[t.jsx("strong",{children:"let"})," - Block-scoped, can be reassigned"]}),t.jsx("p",{className:"text-blue-600 dark:text-blue-400 text-xs",children:'let name = "John";'})]}),t.jsxs("div",{className:"p-3 bg-green-100 dark:bg-green-900/30 rounded-lg",children:[t.jsxs("p",{className:"text-green-800 dark:text-green-200",children:[t.jsx("strong",{children:"const"})," - Block-scoped, cannot be reassigned"]}),t.jsx("p",{className:"text-green-600 dark:text-green-400 text-xs",children:"const PI = 3.14159;"})]}),t.jsxs("div",{className:"p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg",children:[t.jsxs("p",{className:"text-yellow-800 dark:text-yellow-200",children:[t.jsx("strong",{children:"var"})," - Function-scoped, older way (avoid)"]}),t.jsx("p",{className:"text-yellow-600 dark:text-yellow-400 text-xs",children:'var oldWay = "legacy";'})]})]})}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Data Types"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[{type:"String",example:`"Hello" or 'Hi'`,color:"blue"},{type:"Number",example:"42, 3.14, -10",color:"green"},{type:"Boolean",example:"true, false",color:"purple"},{type:"Undefined",example:"let x; // undefined",color:"red"},{type:"Null",example:"let empty = null",color:"orange"},{type:"Object",example:'{name: "John"}',color:"pink"},{type:"Array",example:"[1, 2, 3]",color:"cyan"},{type:"Symbol",example:'Symbol("id")',color:"indigo"}].map((i,f)=>t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4",children:[t.jsx("p",{className:"font-bold text-blue-800 dark:text-blue-200",children:i.type}),t.jsx("code",{className:"text-xs text-blue-600 dark:text-blue-400",children:i.example})]},f))})]}),t.jsx(U,{title:"Variables Demo",language:"javascript",initialCode:`// Declaring variables
let name = "Alice";
const age = 25;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Changing value of let
name = "Bob";
console.log("New Name:", name);

// Cannot change const
// age = 26; // This would cause an error!

// Different data types
let score = 95.5;        // Number
let message = "Great!"; // String
let isActive = false;   // Boolean
let nothing = null;      // Null
let notDefined;          // Undefined
let person = {           // Object
  firstName: "John",
  lastName: "Doe"
};
let fruits = ["apple", "banana", "orange"]; // Array

console.log("\\nScore:", score);
console.log("Message:", message);
console.log("Is Active:", isActive);
console.log("Nothing:", nothing);
console.log("Not Defined:", notDefined);
console.log("Person:", person);
console.log("Fruits:", fruits);

// Type checking
console.log("\\nTypes:");
console.log(typeof name);      // string
console.log(typeof score);     // number
console.log(typeof isStudent); // boolean
console.log(typeof person);    // object
console.log(typeof fruits);    // object (arrays are objects)`}),t.jsx(W,{questions:[{question:"Which keyword should you use to declare a constant that won't change?",options:["var","let","const","static"],correctAnswer:2,explanation:"const declares a constant that cannot be reassigned after initialization."},{question:"What is the typeof [] (empty array)?",options:["array","object","undefined","null"],correctAnswer:1,explanation:"In JavaScript, arrays are technically objects, so typeof [] returns 'object'."}]}),t.jsx(z,{question:"Create a JavaScript program that declares variables for your name (const), your age (let), and whether you're a student (boolean). Then print all three values to the console with their data types.",hint:"Use const for name (won't change), let for age (might change), and console.log() with typeof to check data types.",solution:`const name = "John Doe";
let age = 25;
let isStudent = true;

console.log("Name:", name, "- Type:", typeof name);
console.log("Age:", age, "- Type:", typeof age);
console.log("Is Student:", isStudent, "- Type:", typeof isStudent);`})]})},"js-operators":{id:"js-operators",title:"Operators",icon:t.jsx(Vp,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Operators"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Arithmetic Operators"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"+ Addition"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"- Subtraction"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"* Multiplication"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"/ Division"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"% Modulus (remainder)"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"** Exponentiation"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"++ Increment"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"-- Decrement"})]})]}),t.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-green-800 dark:text-green-200 mb-3",children:"Comparison Operators"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"== Equal (value)"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"=== Strict equal (value + type)"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"!= Not equal (value)"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"!== Strict not equal"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"> Greater than"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"< Less than"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:">= Greater or equal"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"<= Less or equal"})]})]})]})]}),t.jsx(U,{title:"Operators Demo",language:"javascript",initialCode:`// Arithmetic Operators
let a = 10, b = 3;

console.log("=== Arithmetic ===");
console.log("a + b =", a + b);  // 13
console.log("a - b =", a - b);  // 7
console.log("a * b =", a * b);  // 30
console.log("a / b =", a / b);  // 3.333...
console.log("a % b =", a % b);  // 1
console.log("a ** b =", a ** b); // 1000

// Increment/Decrement
console.log("\\n=== Increment/Decrement ===");
let x = 5;
console.log("x++ =", x++); // 5 (then becomes 6)
console.log("x after =", x); // 6
console.log("++x =", ++x); // 7

// Comparison Operators
console.log("\\n=== Comparison ===");
console.log("5 == '5':", 5 == '5');   // true (loose equality)
console.log("5 === '5':", 5 === '5'); // false (strict equality)
console.log("5 != '5':", 5 != '5');   // false
console.log("5 !== '5':", 5 !== '5'); // true

// Logical Operators
console.log("\\n=== Logical ===");
console.log("true && false:", true && false); // false
console.log("true || false:", true || false); // true
console.log("!true:", !true); // false

// Ternary Operator
console.log("\\n=== Ternary ===");
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status); // Adult

// String Operators
console.log("\\n=== String ===");
let firstName = "John";
let lastName = "Doe";
console.log("Full Name:", firstName + " " + lastName);

// Template Literals (preferred)
console.log(\`Hello, \${firstName} \${lastName}!\`);`}),t.jsx(z,{question:"Calculate and print: 1) The area of a circle with radius 7 (use PI * r^2), 2) Check if 10 is greater than 5, 3) Use a ternary operator to check if a number is positive or negative",hint:"Use Math.PI for PI and Math.pow() or ** for exponentiation",solution:`let radius = 7;
let area = Math.PI * radius ** 2;
console.log("Area:", area);

console.log("10 > 5:", 10 > 5);

let number = -5;
let result = number >= 0 ? "Positive" : "Negative";
console.log("Number is:", result);`,validationCode:`const code = {answer}.toLowerCase();
const hasRadius = code.includes('radius');
const hasArea = code.includes('area');
const hasPi = code.includes('math.pi');
const hasSeven = code.includes('7');
const hasExponent = code.includes('**');
const hasConsole = code.includes('console.log');
const hasTernary = code.includes('?') && code.includes(':');
const hasPositive = code.includes('positive');
const hasNegative = code.includes('negative');
return hasRadius && hasArea && hasPi && hasSeven && hasExponent && hasConsole && hasTernary && hasPositive && hasNegative;`}),t.jsx(W,{questions:[{question:"What is the result of 10 % 3?",options:["3.33","3","1","0"],correctAnswer:2,explanation:"The modulus operator (%) returns the remainder after division. 10 divided by 3 is 3 with a remainder of 1."},{question:"Which operator checks for both value AND type equality?",options:["==","===","=","!="],correctAnswer:1,explanation:"=== (strict equality) checks both value and type, while == only checks value with type coercion."},{question:"What does the ++ operator do?",options:["Decreases by 1","Increases by 1","Multiplies by 2","Divides by 2"],correctAnswer:1,explanation:"++ is the increment operator that increases a value by 1."}]})]})},"js-conditionals":{id:"js-conditionals",title:"Conditional Statements",icon:t.jsx(mc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Conditional Statements"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Conditional statements are used to perform different actions based on different conditions."}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-3",children:"Types of Conditionals"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-purple-600",children:"if"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Executes code if condition is true"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-purple-600",children:"else"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Executes code if condition is false"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-purple-600",children:"else if"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Tests multiple conditions"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-purple-600",children:"switch"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Selects from multiple code blocks"})]})]})]})]}),t.jsx(U,{title:"Conditionals Demo",language:"javascript",initialCode:`// If...Else Statement
let score = 85;
console.log("Score:", score);

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Switch Statement
let day = 3;
console.log("\\nDay number:", day);

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Multiple Cases
let fruit = "apple";
console.log("\\nFruit:", fruit);

switch (fruit) {
    case "apple":
    case "banana":
    case "orange":
        console.log("It's a common fruit");
        break;
    case "mango":
    case "pineapple":
        console.log("It's an exotic fruit");
        break;
    default:
        console.log("Unknown fruit");
}

// Truthy and Falsy Values
console.log("\\n=== Truthy/Falsy ===");
console.log("Boolean(1):", Boolean(1));        // true
console.log("Boolean(0):", Boolean(0));        // false
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean(''):", Boolean(""));        // false
console.log("Boolean(null):", Boolean(null));    // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean({}):", Boolean({}));      // true
console.log("Boolean([]):", Boolean([]));       // true`}),t.jsx(W,{questions:[{question:"What keyword is used to check an additional condition in an if...else chain?",options:["elseif","else if","elsif","default"],correctAnswer:1,explanation:"In JavaScript, it's written as 'else if' (two words), not 'elseif' like in PHP."},{question:"Which value is NOT falsy in JavaScript?",options:["0",'""','"false"',"null"],correctAnswer:2,explanation:'"false" is a non-empty string, which is truthy. 0, empty string, and null are all falsy values.'}]}),t.jsx(z,{question:"Write a JavaScript program that takes a student's score (0-100) and returns their letter grade using these criteria: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60). Test it with a score of 85.",hint:"Use if...else if...else statements to check each grade range",solution:`let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Score:", score, "- Grade:", grade);

// Bonus: Using switch with ranges
let range = Math.floor(score / 10);
switch (range) {
    case 10:
    case 9: grade = "A"; break;
    case 8: grade = "B"; break;
    case 7: grade = "C"; break;
    case 6: grade = "D"; break;
    default: grade = "F";
}
console.log("Using switch - Grade:", grade);`})]})},"js-loops":{id:"js-loops",title:"Loops",icon:t.jsx(yc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Loops"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Loops can execute a block of code a number of times. They are handy when you want to run the same code over and over again."}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{name:"for",desc:"Loop through code a specific number of times"},{name:"for...in",desc:"Loop through object properties"},{name:"for...of",desc:"Loop through array elements"},{name:"while",desc:"Loop while a condition is true"},{name:"do...while",desc:"Execute at least once, then loop"},{name:"break/continue",desc:"Control loop execution"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("p",{className:"font-mono font-bold text-blue-600 dark:text-blue-400",children:i.name}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]},f))})]}),t.jsx(U,{title:"Loops Demo",language:"javascript",initialCode:`// For Loop
console.log("=== For Loop ===");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// While Loop
console.log("\\n=== While Loop ===");
let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}

// Do...While Loop
console.log("\\n=== Do...While Loop ===");
let num = 0;
do {
    console.log("Number:", num);
    num++;
} while (num < 3);

// For...of (Arrays)
console.log("\\n=== For...of (Arrays) ===");
const fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// For...in (Objects)
console.log("\\n=== For...in (Objects) ===");
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key + ":", person[key]);
}

// Nested Loops
console.log("\\n=== Nested Loop ===");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += i * j + "\\t";
    }
    console.log(row);
}

// Break and Continue
console.log("\\n=== Break and Continue ===");
for (let i = 1; i <= 10; i++) {
    if (i === 3) continue; // Skip 3
    if (i === 8) break;     // Stop at 8
    console.log("Number:", i);
}

// Array Methods (Modern Way)
console.log("\\n=== Array Methods ===");
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((num, index) => {
    console.log(\`Index \${index}: \${num}\`);
});

// map
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// filter
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);`}),t.jsx(z,{question:"Write a loop that prints the first 10 numbers of the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)",hint:"Each number is the sum of the two preceding ones: F(n) = F(n-1) + F(n-2)",solution:`let a = 0, b = 1;
console.log(a);
console.log(b);

for (let i = 2; i < 10; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}`}),t.jsx(W,{questions:[{question:"Which loop is best when you know the exact number of iterations?",options:["while","do...while","for","for...of"],correctAnswer:2,explanation:"The for loop is ideal when you know the exact number of iterations beforehand."},{question:"What does the 'break' statement do in a loop?",options:["Skips the current iteration","Exits the loop completely","Pauses the loop","Restarts the loop"],correctAnswer:1,explanation:"break exits the loop entirely, while continue skips to the next iteration."},{question:"Which loop type is best for iterating over array elements?",options:["while loop","for loop","for...of loop","do...while loop"],correctAnswer:2,explanation:"for...of provides clean syntax for iterating over iterable objects like arrays."}]})]})},"js-functions":{id:"js-functions",title:"Functions",icon:t.jsx(vc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Functions"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"A function is a block of code designed to perform a particular task. It is executed when something invokes (calls) it."}),t.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-indigo-800 dark:text-indigo-200 mb-3",children:"Function Declaration Types"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-indigo-600 text-sm mb-2",children:"Function Declaration"}),t.jsxs("code",{className:"text-xs text-gray-600 dark:text-gray-400",children:["function name(params) ","{","...","}"]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-indigo-600 text-sm mb-2",children:"Function Expression"}),t.jsxs("code",{className:"text-xs text-gray-600 dark:text-gray-400",children:["const name = function()","{","...","}"]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-indigo-600 text-sm mb-2",children:"Arrow Function"}),t.jsx("code",{className:"text-xs text-gray-600 dark:text-gray-400",children:"const name = () => {...}"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-indigo-600 text-sm mb-2",children:"IIFE"}),t.jsxs("code",{className:"text-xs text-gray-600 dark:text-gray-400",children:["(function()","{","...","}",")()"]})]})]})]})]}),t.jsx(U,{title:"Functions Demo",language:"javascript",initialCode:`// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// Function with default parameters
function welcome(name = "Guest") {
    console.log("Welcome, " + name);
}
welcome();          // Welcome, Guest
welcome("Bob");     // Welcome, Bob

// Function Expression
const square = function(x) {
    return x * x;
};
console.log("Square of 5:", square(5));

// Arrow Functions
const add = (a, b) => a + b;
console.log("5 + 3 =", add(5, 3));

// Arrow function with block body
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log("4 * 6 =", multiply(4, 6));

// Callback Functions
function processData(data, callback) {
    return callback(data);
}

const double = x => x * 2;
const triple = x => x * 3;

console.log("Double 5:", processData(5, double));
console.log("Triple 5:", processData(5, triple));

// Higher-Order Functions
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double2 = multiplier(2);
const triple2 = multiplier(3);

console.log("Double 10:", double2(10));
console.log("Triple 10:", triple2(10));

// Recursive Function
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("5! =", factorial(5));

// Scope
function testScope() {
    let localVar = "I'm local";
    console.log(localVar);
}
testScope();
// console.log(localVar); // Error: not defined outside

// Closures
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log("Counter:", counter()); // 1
console.log("Counter:", counter()); // 2
console.log("Counter:", counter()); // 3`}),t.jsx(W,{questions:[{question:"What is a closure in JavaScript?",options:["A way to end a function","A function that has access to variables from its outer scope","A type of loop","A method to import code"],correctAnswer:1,explanation:"A closure is a function that has access to its outer scope's variables even after the outer function has returned."},{question:"What is the main difference between let and var in function scope?",options:["No difference","let is block-scoped, var is function-scoped","var is faster","let cannot be reassigned"],correctAnswer:1,explanation:"let is block-scoped (only available within {}), while var is function-scoped (available throughout the function)."}]}),t.jsx(z,{question:"Create a function called 'calculateBill' that takes three parameters: subtotal, taxRate, and tipPercentage. The function should calculate the total bill including tax and tip, and return it. Test it with: subtotal=100, taxRate=0.08, tipPercentage=0.20",hint:"Total = subtotal + (subtotal * taxRate) + (subtotal * tipPercentage)",solution:`function calculateBill(subtotal, taxRate = 0.08, tipPercentage = 0.15) {
    const tax = subtotal * taxRate;
    const tip = subtotal * tipPercentage;
    const total = subtotal + tax + tip;

    return {
        subtotal: subtotal,
        tax: tax,
        tip: tip,
        total: total
    };
}

// Test the function
const bill = calculateBill(100, 0.08, 0.20);
console.log("Subtotal: $", bill.subtotal);
console.log("Tax (8%): $", bill.tax);
console.log("Tip (20%): $", bill.tip);
console.log("Total: $", bill.total);

// Test with default tip
const bill2 = calculateBill(50);
console.log("\\nWith default values - Total: $", bill2.total);`})]})},"js-arrays":{id:"js-arrays",title:"Arrays",icon:t.jsx(Kp,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Arrays"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Arrays are used to store multiple values in a single variable. They are zero-indexed, meaning the first element is at position 0."}),t.jsxs("div",{className:"bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-cyan-800 dark:text-cyan-200 mb-3",children:"Array Methods"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2 text-sm",children:["push()","pop()","shift()","unshift()","slice()","splice()","concat()","join()","indexOf()","includes()","find()","filter()","map()","reduce()","sort()","reverse()"].map((i,f)=>t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded text-cyan-600 dark:text-cyan-400",children:i},f))})]})]}),t.jsx(U,{title:"Arrays Demo",language:"javascript",initialCode:`// Creating Arrays
let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null, {name: "John"}];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed array:", mixed);

// Accessing Elements
console.log("\\n=== Accessing ===");
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Modifying Arrays
console.log("\\n=== Modifying ===");
fruits.push("Mango");           // Add to end
console.log("After push:", fruits);

fruits.pop();                   // Remove from end
console.log("After pop:", fruits);

fruits.unshift("Strawberry");   // Add to beginning
console.log("After unshift:", fruits);

fruits.shift();                 // Remove from beginning
console.log("After shift:", fruits);

// Finding Elements
console.log("\\n=== Finding ===");
let nums = [1, 5, 10, 15, 20];
console.log("Index of 10:", nums.indexOf(10));
console.log("Includes 15:", nums.includes(15));
console.log("Find > 10:", nums.find(n => n > 10));
console.log("Find index > 10:", nums.findIndex(n => n > 10));

// Filtering and Mapping
console.log("\\n=== Transform ===");
let ages = [12, 18, 25, 16, 30];

// Filter adults (18+)
let adults = ages.filter(age => age >= 18);
console.log("Adults:", adults);

// Map to double
let doubled = ages.map(age => age * 2);
console.log("Doubled:", doubled);

// Chain methods
let result = ages
    .filter(age => age >= 18)
    .map(age => age * 2)
    .reduce((sum, age) => sum + age, 0);
console.log("Sum of doubled adults:", result);

// Sorting
console.log("\\n=== Sorting ===");
let unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Unsorted:", unsorted);
console.log("Sorted:", [...unsorted].sort((a, b) => a - b));

// String operations
console.log("\\n=== String Conversion ===");
let arr = ["HTML", "CSS", "JavaScript"];
console.log("Join:", arr.join(" - "));
console.log("Split:", arr.join(",").split(","));

// Spread operator
console.log("\\n=== Spread Operator ===");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Combined:", combined);

let copy = [...arr1];
copy.push(4);
console.log("Copy:", copy);`}),t.jsx(z,{question:"Given an array of scores [85, 92, 78, 95, 88], find the average score",hint:"Use reduce to sum all values, then divide by array length",solution:`const scores = [85, 92, 78, 95, 88];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Average score:", average);`}),t.jsx(W,{questions:[{question:"Which method adds an element to the end of an array?",options:["unshift()","push()","pop()","shift()"],correctAnswer:1,explanation:"push() adds elements to the end of an array, while unshift() adds to the beginning."},{question:"What does the map() method return?",options:["A single value","A new array with transformed elements","The original array modified","undefined"],correctAnswer:1,explanation:"map() creates a new array with the results of calling a function on every element."},{question:"How do you access the third element of an array?",options:["array[2]","array[3]","array.third","array.get(2)"],correctAnswer:0,explanation:"Arrays are zero-indexed, so the third element is at index 2."}]})]})},"js-objects":{id:"js-objects",title:"Objects",icon:t.jsx(dc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Objects"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Objects are collections of key-value pairs. They are used to store related data and functionality."}),t.jsxs("div",{className:"bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-pink-800 dark:text-pink-200 mb-3",children:"Object Properties"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-pink-600",children:["const person = ","{"]}),t.jsx("p",{className:"text-pink-600 ml-4",children:'name: "John",'}),t.jsx("p",{className:"text-pink-600 ml-4",children:"age: 30,"}),t.jsx("p",{className:"text-pink-600 ml-4",children:"isStudent: false,"}),t.jsxs("p",{className:"text-pink-600 ml-4",children:["greet: function() ","{","...","}"]}),t.jsx("p",{className:"text-pink-600",children:"}"})]})]})]}),t.jsx(U,{title:"Objects Demo",language:"javascript",initialCode:`// Creating Objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],

    // Method
    greet: function() {
        return "Hello, I'm " + this.firstName;
    },

    // Getter
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("=== Object Properties ===");
console.log("Name:", person.firstName);
console.log("Age:", person["age"]);
console.log("Full Name:", person.fullName);
console.log("Greeting:", person.greet());

// Modifying Objects
console.log("\\n=== Modifying ===");
person.age = 31;
person.city = "New York";
console.log("Updated Age:", person.age);
console.log("New City:", person.city);

// Object Methods
console.log("\\n=== Object Methods ===");
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// Destructuring
console.log("\\n=== Destructuring ===");
const { firstName, lastName, age } = person;
console.log(\`\${firstName} \${lastName} is \${age} years old\`);

// Spread operator
console.log("\\n=== Spread Operator ===");
const person2 = { ...person, age: 25 };
console.log("Person2:", person2);

// Object.assign
const defaults = { theme: "dark", fontSize: 14 };
const settings = { fontSize: 16 };
const merged = Object.assign({}, defaults, settings);
console.log("Merged:", merged);

// Object Methods for Checking
console.log("\\n=== Checking ===");
console.log("Has firstName:", person.hasOwnProperty("firstName"));
console.log("Has email:", person.hasOwnProperty("email"));

// Constructor Function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getAge = function() {
        return new Date().getFullYear() - this.year;
    };
}

const myCar = new Car("Toyota", "Camry", 2020);
console.log("\\n=== Constructor ===");
console.log("Car:", myCar.brand, myCar.model);
console.log("Age:", myCar.getAge(), "years");

// Class Syntax
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        return this.name + " says " + this.sound + "!";
    }
}

const dog = new Animal("Dog", "Woof");
console.log("\\n=== Class ===");
console.log(dog.speak());`}),t.jsx(W,{questions:[{question:"What is the correct way to access a property named 'first-name' from an object?",options:["obj.first-name",'obj["first-name"]',"obj.firstName","Both B and C"],correctAnswer:1,explanation:'When property names contain hyphens or start with numbers, you must use bracket notation: obj["first-name"].'},{question:"What does the Object.freeze() method do?",options:["Deletes all object properties","Prevents modifications to object properties","Creates a copy of the object","Converts object to array"],correctAnswer:1,explanation:"Object.freeze() makes an object immutable - you cannot add, remove, or modify its properties."}]}),t.jsx(z,{question:"Create a 'Book' object with properties: title, author, year, and pages. Add a method called 'getSummary' that returns a string like 'Title by Author (Year) - X pages'. Create two book instances and print their summaries.",hint:"Use object literal syntax and define the method inside the object",solution:`// Creating a Book object constructor
function Book(title, author, year, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;

    this.getSummary = function() {
        return \`"\${this.title}" by \${this.author} (\${this.year}) - \${this.pages} pages\`;
    };
}

// Create book instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180);
const book2 = new Book("1984", "George Orwell", 1949, 328);

// Print summaries
console.log(book1.getSummary());
console.log(book2.getSummary());

// Using class syntax (modern approach)
class ModernBook {
    constructor(title, author, year, pages) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
    }

    getSummary() {
        return \`"\${this.title}" by \${this.author} (\${this.year}) - \${this.pages} pages\`;
    }
}

const book3 = new ModernBook("To Kill a Mockingbird", "Harper Lee", 1960, 281);
console.log(book3.getSummary());`})]})}},C=Object.values(L);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx(Jn,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 4: JavaScript Basics"}),t.jsx("p",{className:"text-white/80",children:"Learn JavaScript fundamentals: variables, operators, conditionals, loops, functions, and arrays"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:C.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:C.map((i,f)=>{const P=p===i.id,H=y[`chapter4-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${P?"border-yellow-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>N(P?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${H?"bg-green-100 dark:bg-green-900/30 text-green-600":"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600"}`,children:H?t.jsx(M,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",P?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),P?t.jsx(Bs,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),P&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(W,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!H&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(M,{className:"w-5 h-5"})," Mark as Complete"]}),H&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(M,{className:"w-5 h-5"})," Completed"]})]})]})]},i.id)})})]})}function xh({progress:y,updateProgress:E}){const[p,N]=G.useState("advjs-dom"),S=i=>{E("chapter5",i,!0)},L={"advjs-dom":{id:"advjs-dom",title:"DOM Manipulation",icon:t.jsx(ic,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"The Document Object Model (DOM)"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. JavaScript can manipulate the DOM to create dynamic, interactive web pages."}),t.jsxs("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"DOM Tree Structure"}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-4 font-mono text-sm",children:[t.jsx("p",{children:"document"}),t.jsx("p",{className:"ml-4",children:"└── html"}),t.jsx("p",{className:"ml-8",children:"├── head"}),t.jsx("p",{className:"ml-8",children:"│   ├── title"}),t.jsx("p",{className:"ml-8",children:"│   └── meta"}),t.jsx("p",{className:"ml-8",children:"└── body"}),t.jsx("p",{className:"ml-12",children:"├── header"}),t.jsx("p",{className:"ml-12",children:"├── main"}),t.jsx("p",{className:"ml-12",children:"└── footer"})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Selecting Elements"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{method:"getElementById()",desc:"Select by ID",icon:"#"},{method:"getElementsByClassName()",desc:"Select by class",icon:"."},{method:"getElementsByTagName()",desc:"Select by tag",icon:"<>"},{method:"querySelector()",desc:"First match CSS selector",icon:"⚡"},{method:"querySelectorAll()",desc:"All matches CSS selector",icon:"⚡⚡"}].map((i,f)=>t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 flex items-start gap-3",children:[t.jsx("span",{className:"text-2xl font-mono text-purple-600",children:i.icon}),t.jsxs("div",{children:[t.jsx("code",{className:"font-mono text-purple-600 text-sm",children:i.method}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]})]},f))})]}),t.jsx(U,{title:"DOM Manipulation Demo",language:"javascript",initialCode:`// Selecting Elements
const title = document.getElementById("title");
const items = document.getElementsByClassName("item");
const paragraphs = document.getElementsByTagName("p");
const firstButton = document.querySelector("button");
const allButtons = document.querySelectorAll("button");

// Changing Content
title.textContent = "New Title";
title.innerHTML = "<span>HTML Content</span>";

// Changing Styles
title.style.color = "blue";
title.style.fontSize = "24px";
title.classList.add("active");
title.classList.remove("hidden");
title.classList.toggle("highlight");

// Creating Elements
const newDiv = document.createElement("div");
newDiv.textContent = "I'm a new div!";
newDiv.className = "container";
document.body.appendChild(newDiv);

// Removing Elements
const toRemove = document.querySelector(".obsolete");
toRemove.remove();

// Event Handling
const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "red";
});

button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "blue";
});`}),t.jsx(W,{questions:[{question:"Which method selects all elements matching a CSS selector?",options:["getElementById()","getElementsByClassName()","querySelector()","querySelectorAll()"],correctAnswer:3,explanation:"querySelectorAll() returns a NodeList of all elements matching the specified CSS selector."},{question:"What is the correct way to add a class to an element?",options:["element.class = 'active'","element.className = 'active'","element.classList.add('active')","element.addClass('active')"],correctAnswer:2,explanation:"classList.add() is the modern way to add classes. className is a string that would overwrite all classes."}]}),t.jsx(z,{question:"Create a JavaScript program that: 1) Selects a div with id 'container', 2) Changes its background color to blue, 3) Creates a new paragraph element with text 'Hello DOM!', 4) Appends the paragraph to the container, 5) Adds a click event listener to the paragraph that removes it when clicked.",hint:"Use document.createElement() to create elements, appendChild() to add them, and addEventListener() for events",solution:`// Select the container
const container = document.getElementById('container');

// Change background color
container.style.backgroundColor = 'blue';

// Create a new paragraph
const paragraph = document.createElement('p');
paragraph.textContent = 'Hello DOM!';

// Append to container
container.appendChild(paragraph);

// Add click event to remove the paragraph
paragraph.addEventListener('click', function() {
    this.remove(); // or container.removeChild(this)
    console.log('Paragraph removed!');
});

// Alternative: using textContent vs innerHTML
// paragraph.innerHTML = '<strong>Bold Text</strong>';`})]})},"advjs-events":{id:"advjs-events",title:"Events and Event Handling",icon:t.jsx(gc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Events"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Events are actions or occurrences that happen in the system you are programming. JavaScript can detect and respond to these events to create interactive experiences."}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Common Events"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[{type:"Click",event:"click"},{type:"Double Click",event:"dblclick"},{type:"Mouse Over",event:"mouseover"},{type:"Mouse Out",event:"mouseout"},{type:"Key Press",event:"keypress"},{type:"Key Down",event:"keydown"},{type:"Key Up",event:"keyup"},{type:"Focus",event:"focus"},{type:"Blur",event:"blur"},{type:"Change",event:"change"},{type:"Submit",event:"submit"},{type:"Load",event:"load"}].map((i,f)=>t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 text-center",children:[t.jsx("p",{className:"font-bold text-blue-600 text-sm",children:i.type}),t.jsx("code",{className:"text-xs text-gray-500",children:i.event})]},f))})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Event Handling Methods"}),t.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm",children:t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"p-3 bg-green-100 dark:bg-green-900/30 rounded-lg",children:[t.jsx("p",{className:"text-green-800 dark:text-green-200",children:"HTML Inline (not recommended)"}),t.jsx("code",{className:"text-xs text-green-600",children:`<button onclick="alert('Hi!')">Click me</button>`})]}),t.jsxs("div",{className:"p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg",children:[t.jsx("p",{className:"text-blue-800 dark:text-blue-200",children:"DOM Level 0 (older)"}),t.jsxs("code",{className:"text-xs text-blue-600",children:["element.onclick = function() ","{","...","}"]})]}),t.jsxs("div",{className:"p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg",children:[t.jsx("p",{className:"text-purple-800 dark:text-purple-200",children:"addEventListener (recommended)"}),t.jsxs("code",{className:"text-xs text-purple-600",children:["element.addEventListener('click', function() ","{","...","}",")"]})]})]})})]}),t.jsx(U,{title:"Event Handling Demo",language:"javascript",initialCode:`// Basic Click Event
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Event with Parameter
function handleClick(event) {
    console.log("Clicked:", event.target.textContent);
}
button.addEventListener("click", handleClick);

// Multiple Events
const box = document.getElementById("box");
box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "purple";
});
box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "gray";
});

// Keyboard Events
const input = document.getElementById("textInput");
input.addEventListener("keyup", (e) => {
    console.log("Key pressed:", e.key);
    console.log("Key code:", e.keyCode);
});

// Form Submit Event
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted!");
    const formData = new FormData(form);
    console.log("Email:", formData.get("email"));
});

// Event Delegation (for dynamic elements)
document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        console.log("Button clicked via delegation!");
    }
});

// Removing Events
function oneTimeClick() {
    console.log("This will only fire once!");
    button.removeEventListener("click", oneTimeClick);
}
button.addEventListener("click", oneTimeClick);`}),t.jsx(z,{question:"Create an event listener that listens for a click on a button, and when clicked, changes the text content of a paragraph element from 'Waiting...' to 'Clicked!' and changes the paragraph color to green.",hint:"First select both the button and paragraph using getElementById or querySelector, then use addEventListener for the click event, and inside the handler use textContent and style.color to update the paragraph.",solution:`const button = document.getElementById("myButton");
const paragraph = document.getElementById("status");

button.addEventListener("click", function() {
    paragraph.textContent = "Clicked!";
    paragraph.style.color = "green";
});`}),t.jsx(W,{questions:[{question:"Which method is recommended for attaching event handlers?",options:["HTML onclick attribute","element.onclick","addEventListener()","attachEvent()"],correctAnswer:2,explanation:"addEventListener() allows multiple handlers, better separation of concerns, and works with event delegation."},{question:"What does event.preventDefault() do?",options:["Stops event propagation","Prevents the default browser action","Removes the event listener","Cancels the event completely"],correctAnswer:1,explanation:"preventDefault() stops the browser's default action (like form submission or link navigation)."},{question:"What is event delegation?",options:["Attaching events to each child individually","Attaching one event to parent to handle children","Removing events from elements","Creating new events"],correctAnswer:1,explanation:"Event delegation uses the bubbling principle to handle events on multiple children with one parent listener."}]})]})},"advjs-objects":{id:"advjs-objects",title:"Advanced Objects",icon:t.jsx(dc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Advanced Object Concepts"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"JavaScript objects are versatile. Let's explore advanced features like prototypes, getters/setters, and property descriptors."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-3",children:"Getters and Setters"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["get propertyName() ","{","...","}"]}),t.jsxs("p",{className:"text-purple-600",children:["set propertyName() ","{","...","}"]})]})]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Object Methods"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm",children:[t.jsx("p",{className:"text-blue-600",children:"Object.freeze()"}),t.jsx("p",{className:"text-blue-600",children:"Object.seal()"}),t.jsx("p",{className:"text-blue-600",children:"Object.keys()"})]})]})]})]}),t.jsx(U,{title:"Advanced Objects Demo",language:"javascript",initialCode:`// Getter and Setter
const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);  // "John Doe"
person.fullName = "Jane Smith";
console.log(person.firstName);  // "Jane"

// Prototype Chain
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    return this.name + " makes a sound";
};

const dog = new Animal("Dog");
console.log(dog.speak());  // "Dog makes a sound"
console.log(dog instanceof Animal);  // true

// Object.defineProperty
const obj = {};
Object.defineProperty(obj, "secret", {
    value: 42,
    writable: false,  // Cannot be changed
    enumerable: true,
    configurable: false
});

// Object.freeze (immutable)
const frozen = { x: 1, y: 2 };
Object.freeze(frozen);
// frozen.x = 5;  // Error in strict mode!

// Object.seal (can modify, cannot add/remove)
const sealed = { a: 1 };
Object.seal(sealed);
sealed.a = 5;  // OK
// sealed.b = 2;  // Error!

// Symbol (unique property keys)
const id = Symbol("id");
const user = {
    name: "John",
    [id]: 123
};
console.log(user[id]);  // 123

// WeakMap (private data)
const privateData = new WeakMap();
function Counter() {
    privateData.set(this, { count: 0 });
}
Counter.prototype.increment = function() {
    let data = privateData.get(this);
    data.count++;
    return data.count;
};`}),t.jsx(W,{questions:[{question:"What does Object.freeze() do to an object?",options:["Prevents adding new properties only","Prevents modifying existing properties only","Prevents adding, removing, or modifying properties","Creates a backup copy"],correctAnswer:2,explanation:"Object.freeze() makes an object completely immutable - no additions, removals, or modifications are allowed."},{question:"What is a Symbol used for in JavaScript?",options:["Creating unique identifiers for objects","Encrypting data","Creating special characters","Defining data types"],correctAnswer:0,explanation:"Symbols create unique, immutable identifiers that can be used as property keys to avoid naming conflicts."}]}),t.jsx(z,{question:"Create a bank account object using a constructor function with: owner name, account number, and balance. Add methods for deposit(), withdraw(), and getBalance(). Use Object.seal() to prevent adding new properties, then test the methods.",hint:"Use 'this' keyword to reference object properties, and implement validation for withdrawals",solution:`function BankAccount(owner, accountNumber, initialBalance) {
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.transactionHistory = [];

    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactionHistory.push({ type: 'deposit', amount: amount, date: new Date() });
            return \`Deposited: $\${amount}. New balance: $\${this.balance}\`;
        }
        return 'Invalid deposit amount';
    };

    this.withdraw = function(amount) {
        if (amount > this.balance) {
            return 'Insufficient funds';
        }
        if (amount > 0) {
            this.balance -= amount;
            this.transactionHistory.push({ type: 'withdrawal', amount: amount, date: new Date() });
            return \`Withdrew: $\${amount}. New balance: $\${this.balance}\`;
        }
        return 'Invalid withdrawal amount';
    };

    this.getBalance = function() {
        return \`Account \${this.accountNumber} - Balance: $\${this.balance}\`;
    };

    Object.seal(this);
}

const account = new BankAccount('John Doe', 'ACC-12345', 1000);
console.log(account.getBalance());
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());

// Try to add new property (will fail with seal)
account.email = 'john@email.com'; // Silently fails in non-strict mode
console.log('Email property added?', account.hasOwnProperty('email'));`})]})},"advjs-strings":{id:"advjs-strings",title:"String Methods",icon:t.jsx(hc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript String Methods"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Strings are fundamental in JavaScript. Mastering string methods is essential for text processing and manipulation."}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6",children:[t.jsx("h4",{className:"font-bold text-gray-800 dark:text-white mb-3",children:"Essential String Methods"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3 text-sm",children:["charAt()","concat()","includes()","indexOf()","lastIndexOf()","match()","replace()","search()","slice()","split()","substring()","toLowerCase()","toUpperCase()","trim()","startsWith()","endsWith()"].map((i,f)=>t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400 text-center",children:i},f))})]})]}),t.jsx(U,{title:"String Methods Demo",language:"javascript",initialCode:`const text = "  Hello, World!  ";

// Basic Methods
console.log(text.length);           // 18 (with spaces)
console.log(text.toUpperCase());   // "  HELLO, WORLD!  "
console.log(text.toLowerCase());   // "  hello, world!  "
console.log(text.trim());           // "Hello, World!"
console.log(text.trimStart());     // "Hello, World!  "
console.log(text.trimEnd());       // "  Hello, World!"

// Finding
console.log(text.indexOf("World"));      // 10
console.log(text.lastIndexOf("o"));       // 13
console.log(text.includes("Hello"));      // true
console.log(text.startsWith("  Hello"));   // true
console.log(text.endsWith("!  "));       // true
console.log(text.search(/world/i));       // 10 (regex)

// Extracting
console.log(text.slice(2, 7));     // "Hello"
console.log(text.substring(2, 7)); // "Hello"
console.log(text.slice(-7, -1));   // "World"
console.log(text.charAt(0));       // " "

// Modifying
console.log(text.replace("World", "Universe"));
console.log(text.replace(/world/i, "Universe")); // regex
console.log(text.replaceAll("o", "0"));  // ES2021

// Splitting
const csv = "apple,banana,orange";
console.log(csv.split(","));    // ["apple", "banana", "orange"]
console.log(csv.split(""));    // ["a","p","p","l","e",",",...]

// Template Literals (Review)
const name = "Alice";
const greeting = \`Hello, \${name}!
Welcome to \${text.trim()}.\`;
console.log(greeting);

// String Padding (ES2017)
console.log("5".padStart(3, "0"));     // "005"
console.log("5".padEnd(3, "0"));       // "500"

// Template Tag Functions
function highlight(strings, value) {
    return strings[0] + "**" + value + "**" + strings[1];
}
const result = highlight\`Hello \${name}!\`;
console.log(result);  // "Hello **Alice**!"`}),t.jsx(z,{question:"Write a function that takes a full name (e.g., 'john doe') and returns the name in title case (e.g., 'John Doe'). Title case means the first letter of each word is capitalized.",hint:"Use split() to break the string into words, use toUpperCase() on the first character, and slice() or substring() for the rest of each word.",solution:`function toTitleCase(name) {
    return name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

console.log(toTitleCase("john doe"));  // "John Doe"
console.log(toTitleCase("JANE SMITH"));  // "Jane Smith"`}),t.jsx(W,{questions:[{question:"Which method splits a string into an array?",options:["join()","split()","slice()","concat()"],correctAnswer:1,explanation:"split() divides a string into an array of substrings based on a separator."},{question:"What does 'Hello'.includes('ell') return?",options:["true","false","undefined","Error"],correctAnswer:0,explanation:"includes() returns true if the string contains the specified substring."},{question:"What is the difference between slice() and substring()?",options:["No difference","slice() handles negative indices differently","substring() can swap arguments","slice() is faster"],correctAnswer:1,explanation:"slice() allows negative indices (counting from end), while substring() treats negative as 0."}]})]})},"advjs-dates":{id:"advjs-dates",title:"Date Objects",icon:t.jsx(Op,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Date Objects"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"JavaScript's Date object provides methods for working with dates and times. It stores dates as the number of milliseconds since January 1, 1970."}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Creating Dates"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm",children:[t.jsx("p",{className:"text-blue-600",children:"new Date()"}),t.jsx("p",{className:"text-blue-600",children:"new Date(milliseconds)"}),t.jsx("p",{className:"text-blue-600",children:"new Date(dateString)"}),t.jsx("p",{className:"text-blue-600",children:"new Date(year, month, day, hours, minutes, seconds, ms)"})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Date Methods"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:["getFullYear()","getMonth()","getDate()","getDay()","getHours()","getMinutes()","getSeconds()","getMilliseconds()","getTime()","setFullYear()","setMonth()","setDate()"].map((i,f)=>t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-2 rounded text-blue-600 dark:text-blue-400 text-sm text-center",children:i},f))})]}),t.jsx(U,{title:"Date Objects Demo",language:"javascript",initialCode:`// Current Date
const now = new Date();
console.log(now);
console.log(now.toString());

// Creating Specific Dates
const date1 = new Date("2024-01-15");
const date2 = new Date(2024, 0, 15);  // Note: month is 0-indexed
const date3 = new Date(2024, 0, 15, 14, 30, 0);

// Getting Components
console.log(now.getFullYear());     // 2024
console.log(now.getMonth());        // 0-11 (January = 0)
console.log(now.getDate());        // 1-31
console.log(now.getDay());         // 0-6 (Sunday = 0)
console.log(now.getHours());       // 0-23
console.log(now.getMinutes());     // 0-59
console.log(now.getSeconds());     // 0-59
console.log(now.getMilliseconds());
console.log(now.getTime());         // Timestamp

// Setting Components
now.setFullYear(2025);
now.setMonth(5);  // June
now.setDate(20);

// Date Formatting
console.log(now.toDateString());       // "Fri Jun 20 2025"
console.log(now.toTimeString());        // "HH:MM:SS GMT..."
console.log(now.toISOString());         // "2025-06-20T..."
console.log(now.toLocaleDateString());  // Local format
console.log(now.toLocaleTimeString());

// Date Arithmetic
const start = new Date("2024-01-01");
const end = new Date("2024-01-15");
const diff = end - start;  // Milliseconds
console.log(diff / (1000 * 60 * 60 * 24));  // 14 days

// More Calculations
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
console.log(addDays(new Date(), 7));  // Date 7 days from now

// Relative Time
function timeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 }
    ];
    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            return \`\${count} \${interval.label}\${count > 1 ? 's' : ''} ago\`;
        }
    }
    return "just now";
}
console.log(timeAgo(new Date(Date.now() - 3600000)));  // "1 hour ago"`}),t.jsx(W,{questions:[{question:"What month does getMonth() return for March?",options:["1","2","3","0"],correctAnswer:1,explanation:"JavaScript's getMonth() is zero-indexed, so January is 0 and March is 2."},{question:"How do you calculate the number of days between two dates?",options:["date1 - date2","(date1 - date2) / 86400000","date1.daysTo(date2)","date1.getDays() - date2.getDays()"],correctAnswer:1,explanation:"Subtract the timestamps and divide by the number of milliseconds in a day (1000 * 60 * 60 * 24 = 86400000)."}]})]})},"advjs-regex":{id:"advjs-regex",title:"Regular Expressions",icon:t.jsx(rh,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Regular Expressions (Regex)"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Regular expressions are patterns used to match character combinations in text. They're powerful for validation, search, and text replacement."}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-3",children:"Regex Syntax"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-bold text-purple-600 mb-2",children:"Character Classes"}),t.jsx("code",{className:"text-xs",children:". - any character"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"\\d - digit [0-9]"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"\\w - word [a-zA-Z0-9_]"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"\\s - whitespace"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-bold text-purple-600 mb-2",children:"Quantifiers"}),t.jsx("code",{className:"text-xs",children:"* - 0 or more"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"+ - 1 or more"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"? - 0 or 1"}),t.jsx("br",{}),t.jsxs("code",{className:"text-xs",children:["{","n","}"," - exactly n"]})]})]})]})]}),t.jsx(U,{title:"Regular Expressions Demo",language:"javascript",initialCode:`// Creating Regular Expressions
const regex1 = /pattern/flags;
const regex2 = new RegExp("pattern", "flags");

// Flags: g (global), i (case-insensitive), m (multiline)

// Basic Matching
const text = "Hello World! 123";
console.log(/hello/.test(text));           // false (case-sensitive)
console.log(/hello/i.test(text));          // true (case-insensitive)
console.log(/\\d+/.test(text));            // true (digits)
console.log(/\\w+/.test(text));            // true (word characters)

// Metacharacters
console.log(/^Hello/.test(text));           // true (starts with Hello)
console.log(/World$/.test(text));           // true (ends with World)
console.log(/\\d{3}/.test(text));          // true (3 digits)
console.log(/[aeiou]/i.test(text));        // true (any vowel)

// Searching
const sentence = "The quick brown fox jumps";
console.log(sentence.match(/\\w+ox/));     // ["fox"]
console.log(sentence.search(/brown/));      // 10
console.log("abc123def".replace(/\\d+/, "XYZ"));  // "abcXYZdef"
console.log("cat bat hat".replace(/at/g, "ond"));  // "cond bond hend"

// More Patterns
const email = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
console.log(email.test("user@example.com"));  // true
console.log(email.test("invalid"));          // false

const phone = /^\\d{3}-\\d{3}-\\d{4}$/;
console.log(phone.test("123-456-7890"));    // true

const url = /^https?:\\/\\/[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&'()*+,;=.]*$/;
console.log(url.test("https://example.com"));  // true

// replace with function
console.log("John Doe".replace(/(\\w+) (\\w+)/, "$2, $1"));  // "Doe, John"

// Split with regex
console.log("a,b;c:d".split(/[,;:]/));  // ["a","b","c","d"]`}),t.jsx(z,{question:"Write a regular expression that validates a password. The password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&).",hint:"Use lookahead assertions (?=...) to check for multiple conditions without consuming characters.",solution:`const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;

console.log(passwordRegex.test("Pass123@"));     // true
console.log(passwordRegex.test("password"));     // false (no uppercase, no digit, no special)
console.log(passwordRegex.test("PASS123@"));     // false (no lowercase)
console.log(passwordRegex.test("Pass@"));        // false (too short)`}),t.jsx(W,{questions:[{question:"What does the regex pattern /^\\d+$/ match?",options:["Any text with digits","One or more digits only","A single digit","Text starting with a digit"],correctAnswer:1,explanation:"^\\d+$ matches strings that consist entirely of one or more digits (\\d+) from start (^) to end ($)."},{question:"What is a lookahead assertion in regex?",options:["Looking ahead to the next character","Checking a pattern without consuming characters","Matching multiple patterns","Skipping characters in the match"],correctAnswer:1,explanation:"Lookahead (?=...) checks if a pattern exists ahead without including it in the match."},{question:"Which flag makes a regex case-insensitive?",options:["g","m","i","s"],correctAnswer:2,explanation:"The 'i' flag makes the regex match regardless of case."}]})]})},"advjs-cookies":{id:"advjs-cookies",title:"Cookies and Storage",icon:t.jsx(uc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Browser Storage"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Modern browsers provide several ways to store data on the client side. Understanding when to use each is crucial for building effective web applications."}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[{type:"localStorage",size:"~5MB",lifetime:"Permanent",color:"blue"},{type:"sessionStorage",size:"~5MB",lifetime:"Tab session",color:"green"},{type:"cookies",size:"~4KB",lifetime:"Customizable",color:"orange"}].map((i,f)=>t.jsxs("div",{className:`bg-${i.color}-50 dark:bg-${i.color}-900/20 border border-${i.color}-200 dark:border-${i.color}-800 rounded-xl p-4`,children:[t.jsx("p",{className:`font-bold text-${i.color}-800 dark:text-${i.color}-200`,children:i.type}),t.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Size: ",i.size]}),t.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Lifetime: ",i.lifetime]})]},f))})]}),t.jsx(U,{title:"Browser Storage Demo",language:"javascript",initialCode:`// localStorage (persists until cleared)
localStorage.setItem("name", "John");
localStorage.setItem("theme", "dark");
localStorage.setItem("preferences", JSON.stringify({ fontSize: 16 }));

const name = localStorage.getItem("name");
const prefs = JSON.parse(localStorage.getItem("preferences"));
localStorage.removeItem("name");
localStorage.clear();  // Clear all

// sessionStorage (cleared when tab closes)
sessionStorage.setItem("currentPage", "1");
const page = sessionStorage.getItem("currentPage");

// Storing objects (must serialize)
const user = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
const savedUser = JSON.parse(localStorage.getItem("user"));

// Cookies
document.cookie = "username=John; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
document.cookie = "theme=dark; max-age=8640000";  // 100 days
document.cookie = "secure=true; samesite=strict";

// Reading cookies
console.log(document.cookie);  // "username=John; theme=dark; secure=true"

// Better cookie handling
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = \`\${name}=\${value};expires=\${expires.toUTCString()};path=/\`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

// Check for feature support
if (typeof(Storage) !== "undefined") {
    console.log("localStorage supported!");
} else {
    console.log("No localStorage support - fallback to cookies");
}

// Storage event (for cross-tab sync)
window.addEventListener('storage', (e) => {
    console.log('Storage changed:', e.key);
    console.log('Old value:', e.oldValue);
    console.log('New value:', e.newValue);
});`}),t.jsx(W,{questions:[{question:"How much data can typically be stored in localStorage?",options:["About 5KB","About 5MB","About 50MB","Unlimited"],correctAnswer:1,explanation:"localStorage typically allows about 5MB of storage, which is shared across all pages from the same origin."},{question:"What happens to sessionStorage when the browser is closed?",options:["Data is preserved","Data is cleared","Data is encrypted","Data is moved to localStorage"],correctAnswer:1,explanation:"sessionStorage is cleared when the browser tab or window is closed. It only persists within the current session."}]}),t.jsx(z,{question:"Create a function called 'rememberTheme' that: 1) Accepts a theme preference ('light' or 'dark'), 2) Stores it in localStorage with key 'theme', 3) Creates a cookie with the same value that expires in 30 days, 4) Returns an object with both the localStorage and cookie status.",hint:"Use localStorage.setItem() for storage and document.cookie for cookies with proper expiration",solution:`function rememberTheme(theme) {
    // Validate theme
    if (theme !== 'light' && theme !== 'dark') {
        return { error: 'Invalid theme. Use "light" or "dark".' };
    }

    // Store in localStorage
    localStorage.setItem('theme', theme);
    const localStatus = 'Theme saved to localStorage';

    // Create cookie with 30-day expiration
    const expires = new Date();
    expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = \`theme=\${theme};expires=\${expires.toUTCString()};path=/\`;
    const cookieStatus = 'Cookie set for 30 days';

    // Return status object
    return {
        theme: theme,
        localStorage: localStatus,
        cookie: cookieStatus
    };
}

// Usage:
console.log(rememberTheme('dark'));
// { theme: 'dark', localStorage: 'Theme saved to localStorage', cookie: 'Cookie set for 30 days' }`})]})},"advjs-jquery":{id:"advjs-jquery",title:"jQuery Introduction",icon:t.jsx(Ws,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"jQuery Fundamentals"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal, event handling, and animation much simpler."}),t.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Why jQuery?"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Cross-browser compatibility"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Simple and concise syntax"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Powerful DOM manipulation"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Built-in AJAX support"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"jQuery vs Vanilla JS"}),t.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm",children:t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3",children:[t.jsx("p",{className:"font-bold text-blue-600 mb-2",children:"Vanilla JavaScript"}),t.jsx("code",{className:"text-xs",children:"document.querySelector('.box')"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"element.style.color = 'red'"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"element.addEventListener()"})]}),t.jsxs("div",{className:"bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3",children:[t.jsx("p",{className:"font-bold text-purple-600 mb-2",children:"jQuery"}),t.jsx("code",{className:"text-xs",children:"$('.box')"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"$element.css('color', 'red')"}),t.jsx("br",{}),t.jsx("code",{className:"text-xs",children:"$element.on('click', fn)"})]})]})})]}),t.jsx(U,{title:"jQuery Demo",language:"javascript",initialCode:`// Wait for DOM ready
$(document).ready(function() {
    // Code here runs after DOM loads
});

// Shorthand
$(function() {
    // Shorthand syntax
});

// Selecting Elements
$('#myId');           // ID selector
$('.myClass');        // Class selector
$('div');             // Tag selector
$('div.myClass');     // Combined
$('ul li:first');     // Pseudo-selectors

// Traversing
$('#list').find('li');        // All descendants
$('#list').children('li');    // Direct children
$('#item').parent();          // Parent
$('#item').siblings();        // Siblings
$('#item').next();            // Next sibling
$('#item').prev();            // Previous sibling

// DOM Manipulation
$('#box').text('New text');
$('#box').html('<strong>HTML</strong>');
$('#box').val();                    // Form value
$('#box').attr('class', 'active'); // Attributes
$('#box').css('color', 'red');
$('#box').addClass('highlight');
$('#box').removeClass('highlight');
$('#box').toggleClass('highlight');

// Creating Elements
const $newDiv = $('<div>').text('Hello').addClass('box');
$('body').append($newDiv);

// Animation
$('#box').show();
$('#box').hide();
$('#box').toggle();
$('#box').fadeIn(300);
$('#box').fadeOut(300);
$('#box').slideUp(300);
$('#box').slideDown(300);

// Event Handling
$('#btn').click(function() {
    alert('Clicked!');
});

$('#btn').on('click', function() {
    console.log('Handler 1');
});

$('#btn').on('click', function() {
    console.log('Handler 2');
});

// Event Delegation
$('ul').on('click', 'li', function() {
    $(this).toggleClass('active');
});

// AJAX
$.ajax({
    url: '/api/data',
    method: 'GET',
    success: function(response) {
        console.log(response);
    },
    error: function(xhr, status, error) {
        console.error(error);
    }
});

// Shorthand AJAX
$.get('/api/data', function(response) {
    console.log(response);
});

$.post('/api/submit', { name: 'John' }, function(response) {
    console.log(response);
});`}),t.jsx(W,{questions:[{question:"Which is the correct jQuery syntax to hide all elements with the class 'demo'?",options:["$('.demo').hide()","$('#demo').hide()","$('demo').hide()","hide('.demo')"],correctAnswer:0,explanation:"In jQuery, $() is used to select elements. $('.demo') selects all elements with class 'demo'."},{question:"What does $(document).ready() do?",options:["Loads external scripts","Ensures DOM is fully loaded before running code","Creates a new document","Saves the document state"],correctAnswer:1,explanation:"$(document).ready() waits until the DOM is fully loaded before executing the code inside, preventing errors from missing elements."}]}),t.jsx(z,{question:"Write jQuery code that: 1) Waits for the DOM to be ready, 2) Selects all paragraphs with class 'intro', 3) Changes their text to 'Welcome!', 4) Adds a 'highlight' class to them, 5) Attaches a click handler that logs 'Clicked!' to the console.",hint:"Use $(document).ready(), .text(), .addClass(), and .click() or .on('click') methods",solution:`$(document).ready(function() {
    // Select all paragraphs with class 'intro'
    const $introParagraphs = $('p.intro');

    // Change text to 'Welcome!'
    $introParagraphs.text('Welcome!');

    // Add 'highlight' class
    $introParagraphs.addClass('highlight');

    // Attach click handler
    $introParagraphs.on('click', function() {
        console.log('Clicked!');
    });

    // Alternative: Using each() for individual handling
    $introParagraphs.each(function() {
        $(this).on('click', function() {
            console.log('Clicked!');
        });
    });
});

// Shorthand syntax (same effect)
$(function() {
    $('p.intro')
        .text('Welcome!')
        .addClass('highlight')
        .on('click', function() {
            console.log('Clicked!');
        });
});`})]})},"advjs-ajax":{id:"advjs-ajax",title:"AJAX and Fetch API",icon:t.jsx(ah,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Asynchronous JavaScript"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"AJAX (Asynchronous JavaScript and XML) allows web pages to communicate with servers without reloading. The Fetch API is the modern way to make HTTP requests."}),t.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-green-800 dark:text-green-200 mb-3",children:"Modern Fetch API"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm",children:[t.jsx("p",{className:"text-green-600",children:"fetch(url)"}),t.jsxs("p",{className:"text-green-600",children:[".then(response ","=>"," response.json())"]}),t.jsxs("p",{className:"text-green-600",children:[".then(data ","=>"," console.log(data))"]}),t.jsxs("p",{className:"text-green-600",children:[".catch(error ","=>"," console.error(error));"]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Async/Await"}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6",children:[t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-3",children:"async/await makes asynchronous code look and behave like synchronous code. It's built on top of Promises."}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["async function fetchData() ","{"]}),t.jsx("p",{className:"ml-4 text-blue-600",children:"const response = await fetch(url);"}),t.jsx("p",{className:"ml-4 text-blue-600",children:"const data = await response.json();"}),t.jsx("p",{className:"ml-4 text-purple-600",children:"return data;"}),t.jsx("p",{className:"text-purple-600",children:"}"})]})]})]}),t.jsx(U,{title:"Fetch API Demo",language:"javascript",initialCode:`// Basic GET Request
fetch('https://api.example.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// POST Request with JSON
async function createUser(userData) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer token123'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Failed to create user');
        }

        const newUser = await response.json();
        console.log('Created:', newUser);
        return newUser;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Using the function
createUser({ name: 'John', email: 'john@example.com' });

// Working with Headers
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Authorization', 'Bearer token123');

// Request Object
const request = new Request('https://api.example.com/data', {
    method: 'GET',
    headers: headers,
    cache: 'no-cache'
});

// Handle different response types
async function handleResponse(response) {
    const contentType = response.headers.get('content-type');

    if (contentType.includes('application/json')) {
        return await response.json();
    } else if (contentType.includes('text/html')) {
        return await response.text();
    } else if (contentType.includes('image/')) {
        return await response.blob();
    }

    throw new Error('Unknown content type');
}

// Multiple simultaneous requests
Promise.all([
    fetch('/api/user'),
    fetch('/api/posts'),
    fetch('/api/comments')
])
.then(responses => Promise.all(responses.map(r => r.json())))
.then(([user, posts, comments]) => {
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
});

// Upload File
async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
    });

    return await response.json();
}

// Retry logic
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) return response;
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(r => setTimeout(r, 1000 * (i + 1)));
        }
    }
}`}),t.jsx(z,{question:"Create an async function that fetches data from a JSON placeholder API (https://jsonplaceholder.typicode.com/posts/1) and returns the post title.",hint:"Use fetch() to get the data, then .json() to parse it. Use async/await for cleaner syntax. Access the title property from the response.",solution:`async function getPostTitle() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const post = await response.json();
        return post.title;
    } catch (error) {
        console.error('Failed to fetch post:', error);
        return null;
    }
}

// Or with .then()
function getPostTitle() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(post => post.title)
        .catch(error => {
            console.error('Failed to fetch post:', error);
            return null;
        });
}`}),t.jsx(W,{questions:[{question:"What does the Fetch API return?",options:["The response data directly","A Promise that resolves to a Response object","XML data","An error if the request fails"],correctAnswer:1,explanation:"fetch() returns a Promise that resolves to a Response object. You need to call .json() to parse the response body."},{question:"What is the purpose of 'await' in async functions?",options:["It creates a new Promise","It pauses execution until the Promise resolves","It cancels the request","It converts data to JSON"],correctAnswer:1,explanation:"await pauses the async function execution until the Promise resolves, making asynchronous code read like synchronous code."},{question:"How do you handle errors in async/await?",options:["Using .catch() only","Using try/catch blocks","Using if/else statements","Errors cannot be handled"],correctAnswer:1,explanation:"Use try/catch blocks to handle errors in async/await functions. The catch block receives any rejected Promise."}]})]})},"advjs-exercises":{id:"advjs-exercises",title:"Practical Project",icon:t.jsx(Fp,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Build an Interactive To-Do App"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Let's put everything together! Build a fully functional to-do application using DOM manipulation, events, and localStorage."}),t.jsxs("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Features to Implement"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Add new todos with input field"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Mark todos as complete/incomplete"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Delete todos"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Filter by all/active/completed"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Persist data to localStorage"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Show count of remaining items"})]})]})]})]}),t.jsx(U,{title:"To-Do App Project",language:"javascript",initialCode:`// HTML Structure
// <div id="app">
//   <h1>My To-Do List</h1>
//   <input type="text" id="todoInput" placeholder="Add a new todo...">
//   <button id="addBtn">Add</button>
//   <ul id="todoList"></ul>
//   <div id="filters">
//     <button data-filter="all">All</button>
//     <button data-filter="active">Active</button>
//     <button data-filter="completed">Completed</button>
//   </div>
//   <p id="count">0 items left</p>
// </div>

// State
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// DOM Elements
const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');
const count = document.getElementById('count');

// Save to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Render todos
function render() {
    const filtered = todos.filter(todo => {
        if (currentFilter === 'active') return !todo.completed;
        if (currentFilter === 'completed') return todo.completed;
        return true;
    });

    list.innerHTML = filtered.map(todo => \`
        <li class="\${todo.completed ? 'completed' : ''}">
            <input type="checkbox"
                   \${todo.completed ? 'checked' : ''}
                   data-id="\${todo.id}">
            <span>\${todo.text}</span>
            <button data-delete="\${todo.id}">X</button>
        </li>
    \`).join('');

    updateCount();
}

// Update count
function updateCount() {
    const remaining = todos.filter(t => !t.completed).length;
    count.textContent = \`\${remaining} \${remaining === 1 ? 'item' : 'items'} left\`;
}

// Add todo
function addTodo() {
    const text = input.value.trim();
    if (!text) return;

    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    input.value = '';
    saveTodos();
    render();
}

// Toggle todo
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        render();
    }
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    render();
}

// Event Listeners
addBtn.addEventListener('click', addTodo);
input.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTodo();
});

list.addEventListener('click', e => {
    const id = parseInt(e.target.dataset.id || e.target.dataset.delete);
    if (e.target.type === 'checkbox') toggleTodo(id);
    if (e.target.dataset.delete !== undefined) deleteTodo(id);
});

document.querySelectorAll('#filters button').forEach(btn => {
    btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        document.querySelectorAll('#filters button')
            .forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
    });
});

// Initial render
render();`})]})}},C=Object.values(L);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx(Xn,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 5: Advanced JavaScript & jQuery"}),t.jsx("p",{className:"text-white/80",children:"Explore DOM manipulation, events, objects, strings, dates, regular expressions, cookies, and jQuery"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:C.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:C.map((i,f)=>{const P=p===i.id,H=y[`chapter5-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${P?"border-purple-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>N(P?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${H?"bg-green-100 dark:bg-green-900/30 text-green-600":"bg-purple-100 dark:bg-purple-900/30 text-purple-600"}`,children:H?t.jsx(M,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",P?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),P?t.jsx(Bs,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),P&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(W,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!H&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(M,{className:"w-5 h-5"})," Mark as Complete"]}),H&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(M,{className:"w-5 h-5"})," Completed"]})]})]})]},i.id)})})]})}function gh({progress:y,updateProgress:E}){const[p,N]=G.useState("php-intro"),S=i=>{E("chapter6",i,!0)},L={"php-intro":{id:"php-intro",title:"Introduction to PHP",icon:t.jsx(wt,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"What is PHP?"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"PHP (PHP: Hypertext Preprocessor)"})," is a server-side scripting language designed specifically for web development. Unlike JavaScript which runs in the browser, PHP executes on the server and sends the result to the client."]}),t.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Why Learn PHP?"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Powerful server-side capabilities"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Seamless database integration (MySQL)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"60% of all websites use PHP (WordPress, Facebook, etc.)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Easy to learn and deploy"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"How PHP Works"}),t.jsx(ts,{type:"diagram",title:"Client-Server Architecture",description:"See how PHP processes requests on the server",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between gap-4",children:[t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-xl p-4 text-center flex-1",children:[t.jsx("div",{className:"bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2",children:t.jsx("span",{className:"text-white text-2xl",children:"💻"})}),t.jsx("p",{className:"font-bold text-blue-800 dark:text-blue-200",children:"Client Browser"}),t.jsx("p",{className:"text-xs text-blue-600 dark:text-blue-400",children:"HTML/CSS/JavaScript"})]}),t.jsx("div",{className:"text-3xl text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-purple-100 dark:bg-purple-900/30 rounded-xl p-4 text-center flex-1",children:[t.jsx("div",{className:"bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2",children:t.jsx("span",{className:"text-white text-2xl",children:"🌐"})}),t.jsx("p",{className:"font-bold text-purple-800 dark:text-purple-200",children:"Web Server"}),t.jsx("p",{className:"text-xs text-purple-600 dark:text-purple-400",children:"Apache/Nginx"})]}),t.jsx("div",{className:"text-3xl text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-green-100 dark:bg-green-900/30 rounded-xl p-4 text-center flex-1",children:[t.jsx("div",{className:"bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2",children:t.jsx("span",{className:"text-white text-2xl",children:"🐘"})}),t.jsx("p",{className:"font-bold text-green-800 dark:text-green-200",children:"PHP Engine"}),t.jsx("p",{className:"text-xs text-green-600 dark:text-green-400",children:"Server-side Code"})]})]}),t.jsx("div",{className:"flex justify-center",children:t.jsxs("div",{className:"bg-orange-100 dark:bg-orange-900/30 rounded-xl p-4 text-center",children:[t.jsx("div",{className:"bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2",children:t.jsx("span",{className:"text-white text-2xl",children:"🗄️"})}),t.jsx("p",{className:"font-bold text-orange-800 dark:text-orange-200",children:"MySQL Database"})]})})]})}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3 mt-6",children:"Basic PHP Syntax"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm",children:[t.jsx("p",{className:"text-purple-600",children:"<?php"}),t.jsx("p",{className:"text-green-600",children:"// PHP code goes here"}),t.jsxs("p",{className:"text-purple-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Hello World!"'}),";"]}),t.jsx("p",{className:"text-purple-600",children:"?>"})]})]}),t.jsx(U,{title:"Your First PHP Script",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Introduction</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        .code-block {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
        }
        .output {
            background: #e3f2fd;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #2196f3;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>PHP Basics</h1>

    <div class="code-block">
        <strong>PHP Code:</strong>
        <pre>&lt;?php
echo "Hello, World!";
$name = "Student";
echo "Welcome, " . $name;
?&gt;</pre>
    </div>

    <div class="output">
        <strong>Output:</strong>
        <p>Note: PHP runs on the server. In a real server environment, this would output the result.</p>
        <p>Hello, World! Welcome, Student</p>
    </div>

    <h3>Key PHP Concepts</h3>
    <ul>
        <li>PHP code is enclosed in &lt;?php and ?&gt; tags</li>
        <li>Statements end with semicolon (;)</li>
        <li>Variables start with $ sign</li>
        <li>Strings can be joined with . operator</li>
    </ul>
</body>
</html>`}),t.jsx(W,{questions:[{question:"What is the correct PHP opening tag?",options:["<php>","<?php","<script php>","PHP"],correctAnswer:1,explanation:"The correct PHP opening tag is <?php. PHP code is enclosed between <?php and ?> tags."},{question:"What symbol is used to define variables in PHP?",options:["@","$","#","VAR"],correctAnswer:1,explanation:"Variables in PHP are prefixed with a dollar sign ($), like $variableName."},{question:"Where does PHP code execute?",options:["In the user's browser","On the web server","On the client computer","In the database"],correctAnswer:1,explanation:"PHP is a server-side language, meaning the code executes on the web server before sending results to the browser."}]}),t.jsx(z,{question:"Create a PHP script that declares variables of different data types (string, integer, float, boolean) and displays each one. Use echo to output the values.",hint:"Use $ to declare variables, and remember PHP is loosely typed - you don't need to specify types",solution:`<?php
$name = "Web Developer";
echo "Name: " . $name . "<br>";

$age = 25;
echo "Age: " . $age . "<br>";

$price = 19.99;
echo "Price: $" . $price . "<br>";

$is_student = true;
echo "Is Student: " . ($is_student ? "Yes" : "No") . "<br>";

echo "<br>Type checking:<br>";
echo gettype($name) . "<br>";
echo gettype($age) . "<br>";
echo gettype($price) . "<br>";
echo gettype($is_student) . "<br>";
?>`,validationCode:`const code = {answer}.toLowerCase();
const hasPhpTag = code.includes('<?php') || code.includes('php');
const hasDollar = code.includes('$');
const hasEcho = code.includes('echo');
const hasString = code.includes('"') || code.includes("'");
const hasInteger = /d+/.test({answer}) && !code.includes('.');
const hasFloat = code.includes('.') && /d/.test({answer});
const hasBoolean = code.includes('true') || code.includes('false');
return hasPhpTag && hasDollar && hasEcho && hasString && hasInteger && hasFloat && hasBoolean;`})]})},"php-variables":{id:"php-variables",title:"Variables and Data Types",icon:t.jsx(jc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Variables"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["In PHP, variables are represented by a dollar sign ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"$"})," followed by the variable name. PHP is a loosely typed language - you don't need to declare variable types."]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Data Types in PHP"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",children:[{type:"String",example:'"Hello"',color:"green"},{type:"Integer",example:"42",color:"blue"},{type:"Float",example:"3.14",color:"purple"},{type:"Boolean",example:"true / false",color:"orange"},{type:"Array",example:"[1, 2, 3]",color:"red"},{type:"NULL",example:"null",color:"gray"}].map((i,f)=>t.jsxs("div",{className:`bg-${i.color}-50 dark:bg-${i.color}-900/20 border border-${i.color}-200 dark:border-${i.color}-800 rounded-xl p-4`,children:[t.jsx("p",{className:`font-bold text-${i.color}-800 dark:text-${i.color}-200 mb-1`,children:i.type}),t.jsx("code",{className:"text-sm",children:i.example})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Variable Naming Rules"}),t.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6",children:t.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-400",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"}),t.jsxs("span",{children:["Variables must start with ",t.jsx("code",{children:"$"})," followed by letter or underscore"]})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"}),t.jsx("span",{children:"Can only contain alphanumeric characters and underscores (A-z, 0-9, _)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"}),t.jsxs("span",{children:["Variable names are case-sensitive (",t.jsx("code",{children:"$name"})," ≠ ",t.jsx("code",{children:"$Name"}),")"]})]})]})})]}),t.jsx(U,{title:"PHP Variables Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Variables</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 10px 0; }
        .output { background: #e8f5e9; padding: 15px; border-radius: 8px; margin-top: 10px; }
        h2 { color: #2e7d32; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Variables Examples</h2>

    <div class="demo">
        <h3>String Variables</h3>
        <p><code>&lt;?php $name = "WebDev"; $greeting = "Hello"; ?&gt;</code></p>
        <p><strong>Result:</strong> Variables store text values</p>
    </div>

    <div class="demo">
        <h3>Number Variables</h3>
        <p><code>&lt;?php $age = 25; $price = 99.99; ?&gt;</code></p>
        <p><strong>Result:</strong> Can store integers (25) and floats (99.99)</p>
    </div>

    <div class="demo">
        <h3>Boolean Variables</h3>
        <p><code>&lt;?php $isActive = true; $isComplete = false; ?&gt;</code></p>
        <p><strong>Result:</strong> true = 1, false = "" (empty)</p>
    </div>

    <div class="demo">
        <h3>Variable Concatenation</h3>
        <p><code>&lt;?php echo "Hello " . "World"; ?&gt;</code></p>
        <p><strong>Result:</strong> Use . to join strings together</p>
    </div>

    <div class="demo">
        <h3>Variable Interpolation</h3>
        <p><code>&lt;?php $item = "PHP"; echo "I love $item"; ?&gt;</code></p>
        <p><strong>Result:</strong> Variables inside " " are replaced</p>
    </div>

    <div class="output">
        <strong>Summary:</strong>
        <ul>
            <li>Variables start with $</li>
            <li>No need to declare types</li>
            <li>Use . for string concatenation</li>
            <li>Use " " for variable interpolation</li>
        </ul>
    </div>
</body>
</html>`}),t.jsx(W,{questions:[{question:"Which is the correct way to declare a variable in PHP?",options:["var name = 'John'","let name = 'John'","$name = 'John'","int name = 5"],correctAnswer:2,explanation:"PHP variables start with the $ symbol, followed by the variable name."},{question:"How do you concatenate two strings in PHP?",options:["'Hello' + 'World'","'Hello' . 'World'","'Hello' & 'World'","'Hello' :: 'World'"],correctAnswer:1,explanation:"PHP uses the dot (.) operator for string concatenation."}]}),t.jsx(z,{question:"Create a PHP script that demonstrates variable usage with all basic data types. Include:\\n1. A string variable with your name\\n2. An integer variable with your age\\n3. A float variable with a product price\\n4. A boolean variable indicating if you're a student\\n5. Output all variables using echo, showing both the value and its type using gettype()",hint:"Use gettype() function to check and display the data type of each variable",solution:`<?php
// String variable
$name = "Ahmed Khan";
echo "Name: " . $name . " (Type: " . gettype($name) . ")<br>";

// Integer variable
$age = 28;
echo "Age: " . $age . " (Type: " . gettype($age) . ")<br>";

// Float variable
$price = 49.99;
echo "Price: $" . $price . " (Type: " . gettype($price) . ")<br>";

// Boolean variable
$is_student = true;
echo "Student Status: " . ($is_student ? "Yes" : "No") . " (Type: " . gettype($is_student) . ")<br>";

// Using variable interpolation
echo "<br>Using interpolation: I am $name and I am $age years old.<br>";

// Changing variable type (PHP is loosely typed)
$price = "Fifty dollars";
echo "Price changed to: " . $price . " (Type: " . gettype($price) . ")<br>";
?>`})]})},"php-operators":{id:"php-operators",title:"Operators in PHP",icon:t.jsx(Ip,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Operators"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Operators are used to perform operations on variables and values. PHP supports various types of operators."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-4",children:"Arithmetic Operators"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Addition"}),t.jsx("code",{className:"text-green-600",children:"$a + $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Subtraction"}),t.jsx("code",{className:"text-green-600",children:"$a - $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Multiplication"}),t.jsx("code",{className:"text-green-600",children:"$a * $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Division"}),t.jsx("code",{className:"text-green-600",children:"$a / $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Modulus"}),t.jsx("code",{className:"text-green-600",children:"$a % $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Exponentiation"}),t.jsx("code",{className:"text-green-600",children:"$a ** $b"})]})]})]}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-4",children:"Comparison Operators"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Equal"}),t.jsx("code",{className:"text-green-600",children:"$a == $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Identical"}),t.jsx("code",{className:"text-green-600",children:"$a === $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Not Equal"}),t.jsx("code",{className:"text-green-600",children:"$a != $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Greater Than"}),t.jsxs("code",{className:"text-green-600",children:["$a ",">"," $b"]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Less Than"}),t.jsxs("code",{className:"text-green-600",children:["$a ","<"," $b"]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Spaceship"}),t.jsxs("code",{className:"text-green-600",children:["$a ","<=>"," $b"]})]})]})]})]}),t.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-green-800 dark:text-green-200 mb-4",children:"Logical Operators"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{op:"AND",symbol:"&&"},{op:"OR",symbol:"||"},{op:"XOR",symbol:"xor"},{op:"NOT",symbol:"!"}].map((i,f)=>t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3 text-center",children:[t.jsx("p",{className:"font-bold text-green-600",children:i.op}),t.jsx("code",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.symbol})]},f))})]})]}),t.jsx(U,{title:"PHP Operators Practice",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Operators</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .box { background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 10px 0; }
        .result { background: #e3f2fd; border-left: 4px solid #2196f3; padding: 10px; margin: 5px 0; }
        code { background: #fff3e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Operators Examples</h2>

    <div class="box">
        <h3>Arithmetic Operators</h3>
        <p><code>$a = 10; $b = 3;</code></p>
        <div class="result">
            <strong>Addition:</strong> $a + $b = 13<br>
            <strong>Subtraction:</strong> $a - $b = 7<br>
            <strong>Multiplication:</strong> $a * $b = 30<br>
            <strong>Division:</strong> $a / $b = 3.33<br>
            <strong>Modulus:</strong> $a % $b = 1<br>
            <strong>Power:</strong> $a ** $b = 1000
        </div>
    </div>

    <div class="box">
        <h3>Comparison Operators</h3>
        <p><code>$x = 5; $y = "5"; $z = 10;</code></p>
        <div class="result">
            <strong>== vs ===:</strong><br>
            $x == $y is TRUE (same value)<br>
            $x === $y is FALSE (different types)<br>
            <br>
            <strong>Spaceship Operator:</strong><br>
            $x <=> $z = -1 (left is smaller)<br>
            $z <=> $x = 1 (left is larger)
        </div>
    </div>

    <div class="box">
        <h3>Logical Operators</h3>
        <p><code>$a = true; $b = false;</code></p>
        <div class="result">
            <strong>$a && $b =</strong> false (AND)<br>
            <strong>$a || $b =</strong> true (OR)<br>
            <strong>$a xor $b =</strong> true (XOR - one true)<br>
            <strong>!$a =</strong> false (NOT)
        </div>
    </div>
</body>
</html>`}),t.jsx(z,{question:"Create a PHP calculator using operators. Take two numbers ($a = 15, $b = 4) and perform all arithmetic operations (addition, subtraction, multiplication, division, modulus, and power). Display the results clearly.",hint:"Use arithmetic operators: +, -, *, /, %, and ** for power",solution:`<?php
$a = 15;
$b = 4;

echo "Calculator Demo:<br>";
echo "================<br><br>";
echo "Numbers: $a and $b<br><br>";

echo "Addition: $a + $b = " . ($a + $b) . "<br>";
echo "Subtraction: $a - $b = " . ($a - $b) . "<br>";
echo "Multiplication: $a * $b = " . ($a * $b) . "<br>";
echo "Division: $a / $b = " . ($a / $b) . "<br>";
echo "Modulus: $a % $b = " . ($a % $b) . "<br>";
echo "Power: $a ** $b = " . ($a ** $b) . "<br><br>";

// Comparison example
echo "Comparison:<br>";
echo "15 == '15': " . (15 == '15' ? 'true' : 'false') . "<br>";
echo "15 === '15': " . (15 === '15' ? 'true' : 'false') . "<br>";
echo "15 > 4: " . (15 > 4 ? 'true' : 'false') . "<br>";
echo "Spaceship (15 <=> 4): " . (15 <=> 4) . "<br>";
?>`})]})},"php-conditionals":{id:"php-conditionals",title:"Conditional Statements",icon:t.jsx(mc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Conditionals"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Conditional statements allow you to execute code based on certain conditions. PHP provides several conditional structures."}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// if statement"}),t.jsxs("p",{className:"text-green-600",children:["if ($score ",">="," 90) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Excellent!"'}),";"]}),t.jsx("p",{className:"text-green-600",children:"}"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// if...else statement"}),t.jsxs("p",{className:"text-green-600",children:["if ($age ",">="," 18) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Adult"'}),";"]}),t.jsxs("p",{className:"text-green-600",children:["}"," else ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Minor"'}),";"]}),t.jsx("p",{className:"text-green-600",children:"}"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// elseif"}),t.jsxs("p",{className:"text-green-600",children:["if ($grade ",">="," 90) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"A"'}),";"]}),t.jsxs("p",{className:"text-green-600",children:["}"," elseif ($grade ",">="," 80) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"B"'}),";"]}),t.jsxs("p",{className:"text-green-600",children:["}"," else ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"C"'}),";"]}),t.jsx("p",{className:"text-green-600",children:"}"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Switch Statement"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-green-600",children:["switch ($day) ","{"]}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["case ",t.jsx("span",{className:"text-orange-500",children:'"Monday"'}),":"]}),t.jsxs("p",{className:"ml-8 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Start of work week"'}),";"]}),t.jsx("p",{className:"ml-8 text-green-600",children:"break;"}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["case ",t.jsx("span",{className:"text-orange-500",children:'"Friday"'}),":"]}),t.jsxs("p",{className:"ml-8 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"End of work week"'}),";"]}),t.jsx("p",{className:"ml-8 text-green-600",children:"break;"}),t.jsx("p",{className:"ml-4 text-purple-600",children:"default:"}),t.jsxs("p",{className:"ml-8 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Regular day"'}),";"]}),t.jsx("p",{className:"text-green-600",children:"}"})]})]}),t.jsx(U,{title:"Conditional Statements Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Conditionals</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e8f5e9; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Conditional Statements</h2>

    <div class="demo">
        <h3>Grade Calculator Example</h3>
        <p><code>$score = 85;</code></p>
        <div class="output">
            <strong>Result:</strong><br>
            $score = 85<br>
            if ($score >= 90): "A" ✗<br>
            elseif ($score >= 80): "B" ✓ → You got a B!
        </div>
    </div>

    <div class="demo">
        <h3>Age Checker</h3>
        <p><code>$age = 17;</code></p>
        <div class="output">
            <strong>Result:</strong><br>
            if ($age >= 18): "You can vote" ✗<br>
            else: "You are too young to vote" ✓
        </div>
    </div>

    <div class="demo">
        <h3>Switch Statement - Day Type</h3>
        <p><code>$day = "Saturday";</code></p>
        <div class="output">
            <strong>Result:</strong><br>
            switch ($day) checks each case...<br>
            case "Saturday": → Weekend! 🎉
        </div>
    </div>

    <div class="demo">
        <h3>Ternary Operator</h3>
        <p><code>$status = ($age >= 18) ? "Adult" : "Minor";</code></p>
        <div class="output">
            <strong>Shorthand syntax:</strong><br>
            Shorthand for if...else on one line!<br>
            $status = (condition) ? value_if_true : value_if_false;
        </div>
    </div>
</body>
</html>`}),t.jsx(W,{questions:[{question:"Which operator is used for strict equality (checks value AND type)?",options:["=","==","===","!=="],correctAnswer:2,explanation:"=== is the identical operator that checks both value and type."},{question:"What is the ternary operator in PHP?",options:["&&","?:","??","||"],correctAnswer:1,explanation:"The ternary operator is ?: which acts as a shorthand if-else statement."}]})]})},"php-loops":{id:"php-loops",title:"Loop Statements",icon:t.jsx(yc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Loops"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Loops allow you to execute a block of code multiple times. PHP supports several types of loops."}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{name:"while",desc:"Loops while condition is true",icon:"🔄"},{name:"do...while",desc:"Executes once, then loops",icon:"⚡"},{name:"for",desc:"Known number of iterations",icon:"🔢"},{name:"foreach",desc:"Iterates over arrays",icon:"📦"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-start gap-3",children:[t.jsx("span",{className:"text-2xl",children:i.icon}),t.jsxs("div",{children:[t.jsx("p",{className:"font-bold text-gray-800 dark:text-white",children:i.name}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Loop Syntax"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm space-y-4",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-purple-600",children:"// while loop"}),t.jsx("p",{className:"text-green-600",children:"$i = 1;"}),t.jsxs("p",{className:"text-green-600",children:["while ($i ","<="," 5) ","{"]}),t.jsx("p",{className:"ml-4 text-blue-600",children:"echo $i;"}),t.jsx("p",{className:"ml-4 text-green-600",children:"$i++;"}),t.jsx("p",{className:"text-green-600",children:"}"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-purple-600",children:"// for loop"}),t.jsxs("p",{className:"text-green-600",children:["for ($i = 0; $i ","<"," 5; $i++) ","{"]}),t.jsx("p",{className:"ml-4 text-blue-600",children:"echo $i;"}),t.jsx("p",{className:"text-green-600",children:"}"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-purple-600",children:"// foreach loop"}),t.jsxs("p",{className:"text-green-600",children:["$colors = [",t.jsx("span",{className:"text-orange-500",children:'"red"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"green"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"blue"'}),"];"]}),t.jsxs("p",{className:"text-green-600",children:["foreach ($colors as $color) ","{"]}),t.jsx("p",{className:"ml-4 text-blue-600",children:"echo $color;"}),t.jsx("p",{className:"text-green-600",children:"}"})]})]})]}),t.jsx(U,{title:"PHP Loops Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Loops</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
    </style>
</head>
<body>
    <h2>PHP Loop Examples</h2>

    <div class="demo">
        <h3>For Loop - Counting</h3>
        <p>Code: for ($i = 1; $i <= 5; $i++) {'{ echo $i; }'}</p>
        <div class="output">
            <strong>Output:</strong> 1 2 3 4 5
        </div>
    </div>

    <div class="demo">
        <h3>While Loop - Multiplication Table</h3>
        <p>Code: $i = 1; while ($i <= 5) {'{ echo $i * 2; $i++; }'}</p>
        <div class="output">
            <strong>Output:</strong> 2 4 6 8 10 (2 times table)
        </div>
    </div>

    <div class="demo">
        <h3>Foreach Loop - Arrays</h3>
        <p>Code: $fruits = ["apple", "banana", "orange"];</p>
        <p>foreach ($fruits as $fruit) {'{ echo $fruit; }'}</p>
        <div class="output">
            <strong>Output:</strong> apple, banana, orange
        </div>
    </div>

    <div class="demo">
        <h3>Foreach with Key-Value</h3>
        <p>Code: $person = ["name" => "John", "age" => 25];</p>
        <p>foreach ($person as $key => $value) {'{ echo "$key: $value"; }'}</p>
        <div class="output">
            <strong>Output:</strong> name: John, age: 25
        </div>
    </div>
</body>
</html>`}),t.jsx(z,{question:"Create a PHP script that prints the first 10 numbers of the Fibonacci sequence using a for loop.",hint:"The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two. Use a for loop with variables to track the sequence.",solution:"Use two variables to track the previous two numbers, and a for loop to iterate 10 times, printing each number and updating the variables."})]})},"php-arrays":{id:"php-arrays",title:"Arrays in PHP",icon:t.jsx(xc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Arrays"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Arrays are special variables that can hold multiple values at once. PHP supports both indexed and associative arrays."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Indexed Arrays"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm",children:[t.jsxs("p",{className:"text-green-600",children:["$colors = [",t.jsx("span",{className:"text-orange-500",children:'"red"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"green"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"blue"'}),"];"]}),t.jsx("p",{className:"text-gray-500 mt-2",children:"// Index: 0, 1, 2"})]})]}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-3",children:"Associative Arrays"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm",children:[t.jsx("p",{className:"text-green-600",children:"$person = ["}),t.jsxs("p",{className:"ml-4 text-purple-600",children:['"name" ',"=>"," ",t.jsx("span",{className:"text-orange-500",children:'"John"'}),","]}),t.jsxs("p",{className:"ml-4 text-purple-600",children:['"age" ',"=>"," ",t.jsx("span",{className:"text-blue-500",children:"25"})]}),t.jsx("p",{className:"text-green-600",children:"];"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Common Array Functions"}),t.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:["count()","array_push()","array_pop()","sort()","array_search()","in_array()","array_merge()","array_slice()"].map((i,f)=>t.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 text-center",children:t.jsx("code",{className:"text-sm text-green-600",children:i})},f))})})]}),t.jsx(U,{title:"PHP Arrays Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Arrays</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Arrays Examples</h2>

    <div class="demo">
        <h3>Indexed Array</h3>
        <p><code>$fruits = ["apple", "banana", "orange"];</code></p>
        <div class="output">
            <strong>Access elements:</strong><br>
            $fruits[0] = apple<br>
            $fruits[1] = banana<br>
            $fruits[2] = orange
        </div>
    </div>

    <div class="demo">
        <h3>Associative Array</h3>
        <p><code>$student = ["name" => "Alice", "grade" => "A", "year" => 3];</code></p>
        <div class="output">
            <strong>Access elements:</strong><br>
            $student["name"] = Alice<br>
            $student["grade"] = A<br>
            $student["year"] = 3
        </div>
    </div>

    <div class="demo">
        <h3>Array Functions</h3>
        <p><code>$nums = [3, 1, 4, 1, 5];</code></p>
        <div class="output">
            <strong>count($nums)</strong> = 5 elements<br>
            <strong>sort($nums)</strong> = [1, 1, 3, 4, 5]<br>
            <strong>array_sum($nums)</strong> = 14<br>
            <strong>max($nums)</strong> = 5
        </div>
    </div>

    <div class="demo">
        <h3>Multidimensional Array</h3>
        <p><code>$students = [["name" => "A", "score" => 90], ["name" => "B", "score" => 85]];</code></p>
        <div class="output">
            <strong>Access:</strong><br>
            $students[0]["name"] = A<br>
            $students[1]["score"] = 85
        </div>
    </div>
</body>
</html>`}),t.jsx(W,{questions:[{question:"How do you access the second element of an indexed array?",options:["$arr(1)","$arr{1}","$arr[1]","$arr->1"],correctAnswer:2,explanation:"Arrays in PHP use square brackets [] for indexing, starting from 0."},{question:"Which creates an associative array?",options:["$arr = [1, 2, 3]",'$arr = ["a", "b"]','$arr = ["name" => "John", "age" => 25]','$arr = {1: "a"}'],correctAnswer:2,explanation:"Associative arrays use key => value pairs."}]})]})},"php-functions":{id:"php-functions",title:"PHP Functions",icon:t.jsx(vc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Functions in PHP"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Functions are reusable blocks of code that perform a specific task. PHP has built-in functions and allows you to create custom functions."}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Creating Functions"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// User-defined function"}),t.jsxs("p",{className:"text-green-600",children:["function ",t.jsx("span",{className:"text-blue-600",children:"greet"}),"($name) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["return ",t.jsx("span",{className:"text-orange-500",children:'"Hello, " . $name;'})]}),t.jsx("p",{className:"text-green-600",children:"}"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Function with default parameter"}),t.jsxs("p",{className:"text-green-600",children:["function ",t.jsx("span",{className:"text-blue-600",children:"add"}),"($a, $b = 10) ","{"]}),t.jsx("p",{className:"ml-4 text-blue-600",children:"return $a + $b;"}),t.jsx("p",{className:"text-green-600",children:"}"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Built-in PHP Functions"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-orange-800 dark:text-orange-200 mb-2",children:"String Functions"}),t.jsx("code",{className:"text-sm text-orange-600",children:"strlen()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-orange-600",children:"str_replace()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-orange-600",children:"strtoupper()"})]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-blue-800 dark:text-blue-200 mb-2",children:"Array Functions"}),t.jsx("code",{className:"text-sm text-blue-600",children:"count()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-blue-600",children:"sort()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-blue-600",children:"array_sum()"})]}),t.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-green-800 dark:text-green-200 mb-2",children:"Math Functions"}),t.jsx("code",{className:"text-sm text-green-600",children:"abs()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-green-600",children:"round()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-green-600",children:"max()"})]})]})]}),t.jsx(U,{title:"PHP Functions Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Functions</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Functions Examples</h2>

    <div class="demo">
        <h3>Simple Function</h3>
        <p><code>function greet($name) {'{ return "Hello $name!"; }'}</code></p>
        <div class="output">
            <strong>Call:</strong> greet("World")<br>
            <strong>Result:</strong> Hello World!
        </div>
    </div>

    <div class="demo">
        <h3>Function with Return</h3>
        <p><code>function add($a, $b) {'{ return $a + $b; }'}</code></p>
        <div class="output">
            <strong>Call:</strong> add(5, 3)<br>
            <strong>Result:</strong> 8
        </div>
    </div>

    <div class="demo">
        <h3>Built-in String Functions</h3>
        <p><code>$text = "Hello World";</code></p>
        <div class="output">
            <strong>strlen($text)</strong> = 11 characters<br>
            <strong>strtoupper($text)</strong> = HELLO WORLD<br>
            <strong>str_replace("World", "PHP", $text)</strong> = Hello PHP
        </div>
    </div>

    <div class="demo">
        <h3>Default Parameters</h3>
        <p><code>function greet($name, $greeting = "Hello") {'{ return "$greeting $name"; }'}</code></p>
        <div class="output">
            <strong>Call:</strong> greet("John")<br>
            <strong>Result:</strong> Hello John<br><br>
            <strong>Call:</strong> greet("John", "Hi")<br>
            <strong>Result:</strong> Hi John
        </div>
    </div>
</body>
</html>`}),t.jsx(z,{question:"Write a PHP function that takes a number as a parameter and returns 'positive', 'negative', or 'zero' based on the number.",hint:"Use conditional statements inside the function. Check if the number is greater than, less than, or equal to zero.",solution:"Create a function with a number parameter and use if-elseif-else to return the appropriate string."})]})},"php-forms":{id:"php-forms",title:"Form Processing",icon:t.jsx(pc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Form Processing"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["PHP is commonly used to process HTML forms. You can use ",t.jsx("code",{children:"$_GET"})," and ",t.jsx("code",{children:"$_POST"})," superglobals to access form data."]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"GET vs POST"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold text-green-600 mb-2",children:"$_GET"}),t.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[t.jsx("li",{children:"Data in URL (visible)"}),t.jsx("li",{children:"Bookmarkable"}),t.jsx("li",{children:"Limited data size"}),t.jsx("li",{children:"Use for: Search, filters"})]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold text-purple-600 mb-2",children:"$_POST"}),t.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[t.jsx("li",{children:"Data in request body"}),t.jsx("li",{children:"Not visible in URL"}),t.jsx("li",{children:"Larger data capacity"}),t.jsx("li",{children:"Use for: Forms, sensitive data"})]})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Processing Form Data"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["<",'form method="POST" action="process.php"',">"]}),t.jsxs("p",{className:"text-purple-600",children:["<",'input type="text" name="username"',">"]}),t.jsxs("p",{className:"text-purple-600",children:["<",'input type="password" name="password"',">"]}),t.jsxs("p",{className:"text-purple-600",children:["<",'button type="submit"',">","Login","<","/button",">"]}),t.jsxs("p",{className:"text-purple-600",children:["<","/form",">"]}),t.jsx("br",{}),t.jsx("p",{className:"text-green-600",children:"// In process.php:"}),t.jsxs("p",{className:"text-blue-600",children:["$username = $_POST[",t.jsx("span",{className:"text-orange-500",children:'"username"'}),"];"]}),t.jsxs("p",{className:"text-blue-600",children:["$password = $_POST[",t.jsx("span",{className:"text-orange-500",children:'"password"'}),"];"]})]})]}),t.jsx(U,{title:"PHP Form Processing Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Form Handling</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .form-box { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        input { padding: 10px; margin: 5px; border: 1px solid #ccc; border-radius: 5px; width: 200px; }
        button { padding: 10px 20px; background: #2196f3; color: white; border: none; border-radius: 5px; cursor: pointer; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; margin-top: 15px; }
    </style>
</head>
<body>
    <h2>PHP Form Processing</h2>

    <div class="form-box">
        <h3>Login Form Example</h3>
        <pre>HTML Form:
&lt;form method="POST" action="login.php"&gt;
  &lt;input name="email"&gt;
  &lt;input type="password" name="pass"&gt;
  &lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;

PHP (login.php):
$email = $_POST["email"];
$pass = $_POST["pass"];</pre>
    </div>

    <div class="output">
        <strong>Key Concepts:</strong>
        <ul>
            <li>Use method="POST" for sensitive data</li>
            <li>Always sanitize user input</li>
            <li>Use htmlspecialchars() to prevent XSS</li>
            <li>Use password_hash() for passwords</li>
            <li>Validate data server-side too!</li>
        </ul>
    </div>

    <div class="form-box">
        <h3>Form Validation Example</h3>
        <pre>if (empty($_POST["email"])) {'{'}
    $error = "Email is required";
} elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {'{'}
    $error = "Invalid email format";
} else {'{'}
    $success = "Valid email!";
}</pre>
    </div>
</body>
</html>`}),t.jsx(z,{question:"Create a simple contact form in HTML with name, email, and message fields. Then write PHP code to process the form and display the submitted data (with basic validation).",hint:"Create an HTML form with POST method and a corresponding PHP section that retrieves the data using $_POST and validates that fields are not empty.",solution:"Use htmlspecialchars() to sanitize output, check !empty() for required fields, and filter_var() for email validation."})]})},"php-files":{id:"php-files",title:"File Handling",icon:t.jsx(Bp,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP File Handling"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"PHP can read from and write to files on the server. This is useful for storing data persistently without a database."}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"File Operations"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// Reading a file"}),t.jsxs("p",{className:"text-green-600",children:["$content = file_get_contents(",t.jsx("span",{className:"text-orange-500",children:'"data.txt"'}),");"]}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Writing to a file"}),t.jsxs("p",{className:"text-green-600",children:["file_put_contents(",t.jsx("span",{className:"text-orange-500",children:'"data.txt"'}),", $data);"]}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Opening a file"}),t.jsxs("p",{className:"text-green-600",children:["$file = fopen(",t.jsx("span",{className:"text-orange-500",children:'"data.txt"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"r"'}),");"]}),t.jsx("p",{className:"text-blue-600",children:"$line = fgets($file);"}),t.jsx("p",{className:"text-green-600",children:"fclose($file);"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"File Modes"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[{mode:"r",desc:"Read only"},{mode:"w",desc:"Write (overwrite)"},{mode:"a",desc:"Append"},{mode:"r+",desc:"Read & Write"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center",children:[t.jsx("code",{className:"text-lg text-green-600",children:i.mode}),t.jsx("p",{className:"text-xs text-gray-500 mt-1",children:i.desc})]},f))})]}),t.jsx(U,{title:"PHP File Handling Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP File Handling</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP File Operations</h2>

    <div class="demo">
        <h3>Read Entire File</h3>
        <p><code>$content = file_get_contents("file.txt");</code></p>
        <div class="output">
            <strong>Reads:</strong> Entire file contents into a string
        </div>
    </div>

    <div class="demo">
        <h3>Write to File</h3>
        <p><code>file_put_contents("log.txt", $data);</code></p>
        <div class="output">
            <strong>Creates/overwrites:</strong> file with $data content
        </div>
    </div>

    <div class="demo">
        <h3>Append to File</h3>
        <p><code>file_put_contents("log.txt", $data, FILE_APPEND);</code></p>
        <div class="output">
            <strong>Adds:</strong> data to end of existing file
        </div>
    </div>

    <div class="demo">
        <h3>Line-by-Line Reading</h3>
        <pre>$file = fopen("data.txt", "r");
while (($line = fgets($file)) !== false) {'{'}
    echo $line;
{'}'}
fclose($file);</pre>
        <div class="output">
            <strong>Reads:</strong> file line by line in a loop
        </div>
    </div>

    <div class="demo">
        <h3>File Upload Handling</h3>
        <pre>// HTML: &lt;input type="file" name="document"&gt;
// PHP:
if (isset($_FILES["document"])) {'{'}
    $name = $_FILES["document"]["name"];
    move_uploaded_file($_FILES["document"]["tmp_name"], "uploads/$name");
{'}'}</pre>
    </div>
</body>
</html>`}),t.jsx(W,{questions:[{question:"Which function reads entire file contents?",options:["fread()","file_get_contents()","read_file()","get_contents()"],correctAnswer:1,explanation:"file_get_contents() reads an entire file into a string."},{question:"What does the 'a' file mode do?",options:["Reads the file","Overwrites the file","Appends to the file","Creates a new file only"],correctAnswer:2,explanation:"The 'a' mode opens the file for writing and appends to the end."}]})]})},"php-sessions-cookies":{id:"php-sessions-cookies",title:"Sessions and Cookies",icon:t.jsx(uc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Sessions and Cookies"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Sessions and cookies allow you to store user data across multiple pages. They're essential for user authentication and maintaining state."}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Cookies vs Sessions"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold text-purple-600 mb-2",children:"Cookies"}),t.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[t.jsx("li",{children:"Stored in user's browser"}),t.jsx("li",{children:"Smaller data (4KB max)"}),t.jsx("li",{children:"Persists until expiry"}),t.jsx("li",{children:"Less secure (client-side)"})]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold text-green-600 mb-2",children:"Sessions"}),t.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[t.jsx("li",{children:"Stored on server"}),t.jsx("li",{children:"Larger data capacity"}),t.jsx("li",{children:"Ends when browser closes"}),t.jsx("li",{children:"More secure (server-side)"})]})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Syntax"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm space-y-4",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-purple-600",children:"// Setting a cookie"}),t.jsx("p",{className:"text-green-600",children:"setcookie("}),t.jsxs("p",{className:"ml-4 text-blue-600",children:['"username", ',t.jsx("span",{className:"text-orange-500",children:'"John"'}),","]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["time() + 3600  ",t.jsx("span",{className:"text-gray-500",children:"// expires in 1 hour"})]}),t.jsx("p",{className:"text-green-600",children:");"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-purple-600",children:"// Starting a session"}),t.jsx("p",{className:"text-green-600",children:"session_start();"}),t.jsxs("p",{className:"text-blue-600",children:["$_SESSION[",t.jsx("span",{className:"text-orange-500",children:'"user"'}),"] = ",t.jsx("span",{className:"text-orange-500",children:'"John"'}),";"]})]})]})]}),t.jsx(U,{title:"Sessions and Cookies Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Sessions & Cookies</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
    </style>
</head>
<body>
    <h2>PHP Sessions & Cookies</h2>

    <div class="demo">
        <h3>Creating a Cookie</h3>
        <pre>setcookie("theme", "dark", time() + 86400);</pre>
        <div class="output">
            <strong>Creates:</strong> Cookie named "theme" with value "dark"<br>
            <strong>Expires:</strong> 24 hours from now
        </div>
    </div>

    <div class="demo">
        <h3>Reading a Cookie</h3>
        <pre>$theme = $_COOKIE["theme"] ?? "light";</pre>
        <div class="output">
            <strong>Reads:</strong> The "theme" cookie or defaults to "light"
        </div>
    </div>

    <div class="demo">
        <h3>Creating a Session</h3>
        <pre>session_start();
$_SESSION["user_id"] = 123;
$_SESSION["username"] = "student";</pre>
        <div class="output">
            <strong>Creates:</strong> Session variables<br>
            <strong>Access across pages:</strong> until browser closes
        </div>
    </div>

    <div class="demo">
        <h3>Login Example</h3>
        <pre>// login.php
session_start();
if ($valid_user) {'{'}
    $_SESSION["user_id"] = $user_id;
    header("Location: dashboard.php");
{'}'}

// dashboard.php
session_start();
if (!isset($_SESSION["user_id"])) {'{'}
    header("Location: login.php");
{'}'}</pre>
    </div>

    <div class="demo">
        <h3>Logging Out</h3>
        <pre>session_start();
session_destroy();  // Destroys all session data</pre>
    </div>
</body>
</html>`}),t.jsx(W,{questions:[{question:"Where are session variables stored?",options:["In the user's browser","On the server","In a text file","In a database"],correctAnswer:1,explanation:"Sessions are stored on the server, while cookies are stored in the user's browser."},{question:"What function starts a session in PHP?",options:["start_session()","session_start()","begin_session()","init_session()"],correctAnswer:1,explanation:"session_start() must be called before using $_SESSION variables."}]})]})},"php-database":{id:"php-database",title:"Database Programming",icon:t.jsx(Zl,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP & MySQL Database"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"PHP can connect to MySQL databases to store and retrieve dynamic data. This is fundamental for building web applications."}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Database Connection Steps"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// 1. Create connection"}),t.jsx("p",{className:"text-green-600",children:"$conn = new mysqli($servername, $username, $password, $dbname);"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// 2. Execute query"}),t.jsxs("p",{className:"text-green-600",children:["$result = $conn->query(",t.jsx("span",{className:"text-orange-500",children:'"SELECT * FROM users"'}),");"]}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// 3. Fetch results"}),t.jsxs("p",{className:"text-green-600",children:["while ($row = $result->fetch_assoc()) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo $row[",t.jsx("span",{className:"text-orange-500",children:'"name"'}),"];"]}),t.jsx("p",{className:"text-green-600",children:"}"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// 4. Close connection"}),t.jsx("p",{className:"text-green-600",children:"$conn->close();"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"CRUD Operations"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6",children:[{op:"CREATE",sql:"INSERT INTO",color:"green"},{op:"READ",sql:"SELECT",color:"blue"},{op:"UPDATE",sql:"UPDATE",color:"orange"},{op:"DELETE",sql:"DELETE",color:"red"}].map((i,f)=>t.jsxs("div",{className:`bg-${i.color}-50 dark:bg-${i.color}-900/20 border border-${i.color}-200 dark:border-${i.color}-800 rounded-xl p-3`,children:[t.jsx("p",{className:`font-bold text-${i.color}-800 dark:text-${i.color}-200`,children:i.op}),t.jsx("code",{className:"text-xs",children:i.sql})]},f))})]}),t.jsx(U,{title:"PHP Database Operations",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Database</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP MySQL Operations</h2>

    <div class="demo">
        <h3>Connection</h3>
        <pre>$conn = new mysqli("localhost", "root", "password", "mydb");</pre>
        <div class="output">
            <strong>Establishes:</strong> Connection to MySQL server
        </div>
    </div>

    <div class="demo">
        <h3>INSERT Data</h3>
        <pre>$sql = "INSERT INTO users (name, email) VALUES ('John', 'john@email.com')";
$conn->query($sql);</pre>
    </div>

    <div class="demo">
        <h3>SELECT Data</h3>
        <pre>$result = $conn->query("SELECT * FROM users");
while ($row = $result->fetch_assoc()) {'{'}
    echo $row["name"];
{'}'}</pre>
    </div>

    <div class="demo">
        <h3>UPDATE Data</h3>
        <pre>$sql = "UPDATE users SET name='Jane' WHERE id=1";
$conn->query($sql);</pre>
    </div>

    <div class="demo">
        <h3>DELETE Data</h3>
        <pre>$sql = "DELETE FROM users WHERE id=1";
$conn->query($sql);</pre>
    </div>

    <div class="demo">
        <h3>Prepared Statements (Secure)</h3>
        <pre>$stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);
$stmt->execute();</pre>
        <div class="output">
            <strong>Use prepared statements to prevent SQL injection!</strong>
        </div>
    </div>
</body>
</html>`}),t.jsx(z,{question:"Write PHP code to create a connection to a MySQL database, insert a new student record with name and age, then retrieve and display all students.",hint:"Use mysqli_connect() for connection, INSERT INTO and SELECT queries, and fetch_assoc() to retrieve results.",solution:"Create connection, use INSERT INTO to add data, use SELECT * to fetch all records, and loop through results with fetch_assoc()."})]})},"php-date-time":{id:"php-date-time",title:"Date and Time Functions",icon:t.jsx(Rp,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Date and Time"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"PHP has powerful date and time functions for formatting timestamps, calculating dates, and more."}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Common Date Functions"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// Current date/time"}),t.jsxs("p",{className:"text-green-600",children:["date(",t.jsx("span",{className:"text-orange-500",children:'"Y-m-d H:i:s"'}),");  ",t.jsx("span",{className:"text-gray-500",children:"// 2024-01-15 14:30:00"})]}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Format options"}),t.jsx("p",{className:"text-blue-600",children:"Y"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 2024 (4-digit year)"}),t.jsx("p",{className:"text-blue-600",children:"m"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 01-12 (month)"}),t.jsx("p",{className:"text-blue-600",children:"d"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 01-31 (day)"}),t.jsx("p",{className:"text-blue-600",children:"H"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 00-23 (hour)"}),t.jsx("p",{className:"text-blue-600",children:"i"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 00-59 (minutes)"}),t.jsx("p",{className:"text-blue-600",children:"s"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 00-59 (seconds)"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Date Calculations"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm",children:[t.jsx("p",{className:"text-purple-600",children:"// Adding days"}),t.jsxs("p",{className:"text-green-600",children:["$future = date(",t.jsx("span",{className:"text-orange-500",children:'"Y-m-d"'}),", strtotime(",t.jsx("span",{className:"text-orange-500",children:'"+7 days"'}),"));"]}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Date difference"}),t.jsxs("p",{className:"text-green-600",children:["$diff = date_diff(date_create(",t.jsx("span",{className:"text-orange-500",children:'"2024-01-01"'}),"), date_create(",t.jsx("span",{className:"text-orange-500",children:'"2024-01-15"'}),"));"]}),t.jsxs("p",{className:"text-blue-600",children:["echo $diff->format(",t.jsx("span",{className:"text-orange-500",children:'"%a days"'}),");"]})]})]}),t.jsx(U,{title:"PHP Date & Time Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Date and Time</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
    </style>
</head>
<body>
    <h2>PHP Date Functions</h2>

    <div class="demo">
        <h3>Current Date/Time</h3>
        <p><code>date("Y-m-d H:i:s")</code></p>
        <div class="output">
            <strong>Output:</strong> 2024-01-15 14:30:00<br>
            <strong>Format:</strong> Year-Month-Day Hour:Minute:Second
        </div>
    </div>

    <div class="demo">
        <h3>Custom Formats</h3>
        <p><code>date("l, F j, Y")</code></p>
        <div class="output">
            <strong>Output:</strong> Monday, January 15, 2024<br>
            <strong>Format:</strong> Day, Month Day, Year
        </div>
    </div>

    <div class="demo">
        <h3>Date Arithmetic</h3>
        <pre>// Next week
date("Y-m-d", strtotime("+1 week"));

// Last month
date("Y-m-d", strtotime("-1 month"));

// Specific date
date("Y-m-d", strtotime("2024-12-25"));</pre>
    </div>

    <div class="demo">
        <h3>Timestamp</h3>
        <pre>// Current timestamp
time();  // Returns seconds since 1970

// Convert to timestamp
strtotime("January 15, 2024");</pre>
    </div>
</body>
</html>`}),t.jsx(W,{questions:[{question:"What does date('Y-m-d') return?",options:["15-01-2024","2024-01-15","January 15, 2024","01/15/2024"],correctAnswer:1,explanation:"The format 'Y-m-d' returns year-month-day in that order."},{question:"What function adds time to a date string?",options:["date_add()","strtotime()","date_modify()","strtotime() with +/-"],correctAnswer:3,explanation:"strtotime() with expressions like '+7 days' or '-1 month' is commonly used for date arithmetic."}]})]})},"php-oop":{id:"php-oop",title:"PHP Object-Oriented Programming",icon:t.jsx(eo,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP OOP"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"PHP supports Object-Oriented Programming (OOP) with classes, objects, inheritance, and more. OOP helps organize code into reusable components."}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Classes and Objects"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// Define a class"}),t.jsxs("p",{className:"text-green-600",children:["class ",t.jsx("span",{className:"text-blue-600",children:"Student"})," ","{"]}),t.jsx("p",{className:"ml-4 text-purple-600",children:"public $name;"}),t.jsx("p",{className:"ml-4 text-purple-600",children:"public $grade;"}),t.jsx("br",{}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["public function ",t.jsx("span",{className:"text-blue-600",children:"__construct"}),"($name, $grade) ","{"]}),t.jsx("p",{className:"ml-8 text-blue-600",children:"$this->name = $name;"}),t.jsx("p",{className:"ml-8 text-blue-600",children:"$this->grade = $grade;"}),t.jsx("p",{className:"ml-4 text-purple-600",children:"}"}),t.jsx("br",{}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["public function ",t.jsx("span",{className:"text-blue-600",children:"getInfo"}),"() ","{"]}),t.jsxs("p",{className:"ml-8 text-blue-600",children:["return ",t.jsx("span",{className:"text-orange-500",children:'"$this->name - Grade: $this->grade"'}),";"]}),t.jsx("p",{className:"ml-4 text-purple-600",children:"}"}),t.jsx("p",{className:"text-green-600",children:"}"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Create object"}),t.jsxs("p",{className:"text-green-600",children:["$student = new ",t.jsx("span",{className:"text-blue-600",children:"Student"}),"(",t.jsx("span",{className:"text-orange-500",children:'"Alice"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"A"'}),");"]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"OOP Concepts"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{concept:"Encapsulation",desc:"Bundling data and methods together"},{concept:"Inheritance",desc:"Child class inherits from parent"},{concept:"Polymorphism",desc:"Same method, different behavior"},{concept:"Abstraction",desc:"Hiding complex implementation"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("p",{className:"font-bold text-purple-600 mb-1",children:i.concept}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]},f))})]}),t.jsx(U,{title:"PHP OOP Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP OOP</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 15px 0; }
        .output { background: #e3f2fd; padding: 15px; border-radius: 8px; }
        code { background: #e0e0e0; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>PHP Object-Oriented Programming</h2>

    <div class="demo">
        <h3>Class Definition</h3>
        <pre>class Student {'{'}
    public $name;
    public $grade;

    function __construct($name, $grade) {'{'}
        $this->name = $name;
        $this->grade = $grade;
    {'}'}
{'}'}</pre>
    </div>

    <div class="demo">
        <h3>Creating Objects</h3>
        <pre>$student1 = new Student("Alice", "A");
$student2 = new Student("Bob", "B");

echo $student1->name;  // Alice</pre>
    </div>

    <div class="demo">
        <h3>Methods in Classes</h3>
        <pre>class Calculator {'{'}
    function add($a, $b) {'{'}
        return $a + $b;
    {'}'}
{'}'}

$calc = new Calculator();
echo $calc->add(5, 3);  // 8</pre>
    </div>

    <div class="demo">
        <h3>Inheritance</h3>
        <pre>class Person {'{'}
    protected $name;
{'}'}

class Student extends Person {'{'}
    public $studentId;

    function getName() {'{'}
        return $this->name;
    {'}'}
{'}'}</pre>
        <div class="output">
            <strong>Student inherits:</strong> $name from Person
        </div>
    </div>
</body>
</html>`}),t.jsx(W,{questions:[{question:"What is the correct way to create an object of a class named 'Car'?",options:["car = new Car()","$car = new Car()","create Car()","$car = Car->new()"],correctAnswer:1,explanation:"In PHP, objects are created using the 'new' keyword followed by the class name, and variables start with $."},{question:"What magic method is called when an object is created?",options:["__init__","__construct","__create","__new"],correctAnswer:1,explanation:"__construct is the PHP magic method called when an object is instantiated."}]})]})},"php-exercises":{id:"php-exercises",title:"Practical Exercises",icon:t.jsx(Up,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Chapter 6 Practice"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Let's put everything together! Complete these exercises to practice PHP server-side programming."}),t.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Exercise Challenges"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Create a student registration form"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Implement a login system with sessions"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Build a simple CRUD application"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(M,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Create a file-based guestbook"})]})]})]})]}),t.jsx(U,{title:"Build a Simple Counter App",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>PHP Counter Exercise</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; }
        .counter-box {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
        }
        .count { font-size: 72px; font-weight: bold; }
        button {
            padding: 15px 30px;
            margin: 5px;
            font-size: 18px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.2s;
        }
        button:hover { transform: scale(1.1); }
        .reset { background: #e74c3c; color: white; }
        .increment { background: #2ecc71; color: white; }
        .decrement { background: #3498db; color: white; }
    </style>
</head>
<body>
    <h2 style="text-align: center;">PHP Counter Exercise</h2>

    <div class="counter-box">
        <h3>Visit Counter</h3>
        <p class="count">The count value</p>
        <p>would be stored in</p>
        <p>a file or database</p>
        <div style="margin-top: 20px;">
            <button class="decrement">- 1</button>
            <button class="reset">Reset</button>
            <button class="increment">+ 1</button>
        </div>
    </div>

    <h3 style="margin-top: 30px;">Your Task:</h3>
    <ol>
        <li>Create a PHP script that reads the count from a file</li>
        <li>Add increment/decrement functionality</li>
        <li>Save the updated count back to the file</li>
        <li>Add session tracking to prevent multiple votes</li>
    </ol>
</body>
</html>`})]})}},C=Object.values(L);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx(wt,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 6: PHP & Server-Side Programming"}),t.jsx("p",{className:"text-white/80",children:"Master PHP: variables, operators, conditionals, loops, arrays, functions, forms, files, sessions, and database connectivity"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:C.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:C.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:C.map((i,f)=>{const P=p===i.id,H=y[`chapter6-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${P?"border-green-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>N(P?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600",children:H?t.jsx(M,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",P?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),P?t.jsx(Bs,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),P&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(W,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!H&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(M,{className:"w-5 h-5"}),"Mark as Complete"]}),H&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(M,{className:"w-5 h-5"}),"Completed"]})]})]})]},i.id)})})]})}function fh({chapters:y,setCurrentChapter:E}){const p=[{icon:t.jsx(Kn,{className:"w-6 h-6"}),title:"Interactive Learning",description:"Learn by doing with live code editors and instant feedback"},{icon:t.jsx(cc,{className:"w-6 h-6"}),title:"Visual Explanations",description:"Complex concepts explained with animations and diagrams"},{icon:t.jsx(Ar,{className:"w-6 h-6"}),title:"Practice Exercises",description:"Reinforce your learning with hands-on challenges"},{icon:t.jsx(Xn,{className:"w-6 h-6"}),title:"Track Progress",description:"Monitor your learning journey and celebrate achievements"},{icon:t.jsx(wt,{className:"w-6 h-6"}),title:"Server-Side PHP",description:"Learn server-side programming with PHP and database connectivity"}];return t.jsxs("div",{className:"space-y-12",children:[t.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-8 md:p-12 text-white",children:[t.jsx("div",{className:"absolute inset-0 bg-black/10"}),t.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"}),t.jsx("div",{className:"absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"}),t.jsxs("div",{className:"relative z-10",children:[t.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:"Welcome to WebDev Academy"}),t.jsx("p",{className:"text-xl text-white/90 mb-8 max-w-2xl",children:"Master web development through interactive lessons, hands-on coding, and visual demonstrations. Start your journey from beginner to professional."}),t.jsxs("button",{onClick:()=>E("chapter1"),className:"inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg",children:["Start Learning",t.jsx(Kl,{className:"w-5 h-5"})]})]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:p.map((N,S)=>t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4",children:N.icon}),t.jsx("h3",{className:"text-lg font-bold text-gray-800 dark:text-white mb-2",children:N.title}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:N.description})]},S))}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6",children:"Choose Your Learning Path"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:y.map(N=>t.jsxs("button",{onClick:()=>E(N.id),className:`${N.bgColor} ${N.borderColor} border-2 rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`,children:[t.jsxs("div",{className:"flex items-start justify-between mb-4",children:[t.jsx("div",{className:`${N.color}`,children:N.icon}),t.jsxs("div",{className:"text-right",children:[t.jsxs("div",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:[N.progress,"%"]}),t.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Complete"})]})]}),t.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-2",children:N.title}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-4",children:N.subtitle}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-4",children:N.description}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400",children:[t.jsxs("span",{children:[N.topics," Topics"]}),t.jsxs("span",{children:[N.exercises," Exercises"]})]}),t.jsxs("div",{className:`flex items-center gap-2 ${N.color} font-semibold group-hover:gap-3 transition-all`,children:["Start",t.jsx(Kl,{className:"w-4 h-4"})]})]}),t.jsx("div",{className:"mt-4 bg-white/50 dark:bg-gray-700/50 rounded-full h-2",children:t.jsx("div",{className:`bg-gradient-to-r ${N.color.replace("text-","from-").replace("600","400")} to-${N.color.replace("text-","to-")} rounded-full h-2 transition-all duration-500`,style:{width:`${N.progress}%`}})})]},N.id))})]}),t.jsxs("div",{className:"bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8",children:[t.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center",children:"How to Use This Platform"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4",children:"1"}),t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white mb-2",children:"Read & Learn"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Each topic includes clear explanations with visual examples"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4",children:"2"}),t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white mb-2",children:"Code & Practice"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Write real code in the interactive editor and see instant results"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4",children:"3"}),t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white mb-2",children:"Test Yourself"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Complete exercises and quizzes to verify your understanding"})]})]})]})]})}function yh({progress:y}){const E=()=>y>=80?"text-yellow-500":y>=50?"text-blue-500":"text-gray-500",p=()=>y>=80?"bg-yellow-100 dark:bg-yellow-900/30":y>=50?"bg-blue-100 dark:bg-blue-900/30":"bg-gray-100 dark:bg-gray-700";return t.jsxs("div",{className:`flex items-center gap-2 px-4 py-2 rounded-full ${p()}`,children:[y>=80?t.jsx(Ar,{className:`w-5 h-5 ${E()}`}):t.jsx(oh,{className:`w-5 h-5 ${E()}`}),t.jsx("div",{className:"flex flex-col",children:t.jsxs("span",{className:`text-sm font-bold ${E()}`,children:[y,"%"]})}),t.jsx("div",{className:"w-20 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden",children:t.jsx("div",{className:`h-full transition-all duration-500 ${y>=80?"bg-gradient-to-r from-yellow-400 to-yellow-600":y>=50?"bg-gradient-to-r from-blue-400 to-blue-600":"bg-gradient-to-r from-gray-400 to-gray-600"}`,style:{width:`${y}%`}})})]})}function bh({onAuthSuccess:y,onClose:E}){const[p,N]=G.useState("login"),[S,L]=G.useState(!1),[C,i]=G.useState(null),[f,P]=G.useState(null),[H,ee]=G.useState(!1),[J,ce]=G.useState(!1),[pe,ae]=G.useState(""),[R,Ae]=G.useState(""),[ve,de]=G.useState(""),[se,re]=G.useState(""),[we,X]=G.useState(""),[D,B]=G.useState({}),te=Q=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Q),ge=Q=>Q.length>=8,ne=()=>{const Q={};return(p==="register"||p==="login")&&(pe?te(pe)||(Q.email="Please enter a valid email address"):Q.email="Email is required"),(p==="register"||p==="login"||p==="reset-password")&&(R?p==="register"&&!ge(R)&&(Q.password="Password must be at least 8 characters"):Q.password="Password is required"),p==="register"&&(se||(Q.name="Name is required"),ve?R!==ve&&(Q.confirmPassword="Passwords do not match"):Q.confirmPassword="Please confirm your password"),p==="reset-password"&&(we||(Q.resetCode="Reset code is required")),B(Q),Object.keys(Q).length===0},fe=async Q=>{if(Q.preventDefault(),i(null),P(null),!!ne()){L(!0);try{switch(await new Promise(Ce=>setTimeout(Ce,1500)),p){case"login":const Ce={id:"user_"+Date.now(),email:pe,name:se||pe.split("@")[0]};y(Ce);break;case"register":const Ee={id:"user_"+Date.now(),email:pe,name:se};P("Account created successfully! Please check your email to verify your account."),setTimeout(()=>{N("login")},2e3);break;case"forgot-password":P("Password reset link has been sent to your email address."),N("login");break;case"reset-password":P("Password has been reset successfully! You can now login with your new password."),N("login"),Ae(""),de(""),X("");break}}catch{i("An error occurred. Please try again.")}finally{L(!1)}}},Fe=()=>{switch(p){case"login":return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email Address"}),t.jsxs("div",{className:"relative",children:[t.jsx(Vn,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:"email",value:pe,onChange:Q=>ae(Q.target.value),className:`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${D.email?"border-red-500":"border-gray-300"}`,placeholder:"you@example.com"})]}),D.email&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:D.email})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(Rs,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:H?"text":"password",value:R,onChange:Q=>Ae(Q.target.value),className:`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${D.password?"border-red-500":"border-gray-300"}`,placeholder:"Enter your password"}),t.jsx("button",{type:"button",onClick:()=>ee(!H),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:H?t.jsx(Mr,{className:"w-5 h-5"}):t.jsx(xs,{className:"w-5 h-5"})})]}),D.password&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:D.password})]})]}),t.jsx("button",{type:"button",onClick:()=>N("forgot-password"),className:"text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400",children:"Forgot your password?"}),t.jsxs("button",{type:"submit",disabled:S,className:"w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2",children:[S&&t.jsx(Un,{className:"w-5 h-5 animate-spin"}),"Sign In"]}),t.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Don't have an account?"," ",t.jsx("button",{type:"button",onClick:()=>N("register"),className:"text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium",children:"Sign up"})]})]});case"register":return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Full Name"}),t.jsxs("div",{className:"relative",children:[t.jsx(Qn,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:"text",value:se,onChange:Q=>re(Q.target.value),className:`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${D.name?"border-red-500":"border-gray-300"}`,placeholder:"John Doe"})]}),D.name&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:D.name})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email Address"}),t.jsxs("div",{className:"relative",children:[t.jsx(Vn,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:"email",value:pe,onChange:Q=>ae(Q.target.value),className:`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${D.email?"border-red-500":"border-gray-300"}`,placeholder:"you@example.com"})]}),D.email&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:D.email})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(Rs,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:H?"text":"password",value:R,onChange:Q=>Ae(Q.target.value),className:`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${D.password?"border-red-500":"border-gray-300"}`,placeholder:"At least 8 characters"}),t.jsx("button",{type:"button",onClick:()=>ee(!H),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:H?t.jsx(Mr,{className:"w-5 h-5"}):t.jsx(xs,{className:"w-5 h-5"})})]}),D.password&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:D.password})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Confirm Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(Rs,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:J?"text":"password",value:ve,onChange:Q=>de(Q.target.value),className:`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${D.confirmPassword?"border-red-500":"border-gray-300"}`,placeholder:"Confirm your password"}),t.jsx("button",{type:"button",onClick:()=>ce(!J),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:J?t.jsx(Mr,{className:"w-5 h-5"}):t.jsx(xs,{className:"w-5 h-5"})})]}),D.confirmPassword&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:D.confirmPassword})]})]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-medium text-blue-800 dark:text-blue-200 mb-2",children:"Password Requirements:"}),t.jsxs("ul",{className:"space-y-1 text-sm text-blue-700 dark:text-blue-300",children:[t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(M,{className:"w-4 h-4"}),"At least 8 characters long"]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(M,{className:"w-4 h-4"}),"Contains uppercase and lowercase letters"]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(M,{className:"w-4 h-4"}),"Contains at least one number"]})]})]}),t.jsxs("button",{type:"submit",disabled:S,className:"w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2",children:[S&&t.jsx(Un,{className:"w-5 h-5 animate-spin"}),"Create Account"]}),t.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Already have an account?"," ",t.jsx("button",{type:"button",onClick:()=>N("login"),className:"text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium",children:"Sign in"})]})]});case"forgot-password":return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("div",{className:"w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4",children:t.jsx(Vn,{className:"w-8 h-8 text-blue-600"})}),t.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Reset Password"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:"Enter your email address and we'll send you a link to reset your password."})]}),t.jsx("div",{className:"space-y-4",children:t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email Address"}),t.jsxs("div",{className:"relative",children:[t.jsx(Vn,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:"email",value:pe,onChange:Q=>ae(Q.target.value),className:`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${D.email?"border-red-500":"border-gray-300"}`,placeholder:"you@example.com"})]}),D.email&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:D.email})]})}),t.jsxs("button",{type:"submit",disabled:S,className:"w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2",children:[S&&t.jsx(Un,{className:"w-5 h-5 animate-spin"}),"Send Reset Link"]}),t.jsxs("button",{type:"button",onClick:()=>N("login"),className:"w-full flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200",children:[t.jsx(lc,{className:"w-4 h-4"}),"Back to Sign In"]})]});case"reset-password":return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("div",{className:"w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4",children:t.jsx(Rs,{className:"w-8 h-8 text-green-600"})}),t.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Set New Password"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:"Create a new password for your account."})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Reset Code"}),t.jsxs("div",{className:"relative",children:[t.jsx(M,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:"text",value:we,onChange:Q=>X(Q.target.value),className:`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${D.resetCode?"border-red-500":"border-gray-300"}`,placeholder:"Enter the reset code from your email"})]}),D.resetCode&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:D.resetCode})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"New Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(Rs,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:H?"text":"password",value:R,onChange:Q=>Ae(Q.target.value),className:`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${D.password?"border-red-500":"border-gray-300"}`,placeholder:"At least 8 characters"}),t.jsx("button",{type:"button",onClick:()=>ee(!H),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:H?t.jsx(Mr,{className:"w-5 h-5"}):t.jsx(xs,{className:"w-5 h-5"})})]}),D.password&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:D.password})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Confirm New Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(Rs,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:J?"text":"password",value:ve,onChange:Q=>de(Q.target.value),className:`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${D.confirmPassword?"border-red-500":"border-gray-300"}`,placeholder:"Confirm your new password"}),t.jsx("button",{type:"button",onClick:()=>ce(!J),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:J?t.jsx(Mr,{className:"w-5 h-5"}):t.jsx(xs,{className:"w-5 h-5"})})]}),D.confirmPassword&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:D.confirmPassword})]})]}),t.jsxs("button",{type:"submit",disabled:S,className:"w-full py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2",children:[S&&t.jsx(Un,{className:"w-5 h-5 animate-spin"}),"Reset Password"]}),t.jsxs("button",{type:"button",onClick:()=>N("login"),className:"w-full flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200",children:[t.jsx(lc,{className:"w-4 h-4"}),"Back to Sign In"]})]})}};return t.jsx("div",{className:"min-h-[calc(100vh-8rem)] flex items-center justify-center py-12",children:t.jsx("div",{className:"w-full max-w-md",children:t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 relative",children:[t.jsx("button",{onClick:E,className:"absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:t.jsx(kc,{className:"w-5 h-5 text-gray-500"})}),t.jsxs("div",{className:"flex items-center justify-center gap-3 mb-8",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center",children:t.jsx(Qn,{className:"w-7 h-7 text-white"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"WebDev Academy"}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[p==="login"&&"Welcome back!",p==="register"&&"Create your account",p==="forgot-password"&&"Reset your password",p==="reset-password"&&"Create new password"]})]})]}),C&&t.jsxs("div",{className:"mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3",children:[t.jsx(_p,{className:"w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"}),t.jsx("p",{className:"text-sm text-red-700 dark:text-red-300",children:C})]}),f&&t.jsxs("div",{className:"mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-start gap-3",children:[t.jsx(M,{className:"w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"}),t.jsx("p",{className:"text-sm text-green-700 dark:text-green-300",children:f})]}),t.jsx("form",{onSubmit:fe,className:"space-y-5",children:Fe()}),t.jsx("div",{className:"mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl",children:t.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:[t.jsx("strong",{children:"Demo Mode:"})," Enter any valid email and password (8+ chars) to test authentication."]})})]})})})}function vh(){const[y,E]=G.useState("home"),[p,N]=G.useState(!0),[S,L]=G.useState(!1),[C,i]=G.useState({}),[f,P]=G.useState(!1),[H,ee]=G.useState(!1),[J,ce]=G.useState(null),[pe,ae]=G.useState(!1);G.useEffect(()=>{const B=localStorage.getItem("chapterProgress");B&&i(JSON.parse(B));const te=localStorage.getItem("user");te&&ce(JSON.parse(te))},[]),G.useEffect(()=>{const B=te=>{te.detail?(ce(te.detail),localStorage.setItem("user",JSON.stringify(te.detail))):(ce(null),localStorage.removeItem("user"))};return window.addEventListener("authStateChange",B),()=>window.removeEventListener("authStateChange",B)},[]);const R=(B,te,ge)=>{const ne={...C,[`${B}-${te}`]:ge};i(ne),localStorage.setItem("chapterProgress",JSON.stringify(ne)),J&&Ae(J.id,ne)},Ae=async(B,te)=>{localStorage.setItem(`progress_${B}`,JSON.stringify(te))},ve=async B=>{const te=localStorage.getItem(`progress_${B}`);te&&(i(JSON.parse(te)),localStorage.setItem("chapterProgress",te))},de=()=>{ce(null),localStorage.removeItem("user"),ae(!1),window.dispatchEvent(new CustomEvent("authStateChange",{detail:null}))},se=(B,te)=>{const ge=Object.keys(C).filter(ne=>ne.startsWith(B)&&C[ne]).length;return Math.round(ge/te*100)},re=[{id:"chapter1",title:"Chapter 1",subtitle:"Introduction to Internet Programming",icon:t.jsx(Ws,{className:"w-8 h-8"}),color:"text-blue-600",bgColor:"bg-blue-50 dark:bg-blue-900/20",borderColor:"border-blue-500",progress:se("chapter1",12),description:"Learn the fundamentals of the Internet, WWW, HTTP protocol, TCP/IP, DNS, URLs, and client-server architecture.",topics:12,exercises:8},{id:"chapter2",title:"Chapter 2",subtitle:"HTML Fundamentals",icon:t.jsx(Gn,{className:"w-8 h-8"}),color:"text-orange-600",bgColor:"bg-orange-50 dark:bg-orange-900/20",borderColor:"border-orange-500",progress:se("chapter2",20),description:"Master HTML tags, elements, attributes, forms, tables, lists, images, and multimedia content.",topics:20,exercises:15},{id:"chapter3",title:"Chapter 3",subtitle:"CSS - Styling the Web",icon:t.jsx(Yn,{className:"w-8 h-8"}),color:"text-pink-600",bgColor:"bg-pink-50 dark:bg-pink-900/20",borderColor:"border-pink-500",progress:se("chapter3",14),description:"Master CSS: selectors, box model, flexbox, grid, responsive design, animations, and modern CSS3 features.",topics:14,exercises:10},{id:"chapter4",title:"Chapter 4",subtitle:"JavaScript Basics",icon:t.jsx(Jn,{className:"w-8 h-8"}),color:"text-yellow-600",bgColor:"bg-yellow-50 dark:bg-yellow-900/20",borderColor:"border-yellow-500",progress:se("chapter4",8),description:"Learn JavaScript fundamentals: variables, operators, conditionals, loops, functions, and arrays.",topics:8,exercises:6},{id:"chapter5",title:"Chapter 5",subtitle:"Advanced JavaScript & jQuery",icon:t.jsx(Xn,{className:"w-8 h-8"}),color:"text-purple-600",bgColor:"bg-purple-50 dark:bg-purple-900/20",borderColor:"border-purple-500",progress:se("chapter5",10),description:"Explore DOM manipulation, events, objects, strings, dates, regular expressions, cookies, and jQuery.",topics:10,exercises:7},{id:"chapter6",title:"Chapter 6",subtitle:"PHP & Server-Side Programming",icon:t.jsx(wt,{className:"w-8 h-8"}),color:"text-green-600",bgColor:"bg-green-50 dark:bg-green-900/20",borderColor:"border-green-500",progress:se("chapter6",24),description:"Learn PHP: variables, operators, conditionals, loops, arrays, functions, forms, files, sessions, and database connectivity.",topics:24,exercises:16}],we=()=>{switch(y){case"chapter1":return t.jsx(uh,{progress:C,updateProgress:R});case"chapter2":return t.jsx(ph,{progress:C,updateProgress:R});case"chapter3":return t.jsx(hh,{progress:C,updateProgress:R});case"chapter4":return t.jsx(mh,{progress:C,updateProgress:R});case"chapter5":return t.jsx(xh,{progress:C,updateProgress:R});case"chapter6":return t.jsx(gh,{progress:C,updateProgress:R});default:return t.jsx(fh,{chapters:re,setCurrentChapter:E})}},X=Math.round(re.reduce((B,te)=>B+te.progress,0)/re.length),D=B=>{ce(B),ee(!1),localStorage.setItem("user",JSON.stringify(B)),ve(B.id)};return t.jsx("div",{className:`${S?"dark":""}`,children:t.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:[t.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700",children:t.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("button",{onClick:()=>P(!f),className:"lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:f?t.jsx(kc,{className:"w-6 h-6"}):t.jsx(eh,{className:"w-6 h-6"})}),t.jsxs("button",{onClick:()=>E("home"),className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg",children:t.jsx(Hp,{className:"w-6 h-6 text-white"})}),t.jsxs("div",{className:"hidden sm:block",children:[t.jsx("h1",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"WebDev Academy"}),t.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Interactive Learning Platform"})]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(yh,{progress:X}),J?t.jsxs("div",{className:"relative",children:[t.jsxs("button",{onClick:()=>ae(!pe),className:"flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:[t.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center",children:t.jsx("span",{className:"text-white text-sm font-bold",children:J.name.charAt(0).toUpperCase()})}),t.jsx("span",{className:"hidden md:block text-sm text-gray-700 dark:text-gray-300",children:J.name})]}),pe&&t.jsxs("div",{className:"absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50",children:[t.jsxs("div",{className:"px-4 py-2 border-b border-gray-200 dark:border-gray-700",children:[t.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:J.name}),t.jsx("p",{className:"text-sm text-gray-500",children:J.email})]}),t.jsxs("button",{onClick:()=>{ae(!1)},className:"w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",children:[t.jsx(Qn,{className:"w-4 h-4"}),"Profile"]}),t.jsxs("button",{onClick:()=>{ae(!1)},className:"w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",children:[t.jsx(nh,{className:"w-4 h-4"}),"Settings"]}),t.jsx("div",{className:"border-t border-gray-200 dark:border-gray-700 mt-2 pt-2",children:t.jsxs("button",{onClick:de,className:"w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20",children:[t.jsx(Zp,{className:"w-4 h-4"}),"Logout"]})})]})]}):t.jsxs("button",{onClick:()=>ee(!0),className:"flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity",children:[t.jsx(Qn,{className:"w-4 h-4"}),t.jsx("span",{className:"hidden md:block",children:"Sign In"})]}),t.jsx("button",{onClick:()=>L(!S),className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:S?t.jsx(ih,{className:"w-5 h-5 text-yellow-500"}):t.jsx(th,{className:"w-5 h-5 text-gray-600"})})]})]})}),t.jsxs("aside",{className:`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-50
          ${f?"translate-x-0":"-translate-x-full lg:translate-x-0"}
          ${p?"w-64":"w-20"}`,children:[t.jsx("div",{className:"p-4",children:t.jsxs("button",{onClick:()=>N(!p),className:"hidden lg:flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:[p?t.jsx(qp,{className:"w-5 h-5"}):t.jsx(Ht,{className:"w-5 h-5"}),p&&t.jsx("span",{className:"text-sm",children:"Collapse"})]})}),t.jsxs("nav",{className:"px-2 space-y-1 overflow-y-auto max-h-[calc(100vh-12rem)]",children:[t.jsxs("button",{onClick:()=>{E("home"),P(!1)},className:`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${y==="home"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg":"hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:[t.jsx(Yp,{className:"w-5 h-5 flex-shrink-0"}),p&&t.jsx("span",{className:"font-medium whitespace-nowrap",children:"Home"})]}),re.map(B=>t.jsxs("button",{onClick:()=>{E(B.id),P(!1)},className:`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${y===B.id?`bg-gradient-to-r ${B.bgColor.replace("bg-","from-").replace("/20","-500").replace("-50","-400")} ${B.color} shadow-lg`:"hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:[t.jsx("span",{className:B.color,children:B.icon}),p&&t.jsxs("div",{className:"text-left flex-1 min-w-0",children:[t.jsx("p",{className:"font-semibold text-sm truncate",children:B.title}),t.jsx("p",{className:"text-xs opacity-75 truncate whitespace-nowrap overflow-hidden text-overflow-ellipsis",children:B.subtitle})]})]},B.id))]}),p&&t.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:t.jsxs("div",{className:"bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-4 text-white",children:[t.jsx(Ar,{className:"w-8 h-8 mb-2"}),t.jsx("p",{className:"font-bold",children:"Keep Learning!"}),t.jsx("p",{className:"text-sm opacity-90",children:"Complete all chapters to earn your certificate"}),t.jsx("div",{className:"mt-2 bg-white/30 rounded-full h-2",children:t.jsx("div",{className:"bg-white rounded-full h-2 transition-all duration-500",style:{width:`${X}%`}})})]})})]}),t.jsx("main",{className:`pt-16 min-h-screen transition-all duration-300 ${p?"lg:pl-64":"lg:pl-20"}`,children:t.jsx("div",{className:"container mx-auto px-4 py-8",children:H?t.jsx(bh,{onAuthSuccess:D,onClose:()=>ee(!1)}):we()})})]})})}$p.createRoot(document.getElementById("root")).render(t.jsx(G.StrictMode,{children:t.jsx(Ap,{children:t.jsx(vh,{})})}));
