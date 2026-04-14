(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))k(S);new MutationObserver(S=>{for(const $ of S)if($.type==="childList")for(const P of $.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&k(P)}).observe(document,{childList:!0,subtree:!0});function p(S){const $={};return S.integrity&&($.integrity=S.integrity),S.referrerPolicy&&($.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?$.credentials="include":S.crossOrigin==="anonymous"?$.credentials="omit":$.credentials="same-origin",$}function k(S){if(S.ep)return;S.ep=!0;const $=p(S);fetch(S.href,$)}})();function gm(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var Ql={exports:{}},Ms={},Yl={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function fm(){if(Xd)return te;Xd=1;var y=Symbol.for("react.element"),T=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),P=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),J=Symbol.iterator;function F(m){return m===null||typeof m!="object"?null:(m=J&&m[J]||m["@@iterator"],typeof m=="function"?m:null)}var ue={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,re={};function R(m,v,Z){this.props=m,this.context=v,this.refs=re,this.updater=Z||ue}R.prototype.isReactComponent={},R.prototype.setState=function(m,v){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,v,"setState")},R.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Te(){}Te.prototype=R.prototype;function he(m,v,Z){this.props=m,this.context=v,this.refs=re,this.updater=Z||ue}var ae=he.prototype=new Te;ae.constructor=he,ne(ae,R.prototype),ae.isPureReactComponent=!0;var ee=Array.isArray,X=Object.prototype.hasOwnProperty,ve={current:null},Me={key:!0,ref:!0,__self:!0,__source:!0};function G(m,v,Z){var se,oe={},ie=null,ge=null;if(v!=null)for(se in v.ref!==void 0&&(ge=v.ref),v.key!==void 0&&(ie=""+v.key),v)X.call(v,se)&&!Me.hasOwnProperty(se)&&(oe[se]=v[se]);var pe=arguments.length-2;if(pe===1)oe.children=Z;else if(1<pe){for(var je=Array(pe),st=0;st<pe;st++)je[st]=arguments[st+2];oe.children=je}if(m&&m.defaultProps)for(se in pe=m.defaultProps,pe)oe[se]===void 0&&(oe[se]=pe[se]);return{$$typeof:y,type:m,key:ie,ref:ge,props:oe,_owner:ve.current}}function K(m,v){return{$$typeof:y,type:m.type,key:v,ref:m.ref,props:m.props,_owner:m._owner}}function me(m){return typeof m=="object"&&m!==null&&m.$$typeof===y}function tt(m){var v={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(Z){return v[Z]})}var De=/\/+/g;function Ve(m,v){return typeof m=="object"&&m!==null&&m.key!=null?tt(""+m.key):v.toString(36)}function rt(m,v,Z,se,oe){var ie=typeof m;(ie==="undefined"||ie==="boolean")&&(m=null);var ge=!1;if(m===null)ge=!0;else switch(ie){case"string":case"number":ge=!0;break;case"object":switch(m.$$typeof){case y:case T:ge=!0}}if(ge)return ge=m,oe=oe(ge),m=se===""?"."+Ve(ge,0):se,ee(oe)?(Z="",m!=null&&(Z=m.replace(De,"$&/")+"/"),rt(oe,v,Z,"",function(st){return st})):oe!=null&&(me(oe)&&(oe=K(oe,Z+(!oe.key||ge&&ge.key===oe.key?"":(""+oe.key).replace(De,"$&/")+"/")+m)),v.push(oe)),1;if(ge=0,se=se===""?".":se+":",ee(m))for(var pe=0;pe<m.length;pe++){ie=m[pe];var je=se+Ve(ie,pe);ge+=rt(ie,v,Z,je,oe)}else if(je=F(m),typeof je=="function")for(m=je.call(m),pe=0;!(ie=m.next()).done;)ie=ie.value,je=se+Ve(ie,pe++),ge+=rt(ie,v,Z,je,oe);else if(ie==="object")throw v=String(m),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return ge}function Q(m,v,Z){if(m==null)return m;var se=[],oe=0;return rt(m,se,"","",function(ie){return v.call(Z,ie,oe++)}),se}function Le(m){if(m._status===-1){var v=m._result;v=v(),v.then(function(Z){(m._status===0||m._status===-1)&&(m._status=1,m._result=Z)},function(Z){(m._status===0||m._status===-1)&&(m._status=2,m._result=Z)}),m._status===-1&&(m._status=0,m._result=v)}if(m._status===1)return m._result.default;throw m._result}var we={current:null},E={transition:null},V={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:E,ReactCurrentOwner:ve};function H(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:Q,forEach:function(m,v,Z){Q(m,function(){v.apply(this,arguments)},Z)},count:function(m){var v=0;return Q(m,function(){v++}),v},toArray:function(m){return Q(m,function(v){return v})||[]},only:function(m){if(!me(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},te.Component=R,te.Fragment=p,te.Profiler=S,te.PureComponent=he,te.StrictMode=k,te.Suspense=f,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,te.act=H,te.cloneElement=function(m,v,Z){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var se=ne({},m.props),oe=m.key,ie=m.ref,ge=m._owner;if(v!=null){if(v.ref!==void 0&&(ie=v.ref,ge=ve.current),v.key!==void 0&&(oe=""+v.key),m.type&&m.type.defaultProps)var pe=m.type.defaultProps;for(je in v)X.call(v,je)&&!Me.hasOwnProperty(je)&&(se[je]=v[je]===void 0&&pe!==void 0?pe[je]:v[je])}var je=arguments.length-2;if(je===1)se.children=Z;else if(1<je){pe=Array(je);for(var st=0;st<je;st++)pe[st]=arguments[st+2];se.children=pe}return{$$typeof:y,type:m.type,key:oe,ref:ie,props:se,_owner:ge}},te.createContext=function(m){return m={$$typeof:P,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:$,_context:m},m.Consumer=m},te.createElement=G,te.createFactory=function(m){var v=G.bind(null,m);return v.type=m,v},te.createRef=function(){return{current:null}},te.forwardRef=function(m){return{$$typeof:i,render:m}},te.isValidElement=me,te.lazy=function(m){return{$$typeof:M,_payload:{_status:-1,_result:m},_init:Le}},te.memo=function(m,v){return{$$typeof:C,type:m,compare:v===void 0?null:v}},te.startTransition=function(m){var v=E.transition;E.transition={};try{m()}finally{E.transition=v}},te.unstable_act=H,te.useCallback=function(m,v){return we.current.useCallback(m,v)},te.useContext=function(m){return we.current.useContext(m)},te.useDebugValue=function(){},te.useDeferredValue=function(m){return we.current.useDeferredValue(m)},te.useEffect=function(m,v){return we.current.useEffect(m,v)},te.useId=function(){return we.current.useId()},te.useImperativeHandle=function(m,v,Z){return we.current.useImperativeHandle(m,v,Z)},te.useInsertionEffect=function(m,v){return we.current.useInsertionEffect(m,v)},te.useLayoutEffect=function(m,v){return we.current.useLayoutEffect(m,v)},te.useMemo=function(m,v){return we.current.useMemo(m,v)},te.useReducer=function(m,v,Z){return we.current.useReducer(m,v,Z)},te.useRef=function(m){return we.current.useRef(m)},te.useState=function(m){return we.current.useState(m)},te.useSyncExternalStore=function(m,v,Z){return we.current.useSyncExternalStore(m,v,Z)},te.useTransition=function(){return we.current.useTransition()},te.version="18.3.1",te}var Zd;function to(){return Zd||(Zd=1,Yl.exports=fm()),Yl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ec;function ym(){if(ec)return Ms;ec=1;var y=to(),T=Symbol.for("react.element"),p=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,S=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function P(i,f,C){var M,J={},F=null,ue=null;C!==void 0&&(F=""+C),f.key!==void 0&&(F=""+f.key),f.ref!==void 0&&(ue=f.ref);for(M in f)k.call(f,M)&&!$.hasOwnProperty(M)&&(J[M]=f[M]);if(i&&i.defaultProps)for(M in f=i.defaultProps,f)J[M]===void 0&&(J[M]=f[M]);return{$$typeof:T,type:i,key:F,ref:ue,props:J,_owner:S.current}}return Ms.Fragment=p,Ms.jsx=P,Ms.jsxs=P,Ms}var tc;function bm(){return tc||(tc=1,Ql.exports=ym()),Ql.exports}var t=bm(),U=to();const vm=gm(U);var Vn={},Jl={exports:{}},et={},Gl={exports:{}},Kl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc;function jm(){return rc||(rc=1,function(y){function T(E,V){var H=E.length;E.push(V);e:for(;0<H;){var m=H-1>>>1,v=E[m];if(0<S(v,V))E[m]=V,E[H]=v,H=m;else break e}}function p(E){return E.length===0?null:E[0]}function k(E){if(E.length===0)return null;var V=E[0],H=E.pop();if(H!==V){E[0]=H;e:for(var m=0,v=E.length,Z=v>>>1;m<Z;){var se=2*(m+1)-1,oe=E[se],ie=se+1,ge=E[ie];if(0>S(oe,H))ie<v&&0>S(ge,oe)?(E[m]=ge,E[ie]=H,m=ie):(E[m]=oe,E[se]=H,m=se);else if(ie<v&&0>S(ge,H))E[m]=ge,E[ie]=H,m=ie;else break e}}return V}function S(E,V){var H=E.sortIndex-V.sortIndex;return H!==0?H:E.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var $=performance;y.unstable_now=function(){return $.now()}}else{var P=Date,i=P.now();y.unstable_now=function(){return P.now()-i}}var f=[],C=[],M=1,J=null,F=3,ue=!1,ne=!1,re=!1,R=typeof setTimeout=="function"?setTimeout:null,Te=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(E){for(var V=p(C);V!==null;){if(V.callback===null)k(C);else if(V.startTime<=E)k(C),V.sortIndex=V.expirationTime,T(f,V);else break;V=p(C)}}function ee(E){if(re=!1,ae(E),!ne)if(p(f)!==null)ne=!0,Le(X);else{var V=p(C);V!==null&&we(ee,V.startTime-E)}}function X(E,V){ne=!1,re&&(re=!1,Te(G),G=-1),ue=!0;var H=F;try{for(ae(V),J=p(f);J!==null&&(!(J.expirationTime>V)||E&&!tt());){var m=J.callback;if(typeof m=="function"){J.callback=null,F=J.priorityLevel;var v=m(J.expirationTime<=V);V=y.unstable_now(),typeof v=="function"?J.callback=v:J===p(f)&&k(f),ae(V)}else k(f);J=p(f)}if(J!==null)var Z=!0;else{var se=p(C);se!==null&&we(ee,se.startTime-V),Z=!1}return Z}finally{J=null,F=H,ue=!1}}var ve=!1,Me=null,G=-1,K=5,me=-1;function tt(){return!(y.unstable_now()-me<K)}function De(){if(Me!==null){var E=y.unstable_now();me=E;var V=!0;try{V=Me(!0,E)}finally{V?Ve():(ve=!1,Me=null)}}else ve=!1}var Ve;if(typeof he=="function")Ve=function(){he(De)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Q=rt.port2;rt.port1.onmessage=De,Ve=function(){Q.postMessage(null)}}else Ve=function(){R(De,0)};function Le(E){Me=E,ve||(ve=!0,Ve())}function we(E,V){G=R(function(){E(y.unstable_now())},V)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(E){E.callback=null},y.unstable_continueExecution=function(){ne||ue||(ne=!0,Le(X))},y.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<E?Math.floor(1e3/E):5},y.unstable_getCurrentPriorityLevel=function(){return F},y.unstable_getFirstCallbackNode=function(){return p(f)},y.unstable_next=function(E){switch(F){case 1:case 2:case 3:var V=3;break;default:V=F}var H=F;F=V;try{return E()}finally{F=H}},y.unstable_pauseExecution=function(){},y.unstable_requestPaint=function(){},y.unstable_runWithPriority=function(E,V){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var H=F;F=E;try{return V()}finally{F=H}},y.unstable_scheduleCallback=function(E,V,H){var m=y.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?m+H:m):H=m,E){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=H+v,E={id:M++,callback:V,priorityLevel:E,startTime:H,expirationTime:v,sortIndex:-1},H>m?(E.sortIndex=H,T(C,E),p(f)===null&&E===p(C)&&(re?(Te(G),G=-1):re=!0,we(ee,H-m))):(E.sortIndex=v,T(f,E),ne||ue||(ne=!0,Le(X))),E},y.unstable_shouldYield=tt,y.unstable_wrapCallback=function(E){var V=F;return function(){var H=F;F=V;try{return E.apply(this,arguments)}finally{F=H}}}}(Kl)),Kl}var sc;function Nm(){return sc||(sc=1,Gl.exports=jm()),Gl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc;function wm(){if(nc)return et;nc=1;var y=to(),T=Nm();function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k=new Set,S={};function $(e,r){P(e,r),P(e+"Capture",r)}function P(e,r){for(S[e]=r,e=0;e<r.length;e++)k.add(r[e])}var i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,M={},J={};function F(e){return f.call(J,e)?!0:f.call(M,e)?!1:C.test(e)?J[e]=!0:(M[e]=!0,!1)}function ue(e,r,s,n){if(s!==null&&s.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ne(e,r,s,n){if(r===null||typeof r>"u"||ue(e,r,s,n))return!0;if(n)return!1;if(s!==null)switch(s.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function re(e,r,s,n,a,l,o){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=e,this.type=r,this.sanitizeURL=l,this.removeEmptyString=o}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new re(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];R[r]=new re(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new re(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new re(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new re(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new re(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new re(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new re(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Te=/[\-:]([a-z])/g;function he(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Te,he);R[r]=new re(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Te,he);R[r]=new re(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Te,he);R[r]=new re(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new re(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new re(e,1,!1,e.toLowerCase(),null,!0,!0)});function ae(e,r,s,n){var a=R.hasOwnProperty(r)?R[r]:null;(a!==null?a.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(ne(r,s,a,n)&&(s=null),n||a===null?F(r)&&(s===null?e.removeAttribute(r):e.setAttribute(r,""+s)):a.mustUseProperty?e[a.propertyName]=s===null?a.type===3?!1:"":s:(r=a.attributeName,n=a.attributeNamespace,s===null?e.removeAttribute(r):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,n?e.setAttributeNS(n,r,s):e.setAttribute(r,s))))}var ee=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),ve=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),tt=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),E=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,m;function v(e){if(m===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);m=r&&r[1]||""}return`
`+m+e}var Z=!1;function se(e,r){if(!e||Z)return"";Z=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(g){var n=g}Reflect.construct(e,[],r)}else{try{r.call()}catch(g){n=g}e.call(r.prototype)}else{try{throw Error()}catch(g){n=g}e()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var a=g.stack.split(`
`),l=n.stack.split(`
`),o=a.length-1,d=l.length-1;1<=o&&0<=d&&a[o]!==l[d];)d--;for(;1<=o&&0<=d;o--,d--)if(a[o]!==l[d]){if(o!==1||d!==1)do if(o--,d--,0>d||a[o]!==l[d]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=d);break}}}finally{Z=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?v(e):""}function oe(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case ve:return"Portal";case K:return"Profiler";case G:return"StrictMode";case Ve:return"Suspense";case rt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tt:return(e.displayName||"Context")+".Consumer";case me:return(e._context.displayName||"Context")+".Provider";case De:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return r=e.displayName||null,r!==null?r:ie(e.type)||"Memo";case Le:r=e._payload,e=e._init;try{return ie(e(r))}catch{}}return null}function ge(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(r);case 8:return r===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function st(e){var r=je(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,l=s.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,l.call(this,o)}}),Object.defineProperty(e,r,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Hs(e){e._valueTracker||(e._valueTracker=st(e))}function so(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var s=r.getValue(),n="";return e&&(n=je(e)?e.checked?"true":"false":e.value),e=n,e!==s?(r.setValue(e),!0):!1}function Os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,r){var s=r.checked;return H({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function no(e,r){var s=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;s=pe(r.value!=null?r.value:s),e._wrapperState={initialChecked:n,initialValue:s,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ao(e,r){r=r.checked,r!=null&&ae(e,"checked",r,!1)}function ta(e,r){ao(e,r);var s=pe(r.value),n=r.type;if(s!=null)n==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?ra(e,r.type,s):r.hasOwnProperty("defaultValue")&&ra(e,r.type,pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function lo(e,r,s){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,s||r===e.value||(e.value=r),e.defaultValue=r}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function ra(e,r,s){(r!=="number"||Os(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Ur=Array.isArray;function gr(e,r,s,n){if(e=e.options,r){r={};for(var a=0;a<s.length;a++)r["$"+s[a]]=!0;for(s=0;s<e.length;s++)a=r.hasOwnProperty("$"+e[s].value),e[s].selected!==a&&(e[s].selected=a),a&&n&&(e[s].defaultSelected=!0)}else{for(s=""+pe(s),r=null,a=0;a<e.length;a++){if(e[a].value===s){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function sa(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(p(91));return H({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oo(e,r){var s=r.value;if(s==null){if(s=r.children,r=r.defaultValue,s!=null){if(r!=null)throw Error(p(92));if(Ur(s)){if(1<s.length)throw Error(p(93));s=s[0]}r=s}r==null&&(r=""),s=r}e._wrapperState={initialValue:pe(s)}}function io(e,r){var s=pe(r.value),n=pe(r.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),r.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),n!=null&&(e.defaultValue=""+n)}function co(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function uo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function na(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?uo(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _s,mo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,s,n,a){MSApp.execUnsafeLocalFunction(function(){return e(r,s,n,a)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=_s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Vr(e,r){if(r){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=r;return}}e.textContent=r}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vc=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){vc.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Qr[r]=Qr[e]})});function po(e,r,s){return r==null||typeof r=="boolean"||r===""?"":s||typeof r!="number"||r===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+r).trim():r+"px"}function xo(e,r){e=e.style;for(var s in r)if(r.hasOwnProperty(s)){var n=s.indexOf("--")===0,a=po(s,r[s],n);s==="float"&&(s="cssFloat"),n?e.setProperty(s,a):e[s]=a}}var jc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(e,r){if(r){if(jc[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(p(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(p(61))}if(r.style!=null&&typeof r.style!="object")throw Error(p(62))}}function la(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oa=null;function ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var da=null,fr=null,yr=null;function ho(e){if(e=hs(e)){if(typeof da!="function")throw Error(p(280));var r=e.stateNode;r&&(r=ln(r),da(e.stateNode,e.type,r))}}function go(e){fr?yr?yr.push(e):yr=[e]:fr=e}function fo(){if(fr){var e=fr,r=yr;if(yr=fr=null,ho(e),r)for(e=0;e<r.length;e++)ho(r[e])}}function yo(e,r){return e(r)}function bo(){}var ca=!1;function vo(e,r,s){if(ca)return e(r,s);ca=!0;try{return yo(e,r,s)}finally{ca=!1,(fr!==null||yr!==null)&&(bo(),fo())}}function Yr(e,r){var s=e.stateNode;if(s===null)return null;var n=ln(s);if(n===null)return null;s=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(p(231,r,typeof s));return s}var ua=!1;if(i)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){ua=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{ua=!1}function Nc(e,r,s,n,a,l,o,d,c){var g=Array.prototype.slice.call(arguments,3);try{r.apply(s,g)}catch(j){this.onError(j)}}var Gr=!1,Is=null,zs=!1,ma=null,wc={onError:function(e){Gr=!0,Is=e}};function kc(e,r,s,n,a,l,o,d,c){Gr=!1,Is=null,Nc.apply(wc,arguments)}function Sc(e,r,s,n,a,l,o,d,c){if(kc.apply(this,arguments),Gr){if(Gr){var g=Is;Gr=!1,Is=null}else throw Error(p(198));zs||(zs=!0,ma=g)}}function rr(e){var r=e,s=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(s=r.return),e=r.return;while(e)}return r.tag===3?s:null}function jo(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function No(e){if(rr(e)!==e)throw Error(p(188))}function Cc(e){var r=e.alternate;if(!r){if(r=rr(e),r===null)throw Error(p(188));return r!==e?null:e}for(var s=e,n=r;;){var a=s.return;if(a===null)break;var l=a.alternate;if(l===null){if(n=a.return,n!==null){s=n;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===s)return No(a),e;if(l===n)return No(a),r;l=l.sibling}throw Error(p(188))}if(s.return!==n.return)s=a,n=l;else{for(var o=!1,d=a.child;d;){if(d===s){o=!0,s=a,n=l;break}if(d===n){o=!0,n=a,s=l;break}d=d.sibling}if(!o){for(d=l.child;d;){if(d===s){o=!0,s=l,n=a;break}if(d===n){o=!0,n=l,s=a;break}d=d.sibling}if(!o)throw Error(p(189))}}if(s.alternate!==n)throw Error(p(190))}if(s.tag!==3)throw Error(p(188));return s.stateNode.current===s?e:r}function wo(e){return e=Cc(e),e!==null?ko(e):null}function ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=ko(e);if(r!==null)return r;e=e.sibling}return null}var So=T.unstable_scheduleCallback,Co=T.unstable_cancelCallback,Pc=T.unstable_shouldYield,Ec=T.unstable_requestPaint,Pe=T.unstable_now,Tc=T.unstable_getCurrentPriorityLevel,pa=T.unstable_ImmediatePriority,Po=T.unstable_UserBlockingPriority,Rs=T.unstable_NormalPriority,Mc=T.unstable_LowPriority,Eo=T.unstable_IdlePriority,Fs=null,Nt=null;function Lc(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Fs,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Ac,$c=Math.log,Dc=Math.LN2;function Ac(e){return e>>>=0,e===0?32:31-($c(e)/Dc|0)|0}var qs=64,Ws=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bs(e,r){var s=e.pendingLanes;if(s===0)return 0;var n=0,a=e.suspendedLanes,l=e.pingedLanes,o=s&268435455;if(o!==0){var d=o&~a;d!==0?n=Kr(d):(l&=o,l!==0&&(n=Kr(l)))}else o=s&~a,o!==0?n=Kr(o):l!==0&&(n=Kr(l));if(n===0)return 0;if(r!==0&&r!==n&&(r&a)===0&&(a=n&-n,l=r&-r,a>=l||a===16&&(l&4194240)!==0))return r;if((n&4)!==0&&(n|=s&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)s=31-xt(r),a=1<<s,n|=e[s],r&=~a;return n}function Hc(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oc(e,r){for(var s=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-xt(l),d=1<<o,c=a[o];c===-1?((d&s)===0||(d&n)!==0)&&(a[o]=Hc(d,r)):c<=r&&(e.expiredLanes|=d),l&=~d}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function To(){var e=qs;return qs<<=1,(qs&4194240)===0&&(qs=64),e}function ha(e){for(var r=[],s=0;31>s;s++)r.push(e);return r}function Xr(e,r,s){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-xt(r),e[r]=s}function _c(e,r){var s=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<s;){var a=31-xt(s),l=1<<a;r[a]=0,n[a]=-1,e[a]=-1,s&=~l}}function ga(e,r){var s=e.entangledLanes|=r;for(e=e.entanglements;s;){var n=31-xt(s),a=1<<n;a&r|e[n]&r&&(e[n]|=r),s&=~a}}var xe=0;function Mo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Lo,fa,$o,Do,Ao,ya=!1,Us=[],Ot=null,_t=null,It=null,Zr=new Map,es=new Map,zt=[],Ic="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ho(e,r){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Zr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(r.pointerId)}}function ts(e,r,s,n,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:r,domEventName:s,eventSystemFlags:n,nativeEvent:l,targetContainers:[a]},r!==null&&(r=hs(r),r!==null&&fa(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function zc(e,r,s,n,a){switch(r){case"focusin":return Ot=ts(Ot,e,r,s,n,a),!0;case"dragenter":return _t=ts(_t,e,r,s,n,a),!0;case"mouseover":return It=ts(It,e,r,s,n,a),!0;case"pointerover":var l=a.pointerId;return Zr.set(l,ts(Zr.get(l)||null,e,r,s,n,a)),!0;case"gotpointercapture":return l=a.pointerId,es.set(l,ts(es.get(l)||null,e,r,s,n,a)),!0}return!1}function Oo(e){var r=sr(e.target);if(r!==null){var s=rr(r);if(s!==null){if(r=s.tag,r===13){if(r=jo(s),r!==null){e.blockedOn=r,Ao(e.priority,function(){$o(s)});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vs(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var s=va(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var n=new s.constructor(s.type,s);oa=n,s.target.dispatchEvent(n),oa=null}else return r=hs(s),r!==null&&fa(r),e.blockedOn=s,!1;r.shift()}return!0}function _o(e,r,s){Vs(e)&&s.delete(r)}function Rc(){ya=!1,Ot!==null&&Vs(Ot)&&(Ot=null),_t!==null&&Vs(_t)&&(_t=null),It!==null&&Vs(It)&&(It=null),Zr.forEach(_o),es.forEach(_o)}function rs(e,r){e.blockedOn===r&&(e.blockedOn=null,ya||(ya=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,Rc)))}function ss(e){function r(a){return rs(a,e)}if(0<Us.length){rs(Us[0],e);for(var s=1;s<Us.length;s++){var n=Us[s];n.blockedOn===e&&(n.blockedOn=null)}}for(Ot!==null&&rs(Ot,e),_t!==null&&rs(_t,e),It!==null&&rs(It,e),Zr.forEach(r),es.forEach(r),s=0;s<zt.length;s++)n=zt[s],n.blockedOn===e&&(n.blockedOn=null);for(;0<zt.length&&(s=zt[0],s.blockedOn===null);)Oo(s),s.blockedOn===null&&zt.shift()}var br=ee.ReactCurrentBatchConfig,Qs=!0;function Fc(e,r,s,n){var a=xe,l=br.transition;br.transition=null;try{xe=1,ba(e,r,s,n)}finally{xe=a,br.transition=l}}function qc(e,r,s,n){var a=xe,l=br.transition;br.transition=null;try{xe=4,ba(e,r,s,n)}finally{xe=a,br.transition=l}}function ba(e,r,s,n){if(Qs){var a=va(e,r,s,n);if(a===null)_a(e,r,n,Ys,s),Ho(e,n);else if(zc(a,e,r,s,n))n.stopPropagation();else if(Ho(e,n),r&4&&-1<Ic.indexOf(e)){for(;a!==null;){var l=hs(a);if(l!==null&&Lo(l),l=va(e,r,s,n),l===null&&_a(e,r,n,Ys,s),l===a)break;a=l}a!==null&&n.stopPropagation()}else _a(e,r,n,null,s)}}var Ys=null;function va(e,r,s,n){if(Ys=null,e=ia(n),e=sr(e),e!==null)if(r=rr(e),r===null)e=null;else if(s=r.tag,s===13){if(e=jo(r),e!==null)return e;e=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Ys=e,null}function Io(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tc()){case pa:return 1;case Po:return 4;case Rs:case Mc:return 16;case Eo:return 536870912;default:return 16}default:return 16}}var Rt=null,ja=null,Js=null;function zo(){if(Js)return Js;var e,r=ja,s=r.length,n,a="value"in Rt?Rt.value:Rt.textContent,l=a.length;for(e=0;e<s&&r[e]===a[e];e++);var o=s-e;for(n=1;n<=o&&r[s-n]===a[l-n];n++);return Js=a.slice(e,1<n?1-n:void 0)}function Gs(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ks(){return!0}function Ro(){return!1}function nt(e){function r(s,n,a,l,o){this._reactName=s,this._targetInst=a,this.type=n,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(s=e[d],this[d]=s?s(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ks:Ro,this.isPropagationStopped=Ro,this}return H(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),r}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Na=nt(vr),ns=H({},vr,{view:0,detail:0}),Wc=nt(ns),wa,ka,as,Xs=H({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==as&&(as&&e.type==="mousemove"?(wa=e.screenX-as.screenX,ka=e.screenY-as.screenY):ka=wa=0,as=e),wa)},movementY:function(e){return"movementY"in e?e.movementY:ka}}),Fo=nt(Xs),Bc=H({},Xs,{dataTransfer:0}),Uc=nt(Bc),Vc=H({},ns,{relatedTarget:0}),Sa=nt(Vc),Qc=H({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yc=nt(Qc),Jc=H({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gc=nt(Jc),Kc=H({},vr,{data:0}),qo=nt(Kc),Xc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tu(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=eu[e])?!!r[e]:!1}function Ca(){return tu}var ru=H({},ns,{key:function(e){if(e.key){var r=Xc[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Gs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ca,charCode:function(e){return e.type==="keypress"?Gs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),su=nt(ru),nu=H({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wo=nt(nu),au=H({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ca}),lu=nt(au),ou=H({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),iu=nt(ou),du=H({},Xs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cu=nt(du),uu=[9,13,27,32],Pa=i&&"CompositionEvent"in window,ls=null;i&&"documentMode"in document&&(ls=document.documentMode);var mu=i&&"TextEvent"in window&&!ls,Bo=i&&(!Pa||ls&&8<ls&&11>=ls),Uo=" ",Vo=!1;function Qo(e,r){switch(e){case"keyup":return uu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function pu(e,r){switch(e){case"compositionend":return Yo(r);case"keypress":return r.which!==32?null:(Vo=!0,Uo);case"textInput":return e=r.data,e===Uo&&Vo?null:e;default:return null}}function xu(e,r){if(jr)return e==="compositionend"||!Pa&&Qo(e,r)?(e=zo(),Js=ja=Rt=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Bo&&r.locale!=="ko"?null:r.data;default:return null}}var hu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jo(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!hu[e.type]:r==="textarea"}function Go(e,r,s,n){go(n),r=sn(r,"onChange"),0<r.length&&(s=new Na("onChange","change",null,s,n),e.push({event:s,listeners:r}))}var os=null,is=null;function gu(e){xi(e,0)}function Zs(e){var r=Cr(e);if(so(r))return e}function fu(e,r){if(e==="change")return r}var Ko=!1;if(i){var Ea;if(i){var Ta="oninput"in document;if(!Ta){var Xo=document.createElement("div");Xo.setAttribute("oninput","return;"),Ta=typeof Xo.oninput=="function"}Ea=Ta}else Ea=!1;Ko=Ea&&(!document.documentMode||9<document.documentMode)}function Zo(){os&&(os.detachEvent("onpropertychange",ei),is=os=null)}function ei(e){if(e.propertyName==="value"&&Zs(is)){var r=[];Go(r,is,e,ia(e)),vo(gu,r)}}function yu(e,r,s){e==="focusin"?(Zo(),os=r,is=s,os.attachEvent("onpropertychange",ei)):e==="focusout"&&Zo()}function bu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zs(is)}function vu(e,r){if(e==="click")return Zs(r)}function ju(e,r){if(e==="input"||e==="change")return Zs(r)}function Nu(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var ht=typeof Object.is=="function"?Object.is:Nu;function ds(e,r){if(ht(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var s=Object.keys(e),n=Object.keys(r);if(s.length!==n.length)return!1;for(n=0;n<s.length;n++){var a=s[n];if(!f.call(r,a)||!ht(e[a],r[a]))return!1}return!0}function ti(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ri(e,r){var s=ti(e);e=0;for(var n;s;){if(s.nodeType===3){if(n=e+s.textContent.length,e<=r&&n>=r)return{node:s,offset:r-e};e=n}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=ti(s)}}function si(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?si(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function ni(){for(var e=window,r=Os();r instanceof e.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)e=r.contentWindow;else break;r=Os(e.document)}return r}function Ma(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function wu(e){var r=ni(),s=e.focusedElem,n=e.selectionRange;if(r!==s&&s&&s.ownerDocument&&si(s.ownerDocument.documentElement,s)){if(n!==null&&Ma(s)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(e,s.value.length);else if(e=(r=s.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=s.textContent.length,l=Math.min(n.start,a);n=n.end===void 0?l:Math.min(n.end,a),!e.extend&&l>n&&(a=n,n=l,l=a),a=ri(s,l);var o=ri(s,n);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),l>n?(e.addRange(r),e.extend(o.node,o.offset)):(r.setEnd(o.node,o.offset),e.addRange(r)))}}for(r=[],e=s;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)e=r[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ku=i&&"documentMode"in document&&11>=document.documentMode,Nr=null,La=null,cs=null,$a=!1;function ai(e,r,s){var n=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;$a||Nr==null||Nr!==Os(n)||(n=Nr,"selectionStart"in n&&Ma(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),cs&&ds(cs,n)||(cs=n,n=sn(La,"onSelect"),0<n.length&&(r=new Na("onSelect","select",null,r,s),e.push({event:r,listeners:n}),r.target=Nr)))}function en(e,r){var s={};return s[e.toLowerCase()]=r.toLowerCase(),s["Webkit"+e]="webkit"+r,s["Moz"+e]="moz"+r,s}var wr={animationend:en("Animation","AnimationEnd"),animationiteration:en("Animation","AnimationIteration"),animationstart:en("Animation","AnimationStart"),transitionend:en("Transition","TransitionEnd")},Da={},li={};i&&(li=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function tn(e){if(Da[e])return Da[e];if(!wr[e])return e;var r=wr[e],s;for(s in r)if(r.hasOwnProperty(s)&&s in li)return Da[e]=r[s];return e}var oi=tn("animationend"),ii=tn("animationiteration"),di=tn("animationstart"),ci=tn("transitionend"),ui=new Map,mi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,r){ui.set(e,r),$(r,[e])}for(var Aa=0;Aa<mi.length;Aa++){var Ha=mi[Aa],Su=Ha.toLowerCase(),Cu=Ha[0].toUpperCase()+Ha.slice(1);Ft(Su,"on"+Cu)}Ft(oi,"onAnimationEnd"),Ft(ii,"onAnimationIteration"),Ft(di,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(ci,"onTransitionEnd"),P("onMouseEnter",["mouseout","mouseover"]),P("onMouseLeave",["mouseout","mouseover"]),P("onPointerEnter",["pointerout","pointerover"]),P("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pu=new Set("cancel close invalid load scroll toggle".split(" ").concat(us));function pi(e,r,s){var n=e.type||"unknown-event";e.currentTarget=s,Sc(n,r,void 0,e),e.currentTarget=null}function xi(e,r){r=(r&4)!==0;for(var s=0;s<e.length;s++){var n=e[s],a=n.event;n=n.listeners;e:{var l=void 0;if(r)for(var o=n.length-1;0<=o;o--){var d=n[o],c=d.instance,g=d.currentTarget;if(d=d.listener,c!==l&&a.isPropagationStopped())break e;pi(a,d,g),l=c}else for(o=0;o<n.length;o++){if(d=n[o],c=d.instance,g=d.currentTarget,d=d.listener,c!==l&&a.isPropagationStopped())break e;pi(a,d,g),l=c}}}if(zs)throw e=ma,zs=!1,ma=null,e}function ye(e,r){var s=r[Wa];s===void 0&&(s=r[Wa]=new Set);var n=e+"__bubble";s.has(n)||(hi(r,e,2,!1),s.add(n))}function Oa(e,r,s){var n=0;r&&(n|=4),hi(s,e,n,r)}var rn="_reactListening"+Math.random().toString(36).slice(2);function ms(e){if(!e[rn]){e[rn]=!0,k.forEach(function(s){s!=="selectionchange"&&(Pu.has(s)||Oa(s,!1,e),Oa(s,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[rn]||(r[rn]=!0,Oa("selectionchange",!1,r))}}function hi(e,r,s,n){switch(Io(r)){case 1:var a=Fc;break;case 4:a=qc;break;default:a=ba}s=a.bind(null,r,s,e),a=void 0,!ua||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(r,s,{capture:!0,passive:a}):e.addEventListener(r,s,!0):a!==void 0?e.addEventListener(r,s,{passive:a}):e.addEventListener(r,s,!1)}function _a(e,r,s,n,a){var l=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var d=n.stateNode.containerInfo;if(d===a||d.nodeType===8&&d.parentNode===a)break;if(o===4)for(o=n.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;d!==null;){if(o=sr(d),o===null)return;if(c=o.tag,c===5||c===6){n=l=o;continue e}d=d.parentNode}}n=n.return}vo(function(){var g=l,j=ia(s),N=[];e:{var b=ui.get(e);if(b!==void 0){var L=Na,O=e;switch(e){case"keypress":if(Gs(s)===0)break e;case"keydown":case"keyup":L=su;break;case"focusin":O="focus",L=Sa;break;case"focusout":O="blur",L=Sa;break;case"beforeblur":case"afterblur":L=Sa;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=lu;break;case oi:case ii:case di:L=Yc;break;case ci:L=iu;break;case"scroll":L=Wc;break;case"wheel":L=cu;break;case"copy":case"cut":case"paste":L=Gc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Wo}var _=(r&4)!==0,Ee=!_&&e==="scroll",x=_?b!==null?b+"Capture":null:b;_=[];for(var u=g,h;u!==null;){h=u;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,x!==null&&(w=Yr(u,x),w!=null&&_.push(ps(u,w,h)))),Ee)break;u=u.return}0<_.length&&(b=new L(b,O,null,s,j),N.push({event:b,listeners:_}))}}if((r&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",b&&s!==oa&&(O=s.relatedTarget||s.fromElement)&&(sr(O)||O[Pt]))break e;if((L||b)&&(b=j.window===j?j:(b=j.ownerDocument)?b.defaultView||b.parentWindow:window,L?(O=s.relatedTarget||s.toElement,L=g,O=O?sr(O):null,O!==null&&(Ee=rr(O),O!==Ee||O.tag!==5&&O.tag!==6)&&(O=null)):(L=null,O=g),L!==O)){if(_=Fo,w="onMouseLeave",x="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(_=Wo,w="onPointerLeave",x="onPointerEnter",u="pointer"),Ee=L==null?b:Cr(L),h=O==null?b:Cr(O),b=new _(w,u+"leave",L,s,j),b.target=Ee,b.relatedTarget=h,w=null,sr(j)===g&&(_=new _(x,u+"enter",O,s,j),_.target=h,_.relatedTarget=Ee,w=_),Ee=w,L&&O)t:{for(_=L,x=O,u=0,h=_;h;h=kr(h))u++;for(h=0,w=x;w;w=kr(w))h++;for(;0<u-h;)_=kr(_),u--;for(;0<h-u;)x=kr(x),h--;for(;u--;){if(_===x||x!==null&&_===x.alternate)break t;_=kr(_),x=kr(x)}_=null}else _=null;L!==null&&gi(N,b,L,_,!1),O!==null&&Ee!==null&&gi(N,Ee,O,_,!0)}}e:{if(b=g?Cr(g):window,L=b.nodeName&&b.nodeName.toLowerCase(),L==="select"||L==="input"&&b.type==="file")var I=fu;else if(Jo(b))if(Ko)I=ju;else{I=bu;var q=yu}else(L=b.nodeName)&&L.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(I=vu);if(I&&(I=I(e,g))){Go(N,I,s,j);break e}q&&q(e,b,g),e==="focusout"&&(q=b._wrapperState)&&q.controlled&&b.type==="number"&&ra(b,"number",b.value)}switch(q=g?Cr(g):window,e){case"focusin":(Jo(q)||q.contentEditable==="true")&&(Nr=q,La=g,cs=null);break;case"focusout":cs=La=Nr=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,ai(N,s,j);break;case"selectionchange":if(ku)break;case"keydown":case"keyup":ai(N,s,j)}var W;if(Pa)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else jr?Qo(e,s)&&(Y="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Y="onCompositionStart");Y&&(Bo&&s.locale!=="ko"&&(jr||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&jr&&(W=zo()):(Rt=j,ja="value"in Rt?Rt.value:Rt.textContent,jr=!0)),q=sn(g,Y),0<q.length&&(Y=new qo(Y,e,null,s,j),N.push({event:Y,listeners:q}),W?Y.data=W:(W=Yo(s),W!==null&&(Y.data=W)))),(W=mu?pu(e,s):xu(e,s))&&(g=sn(g,"onBeforeInput"),0<g.length&&(j=new qo("onBeforeInput","beforeinput",null,s,j),N.push({event:j,listeners:g}),j.data=W))}xi(N,r)})}function ps(e,r,s){return{instance:e,listener:r,currentTarget:s}}function sn(e,r){for(var s=r+"Capture",n=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Yr(e,s),l!=null&&n.unshift(ps(e,l,a)),l=Yr(e,r),l!=null&&n.push(ps(e,l,a))),e=e.return}return n}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gi(e,r,s,n,a){for(var l=r._reactName,o=[];s!==null&&s!==n;){var d=s,c=d.alternate,g=d.stateNode;if(c!==null&&c===n)break;d.tag===5&&g!==null&&(d=g,a?(c=Yr(s,l),c!=null&&o.unshift(ps(s,c,d))):a||(c=Yr(s,l),c!=null&&o.push(ps(s,c,d)))),s=s.return}o.length!==0&&e.push({event:r,listeners:o})}var Eu=/\r\n?/g,Tu=/\u0000|\uFFFD/g;function fi(e){return(typeof e=="string"?e:""+e).replace(Eu,`
`).replace(Tu,"")}function nn(e,r,s){if(r=fi(r),fi(e)!==r&&s)throw Error(p(425))}function an(){}var Ia=null,za=null;function Ra(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,Mu=typeof clearTimeout=="function"?clearTimeout:void 0,yi=typeof Promise=="function"?Promise:void 0,Lu=typeof queueMicrotask=="function"?queueMicrotask:typeof yi<"u"?function(e){return yi.resolve(null).then(e).catch($u)}:Fa;function $u(e){setTimeout(function(){throw e})}function qa(e,r){var s=r,n=0;do{var a=s.nextSibling;if(e.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(n===0){e.removeChild(a),ss(r);return}n--}else s!=="$"&&s!=="$?"&&s!=="$!"||n++;s=a}while(s);ss(r)}function qt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function bi(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return e;r--}else s==="/$"&&r++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),wt="__reactFiber$"+Sr,xs="__reactProps$"+Sr,Pt="__reactContainer$"+Sr,Wa="__reactEvents$"+Sr,Du="__reactListeners$"+Sr,Au="__reactHandles$"+Sr;function sr(e){var r=e[wt];if(r)return r;for(var s=e.parentNode;s;){if(r=s[Pt]||s[wt]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(e=bi(e);e!==null;){if(s=e[wt])return s;e=bi(e)}return r}e=s,s=e.parentNode}return null}function hs(e){return e=e[wt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function ln(e){return e[xs]||null}var Ba=[],Pr=-1;function Wt(e){return{current:e}}function be(e){0>Pr||(e.current=Ba[Pr],Ba[Pr]=null,Pr--)}function fe(e,r){Pr++,Ba[Pr]=e.current,e.current=r}var Bt={},qe=Wt(Bt),Je=Wt(!1),nr=Bt;function Er(e,r){var s=e.type.contextTypes;if(!s)return Bt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in s)a[l]=r[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ge(e){return e=e.childContextTypes,e!=null}function on(){be(Je),be(qe)}function vi(e,r,s){if(qe.current!==Bt)throw Error(p(168));fe(qe,r),fe(Je,s)}function ji(e,r,s){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return s;n=n.getChildContext();for(var a in n)if(!(a in r))throw Error(p(108,ge(e)||"Unknown",a));return H({},s,n)}function dn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,nr=qe.current,fe(qe,e),fe(Je,Je.current),!0}function Ni(e,r,s){var n=e.stateNode;if(!n)throw Error(p(169));s?(e=ji(e,r,nr),n.__reactInternalMemoizedMergedChildContext=e,be(Je),be(qe),fe(qe,e)):be(Je),fe(Je,s)}var Et=null,cn=!1,Ua=!1;function wi(e){Et===null?Et=[e]:Et.push(e)}function Hu(e){cn=!0,wi(e)}function Ut(){if(!Ua&&Et!==null){Ua=!0;var e=0,r=xe;try{var s=Et;for(xe=1;e<s.length;e++){var n=s[e];do n=n(!0);while(n!==null)}Et=null,cn=!1}catch(a){throw Et!==null&&(Et=Et.slice(e+1)),So(pa,Ut),a}finally{xe=r,Ua=!1}}return null}var Tr=[],Mr=0,un=null,mn=0,it=[],dt=0,ar=null,Tt=1,Mt="";function lr(e,r){Tr[Mr++]=mn,Tr[Mr++]=un,un=e,mn=r}function ki(e,r,s){it[dt++]=Tt,it[dt++]=Mt,it[dt++]=ar,ar=e;var n=Tt;e=Mt;var a=32-xt(n)-1;n&=~(1<<a),s+=1;var l=32-xt(r)+a;if(30<l){var o=a-a%5;l=(n&(1<<o)-1).toString(32),n>>=o,a-=o,Tt=1<<32-xt(r)+a|s<<a|n,Mt=l+e}else Tt=1<<l|s<<a|n,Mt=e}function Va(e){e.return!==null&&(lr(e,1),ki(e,1,0))}function Qa(e){for(;e===un;)un=Tr[--Mr],Tr[Mr]=null,mn=Tr[--Mr],Tr[Mr]=null;for(;e===ar;)ar=it[--dt],it[dt]=null,Mt=it[--dt],it[dt]=null,Tt=it[--dt],it[dt]=null}var at=null,lt=null,Ne=!1,gt=null;function Si(e,r){var s=pt(5,null,null,0);s.elementType="DELETED",s.stateNode=r,s.return=e,r=e.deletions,r===null?(e.deletions=[s],e.flags|=16):r.push(s)}function Ci(e,r){switch(e.tag){case 5:var s=e.type;return r=r.nodeType!==1||s.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,at=e,lt=qt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,at=e,lt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(s=ar!==null?{id:Tt,overflow:Mt}:null,e.memoizedState={dehydrated:r,treeContext:s,retryLane:1073741824},s=pt(18,null,null,0),s.stateNode=r,s.return=e,e.child=s,at=e,lt=null,!0):!1;default:return!1}}function Ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ja(e){if(Ne){var r=lt;if(r){var s=r;if(!Ci(e,r)){if(Ya(e))throw Error(p(418));r=qt(s.nextSibling);var n=at;r&&Ci(e,r)?Si(n,s):(e.flags=e.flags&-4097|2,Ne=!1,at=e)}}else{if(Ya(e))throw Error(p(418));e.flags=e.flags&-4097|2,Ne=!1,at=e}}}function Pi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function pn(e){if(e!==at)return!1;if(!Ne)return Pi(e),Ne=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Ra(e.type,e.memoizedProps)),r&&(r=lt)){if(Ya(e))throw Ei(),Error(p(418));for(;r;)Si(e,r),r=qt(r.nextSibling)}if(Pi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(r===0){lt=qt(e.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++}e=e.nextSibling}lt=null}}else lt=at?qt(e.stateNode.nextSibling):null;return!0}function Ei(){for(var e=lt;e;)e=qt(e.nextSibling)}function Lr(){lt=at=null,Ne=!1}function Ga(e){gt===null?gt=[e]:gt.push(e)}var Ou=ee.ReactCurrentBatchConfig;function gs(e,r,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(p(309));var n=s.stateNode}if(!n)throw Error(p(147,e));var a=n,l=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===l?r.ref:(r=function(o){var d=a.refs;o===null?delete d[l]:d[l]=o},r._stringRef=l,r)}if(typeof e!="string")throw Error(p(284));if(!s._owner)throw Error(p(290,e))}return e}function xn(e,r){throw e=Object.prototype.toString.call(r),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Ti(e){var r=e._init;return r(e._payload)}function Mi(e){function r(x,u){if(e){var h=x.deletions;h===null?(x.deletions=[u],x.flags|=16):h.push(u)}}function s(x,u){if(!e)return null;for(;u!==null;)r(x,u),u=u.sibling;return null}function n(x,u){for(x=new Map;u!==null;)u.key!==null?x.set(u.key,u):x.set(u.index,u),u=u.sibling;return x}function a(x,u){return x=Zt(x,u),x.index=0,x.sibling=null,x}function l(x,u,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<u?(x.flags|=2,u):h):(x.flags|=2,u)):(x.flags|=1048576,u)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function d(x,u,h,w){return u===null||u.tag!==6?(u=Fl(h,x.mode,w),u.return=x,u):(u=a(u,h),u.return=x,u)}function c(x,u,h,w){var I=h.type;return I===Me?j(x,u,h.props.children,w,h.key):u!==null&&(u.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Le&&Ti(I)===u.type)?(w=a(u,h.props),w.ref=gs(x,u,h),w.return=x,w):(w=In(h.type,h.key,h.props,null,x.mode,w),w.ref=gs(x,u,h),w.return=x,w)}function g(x,u,h,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=ql(h,x.mode,w),u.return=x,u):(u=a(u,h.children||[]),u.return=x,u)}function j(x,u,h,w,I){return u===null||u.tag!==7?(u=xr(h,x.mode,w,I),u.return=x,u):(u=a(u,h),u.return=x,u)}function N(x,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Fl(""+u,x.mode,h),u.return=x,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case X:return h=In(u.type,u.key,u.props,null,x.mode,h),h.ref=gs(x,null,u),h.return=x,h;case ve:return u=ql(u,x.mode,h),u.return=x,u;case Le:var w=u._init;return N(x,w(u._payload),h)}if(Ur(u)||V(u))return u=xr(u,x.mode,h,null),u.return=x,u;xn(x,u)}return null}function b(x,u,h,w){var I=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return I!==null?null:d(x,u,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case X:return h.key===I?c(x,u,h,w):null;case ve:return h.key===I?g(x,u,h,w):null;case Le:return I=h._init,b(x,u,I(h._payload),w)}if(Ur(h)||V(h))return I!==null?null:j(x,u,h,w,null);xn(x,h)}return null}function L(x,u,h,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return x=x.get(h)||null,d(u,x,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case X:return x=x.get(w.key===null?h:w.key)||null,c(u,x,w,I);case ve:return x=x.get(w.key===null?h:w.key)||null,g(u,x,w,I);case Le:var q=w._init;return L(x,u,h,q(w._payload),I)}if(Ur(w)||V(w))return x=x.get(h)||null,j(u,x,w,I,null);xn(u,w)}return null}function O(x,u,h,w){for(var I=null,q=null,W=u,Y=u=0,ze=null;W!==null&&Y<h.length;Y++){W.index>Y?(ze=W,W=null):ze=W.sibling;var de=b(x,W,h[Y],w);if(de===null){W===null&&(W=ze);break}e&&W&&de.alternate===null&&r(x,W),u=l(de,u,Y),q===null?I=de:q.sibling=de,q=de,W=ze}if(Y===h.length)return s(x,W),Ne&&lr(x,Y),I;if(W===null){for(;Y<h.length;Y++)W=N(x,h[Y],w),W!==null&&(u=l(W,u,Y),q===null?I=W:q.sibling=W,q=W);return Ne&&lr(x,Y),I}for(W=n(x,W);Y<h.length;Y++)ze=L(W,x,Y,h[Y],w),ze!==null&&(e&&ze.alternate!==null&&W.delete(ze.key===null?Y:ze.key),u=l(ze,u,Y),q===null?I=ze:q.sibling=ze,q=ze);return e&&W.forEach(function(er){return r(x,er)}),Ne&&lr(x,Y),I}function _(x,u,h,w){var I=V(h);if(typeof I!="function")throw Error(p(150));if(h=I.call(h),h==null)throw Error(p(151));for(var q=I=null,W=u,Y=u=0,ze=null,de=h.next();W!==null&&!de.done;Y++,de=h.next()){W.index>Y?(ze=W,W=null):ze=W.sibling;var er=b(x,W,de.value,w);if(er===null){W===null&&(W=ze);break}e&&W&&er.alternate===null&&r(x,W),u=l(er,u,Y),q===null?I=er:q.sibling=er,q=er,W=ze}if(de.done)return s(x,W),Ne&&lr(x,Y),I;if(W===null){for(;!de.done;Y++,de=h.next())de=N(x,de.value,w),de!==null&&(u=l(de,u,Y),q===null?I=de:q.sibling=de,q=de);return Ne&&lr(x,Y),I}for(W=n(x,W);!de.done;Y++,de=h.next())de=L(W,x,Y,de.value,w),de!==null&&(e&&de.alternate!==null&&W.delete(de.key===null?Y:de.key),u=l(de,u,Y),q===null?I=de:q.sibling=de,q=de);return e&&W.forEach(function(hm){return r(x,hm)}),Ne&&lr(x,Y),I}function Ee(x,u,h,w){if(typeof h=="object"&&h!==null&&h.type===Me&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case X:e:{for(var I=h.key,q=u;q!==null;){if(q.key===I){if(I=h.type,I===Me){if(q.tag===7){s(x,q.sibling),u=a(q,h.props.children),u.return=x,x=u;break e}}else if(q.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Le&&Ti(I)===q.type){s(x,q.sibling),u=a(q,h.props),u.ref=gs(x,q,h),u.return=x,x=u;break e}s(x,q);break}else r(x,q);q=q.sibling}h.type===Me?(u=xr(h.props.children,x.mode,w,h.key),u.return=x,x=u):(w=In(h.type,h.key,h.props,null,x.mode,w),w.ref=gs(x,u,h),w.return=x,x=w)}return o(x);case ve:e:{for(q=h.key;u!==null;){if(u.key===q)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){s(x,u.sibling),u=a(u,h.children||[]),u.return=x,x=u;break e}else{s(x,u);break}else r(x,u);u=u.sibling}u=ql(h,x.mode,w),u.return=x,x=u}return o(x);case Le:return q=h._init,Ee(x,u,q(h._payload),w)}if(Ur(h))return O(x,u,h,w);if(V(h))return _(x,u,h,w);xn(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(s(x,u.sibling),u=a(u,h),u.return=x,x=u):(s(x,u),u=Fl(h,x.mode,w),u.return=x,x=u),o(x)):s(x,u)}return Ee}var $r=Mi(!0),Li=Mi(!1),hn=Wt(null),gn=null,Dr=null,Ka=null;function Xa(){Ka=Dr=gn=null}function Za(e){var r=hn.current;be(hn),e._currentValue=r}function el(e,r,s){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===s)break;e=e.return}}function Ar(e,r){gn=e,Ka=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Ke=!0),e.firstContext=null)}function ct(e){var r=e._currentValue;if(Ka!==e)if(e={context:e,memoizedValue:r,next:null},Dr===null){if(gn===null)throw Error(p(308));Dr=e,gn.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return r}var or=null;function tl(e){or===null?or=[e]:or.push(e)}function $i(e,r,s,n){var a=r.interleaved;return a===null?(s.next=s,tl(r)):(s.next=a.next,a.next=s),r.interleaved=s,Lt(e,n)}function Lt(e,r){e.lanes|=r;var s=e.alternate;for(s!==null&&(s.lanes|=r),s=e,e=e.return;e!==null;)e.childLanes|=r,s=e.alternate,s!==null&&(s.childLanes|=r),s=e,e=e.return;return s.tag===3?s.stateNode:null}var Vt=!1;function rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Di(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Qt(e,r,s){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(le&2)!==0){var a=n.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r,Lt(e,s)}return a=n.interleaved,a===null?(r.next=r,tl(n)):(r.next=a.next,a.next=r),n.interleaved=r,Lt(e,s)}function fn(e,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,s|=n,r.lanes=s,ga(e,s)}}function Ai(e,r){var s=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,s===n)){var a=null,l=null;if(s=s.firstBaseUpdate,s!==null){do{var o={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};l===null?a=l=o:l=l.next=o,s=s.next}while(s!==null);l===null?a=l=r:l=l.next=r}else a=l=r;s={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=r:e.next=r,s.lastBaseUpdate=r}function yn(e,r,s,n){var a=e.updateQueue;Vt=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var c=d,g=c.next;c.next=null,o===null?l=g:o.next=g,o=c;var j=e.alternate;j!==null&&(j=j.updateQueue,d=j.lastBaseUpdate,d!==o&&(d===null?j.firstBaseUpdate=g:d.next=g,j.lastBaseUpdate=c))}if(l!==null){var N=a.baseState;o=0,j=g=c=null,d=l;do{var b=d.lane,L=d.eventTime;if((n&b)===b){j!==null&&(j=j.next={eventTime:L,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var O=e,_=d;switch(b=r,L=s,_.tag){case 1:if(O=_.payload,typeof O=="function"){N=O.call(L,N,b);break e}N=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=_.payload,b=typeof O=="function"?O.call(L,N,b):O,b==null)break e;N=H({},N,b);break e;case 2:Vt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,b=a.effects,b===null?a.effects=[d]:b.push(d))}else L={eventTime:L,lane:b,tag:d.tag,payload:d.payload,callback:d.callback,next:null},j===null?(g=j=L,c=N):j=j.next=L,o|=b;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;b=d,d=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);if(j===null&&(c=N),a.baseState=c,a.firstBaseUpdate=g,a.lastBaseUpdate=j,r=a.shared.interleaved,r!==null){a=r;do o|=a.lane,a=a.next;while(a!==r)}else l===null&&(a.shared.lanes=0);cr|=o,e.lanes=o,e.memoizedState=N}}function Hi(e,r,s){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],a=n.callback;if(a!==null){if(n.callback=null,n=s,typeof a!="function")throw Error(p(191,a));a.call(n)}}}var fs={},kt=Wt(fs),ys=Wt(fs),bs=Wt(fs);function ir(e){if(e===fs)throw Error(p(174));return e}function sl(e,r){switch(fe(bs,r),fe(ys,e),fe(kt,fs),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:na(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=na(r,e)}be(kt),fe(kt,r)}function Hr(){be(kt),be(ys),be(bs)}function Oi(e){ir(bs.current);var r=ir(kt.current),s=na(r,e.type);r!==s&&(fe(ys,e),fe(kt,s))}function nl(e){ys.current===e&&(be(kt),be(ys))}var ke=Wt(0);function bn(e){for(var r=e;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var al=[];function ll(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var vn=ee.ReactCurrentDispatcher,ol=ee.ReactCurrentBatchConfig,dr=0,Se=null,Ae=null,_e=null,jn=!1,vs=!1,js=0,_u=0;function We(){throw Error(p(321))}function il(e,r){if(r===null)return!1;for(var s=0;s<r.length&&s<e.length;s++)if(!ht(e[s],r[s]))return!1;return!0}function dl(e,r,s,n,a,l){if(dr=l,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,vn.current=e===null||e.memoizedState===null?Fu:qu,e=s(n,a),vs){l=0;do{if(vs=!1,js=0,25<=l)throw Error(p(301));l+=1,_e=Ae=null,r.updateQueue=null,vn.current=Wu,e=s(n,a)}while(vs)}if(vn.current=kn,r=Ae!==null&&Ae.next!==null,dr=0,_e=Ae=Se=null,jn=!1,r)throw Error(p(300));return e}function cl(){var e=js!==0;return js=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Se.memoizedState=_e=e:_e=_e.next=e,_e}function ut(){if(Ae===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var r=_e===null?Se.memoizedState:_e.next;if(r!==null)_e=r,Ae=e;else{if(e===null)throw Error(p(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},_e===null?Se.memoizedState=_e=e:_e=_e.next=e}return _e}function Ns(e,r){return typeof r=="function"?r(e):r}function ul(e){var r=ut(),s=r.queue;if(s===null)throw Error(p(311));s.lastRenderedReducer=e;var n=Ae,a=n.baseQueue,l=s.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}n.baseQueue=a=l,s.pending=null}if(a!==null){l=a.next,n=n.baseState;var d=o=null,c=null,g=l;do{var j=g.lane;if((dr&j)===j)c!==null&&(c=c.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),n=g.hasEagerState?g.eagerState:e(n,g.action);else{var N={lane:j,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};c===null?(d=c=N,o=n):c=c.next=N,Se.lanes|=j,cr|=j}g=g.next}while(g!==null&&g!==l);c===null?o=n:c.next=d,ht(n,r.memoizedState)||(Ke=!0),r.memoizedState=n,r.baseState=o,r.baseQueue=c,s.lastRenderedState=n}if(e=s.interleaved,e!==null){a=e;do l=a.lane,Se.lanes|=l,cr|=l,a=a.next;while(a!==e)}else a===null&&(s.lanes=0);return[r.memoizedState,s.dispatch]}function ml(e){var r=ut(),s=r.queue;if(s===null)throw Error(p(311));s.lastRenderedReducer=e;var n=s.dispatch,a=s.pending,l=r.memoizedState;if(a!==null){s.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);ht(l,r.memoizedState)||(Ke=!0),r.memoizedState=l,r.baseQueue===null&&(r.baseState=l),s.lastRenderedState=l}return[l,n]}function _i(){}function Ii(e,r){var s=Se,n=ut(),a=r(),l=!ht(n.memoizedState,a);if(l&&(n.memoizedState=a,Ke=!0),n=n.queue,pl(Fi.bind(null,s,n,e),[e]),n.getSnapshot!==r||l||_e!==null&&_e.memoizedState.tag&1){if(s.flags|=2048,ws(9,Ri.bind(null,s,n,a,r),void 0,null),Ie===null)throw Error(p(349));(dr&30)!==0||zi(s,r,a)}return a}function zi(e,r,s){e.flags|=16384,e={getSnapshot:r,value:s},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.stores=[e]):(s=r.stores,s===null?r.stores=[e]:s.push(e))}function Ri(e,r,s,n){r.value=s,r.getSnapshot=n,qi(r)&&Wi(e)}function Fi(e,r,s){return s(function(){qi(r)&&Wi(e)})}function qi(e){var r=e.getSnapshot;e=e.value;try{var s=r();return!ht(e,s)}catch{return!0}}function Wi(e){var r=Lt(e,1);r!==null&&vt(r,e,1,-1)}function Bi(e){var r=St();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:e},r.queue=e,e=e.dispatch=Ru.bind(null,Se,e),[r.memoizedState,e]}function ws(e,r,s,n){return e={tag:e,create:r,destroy:s,deps:n,next:null},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.lastEffect=e.next=e):(s=r.lastEffect,s===null?r.lastEffect=e.next=e:(n=s.next,s.next=e,e.next=n,r.lastEffect=e)),e}function Ui(){return ut().memoizedState}function Nn(e,r,s,n){var a=St();Se.flags|=e,a.memoizedState=ws(1|r,s,void 0,n===void 0?null:n)}function wn(e,r,s,n){var a=ut();n=n===void 0?null:n;var l=void 0;if(Ae!==null){var o=Ae.memoizedState;if(l=o.destroy,n!==null&&il(n,o.deps)){a.memoizedState=ws(r,s,l,n);return}}Se.flags|=e,a.memoizedState=ws(1|r,s,l,n)}function Vi(e,r){return Nn(8390656,8,e,r)}function pl(e,r){return wn(2048,8,e,r)}function Qi(e,r){return wn(4,2,e,r)}function Yi(e,r){return wn(4,4,e,r)}function Ji(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Gi(e,r,s){return s=s!=null?s.concat([e]):null,wn(4,4,Ji.bind(null,r,e),s)}function xl(){}function Ki(e,r){var s=ut();r=r===void 0?null:r;var n=s.memoizedState;return n!==null&&r!==null&&il(r,n[1])?n[0]:(s.memoizedState=[e,r],e)}function Xi(e,r){var s=ut();r=r===void 0?null:r;var n=s.memoizedState;return n!==null&&r!==null&&il(r,n[1])?n[0]:(e=e(),s.memoizedState=[e,r],e)}function Zi(e,r,s){return(dr&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=s):(ht(s,r)||(s=To(),Se.lanes|=s,cr|=s,e.baseState=!0),r)}function Iu(e,r){var s=xe;xe=s!==0&&4>s?s:4,e(!0);var n=ol.transition;ol.transition={};try{e(!1),r()}finally{xe=s,ol.transition=n}}function ed(){return ut().memoizedState}function zu(e,r,s){var n=Kt(e);if(s={lane:n,action:s,hasEagerState:!1,eagerState:null,next:null},td(e))rd(r,s);else if(s=$i(e,r,s,n),s!==null){var a=Ye();vt(s,e,n,a),sd(s,r,n)}}function Ru(e,r,s){var n=Kt(e),a={lane:n,action:s,hasEagerState:!1,eagerState:null,next:null};if(td(e))rd(r,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=r.lastRenderedReducer,l!==null))try{var o=r.lastRenderedState,d=l(o,s);if(a.hasEagerState=!0,a.eagerState=d,ht(d,o)){var c=r.interleaved;c===null?(a.next=a,tl(r)):(a.next=c.next,c.next=a),r.interleaved=a;return}}catch{}finally{}s=$i(e,r,a,n),s!==null&&(a=Ye(),vt(s,e,n,a),sd(s,r,n))}}function td(e){var r=e.alternate;return e===Se||r!==null&&r===Se}function rd(e,r){vs=jn=!0;var s=e.pending;s===null?r.next=r:(r.next=s.next,s.next=r),e.pending=r}function sd(e,r,s){if((s&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,s|=n,r.lanes=s,ga(e,s)}}var kn={readContext:ct,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Fu={readContext:ct,useCallback:function(e,r){return St().memoizedState=[e,r===void 0?null:r],e},useContext:ct,useEffect:Vi,useImperativeHandle:function(e,r,s){return s=s!=null?s.concat([e]):null,Nn(4194308,4,Ji.bind(null,r,e),s)},useLayoutEffect:function(e,r){return Nn(4194308,4,e,r)},useInsertionEffect:function(e,r){return Nn(4,2,e,r)},useMemo:function(e,r){var s=St();return r=r===void 0?null:r,e=e(),s.memoizedState=[e,r],e},useReducer:function(e,r,s){var n=St();return r=s!==void 0?s(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=zu.bind(null,Se,e),[n.memoizedState,e]},useRef:function(e){var r=St();return e={current:e},r.memoizedState=e},useState:Bi,useDebugValue:xl,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=Bi(!1),r=e[0];return e=Iu.bind(null,e[1]),St().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,s){var n=Se,a=St();if(Ne){if(s===void 0)throw Error(p(407));s=s()}else{if(s=r(),Ie===null)throw Error(p(349));(dr&30)!==0||zi(n,r,s)}a.memoizedState=s;var l={value:s,getSnapshot:r};return a.queue=l,Vi(Fi.bind(null,n,l,e),[e]),n.flags|=2048,ws(9,Ri.bind(null,n,l,s,r),void 0,null),s},useId:function(){var e=St(),r=Ie.identifierPrefix;if(Ne){var s=Mt,n=Tt;s=(n&~(1<<32-xt(n)-1)).toString(32)+s,r=":"+r+"R"+s,s=js++,0<s&&(r+="H"+s.toString(32)),r+=":"}else s=_u++,r=":"+r+"r"+s.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},qu={readContext:ct,useCallback:Ki,useContext:ct,useEffect:pl,useImperativeHandle:Gi,useInsertionEffect:Qi,useLayoutEffect:Yi,useMemo:Xi,useReducer:ul,useRef:Ui,useState:function(){return ul(Ns)},useDebugValue:xl,useDeferredValue:function(e){var r=ut();return Zi(r,Ae.memoizedState,e)},useTransition:function(){var e=ul(Ns)[0],r=ut().memoizedState;return[e,r]},useMutableSource:_i,useSyncExternalStore:Ii,useId:ed,unstable_isNewReconciler:!1},Wu={readContext:ct,useCallback:Ki,useContext:ct,useEffect:pl,useImperativeHandle:Gi,useInsertionEffect:Qi,useLayoutEffect:Yi,useMemo:Xi,useReducer:ml,useRef:Ui,useState:function(){return ml(Ns)},useDebugValue:xl,useDeferredValue:function(e){var r=ut();return Ae===null?r.memoizedState=e:Zi(r,Ae.memoizedState,e)},useTransition:function(){var e=ml(Ns)[0],r=ut().memoizedState;return[e,r]},useMutableSource:_i,useSyncExternalStore:Ii,useId:ed,unstable_isNewReconciler:!1};function ft(e,r){if(e&&e.defaultProps){r=H({},r),e=e.defaultProps;for(var s in e)r[s]===void 0&&(r[s]=e[s]);return r}return r}function hl(e,r,s,n){r=e.memoizedState,s=s(n,r),s=s==null?r:H({},r,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Sn={isMounted:function(e){return(e=e._reactInternals)?rr(e)===e:!1},enqueueSetState:function(e,r,s){e=e._reactInternals;var n=Ye(),a=Kt(e),l=$t(n,a);l.payload=r,s!=null&&(l.callback=s),r=Qt(e,l,a),r!==null&&(vt(r,e,a,n),fn(r,e,a))},enqueueReplaceState:function(e,r,s){e=e._reactInternals;var n=Ye(),a=Kt(e),l=$t(n,a);l.tag=1,l.payload=r,s!=null&&(l.callback=s),r=Qt(e,l,a),r!==null&&(vt(r,e,a,n),fn(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var s=Ye(),n=Kt(e),a=$t(s,n);a.tag=2,r!=null&&(a.callback=r),r=Qt(e,a,n),r!==null&&(vt(r,e,n,s),fn(r,e,n))}};function nd(e,r,s,n,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,o):r.prototype&&r.prototype.isPureReactComponent?!ds(s,n)||!ds(a,l):!0}function ad(e,r,s){var n=!1,a=Bt,l=r.contextType;return typeof l=="object"&&l!==null?l=ct(l):(a=Ge(r)?nr:qe.current,n=r.contextTypes,l=(n=n!=null)?Er(e,a):Bt),r=new r(s,l),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Sn,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),r}function ld(e,r,s,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,n),r.state!==e&&Sn.enqueueReplaceState(r,r.state,null)}function gl(e,r,s,n){var a=e.stateNode;a.props=s,a.state=e.memoizedState,a.refs={},rl(e);var l=r.contextType;typeof l=="object"&&l!==null?a.context=ct(l):(l=Ge(r)?nr:qe.current,a.context=Er(e,l)),a.state=e.memoizedState,l=r.getDerivedStateFromProps,typeof l=="function"&&(hl(e,r,l,s),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Sn.enqueueReplaceState(a,a.state,null),yn(e,s,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Or(e,r){try{var s="",n=r;do s+=oe(n),n=n.return;while(n);var a=s}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:r,stack:a,digest:null}}function fl(e,r,s){return{value:e,source:null,stack:s??null,digest:r??null}}function yl(e,r){try{console.error(r.value)}catch(s){setTimeout(function(){throw s})}}var Bu=typeof WeakMap=="function"?WeakMap:Map;function od(e,r,s){s=$t(-1,s),s.tag=3,s.payload={element:null};var n=r.value;return s.callback=function(){$n||($n=!0,Dl=n),yl(e,r)},s}function id(e,r,s){s=$t(-1,s),s.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=r.value;s.payload=function(){return n(a)},s.callback=function(){yl(e,r)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(s.callback=function(){yl(e,r),typeof n!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var o=r.stack;this.componentDidCatch(r.value,{componentStack:o!==null?o:""})}),s}function dd(e,r,s){var n=e.pingCache;if(n===null){n=e.pingCache=new Bu;var a=new Set;n.set(r,a)}else a=n.get(r),a===void 0&&(a=new Set,n.set(r,a));a.has(s)||(a.add(s),e=nm.bind(null,e,r,s),r.then(e,e))}function cd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function ud(e,r,s,n,a){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(r=$t(-1,1),r.tag=2,Qt(s,r,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Uu=ee.ReactCurrentOwner,Ke=!1;function Qe(e,r,s,n){r.child=e===null?Li(r,null,s,n):$r(r,e.child,s,n)}function md(e,r,s,n,a){s=s.render;var l=r.ref;return Ar(r,a),n=dl(e,r,s,n,l,a),s=cl(),e!==null&&!Ke?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Dt(e,r,a)):(Ne&&s&&Va(r),r.flags|=1,Qe(e,r,n,a),r.child)}function pd(e,r,s,n,a){if(e===null){var l=s.type;return typeof l=="function"&&!Rl(l)&&l.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(r.tag=15,r.type=l,xd(e,r,l,n,a)):(e=In(s.type,null,n,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(l=e.child,(e.lanes&a)===0){var o=l.memoizedProps;if(s=s.compare,s=s!==null?s:ds,s(o,n)&&e.ref===r.ref)return Dt(e,r,a)}return r.flags|=1,e=Zt(l,n),e.ref=r.ref,e.return=r,r.child=e}function xd(e,r,s,n,a){if(e!==null){var l=e.memoizedProps;if(ds(l,n)&&e.ref===r.ref)if(Ke=!1,r.pendingProps=n=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Ke=!0);else return r.lanes=e.lanes,Dt(e,r,a)}return bl(e,r,s,n,a)}function hd(e,r,s){var n=r.pendingProps,a=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Ir,ot),ot|=s;else{if((s&1073741824)===0)return e=l!==null?l.baseLanes|s:s,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,fe(Ir,ot),ot|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:s,fe(Ir,ot),ot|=n}else l!==null?(n=l.baseLanes|s,r.memoizedState=null):n=s,fe(Ir,ot),ot|=n;return Qe(e,r,a,s),r.child}function gd(e,r){var s=r.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(r.flags|=512,r.flags|=2097152)}function bl(e,r,s,n,a){var l=Ge(s)?nr:qe.current;return l=Er(r,l),Ar(r,a),s=dl(e,r,s,n,l,a),n=cl(),e!==null&&!Ke?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Dt(e,r,a)):(Ne&&n&&Va(r),r.flags|=1,Qe(e,r,s,a),r.child)}function fd(e,r,s,n,a){if(Ge(s)){var l=!0;dn(r)}else l=!1;if(Ar(r,a),r.stateNode===null)Pn(e,r),ad(r,s,n),gl(r,s,n,a),n=!0;else if(e===null){var o=r.stateNode,d=r.memoizedProps;o.props=d;var c=o.context,g=s.contextType;typeof g=="object"&&g!==null?g=ct(g):(g=Ge(s)?nr:qe.current,g=Er(r,g));var j=s.getDerivedStateFromProps,N=typeof j=="function"||typeof o.getSnapshotBeforeUpdate=="function";N||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==n||c!==g)&&ld(r,o,n,g),Vt=!1;var b=r.memoizedState;o.state=b,yn(r,n,o,a),c=r.memoizedState,d!==n||b!==c||Je.current||Vt?(typeof j=="function"&&(hl(r,s,j,n),c=r.memoizedState),(d=Vt||nd(r,s,d,n,b,c,g))?(N||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(r.flags|=4194308)):(typeof o.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=c),o.props=n,o.state=c,o.context=g,n=d):(typeof o.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{o=r.stateNode,Di(e,r),d=r.memoizedProps,g=r.type===r.elementType?d:ft(r.type,d),o.props=g,N=r.pendingProps,b=o.context,c=s.contextType,typeof c=="object"&&c!==null?c=ct(c):(c=Ge(s)?nr:qe.current,c=Er(r,c));var L=s.getDerivedStateFromProps;(j=typeof L=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==N||b!==c)&&ld(r,o,n,c),Vt=!1,b=r.memoizedState,o.state=b,yn(r,n,o,a);var O=r.memoizedState;d!==N||b!==O||Je.current||Vt?(typeof L=="function"&&(hl(r,s,L,n),O=r.memoizedState),(g=Vt||nd(r,s,g,n,b,O,c)||!1)?(j||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,O,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,O,c)),typeof o.componentDidUpdate=="function"&&(r.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(r.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=O),o.props=n,o.state=O,o.context=c,n=g):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(r.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(r.flags|=1024),n=!1)}return vl(e,r,s,n,l,a)}function vl(e,r,s,n,a,l){gd(e,r);var o=(r.flags&128)!==0;if(!n&&!o)return a&&Ni(r,s,!1),Dt(e,r,l);n=r.stateNode,Uu.current=r;var d=o&&typeof s.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&o?(r.child=$r(r,e.child,null,l),r.child=$r(r,null,d,l)):Qe(e,r,d,l),r.memoizedState=n.state,a&&Ni(r,s,!0),r.child}function yd(e){var r=e.stateNode;r.pendingContext?vi(e,r.pendingContext,r.pendingContext!==r.context):r.context&&vi(e,r.context,!1),sl(e,r.containerInfo)}function bd(e,r,s,n,a){return Lr(),Ga(a),r.flags|=256,Qe(e,r,s,n),r.child}var jl={dehydrated:null,treeContext:null,retryLane:0};function Nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function vd(e,r,s){var n=r.pendingProps,a=ke.current,l=!1,o=(r.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(a&2)!==0),d?(l=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),fe(ke,a&1),e===null)return Ja(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(o=n.children,e=n.fallback,l?(n=r.mode,l=r.child,o={mode:"hidden",children:o},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=zn(o,n,0,null),e=xr(e,n,s,null),l.return=r,e.return=r,l.sibling=e,r.child=l,r.child.memoizedState=Nl(s),r.memoizedState=jl,e):wl(r,o));if(a=e.memoizedState,a!==null&&(d=a.dehydrated,d!==null))return Vu(e,r,o,n,d,a,s);if(l){l=n.fallback,o=r.mode,a=e.child,d=a.sibling;var c={mode:"hidden",children:n.children};return(o&1)===0&&r.child!==a?(n=r.child,n.childLanes=0,n.pendingProps=c,r.deletions=null):(n=Zt(a,c),n.subtreeFlags=a.subtreeFlags&14680064),d!==null?l=Zt(d,l):(l=xr(l,o,s,null),l.flags|=2),l.return=r,n.return=r,n.sibling=l,r.child=n,n=l,l=r.child,o=e.child.memoizedState,o=o===null?Nl(s):{baseLanes:o.baseLanes|s,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~s,r.memoizedState=jl,n}return l=e.child,e=l.sibling,n=Zt(l,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=s),n.return=r,n.sibling=null,e!==null&&(s=r.deletions,s===null?(r.deletions=[e],r.flags|=16):s.push(e)),r.child=n,r.memoizedState=null,n}function wl(e,r){return r=zn({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Cn(e,r,s,n){return n!==null&&Ga(n),$r(r,e.child,null,s),e=wl(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Vu(e,r,s,n,a,l,o){if(s)return r.flags&256?(r.flags&=-257,n=fl(Error(p(422))),Cn(e,r,o,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(l=n.fallback,a=r.mode,n=zn({mode:"visible",children:n.children},a,0,null),l=xr(l,a,o,null),l.flags|=2,n.return=r,l.return=r,n.sibling=l,r.child=n,(r.mode&1)!==0&&$r(r,e.child,null,o),r.child.memoizedState=Nl(o),r.memoizedState=jl,l);if((r.mode&1)===0)return Cn(e,r,o,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var d=n.dgst;return n=d,l=Error(p(419)),n=fl(l,n,void 0),Cn(e,r,o,n)}if(d=(o&e.childLanes)!==0,Ke||d){if(n=Ie,n!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(n.suspendedLanes|o))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Lt(e,a),vt(n,e,a,-1))}return zl(),n=fl(Error(p(421))),Cn(e,r,o,n)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=am.bind(null,e),a._reactRetry=r,null):(e=l.treeContext,lt=qt(a.nextSibling),at=r,Ne=!0,gt=null,e!==null&&(it[dt++]=Tt,it[dt++]=Mt,it[dt++]=ar,Tt=e.id,Mt=e.overflow,ar=r),r=wl(r,n.children),r.flags|=4096,r)}function jd(e,r,s){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),el(e.return,r,s)}function kl(e,r,s,n,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:s,tailMode:a}:(l.isBackwards=r,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=s,l.tailMode=a)}function Nd(e,r,s){var n=r.pendingProps,a=n.revealOrder,l=n.tail;if(Qe(e,r,n.children,s),n=ke.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,s,r);else if(e.tag===19)jd(e,s,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(fe(ke,n),(r.mode&1)===0)r.memoizedState=null;else switch(a){case"forwards":for(s=r.child,a=null;s!==null;)e=s.alternate,e!==null&&bn(e)===null&&(a=s),s=s.sibling;s=a,s===null?(a=r.child,r.child=null):(a=s.sibling,s.sibling=null),kl(r,!1,a,s,l);break;case"backwards":for(s=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&bn(e)===null){r.child=a;break}e=a.sibling,a.sibling=s,s=a,a=e}kl(r,!0,s,null,l);break;case"together":kl(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Pn(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Dt(e,r,s){if(e!==null&&(r.dependencies=e.dependencies),cr|=r.lanes,(s&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(p(153));if(r.child!==null){for(e=r.child,s=Zt(e,e.pendingProps),r.child=s,s.return=r;e.sibling!==null;)e=e.sibling,s=s.sibling=Zt(e,e.pendingProps),s.return=r;s.sibling=null}return r.child}function Qu(e,r,s){switch(r.tag){case 3:yd(r),Lr();break;case 5:Oi(r);break;case 1:Ge(r.type)&&dn(r);break;case 4:sl(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,a=r.memoizedProps.value;fe(hn,n._currentValue),n._currentValue=a;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(fe(ke,ke.current&1),r.flags|=128,null):(s&r.child.childLanes)!==0?vd(e,r,s):(fe(ke,ke.current&1),e=Dt(e,r,s),e!==null?e.sibling:null);fe(ke,ke.current&1);break;case 19:if(n=(s&r.childLanes)!==0,(e.flags&128)!==0){if(n)return Nd(e,r,s);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),fe(ke,ke.current),n)break;return null;case 22:case 23:return r.lanes=0,hd(e,r,s)}return Dt(e,r,s)}var wd,Sl,kd,Sd;wd=function(e,r){for(var s=r.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Sl=function(){},kd=function(e,r,s,n){var a=e.memoizedProps;if(a!==n){e=r.stateNode,ir(kt.current);var l=null;switch(s){case"input":a=ea(e,a),n=ea(e,n),l=[];break;case"select":a=H({},a,{value:void 0}),n=H({},n,{value:void 0}),l=[];break;case"textarea":a=sa(e,a),n=sa(e,n),l=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=an)}aa(s,n);var o;s=null;for(g in a)if(!n.hasOwnProperty(g)&&a.hasOwnProperty(g)&&a[g]!=null)if(g==="style"){var d=a[g];for(o in d)d.hasOwnProperty(o)&&(s||(s={}),s[o]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(S.hasOwnProperty(g)?l||(l=[]):(l=l||[]).push(g,null));for(g in n){var c=n[g];if(d=a!=null?a[g]:void 0,n.hasOwnProperty(g)&&c!==d&&(c!=null||d!=null))if(g==="style")if(d){for(o in d)!d.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(s||(s={}),s[o]="");for(o in c)c.hasOwnProperty(o)&&d[o]!==c[o]&&(s||(s={}),s[o]=c[o])}else s||(l||(l=[]),l.push(g,s)),s=c;else g==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,d=d?d.__html:void 0,c!=null&&d!==c&&(l=l||[]).push(g,c)):g==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(g,""+c):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(S.hasOwnProperty(g)?(c!=null&&g==="onScroll"&&ye("scroll",e),l||d===c||(l=[])):(l=l||[]).push(g,c))}s&&(l=l||[]).push("style",s);var g=l;(r.updateQueue=g)&&(r.flags|=4)}},Sd=function(e,r,s,n){s!==n&&(r.flags|=4)};function ks(e,r){if(!Ne)switch(e.tailMode){case"hidden":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var n=null;s!==null;)s.alternate!==null&&(n=s),s=s.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Be(e){var r=e.alternate!==null&&e.alternate.child===e.child,s=0,n=0;if(r)for(var a=e.child;a!==null;)s|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)s|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=s,r}function Yu(e,r,s){var n=r.pendingProps;switch(Qa(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(r),null;case 1:return Ge(r.type)&&on(),Be(r),null;case 3:return n=r.stateNode,Hr(),be(Je),be(qe),ll(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pn(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,gt!==null&&(Ol(gt),gt=null))),Sl(e,r),Be(r),null;case 5:nl(r);var a=ir(bs.current);if(s=r.type,e!==null&&r.stateNode!=null)kd(e,r,s,n,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(p(166));return Be(r),null}if(e=ir(kt.current),pn(r)){n=r.stateNode,s=r.type;var l=r.memoizedProps;switch(n[wt]=r,n[xs]=l,e=(r.mode&1)!==0,s){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<us.length;a++)ye(us[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":no(n,l),ye("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},ye("invalid",n);break;case"textarea":oo(n,l),ye("invalid",n)}aa(s,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var d=l[o];o==="children"?typeof d=="string"?n.textContent!==d&&(l.suppressHydrationWarning!==!0&&nn(n.textContent,d,e),a=["children",d]):typeof d=="number"&&n.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&nn(n.textContent,d,e),a=["children",""+d]):S.hasOwnProperty(o)&&d!=null&&o==="onScroll"&&ye("scroll",n)}switch(s){case"input":Hs(n),lo(n,l,!0);break;case"textarea":Hs(n),co(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=an)}n=a,r.updateQueue=n,n!==null&&(r.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uo(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(s,{is:n.is}):(e=o.createElement(s),s==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,s),e[wt]=r,e[xs]=n,wd(e,r,!1,!1),r.stateNode=e;e:{switch(o=la(s,n),s){case"dialog":ye("cancel",e),ye("close",e),a=n;break;case"iframe":case"object":case"embed":ye("load",e),a=n;break;case"video":case"audio":for(a=0;a<us.length;a++)ye(us[a],e);a=n;break;case"source":ye("error",e),a=n;break;case"img":case"image":case"link":ye("error",e),ye("load",e),a=n;break;case"details":ye("toggle",e),a=n;break;case"input":no(e,n),a=ea(e,n),ye("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=H({},n,{value:void 0}),ye("invalid",e);break;case"textarea":oo(e,n),a=sa(e,n),ye("invalid",e);break;default:a=n}aa(s,a),d=a;for(l in d)if(d.hasOwnProperty(l)){var c=d[l];l==="style"?xo(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&mo(e,c)):l==="children"?typeof c=="string"?(s!=="textarea"||c!=="")&&Vr(e,c):typeof c=="number"&&Vr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(S.hasOwnProperty(l)?c!=null&&l==="onScroll"&&ye("scroll",e):c!=null&&ae(e,l,c,o))}switch(s){case"input":Hs(e),lo(e,n,!1);break;case"textarea":Hs(e),co(e);break;case"option":n.value!=null&&e.setAttribute("value",""+pe(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?gr(e,!!n.multiple,l,!1):n.defaultValue!=null&&gr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=an)}switch(s){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Be(r),null;case 6:if(e&&r.stateNode!=null)Sd(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(p(166));if(s=ir(bs.current),ir(kt.current),pn(r)){if(n=r.stateNode,s=r.memoizedProps,n[wt]=r,(l=n.nodeValue!==s)&&(e=at,e!==null))switch(e.tag){case 3:nn(n.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&nn(n.nodeValue,s,(e.mode&1)!==0)}l&&(r.flags|=4)}else n=(s.nodeType===9?s:s.ownerDocument).createTextNode(n),n[wt]=r,r.stateNode=n}return Be(r),null;case 13:if(be(ke),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&lt!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ei(),Lr(),r.flags|=98560,l=!1;else if(l=pn(r),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(p(318));if(l=r.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));l[wt]=r}else Lr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Be(r),l=!1}else gt!==null&&(Ol(gt),gt=null),l=!0;if(!l)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=s,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(ke.current&1)!==0?He===0&&(He=3):zl())),r.updateQueue!==null&&(r.flags|=4),Be(r),null);case 4:return Hr(),Sl(e,r),e===null&&ms(r.stateNode.containerInfo),Be(r),null;case 10:return Za(r.type._context),Be(r),null;case 17:return Ge(r.type)&&on(),Be(r),null;case 19:if(be(ke),l=r.memoizedState,l===null)return Be(r),null;if(n=(r.flags&128)!==0,o=l.rendering,o===null)if(n)ks(l,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(o=bn(e),o!==null){for(r.flags|=128,ks(l,!1),n=o.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=s,s=r.child;s!==null;)l=s,e=n,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return fe(ke,ke.current&1|2),r.child}e=e.sibling}l.tail!==null&&Pe()>zr&&(r.flags|=128,n=!0,ks(l,!1),r.lanes=4194304)}else{if(!n)if(e=bn(o),e!==null){if(r.flags|=128,n=!0,s=e.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),ks(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Ne)return Be(r),null}else 2*Pe()-l.renderingStartTime>zr&&s!==1073741824&&(r.flags|=128,n=!0,ks(l,!1),r.lanes=4194304);l.isBackwards?(o.sibling=r.child,r.child=o):(s=l.last,s!==null?s.sibling=o:r.child=o,l.last=o)}return l.tail!==null?(r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=Pe(),r.sibling=null,s=ke.current,fe(ke,n?s&1|2:s&1),r):(Be(r),null);case 22:case 23:return Il(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(ot&1073741824)!==0&&(Be(r),r.subtreeFlags&6&&(r.flags|=8192)):Be(r),null;case 24:return null;case 25:return null}throw Error(p(156,r.tag))}function Ju(e,r){switch(Qa(r),r.tag){case 1:return Ge(r.type)&&on(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Hr(),be(Je),be(qe),ll(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return nl(r),null;case 13:if(be(ke),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(p(340));Lr()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return be(ke),null;case 4:return Hr(),null;case 10:return Za(r.type._context),null;case 22:case 23:return Il(),null;case 24:return null;default:return null}}var En=!1,Ue=!1,Gu=typeof WeakSet=="function"?WeakSet:Set,A=null;function _r(e,r){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(n){Ce(e,r,n)}else s.current=null}function Cl(e,r,s){try{s()}catch(n){Ce(e,r,n)}}var Cd=!1;function Ku(e,r){if(Ia=Qs,e=ni(),Ma(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var n=s.getSelection&&s.getSelection();if(n&&n.rangeCount!==0){s=n.anchorNode;var a=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{s.nodeType,l.nodeType}catch{s=null;break e}var o=0,d=-1,c=-1,g=0,j=0,N=e,b=null;t:for(;;){for(var L;N!==s||a!==0&&N.nodeType!==3||(d=o+a),N!==l||n!==0&&N.nodeType!==3||(c=o+n),N.nodeType===3&&(o+=N.nodeValue.length),(L=N.firstChild)!==null;)b=N,N=L;for(;;){if(N===e)break t;if(b===s&&++g===a&&(d=o),b===l&&++j===n&&(c=o),(L=N.nextSibling)!==null)break;N=b,b=N.parentNode}N=L}s=d===-1||c===-1?null:{start:d,end:c}}else s=null}s=s||{start:0,end:0}}else s=null;for(za={focusedElem:e,selectionRange:s},Qs=!1,A=r;A!==null;)if(r=A,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,A=e;else for(;A!==null;){r=A;try{var O=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var _=O.memoizedProps,Ee=O.memoizedState,x=r.stateNode,u=x.getSnapshotBeforeUpdate(r.elementType===r.type?_:ft(r.type,_),Ee);x.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=r.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(w){Ce(r,r.return,w)}if(e=r.sibling,e!==null){e.return=r.return,A=e;break}A=r.return}return O=Cd,Cd=!1,O}function Ss(e,r,s){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Cl(r,s,l)}a=a.next}while(a!==n)}}function Tn(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var n=s.create;s.destroy=n()}s=s.next}while(s!==r)}}function Pl(e){var r=e.ref;if(r!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof r=="function"?r(e):r.current=e}}function Pd(e){var r=e.alternate;r!==null&&(e.alternate=null,Pd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[wt],delete r[xs],delete r[Wa],delete r[Du],delete r[Au])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function Td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function El(e,r,s){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?s.nodeType===8?s.parentNode.insertBefore(e,r):s.insertBefore(e,r):(s.nodeType===8?(r=s.parentNode,r.insertBefore(e,s)):(r=s,r.appendChild(e)),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=an));else if(n!==4&&(e=e.child,e!==null))for(El(e,r,s),e=e.sibling;e!==null;)El(e,r,s),e=e.sibling}function Tl(e,r,s){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?s.insertBefore(e,r):s.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Tl(e,r,s),e=e.sibling;e!==null;)Tl(e,r,s),e=e.sibling}var Re=null,yt=!1;function Yt(e,r,s){for(s=s.child;s!==null;)Md(e,r,s),s=s.sibling}function Md(e,r,s){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Fs,s)}catch{}switch(s.tag){case 5:Ue||_r(s,r);case 6:var n=Re,a=yt;Re=null,Yt(e,r,s),Re=n,yt=a,Re!==null&&(yt?(e=Re,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):Re.removeChild(s.stateNode));break;case 18:Re!==null&&(yt?(e=Re,s=s.stateNode,e.nodeType===8?qa(e.parentNode,s):e.nodeType===1&&qa(e,s),ss(e)):qa(Re,s.stateNode));break;case 4:n=Re,a=yt,Re=s.stateNode.containerInfo,yt=!0,Yt(e,r,s),Re=n,yt=a;break;case 0:case 11:case 14:case 15:if(!Ue&&(n=s.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&Cl(s,r,o),a=a.next}while(a!==n)}Yt(e,r,s);break;case 1:if(!Ue&&(_r(s,r),n=s.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=s.memoizedProps,n.state=s.memoizedState,n.componentWillUnmount()}catch(d){Ce(s,r,d)}Yt(e,r,s);break;case 21:Yt(e,r,s);break;case 22:s.mode&1?(Ue=(n=Ue)||s.memoizedState!==null,Yt(e,r,s),Ue=n):Yt(e,r,s);break;default:Yt(e,r,s)}}function Ld(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Gu),r.forEach(function(n){var a=lm.bind(null,e,n);s.has(n)||(s.add(n),n.then(a,a))})}}function bt(e,r){var s=r.deletions;if(s!==null)for(var n=0;n<s.length;n++){var a=s[n];try{var l=e,o=r,d=o;e:for(;d!==null;){switch(d.tag){case 5:Re=d.stateNode,yt=!1;break e;case 3:Re=d.stateNode.containerInfo,yt=!0;break e;case 4:Re=d.stateNode.containerInfo,yt=!0;break e}d=d.return}if(Re===null)throw Error(p(160));Md(l,o,a),Re=null,yt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(g){Ce(a,r,g)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)$d(r,e),r=r.sibling}function $d(e,r){var s=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(r,e),Ct(e),n&4){try{Ss(3,e,e.return),Tn(3,e)}catch(_){Ce(e,e.return,_)}try{Ss(5,e,e.return)}catch(_){Ce(e,e.return,_)}}break;case 1:bt(r,e),Ct(e),n&512&&s!==null&&_r(s,s.return);break;case 5:if(bt(r,e),Ct(e),n&512&&s!==null&&_r(s,s.return),e.flags&32){var a=e.stateNode;try{Vr(a,"")}catch(_){Ce(e,e.return,_)}}if(n&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=s!==null?s.memoizedProps:l,d=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&ao(a,l),la(d,o);var g=la(d,l);for(o=0;o<c.length;o+=2){var j=c[o],N=c[o+1];j==="style"?xo(a,N):j==="dangerouslySetInnerHTML"?mo(a,N):j==="children"?Vr(a,N):ae(a,j,N,g)}switch(d){case"input":ta(a,l);break;case"textarea":io(a,l);break;case"select":var b=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var L=l.value;L!=null?gr(a,!!l.multiple,L,!1):b!==!!l.multiple&&(l.defaultValue!=null?gr(a,!!l.multiple,l.defaultValue,!0):gr(a,!!l.multiple,l.multiple?[]:"",!1))}a[xs]=l}catch(_){Ce(e,e.return,_)}}break;case 6:if(bt(r,e),Ct(e),n&4){if(e.stateNode===null)throw Error(p(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(_){Ce(e,e.return,_)}}break;case 3:if(bt(r,e),Ct(e),n&4&&s!==null&&s.memoizedState.isDehydrated)try{ss(r.containerInfo)}catch(_){Ce(e,e.return,_)}break;case 4:bt(r,e),Ct(e);break;case 13:bt(r,e),Ct(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||($l=Pe())),n&4&&Ld(e);break;case 22:if(j=s!==null&&s.memoizedState!==null,e.mode&1?(Ue=(g=Ue)||j,bt(r,e),Ue=g):bt(r,e),Ct(e),n&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!j&&(e.mode&1)!==0)for(A=e,j=e.child;j!==null;){for(N=A=j;A!==null;){switch(b=A,L=b.child,b.tag){case 0:case 11:case 14:case 15:Ss(4,b,b.return);break;case 1:_r(b,b.return);var O=b.stateNode;if(typeof O.componentWillUnmount=="function"){n=b,s=b.return;try{r=n,O.props=r.memoizedProps,O.state=r.memoizedState,O.componentWillUnmount()}catch(_){Ce(n,s,_)}}break;case 5:_r(b,b.return);break;case 22:if(b.memoizedState!==null){Hd(N);continue}}L!==null?(L.return=b,A=L):Hd(N)}j=j.sibling}e:for(j=null,N=e;;){if(N.tag===5){if(j===null){j=N;try{a=N.stateNode,g?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=N.stateNode,c=N.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,d.style.display=po("display",o))}catch(_){Ce(e,e.return,_)}}}else if(N.tag===6){if(j===null)try{N.stateNode.nodeValue=g?"":N.memoizedProps}catch(_){Ce(e,e.return,_)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;j===N&&(j=null),N=N.return}j===N&&(j=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:bt(r,e),Ct(e),n&4&&Ld(e);break;case 21:break;default:bt(r,e),Ct(e)}}function Ct(e){var r=e.flags;if(r&2){try{e:{for(var s=e.return;s!==null;){if(Ed(s)){var n=s;break e}s=s.return}throw Error(p(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Vr(a,""),n.flags&=-33);var l=Td(e);Tl(e,l,a);break;case 3:case 4:var o=n.stateNode.containerInfo,d=Td(e);El(e,d,o);break;default:throw Error(p(161))}}catch(c){Ce(e,e.return,c)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Xu(e,r,s){A=e,Dd(e)}function Dd(e,r,s){for(var n=(e.mode&1)!==0;A!==null;){var a=A,l=a.child;if(a.tag===22&&n){var o=a.memoizedState!==null||En;if(!o){var d=a.alternate,c=d!==null&&d.memoizedState!==null||Ue;d=En;var g=Ue;if(En=o,(Ue=c)&&!g)for(A=a;A!==null;)o=A,c=o.child,o.tag===22&&o.memoizedState!==null?Od(a):c!==null?(c.return=o,A=c):Od(a);for(;l!==null;)A=l,Dd(l),l=l.sibling;A=a,En=d,Ue=g}Ad(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,A=l):Ad(e)}}function Ad(e){for(;A!==null;){var r=A;if((r.flags&8772)!==0){var s=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ue||Tn(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!Ue)if(s===null)n.componentDidMount();else{var a=r.elementType===r.type?s.memoizedProps:ft(r.type,s.memoizedProps);n.componentDidUpdate(a,s.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=r.updateQueue;l!==null&&Hi(r,l,n);break;case 3:var o=r.updateQueue;if(o!==null){if(s=null,r.child!==null)switch(r.child.tag){case 5:s=r.child.stateNode;break;case 1:s=r.child.stateNode}Hi(r,o,s)}break;case 5:var d=r.stateNode;if(s===null&&r.flags&4){s=d;var c=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&s.focus();break;case"img":c.src&&(s.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var g=r.alternate;if(g!==null){var j=g.memoizedState;if(j!==null){var N=j.dehydrated;N!==null&&ss(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}Ue||r.flags&512&&Pl(r)}catch(b){Ce(r,r.return,b)}}if(r===e){A=null;break}if(s=r.sibling,s!==null){s.return=r.return,A=s;break}A=r.return}}function Hd(e){for(;A!==null;){var r=A;if(r===e){A=null;break}var s=r.sibling;if(s!==null){s.return=r.return,A=s;break}A=r.return}}function Od(e){for(;A!==null;){var r=A;try{switch(r.tag){case 0:case 11:case 15:var s=r.return;try{Tn(4,r)}catch(c){Ce(r,s,c)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var a=r.return;try{n.componentDidMount()}catch(c){Ce(r,a,c)}}var l=r.return;try{Pl(r)}catch(c){Ce(r,l,c)}break;case 5:var o=r.return;try{Pl(r)}catch(c){Ce(r,o,c)}}}catch(c){Ce(r,r.return,c)}if(r===e){A=null;break}var d=r.sibling;if(d!==null){d.return=r.return,A=d;break}A=r.return}}var Zu=Math.ceil,Mn=ee.ReactCurrentDispatcher,Ml=ee.ReactCurrentOwner,mt=ee.ReactCurrentBatchConfig,le=0,Ie=null,$e=null,Fe=0,ot=0,Ir=Wt(0),He=0,Cs=null,cr=0,Ln=0,Ll=0,Ps=null,Xe=null,$l=0,zr=1/0,At=null,$n=!1,Dl=null,Jt=null,Dn=!1,Gt=null,An=0,Es=0,Al=null,Hn=-1,On=0;function Ye(){return(le&6)!==0?Pe():Hn!==-1?Hn:Hn=Pe()}function Kt(e){return(e.mode&1)===0?1:(le&2)!==0&&Fe!==0?Fe&-Fe:Ou.transition!==null?(On===0&&(On=To()),On):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Io(e.type)),e)}function vt(e,r,s,n){if(50<Es)throw Es=0,Al=null,Error(p(185));Xr(e,s,n),((le&2)===0||e!==Ie)&&(e===Ie&&((le&2)===0&&(Ln|=s),He===4&&Xt(e,Fe)),Ze(e,n),s===1&&le===0&&(r.mode&1)===0&&(zr=Pe()+500,cn&&Ut()))}function Ze(e,r){var s=e.callbackNode;Oc(e,r);var n=Bs(e,e===Ie?Fe:0);if(n===0)s!==null&&Co(s),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(s!=null&&Co(s),r===1)e.tag===0?Hu(Id.bind(null,e)):wi(Id.bind(null,e)),Lu(function(){(le&6)===0&&Ut()}),s=null;else{switch(Mo(n)){case 1:s=pa;break;case 4:s=Po;break;case 16:s=Rs;break;case 536870912:s=Eo;break;default:s=Rs}s=Vd(s,_d.bind(null,e))}e.callbackPriority=r,e.callbackNode=s}}function _d(e,r){if(Hn=-1,On=0,(le&6)!==0)throw Error(p(327));var s=e.callbackNode;if(Rr()&&e.callbackNode!==s)return null;var n=Bs(e,e===Ie?Fe:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=_n(e,n);else{r=n;var a=le;le|=2;var l=Rd();(Ie!==e||Fe!==r)&&(At=null,zr=Pe()+500,mr(e,r));do try{rm();break}catch(d){zd(e,d)}while(!0);Xa(),Mn.current=l,le=a,$e!==null?r=0:(Ie=null,Fe=0,r=He)}if(r!==0){if(r===2&&(a=xa(e),a!==0&&(n=a,r=Hl(e,a))),r===1)throw s=Cs,mr(e,0),Xt(e,n),Ze(e,Pe()),s;if(r===6)Xt(e,n);else{if(a=e.current.alternate,(n&30)===0&&!em(a)&&(r=_n(e,n),r===2&&(l=xa(e),l!==0&&(n=l,r=Hl(e,l))),r===1))throw s=Cs,mr(e,0),Xt(e,n),Ze(e,Pe()),s;switch(e.finishedWork=a,e.finishedLanes=n,r){case 0:case 1:throw Error(p(345));case 2:pr(e,Xe,At);break;case 3:if(Xt(e,n),(n&130023424)===n&&(r=$l+500-Pe(),10<r)){if(Bs(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Ye(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Fa(pr.bind(null,e,Xe,At),r);break}pr(e,Xe,At);break;case 4:if(Xt(e,n),(n&4194240)===n)break;for(r=e.eventTimes,a=-1;0<n;){var o=31-xt(n);l=1<<o,o=r[o],o>a&&(a=o),n&=~l}if(n=a,n=Pe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Zu(n/1960))-n,10<n){e.timeoutHandle=Fa(pr.bind(null,e,Xe,At),n);break}pr(e,Xe,At);break;case 5:pr(e,Xe,At);break;default:throw Error(p(329))}}}return Ze(e,Pe()),e.callbackNode===s?_d.bind(null,e):null}function Hl(e,r){var s=Ps;return e.current.memoizedState.isDehydrated&&(mr(e,r).flags|=256),e=_n(e,r),e!==2&&(r=Xe,Xe=s,r!==null&&Ol(r)),e}function Ol(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function em(e){for(var r=e;;){if(r.flags&16384){var s=r.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var n=0;n<s.length;n++){var a=s[n],l=a.getSnapshot;a=a.value;try{if(!ht(l(),a))return!1}catch{return!1}}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xt(e,r){for(r&=~Ll,r&=~Ln,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var s=31-xt(r),n=1<<s;e[s]=-1,r&=~n}}function Id(e){if((le&6)!==0)throw Error(p(327));Rr();var r=Bs(e,0);if((r&1)===0)return Ze(e,Pe()),null;var s=_n(e,r);if(e.tag!==0&&s===2){var n=xa(e);n!==0&&(r=n,s=Hl(e,n))}if(s===1)throw s=Cs,mr(e,0),Xt(e,r),Ze(e,Pe()),s;if(s===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,pr(e,Xe,At),Ze(e,Pe()),null}function _l(e,r){var s=le;le|=1;try{return e(r)}finally{le=s,le===0&&(zr=Pe()+500,cn&&Ut())}}function ur(e){Gt!==null&&Gt.tag===0&&(le&6)===0&&Rr();var r=le;le|=1;var s=mt.transition,n=xe;try{if(mt.transition=null,xe=1,e)return e()}finally{xe=n,mt.transition=s,le=r,(le&6)===0&&Ut()}}function Il(){ot=Ir.current,be(Ir)}function mr(e,r){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Mu(s)),$e!==null)for(s=$e.return;s!==null;){var n=s;switch(Qa(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&on();break;case 3:Hr(),be(Je),be(qe),ll();break;case 5:nl(n);break;case 4:Hr();break;case 13:be(ke);break;case 19:be(ke);break;case 10:Za(n.type._context);break;case 22:case 23:Il()}s=s.return}if(Ie=e,$e=e=Zt(e.current,null),Fe=ot=r,He=0,Cs=null,Ll=Ln=cr=0,Xe=Ps=null,or!==null){for(r=0;r<or.length;r++)if(s=or[r],n=s.interleaved,n!==null){s.interleaved=null;var a=n.next,l=s.pending;if(l!==null){var o=l.next;l.next=a,n.next=o}s.pending=n}or=null}return e}function zd(e,r){do{var s=$e;try{if(Xa(),vn.current=kn,jn){for(var n=Se.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}jn=!1}if(dr=0,_e=Ae=Se=null,vs=!1,js=0,Ml.current=null,s===null||s.return===null){He=1,Cs=r,$e=null;break}e:{var l=e,o=s.return,d=s,c=r;if(r=Fe,d.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=c,j=d,N=j.tag;if((j.mode&1)===0&&(N===0||N===11||N===15)){var b=j.alternate;b?(j.updateQueue=b.updateQueue,j.memoizedState=b.memoizedState,j.lanes=b.lanes):(j.updateQueue=null,j.memoizedState=null)}var L=cd(o);if(L!==null){L.flags&=-257,ud(L,o,d,l,r),L.mode&1&&dd(l,g,r),r=L,c=g;var O=r.updateQueue;if(O===null){var _=new Set;_.add(c),r.updateQueue=_}else O.add(c);break e}else{if((r&1)===0){dd(l,g,r),zl();break e}c=Error(p(426))}}else if(Ne&&d.mode&1){var Ee=cd(o);if(Ee!==null){(Ee.flags&65536)===0&&(Ee.flags|=256),ud(Ee,o,d,l,r),Ga(Or(c,d));break e}}l=c=Or(c,d),He!==4&&(He=2),Ps===null?Ps=[l]:Ps.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,r&=-r,l.lanes|=r;var x=od(l,c,r);Ai(l,x);break e;case 1:d=c;var u=l.type,h=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Jt===null||!Jt.has(h)))){l.flags|=65536,r&=-r,l.lanes|=r;var w=id(l,d,r);Ai(l,w);break e}}l=l.return}while(l!==null)}qd(s)}catch(I){r=I,$e===s&&s!==null&&($e=s=s.return);continue}break}while(!0)}function Rd(){var e=Mn.current;return Mn.current=kn,e===null?kn:e}function zl(){(He===0||He===3||He===2)&&(He=4),Ie===null||(cr&268435455)===0&&(Ln&268435455)===0||Xt(Ie,Fe)}function _n(e,r){var s=le;le|=2;var n=Rd();(Ie!==e||Fe!==r)&&(At=null,mr(e,r));do try{tm();break}catch(a){zd(e,a)}while(!0);if(Xa(),le=s,Mn.current=n,$e!==null)throw Error(p(261));return Ie=null,Fe=0,He}function tm(){for(;$e!==null;)Fd($e)}function rm(){for(;$e!==null&&!Pc();)Fd($e)}function Fd(e){var r=Ud(e.alternate,e,ot);e.memoizedProps=e.pendingProps,r===null?qd(e):$e=r,Ml.current=null}function qd(e){var r=e;do{var s=r.alternate;if(e=r.return,(r.flags&32768)===0){if(s=Yu(s,r,ot),s!==null){$e=s;return}}else{if(s=Ju(s,r),s!==null){s.flags&=32767,$e=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,$e=null;return}}if(r=r.sibling,r!==null){$e=r;return}$e=r=e}while(r!==null);He===0&&(He=5)}function pr(e,r,s){var n=xe,a=mt.transition;try{mt.transition=null,xe=1,sm(e,r,s,n)}finally{mt.transition=a,xe=n}return null}function sm(e,r,s,n){do Rr();while(Gt!==null);if((le&6)!==0)throw Error(p(327));s=e.finishedWork;var a=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var l=s.lanes|s.childLanes;if(_c(e,l),e===Ie&&($e=Ie=null,Fe=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Dn||(Dn=!0,Vd(Rs,function(){return Rr(),null})),l=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||l){l=mt.transition,mt.transition=null;var o=xe;xe=1;var d=le;le|=4,Ml.current=null,Ku(e,s),$d(s,e),wu(za),Qs=!!Ia,za=Ia=null,e.current=s,Xu(s),Ec(),le=d,xe=o,mt.transition=l}else e.current=s;if(Dn&&(Dn=!1,Gt=e,An=a),l=e.pendingLanes,l===0&&(Jt=null),Lc(s.stateNode),Ze(e,Pe()),r!==null)for(n=e.onRecoverableError,s=0;s<r.length;s++)a=r[s],n(a.value,{componentStack:a.stack,digest:a.digest});if($n)throw $n=!1,e=Dl,Dl=null,e;return(An&1)!==0&&e.tag!==0&&Rr(),l=e.pendingLanes,(l&1)!==0?e===Al?Es++:(Es=0,Al=e):Es=0,Ut(),null}function Rr(){if(Gt!==null){var e=Mo(An),r=mt.transition,s=xe;try{if(mt.transition=null,xe=16>e?16:e,Gt===null)var n=!1;else{if(e=Gt,Gt=null,An=0,(le&6)!==0)throw Error(p(331));var a=le;for(le|=4,A=e.current;A!==null;){var l=A,o=l.child;if((A.flags&16)!==0){var d=l.deletions;if(d!==null){for(var c=0;c<d.length;c++){var g=d[c];for(A=g;A!==null;){var j=A;switch(j.tag){case 0:case 11:case 15:Ss(8,j,l)}var N=j.child;if(N!==null)N.return=j,A=N;else for(;A!==null;){j=A;var b=j.sibling,L=j.return;if(Pd(j),j===g){A=null;break}if(b!==null){b.return=L,A=b;break}A=L}}}var O=l.alternate;if(O!==null){var _=O.child;if(_!==null){O.child=null;do{var Ee=_.sibling;_.sibling=null,_=Ee}while(_!==null)}}A=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,A=o;else e:for(;A!==null;){if(l=A,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Ss(9,l,l.return)}var x=l.sibling;if(x!==null){x.return=l.return,A=x;break e}A=l.return}}var u=e.current;for(A=u;A!==null;){o=A;var h=o.child;if((o.subtreeFlags&2064)!==0&&h!==null)h.return=o,A=h;else e:for(o=u;A!==null;){if(d=A,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Tn(9,d)}}catch(I){Ce(d,d.return,I)}if(d===o){A=null;break e}var w=d.sibling;if(w!==null){w.return=d.return,A=w;break e}A=d.return}}if(le=a,Ut(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Fs,e)}catch{}n=!0}return n}finally{xe=s,mt.transition=r}}return!1}function Wd(e,r,s){r=Or(s,r),r=od(e,r,1),e=Qt(e,r,1),r=Ye(),e!==null&&(Xr(e,1,r),Ze(e,r))}function Ce(e,r,s){if(e.tag===3)Wd(e,e,s);else for(;r!==null;){if(r.tag===3){Wd(r,e,s);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Jt===null||!Jt.has(n))){e=Or(s,e),e=id(r,e,1),r=Qt(r,e,1),e=Ye(),r!==null&&(Xr(r,1,e),Ze(r,e));break}}r=r.return}}function nm(e,r,s){var n=e.pingCache;n!==null&&n.delete(r),r=Ye(),e.pingedLanes|=e.suspendedLanes&s,Ie===e&&(Fe&s)===s&&(He===4||He===3&&(Fe&130023424)===Fe&&500>Pe()-$l?mr(e,0):Ll|=s),Ze(e,r)}function Bd(e,r){r===0&&((e.mode&1)===0?r=1:(r=Ws,Ws<<=1,(Ws&130023424)===0&&(Ws=4194304)));var s=Ye();e=Lt(e,r),e!==null&&(Xr(e,r,s),Ze(e,s))}function am(e){var r=e.memoizedState,s=0;r!==null&&(s=r.retryLane),Bd(e,s)}function lm(e,r){var s=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(s=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(p(314))}n!==null&&n.delete(r),Bd(e,s)}var Ud;Ud=function(e,r,s){if(e!==null)if(e.memoizedProps!==r.pendingProps||Je.current)Ke=!0;else{if((e.lanes&s)===0&&(r.flags&128)===0)return Ke=!1,Qu(e,r,s);Ke=(e.flags&131072)!==0}else Ke=!1,Ne&&(r.flags&1048576)!==0&&ki(r,mn,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;Pn(e,r),e=r.pendingProps;var a=Er(r,qe.current);Ar(r,s),a=dl(null,r,n,e,a,s);var l=cl();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ge(n)?(l=!0,dn(r)):l=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,rl(r),a.updater=Sn,r.stateNode=a,a._reactInternals=r,gl(r,n,e,s),r=vl(null,r,n,!0,l,s)):(r.tag=0,Ne&&l&&Va(r),Qe(null,r,a,s),r=r.child),r;case 16:n=r.elementType;e:{switch(Pn(e,r),e=r.pendingProps,a=n._init,n=a(n._payload),r.type=n,a=r.tag=im(n),e=ft(n,e),a){case 0:r=bl(null,r,n,e,s);break e;case 1:r=fd(null,r,n,e,s);break e;case 11:r=md(null,r,n,e,s);break e;case 14:r=pd(null,r,n,ft(n.type,e),s);break e}throw Error(p(306,n,""))}return r;case 0:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:ft(n,a),bl(e,r,n,a,s);case 1:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:ft(n,a),fd(e,r,n,a,s);case 3:e:{if(yd(r),e===null)throw Error(p(387));n=r.pendingProps,l=r.memoizedState,a=l.element,Di(e,r),yn(r,n,null,s);var o=r.memoizedState;if(n=o.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},r.updateQueue.baseState=l,r.memoizedState=l,r.flags&256){a=Or(Error(p(423)),r),r=bd(e,r,n,s,a);break e}else if(n!==a){a=Or(Error(p(424)),r),r=bd(e,r,n,s,a);break e}else for(lt=qt(r.stateNode.containerInfo.firstChild),at=r,Ne=!0,gt=null,s=Li(r,null,n,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Lr(),n===a){r=Dt(e,r,s);break e}Qe(e,r,n,s)}r=r.child}return r;case 5:return Oi(r),e===null&&Ja(r),n=r.type,a=r.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,Ra(n,a)?o=null:l!==null&&Ra(n,l)&&(r.flags|=32),gd(e,r),Qe(e,r,o,s),r.child;case 6:return e===null&&Ja(r),null;case 13:return vd(e,r,s);case 4:return sl(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=$r(r,null,n,s):Qe(e,r,n,s),r.child;case 11:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:ft(n,a),md(e,r,n,a,s);case 7:return Qe(e,r,r.pendingProps,s),r.child;case 8:return Qe(e,r,r.pendingProps.children,s),r.child;case 12:return Qe(e,r,r.pendingProps.children,s),r.child;case 10:e:{if(n=r.type._context,a=r.pendingProps,l=r.memoizedProps,o=a.value,fe(hn,n._currentValue),n._currentValue=o,l!==null)if(ht(l.value,o)){if(l.children===a.children&&!Je.current){r=Dt(e,r,s);break e}}else for(l=r.child,l!==null&&(l.return=r);l!==null;){var d=l.dependencies;if(d!==null){o=l.child;for(var c=d.firstContext;c!==null;){if(c.context===n){if(l.tag===1){c=$t(-1,s&-s),c.tag=2;var g=l.updateQueue;if(g!==null){g=g.shared;var j=g.pending;j===null?c.next=c:(c.next=j.next,j.next=c),g.pending=c}}l.lanes|=s,c=l.alternate,c!==null&&(c.lanes|=s),el(l.return,s,r),d.lanes|=s;break}c=c.next}}else if(l.tag===10)o=l.type===r.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(p(341));o.lanes|=s,d=o.alternate,d!==null&&(d.lanes|=s),el(o,s,r),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===r){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Qe(e,r,a.children,s),r=r.child}return r;case 9:return a=r.type,n=r.pendingProps.children,Ar(r,s),a=ct(a),n=n(a),r.flags|=1,Qe(e,r,n,s),r.child;case 14:return n=r.type,a=ft(n,r.pendingProps),a=ft(n.type,a),pd(e,r,n,a,s);case 15:return xd(e,r,r.type,r.pendingProps,s);case 17:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:ft(n,a),Pn(e,r),r.tag=1,Ge(n)?(e=!0,dn(r)):e=!1,Ar(r,s),ad(r,n,a),gl(r,n,a,s),vl(null,r,n,!0,e,s);case 19:return Nd(e,r,s);case 22:return hd(e,r,s)}throw Error(p(156,r.tag))};function Vd(e,r){return So(e,r)}function om(e,r,s,n){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,r,s,n){return new om(e,r,s,n)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function im(e){if(typeof e=="function")return Rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===De)return 11;if(e===Q)return 14}return 2}function Zt(e,r){var s=e.alternate;return s===null?(s=pt(e.tag,r,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=r,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,r=e.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function In(e,r,s,n,a,l){var o=2;if(n=e,typeof e=="function")Rl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Me:return xr(s.children,a,l,r);case G:o=8,a|=8;break;case K:return e=pt(12,s,r,a|2),e.elementType=K,e.lanes=l,e;case Ve:return e=pt(13,s,r,a),e.elementType=Ve,e.lanes=l,e;case rt:return e=pt(19,s,r,a),e.elementType=rt,e.lanes=l,e;case we:return zn(s,a,l,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case me:o=10;break e;case tt:o=9;break e;case De:o=11;break e;case Q:o=14;break e;case Le:o=16,n=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return r=pt(o,s,r,a),r.elementType=e,r.type=n,r.lanes=l,r}function xr(e,r,s,n){return e=pt(7,e,n,r),e.lanes=s,e}function zn(e,r,s,n){return e=pt(22,e,n,r),e.elementType=we,e.lanes=s,e.stateNode={isHidden:!1},e}function Fl(e,r,s){return e=pt(6,e,null,r),e.lanes=s,e}function ql(e,r,s){return r=pt(4,e.children!==null?e.children:[],e.key,r),r.lanes=s,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function dm(e,r,s,n,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ha(0),this.expirationTimes=ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ha(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Wl(e,r,s,n,a,l,o,d,c){return e=new dm(e,r,s,d,c),r===1?(r=1,l===!0&&(r|=8)):r=0,l=pt(3,null,null,r),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},rl(l),e}function cm(e,r,s){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:n==null?null:""+n,children:e,containerInfo:r,implementation:s}}function Qd(e){if(!e)return Bt;e=e._reactInternals;e:{if(rr(e)!==e||e.tag!==1)throw Error(p(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ge(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(p(171))}if(e.tag===1){var s=e.type;if(Ge(s))return ji(e,s,r)}return r}function Yd(e,r,s,n,a,l,o,d,c){return e=Wl(s,n,!0,e,a,l,o,d,c),e.context=Qd(null),s=e.current,n=Ye(),a=Kt(s),l=$t(n,a),l.callback=r??null,Qt(s,l,a),e.current.lanes=a,Xr(e,a,n),Ze(e,n),e}function Rn(e,r,s,n){var a=r.current,l=Ye(),o=Kt(a);return s=Qd(s),r.context===null?r.context=s:r.pendingContext=s,r=$t(l,o),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=Qt(a,r,o),e!==null&&(vt(e,a,o,l),fn(e,a,o)),o}function Fn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<r?s:r}}function Bl(e,r){Jd(e,r),(e=e.alternate)&&Jd(e,r)}function um(){return null}var Gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ul(e){this._internalRoot=e}qn.prototype.render=Ul.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(p(409));Rn(e,r,null,null)},qn.prototype.unmount=Ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;ur(function(){Rn(null,e,null,null)}),r[Pt]=null}};function qn(e){this._internalRoot=e}qn.prototype.unstable_scheduleHydration=function(e){if(e){var r=Do();e={blockedOn:null,target:e,priority:r};for(var s=0;s<zt.length&&r!==0&&r<zt[s].priority;s++);zt.splice(s,0,e),s===0&&Oo(e)}};function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kd(){}function mm(e,r,s,n,a){if(a){if(typeof n=="function"){var l=n;n=function(){var g=Fn(o);l.call(g)}}var o=Yd(r,n,e,0,null,!1,!1,"",Kd);return e._reactRootContainer=o,e[Pt]=o.current,ms(e.nodeType===8?e.parentNode:e),ur(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var d=n;n=function(){var g=Fn(c);d.call(g)}}var c=Wl(e,0,!1,null,null,!1,!1,"",Kd);return e._reactRootContainer=c,e[Pt]=c.current,ms(e.nodeType===8?e.parentNode:e),ur(function(){Rn(r,c,s,n)}),c}function Bn(e,r,s,n,a){var l=s._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var d=a;a=function(){var c=Fn(o);d.call(c)}}Rn(r,o,e,a)}else o=mm(s,r,e,a,n);return Fn(o)}Lo=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var s=Kr(r.pendingLanes);s!==0&&(ga(r,s|1),Ze(r,Pe()),(le&6)===0&&(zr=Pe()+500,Ut()))}break;case 13:ur(function(){var n=Lt(e,1);if(n!==null){var a=Ye();vt(n,e,1,a)}}),Bl(e,1)}},fa=function(e){if(e.tag===13){var r=Lt(e,134217728);if(r!==null){var s=Ye();vt(r,e,134217728,s)}Bl(e,134217728)}},$o=function(e){if(e.tag===13){var r=Kt(e),s=Lt(e,r);if(s!==null){var n=Ye();vt(s,e,r,n)}Bl(e,r)}},Do=function(){return xe},Ao=function(e,r){var s=xe;try{return xe=e,r()}finally{xe=s}},da=function(e,r,s){switch(r){case"input":if(ta(e,s),r=s.name,s.type==="radio"&&r!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<s.length;r++){var n=s[r];if(n!==e&&n.form===e.form){var a=ln(n);if(!a)throw Error(p(90));so(n),ta(n,a)}}}break;case"textarea":io(e,s);break;case"select":r=s.value,r!=null&&gr(e,!!s.multiple,r,!1)}},yo=_l,bo=ur;var pm={usingClientEntryPoint:!1,Events:[hs,Cr,ln,go,fo,_l]},Ts={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xm={bundleType:Ts.bundleType,version:Ts.version,rendererPackageName:Ts.rendererPackageName,rendererConfig:Ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wo(e),e===null?null:e.stateNode},findFiberByHostInstance:Ts.findFiberByHostInstance||um,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Un=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Un.isDisabled&&Un.supportsFiber)try{Fs=Un.inject(xm),Nt=Un}catch{}}return et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pm,et.createPortal=function(e,r){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(r))throw Error(p(200));return cm(e,r,null,s)},et.createRoot=function(e,r){if(!Vl(e))throw Error(p(299));var s=!1,n="",a=Gd;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=Wl(e,1,!1,null,null,s,!1,n,a),e[Pt]=r.current,ms(e.nodeType===8?e.parentNode:e),new Ul(r)},et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=wo(r),e=e===null?null:e.stateNode,e},et.flushSync=function(e){return ur(e)},et.hydrate=function(e,r,s){if(!Wn(r))throw Error(p(200));return Bn(null,e,r,!0,s)},et.hydrateRoot=function(e,r,s){if(!Vl(e))throw Error(p(405));var n=s!=null&&s.hydratedSources||null,a=!1,l="",o=Gd;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onRecoverableError!==void 0&&(o=s.onRecoverableError)),r=Yd(r,null,e,1,s??null,a,!1,l,o),e[Pt]=r.current,ms(e),n)for(e=0;e<n.length;e++)s=n[e],a=s._getVersion,a=a(s._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[s,a]:r.mutableSourceEagerHydrationData.push(s,a);return new qn(r)},et.render=function(e,r,s){if(!Wn(r))throw Error(p(200));return Bn(null,e,r,!1,s)},et.unmountComponentAtNode=function(e){if(!Wn(e))throw Error(p(40));return e._reactRootContainer?(ur(function(){Bn(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1},et.unstable_batchedUpdates=_l,et.unstable_renderSubtreeIntoContainer=function(e,r,s,n){if(!Wn(s))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return Bn(e,r,s,!1,n)},et.version="18.3.1-next-f1338f8080-20240426",et}var ac;function km(){if(ac)return Jl.exports;ac=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(T){console.error(T)}}return y(),Jl.exports=wm(),Jl.exports}var lc;function Sm(){if(lc)return Vn;lc=1;var y=km();return Vn.createRoot=y.createRoot,Vn.hydrateRoot=y.hydrateRoot,Vn}var Cm=Sm();const Pm=y=>y instanceof Error?y.message+`
`+y.stack:JSON.stringify(y,null,2);class Em extends vm.Component{constructor(T){super(T),this.state={hasError:!1,error:null}}static getDerivedStateFromError(T){return{hasError:!0,error:T}}render(){return this.state.hasError?t.jsxs("div",{className:"p-4 border border-red-500 rounded",children:[t.jsx("h2",{className:"text-red-500",children:"Something went wrong."}),t.jsx("pre",{className:"mt-2 text-sm",children:Pm(this.state.error)})]}):this.props.children}}/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=y=>y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(y,T)=>{const p=U.forwardRef(({color:k="currentColor",size:S=24,strokeWidth:$=2,absoluteStrokeWidth:P,className:i="",children:f,...C},M)=>U.createElement("svg",{ref:M,...Tm,width:S,height:S,stroke:k,strokeWidth:P?Number($)*24/Number(S):$,className:["lucide",`lucide-${Mm(y)}`,i].join(" "),...C},[...T.map(([J,F])=>U.createElement(J,F)),...Array.isArray(f)?f:[f]]));return p.displayName=`${y}`,p};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=D("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=D("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=D("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=D("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=D("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=D("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=D("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=D("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=D("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=D("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=D("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=D("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=D("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=D("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=D("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=D("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=D("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=D("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=D("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=D("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=D("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=D("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=D("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=D("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=D("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=D("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=D("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=D("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=D("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=D("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=D("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=D("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=D("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=D("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=D("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=D("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=D("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=D("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=D("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=D("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=D("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=D("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=D("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=D("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=D("MousePointer",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=D("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=D("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=D("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=D("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=D("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=D("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=D("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=D("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=D("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=D("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=D("SquareFunction",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=D("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=D("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=D("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=D("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=D("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=D("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=D("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=D("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=D("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=D("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=D("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=D("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function B({initialCode:y,language:T="html",title:p="Code Editor"}){const[k,S]=U.useState(y),[$,P]=U.useState(""),[i,f]=U.useState(!1),[C,M]=U.useState(!1),[J,F]=U.useState("code");U.useEffect(()=>{S(y)},[y]);const ue=()=>{if(f(!0),F("preview"),T==="javascript")try{const R=[],Te={log:(...ae)=>R.push(ae.map(String).join(" ")),error:(...ae)=>R.push(`Error: ${ae.map(String).join(" ")}`),warn:(...ae)=>R.push(`Warning: ${ae.map(String).join(" ")}`)};new Function("console",k)(Te),setTimeout(()=>{P(R.length>0?R.join(`
`):"Code executed successfully! (no output)"),f(!1)},100)}catch(R){setTimeout(()=>{P(`Error: ${R instanceof Error?R.message:String(R)}`),f(!1)},100)}else setTimeout(()=>{P(k),f(!1)},100)},ne=()=>{S(y),P("")},re=()=>{navigator.clipboard.writeText(k),M(!0),setTimeout(()=>M(!1),2e3)};return t.jsxs("div",{className:"rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700",children:[t.jsxs("div",{className:"bg-gray-800 dark:bg-gray-900 px-4 py-2 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsxs("div",{className:"flex gap-1.5",children:[t.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),t.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),t.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"})]}),t.jsx("span",{className:"text-gray-400 text-sm ml-2",children:p})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>F("code"),className:`p-2 rounded-lg transition-colors ${J==="code"?"bg-gray-700 text-white":"text-gray-400 hover:text-white"}`,children:t.jsx(Wr,{className:"w-4 h-4"})}),t.jsx("button",{onClick:()=>F("preview"),className:`p-2 rounded-lg transition-colors ${J==="preview"?"bg-gray-700 text-white":"text-gray-400 hover:text-white"}`,children:t.jsx(hr,{className:"w-4 h-4"})}),t.jsx("button",{onClick:re,className:"p-2 rounded-lg text-gray-400 hover:text-white transition-colors",children:C?t.jsx(Om,{className:"w-4 h-4 text-green-500"}):t.jsx(Fm,{className:"w-4 h-4"})}),t.jsx("button",{onClick:ne,className:"p-2 rounded-lg text-gray-400 hover:text-white transition-colors",children:t.jsx(gc,{className:"w-4 h-4"})}),t.jsxs("button",{onClick:ue,disabled:i,className:"flex items-center gap-2 px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50",children:[t.jsx(Zn,{className:"w-4 h-4"}),"Run"]})]})]}),J==="code"?t.jsx("textarea",{value:k,onChange:R=>S(R.target.value),className:"w-full h-64 md:h-80 p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none",spellCheck:!1}):t.jsx("div",{className:"h-64 md:h-80 bg-white dark:bg-gray-800 p-4 overflow-auto",children:T==="html"?t.jsx("iframe",{srcDoc:k,className:"w-full h-full border-0",sandbox:"allow-scripts",title:"Preview"}):t.jsxs("div",{className:"font-mono text-sm",children:[t.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-2",children:[t.jsx(Kn,{className:"w-4 h-4"}),t.jsx("span",{children:"Output:"})]}),t.jsx("pre",{className:"text-gray-800 dark:text-gray-200 whitespace-pre-wrap",children:$||'Click "Run" to execute your code...'})]})}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-700 px-4 py-2 flex items-center justify-between text-sm",children:[t.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:T==="html"?"HTML + CSS + JavaScript":"JavaScript"}),t.jsxs("span",{className:"text-gray-500 dark:text-gray-400",children:[k.length," characters"]})]})]})}function tr({type:y,content:T,title:p,description:k}){const[S,$]=U.useState(!1);return t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden",children:[t.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-white",children:p}),k&&t.jsx("p",{className:"text-sm text-white/80 mt-1",children:k})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[y==="animation"&&t.jsx("button",{onClick:()=>$(!S),className:"p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors",children:S?t.jsx(tp,{className:"w-5 h-5 text-white"}):t.jsx(Zn,{className:"w-5 h-5 text-white"})}),t.jsx("button",{onClick:()=>$(!1),className:"p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors",children:t.jsx(gc,{className:"w-5 h-5 text-white"})})]})]})}),t.jsx("div",{className:`p-6 ${y==="animation"&&S?"animate-pulse":""}`,children:T}),t.jsxs("div",{className:"px-6 py-3 bg-gray-50 dark:bg-gray-700/50 flex items-center justify-between",children:[t.jsxs("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide",children:[y," Demo"]}),t.jsx(Ht,{className:"w-4 h-4 text-gray-400"})]})]})}function Oe({question:y,hint:T,solution:p,validationCode:k,onComplete:S}){const[$,P]=U.useState(""),[i,f]=U.useState(!1),[C,M]=U.useState(!1),[J,F]=U.useState(null),ue=()=>{if(!k){F("correct"),S==null||S();return}try{const ne=new Function(k.replace("{answer}",`"${$}"`))();F(ne?"correct":"incorrect"),ne&&(S==null||S())}catch{F("incorrect")}};return t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden",children:[t.jsx("div",{className:"bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center",children:t.jsx(Wr,{className:"w-6 h-6 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-white",children:"Practice Exercise"}),t.jsx("p",{className:"text-sm text-white/80",children:"Test your understanding"})]})]})}),t.jsxs("div",{className:"p-6 space-y-6",children:[t.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:t.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:y})}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Your Answer"}),t.jsx("textarea",{value:$,onChange:ne=>P(ne.target.value),className:"w-full p-4 bg-gray-900 text-gray-100 font-mono text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none",rows:4,placeholder:"Write your code or answer here..."})]}),J&&t.jsx("div",{className:`p-4 rounded-xl ${J==="correct"?"bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200":"bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"}`,children:t.jsxs("div",{className:"flex items-center gap-3",children:[J==="correct"?t.jsx(z,{className:"w-6 h-6"}):t.jsx(Zl,{className:"w-6 h-6"}),t.jsxs("div",{children:[t.jsx("p",{className:"font-bold",children:J==="correct"?"Correct!":"Not quite right"}),t.jsx("p",{className:"text-sm opacity-80",children:J==="correct"?"Great job! Move on to the next topic.":"Try again or check the hint for help."})]})]})}),t.jsxs("div",{className:"flex flex-wrap gap-3",children:[t.jsxs("button",{onClick:ue,className:"flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity",children:[t.jsx(z,{className:"w-5 h-5"}),"Check Answer"]}),T&&t.jsxs("button",{onClick:()=>f(!i),className:"flex items-center gap-2 px-4 py-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 font-medium rounded-xl hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors",children:[t.jsx(ic,{className:"w-5 h-5"}),i?"Hide Hint":"Show Hint"]}),p&&t.jsxs("button",{onClick:()=>M(!C),className:"flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",children:[t.jsx(hr,{className:"w-5 h-5"}),C?"Hide Solution":"Show Solution"]})]}),i&&T&&t.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4",children:t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx(ic,{className:"w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5"}),t.jsxs("div",{children:[t.jsx("p",{className:"font-medium text-yellow-800 dark:text-yellow-200 mb-1",children:"Hint"}),t.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm",children:T})]})]})}),C&&p&&t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4",children:[t.jsx("p",{className:"font-medium text-purple-800 dark:text-purple-200 mb-2",children:"Solution"}),t.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto",children:p})]})]})]})}function ce({questions:y,title:T="Knowledge Quiz",onComplete:p}){const[k,S]=U.useState(0),[$,P]=U.useState(null),[i,f]=U.useState(!1),[C,M]=U.useState(0),[J,F]=U.useState(!1),[ue,ne]=U.useState([]),re=ee=>{if($!==null)return;P(ee),f(!0);const X=[...ue,ee];ne(X),ee===y[k].correctAnswer&&M(C+1)},R=()=>{k<y.length-1?(S(k+1),P(null),f(!1)):(F(!0),p==null||p(C+($===y[k].correctAnswer,0)))},Te=()=>{S(0),P(null),f(!1),M(0),F(!1),ne([])},he=Math.round(C/y.length*100);if(J)return t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden",children:[t.jsxs("div",{className:`px-6 py-8 text-center ${he>=80?"bg-gradient-to-r from-green-500 to-emerald-600":he>=50?"bg-gradient-to-r from-yellow-500 to-orange-500":"bg-gradient-to-r from-red-500 to-pink-600"}`,children:[t.jsx(Ds,{className:"w-16 h-16 text-white mx-auto mb-4"}),t.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Quiz Complete!"}),t.jsxs("p",{className:"text-white/90 text-lg",children:["You scored ",C," out of ",y.length]})]}),t.jsxs("div",{className:"p-6 space-y-6",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"inline-flex items-center justify-center w-32 h-32 rounded-full bg-gray-100 dark:bg-gray-700 mb-4",children:t.jsxs("span",{className:`text-4xl font-bold ${he>=80?"text-green-600":he>=50?"text-yellow-600":"text-red-600"}`,children:[he,"%"]})}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:he>=80?"Excellent work!":he>=50?"Good effort!":"Keep practicing!"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"font-medium text-gray-800 dark:text-white",children:"Question Review"}),y.map((ee,X)=>t.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-lg ${ue[X]===ee.correctAnswer?"bg-green-50 dark:bg-green-900/20":"bg-red-50 dark:bg-red-900/20"}`,children:[ue[X]===ee.correctAnswer?t.jsx(z,{className:"w-5 h-5 text-green-600"}):t.jsx(Zl,{className:"w-5 h-5 text-red-600"}),t.jsxs("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Question ",X+1,": ",ue[X]===ee.correctAnswer?"Correct":"Incorrect"]})]},X))]}),t.jsx("button",{onClick:Te,className:"w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity",children:"Try Again"})]})]});const ae=y[k];return t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden",children:[t.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(dc,{className:"w-8 h-8 text-white"}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-white",children:T}),t.jsx("p",{className:"text-sm text-white/80",children:"Test your knowledge"})]})]}),t.jsxs("div",{className:"text-white text-right",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Progress"}),t.jsxs("p",{className:"font-bold",children:[k+1,"/",y.length]})]})]}),t.jsx("div",{className:"mt-4 bg-white/20 rounded-full h-2",children:t.jsx("div",{className:"bg-white rounded-full h-2 transition-all duration-300",style:{width:`${(k+1)/y.length*100}%`}})})]}),t.jsxs("div",{className:"p-6 space-y-6",children:[t.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:t.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium text-lg",children:ae.question})}),t.jsx("div",{className:"space-y-3",children:ae.options.map((ee,X)=>{let ve="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600";return $!==null&&(X===ae.correctAnswer?ve="bg-green-100 dark:bg-green-900/30 border-green-500":X===$&&(ve="bg-red-100 dark:bg-red-900/30 border-red-500")),t.jsx("button",{onClick:()=>re(X),disabled:$!==null,className:`w-full p-4 rounded-xl border-2 text-left transition-all ${ve}
                  ${$===null?"border-transparent":"border-2"}
                  ${$!==null&&X!==ae.correctAnswer&&X!==$?"opacity-50":""}
                `,children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${$!==null?X===ae.correctAnswer?"bg-green-500 text-white":X===$?"bg-red-500 text-white":"bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300":"bg-blue-500 text-white"}`,children:String.fromCharCode(65+X)}),t.jsx("span",{className:"text-gray-800 dark:text-gray-200",children:ee}),$!==null&&X===ae.correctAnswer&&t.jsx(z,{className:"w-5 h-5 text-green-600 ml-auto"}),$!==null&&X===$&&X!==ae.correctAnswer&&t.jsx(Zl,{className:"w-5 h-5 text-red-600 ml-auto"})]})},X)})}),i&&ae.explanation&&t.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4",children:t.jsxs("p",{className:"text-blue-800 dark:text-blue-200 text-sm",children:[t.jsx("strong",{children:"Explanation:"})," ",ae.explanation]})}),$!==null&&t.jsx("button",{onClick:R,className:"w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity",children:k<y.length-1?t.jsxs(t.Fragment,{children:["Next Question",t.jsx(Ht,{className:"w-5 h-5"})]}):t.jsxs(t.Fragment,{children:["See Results",t.jsx(Ds,{className:"w-5 h-5"})]})})]})]})}function dp({progress:y,updateProgress:T}){const[p,k]=U.useState("internet-basics"),S=i=>{T("chapter1",i,!0)},$={"internet-basics":{id:"internet-basics",title:"What is the Internet?",icon:t.jsx($s,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Understanding the Internet"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["The ",t.jsx("strong",{children:"Internet"}),' (sometimes called "the Net") is a ',t.jsx("strong",{children:"global system of interconnected computer networks"})," that use the standard Internet protocol suite (TCP/IP) to link billions of devices worldwide."]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Key Internet Facts:"}),t.jsxs("ul",{className:"space-y-2 text-blue-700 dark:text-blue-300",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"It's a network of networks - millions of private, public, academic, business, and government networks"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Linked by a broad array of electronic, wireless, and optical networking technologies"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"No centralized governance - each network sets its own policies"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Internet Services"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx(qr,{className:"w-4 h-4"})," World Wide Web"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"The most widely used part of the Internet - a system of information resources accessed through hypertext"})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx(jt,{className:"w-4 h-4"})," Communication"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Email, VoIP, Video Conferencing, IRC, and more"})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx(Gn,{className:"w-4 h-4"})," File Transfer"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"FTP, Gopher, and other protocols for sharing files"})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx(eo,{className:"w-4 h-4"})," Directory Services"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"DNS (Domain Name System), LDAP for network management"})]})]})]}),t.jsx(tr,{type:"diagram",title:"How the Internet Works",description:"Visual representation of internet connectivity",content:t.jsxs("div",{className:"flex flex-col items-center gap-6",children:[t.jsxs("div",{className:"flex items-center justify-center gap-4 flex-wrap",children:[t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-xl p-4 text-center w-32",children:[t.jsx(qr,{className:"w-8 h-8 text-blue-600 mx-auto mb-2"}),t.jsx("p",{className:"text-sm font-medium text-blue-800 dark:text-blue-200",children:"Your Computer"})]}),t.jsx("div",{className:"text-2xl text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-green-100 dark:bg-green-900/30 rounded-xl p-4 text-center w-32",children:[t.jsx(jt,{className:"w-8 h-8 text-green-600 mx-auto mb-2"}),t.jsx("p",{className:"text-sm font-medium text-green-800 dark:text-green-200",children:"Router"})]}),t.jsx("div",{className:"text-2xl text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-purple-100 dark:bg-purple-900/30 rounded-xl p-4 text-center w-32",children:[t.jsx($s,{className:"w-8 h-8 text-purple-600 mx-auto mb-2"}),t.jsx("p",{className:"text-sm font-medium text-purple-800 dark:text-purple-200",children:"Internet"})]}),t.jsx("div",{className:"text-2xl text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-orange-100 dark:bg-orange-900/30 rounded-xl p-4 text-center w-32",children:[t.jsx(jt,{className:"w-8 h-8 text-orange-600 mx-auto mb-2"}),t.jsx("p",{className:"text-sm font-medium text-orange-800 dark:text-orange-200",children:"Web Server"})]})]}),t.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 text-center max-w-md",children:"Data travels through multiple networks using standardized protocols until it reaches the destination server"})]})})]}),exercise:t.jsx(Oe,{question:"What is the main protocol suite that the Internet uses for communication?",hint:"Think about the two main protocols that work together: one for transport and one for addressing",solution:"TCP/IP (Transmission Control Protocol/Internet Protocol)"}),quiz:{questions:[{question:"What does the Internet use as its standard protocol suite?",options:["HTTP/HTTPS","TCP/IP","FTP/SMTP","All of the above"],correctAnswer:1,explanation:"TCP/IP (Transmission Control Protocol/Internet Protocol) is the foundational protocol suite of the Internet."},{question:"Which organization directs the technical standards of the Internet?",options:["ICANN","IETF","W3C","Both ICANN and IETF"],correctAnswer:3,explanation:"ICANN manages domain names while IETF standardizes core protocols like IPv4/IPv6."}]}},"www-basics":{id:"www-basics",title:"World Wide Web (WWW)",icon:t.jsx($s,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"World Wide Web"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["The ",t.jsx("strong",{children:"World Wide Web (WWW)"})," was created in 1991 by ",t.jsx("strong",{children:"Tim Berners-Lee"})," and his team. It introduced ",t.jsx("strong",{children:"hypertext"})," - a method of connecting content through hyperlinks that revolutionized information sharing."]}),t.jsxs("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"Key Innovation: Hypertext"}),t.jsx("p",{className:"text-white/90",children:'Hypertext allows you to click on words or phrases to instantly navigate to related content, creating a "web" of interconnected documents across the globe.'})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"How Web Browsing Works"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0",children:"1"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h5",{className:"font-bold text-gray-800 dark:text-white",children:"DNS Lookup"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Your browser asks the DNS server to convert a domain name (like google.com) into an IP address"})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0",children:"2"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h5",{className:"font-bold text-gray-800 dark:text-white",children:"TCP/IP Connection"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Your browser opens a TCP connection to the web server (typically on port 80)"})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0",children:"3"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h5",{className:"font-bold text-gray-800 dark:text-white",children:"HTTP Request"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Browser sends an HTTP request (like GET /index.html) to fetch the page"})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0",children:"4"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h5",{className:"font-bold text-gray-800 dark:text-white",children:"HTTP Response"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Server responds with HTML, CSS, JavaScript, and other resources"})]})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0",children:"5"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h5",{className:"font-bold text-gray-800 dark:text-white",children:"Rendering"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Browser renders the content on screen"})]})]})]})]}),t.jsx(tr,{type:"diagram",title:"Web Request Flow",description:"See how a web page is loaded step by step",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between gap-2",children:[t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx(qr,{className:"w-6 h-6 text-blue-600 mx-auto mb-1"}),t.jsx("p",{className:"text-xs font-medium text-blue-800 dark:text-blue-200",children:"Browser"})]}),t.jsx("div",{className:"text-blue-500 font-mono text-sm",children:"HTTP"}),t.jsx("div",{className:"bg-gray-200 dark:bg-gray-600 rounded-full px-2 py-1 text-xs",children:"→"})]}),t.jsxs("div",{className:"flex items-center justify-between gap-2",children:[t.jsxs("div",{className:"bg-yellow-100 dark:bg-yellow-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx(jt,{className:"w-6 h-6 text-yellow-600 mx-auto mb-1"}),t.jsx("p",{className:"text-xs font-medium text-yellow-800 dark:text-yellow-200",children:"DNS"})]}),t.jsx("div",{className:"text-yellow-500 font-mono text-sm",children:"IP"}),t.jsx("div",{className:"bg-gray-200 dark:bg-gray-600 rounded-full px-2 py-1 text-xs",children:"↓"})]}),t.jsxs("div",{className:"flex items-center justify-between gap-2",children:[t.jsxs("div",{className:"bg-green-100 dark:bg-green-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx(jt,{className:"w-6 h-6 text-green-600 mx-auto mb-1"}),t.jsx("p",{className:"text-xs font-medium text-green-800 dark:text-green-200",children:"Web Server"})]}),t.jsx("div",{className:"text-green-500 font-mono text-sm",children:"HTML"}),t.jsx("div",{className:"bg-gray-200 dark:bg-gray-600 rounded-full px-2 py-1 text-xs",children:"←"})]})]})})]})},tcpip:{id:"tcpip",title:"TCP/IP Protocol Suite",icon:t.jsx(eo,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"TCP/IP Protocol Suite"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"TCP/IP"})," is a set of protocols developed to allow cooperating computers to share resources across a network. It's the foundational technology of the Internet."]}),t.jsxs("div",{className:"bg-gradient-to-br from-green-400 to-blue-500 rounded-xl p-6 mb-6 text-white",children:[t.jsx("h4",{className:"font-bold mb-2",children:"TCP vs IP"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold mb-1",children:"IP (Internet Protocol)"}),t.jsx("p",{className:"text-sm",children:"Network Layer - Provides addressing and routing"})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold mb-1",children:"TCP (Transmission Control)"}),t.jsx("p",{className:"text-sm",children:"Transport Layer - Ensures reliable delivery"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"TCP/IP Layers"}),t.jsx("div",{className:"space-y-3",children:[{layer:"Application Layer",protocols:"HTTP, FTP, SMTP, DNS, Telnet",color:"red"},{layer:"Transport Layer",protocols:"TCP, UDP",color:"blue"},{layer:"Internet Layer",protocols:"IP, ICMP, ARP",color:"green"},{layer:"Network Interface",protocols:"Ethernet, Wi-Fi, PPP",color:"purple"}].map((i,f)=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-32 p-3 bg-${i.color}-100 dark:bg-${i.color}-900/30 rounded-lg`,children:t.jsx("p",{className:`text-sm font-bold text-${i.color}-800 dark:text-${i.color}-200`,children:i.layer})}),t.jsx("div",{className:"flex-1 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg",children:t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.protocols})})]},f))})]}),t.jsx(tr,{type:"diagram",title:"TCP/IP vs OSI Model",description:"Compare network protocol layers",content:t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h5",{className:"font-bold text-center text-gray-800 dark:text-white mb-2",children:"OSI Model"}),["Application","Presentation","Session","Transport","Network","Data Link","Physical"].map((i,f)=>t.jsx("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 text-center",children:t.jsx("p",{className:"text-xs font-medium text-blue-800 dark:text-blue-200",children:i})},f))]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h5",{className:"font-bold text-center text-gray-800 dark:text-white mb-2",children:"TCP/IP Model"}),["Application","Transport","Internet","Network Interface"].map((i,f)=>t.jsx("div",{className:"bg-green-100 dark:bg-green-900/30 rounded-lg p-2 text-center",children:t.jsx("p",{className:"text-xs font-medium text-green-800 dark:text-green-200",children:i})},f))]})]})})]})},http:{id:"http",title:"HTTP Protocol",icon:t.jsx(Jm,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"HTTP - Hypertext Transfer Protocol"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["HTTP is a ",t.jsx("strong",{children:"stateless protocol"})," that governs how browsers and servers communicate. Each request is independent - the server doesn't remember previous requests."]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"HTTP Methods"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[{method:"GET",desc:"Retrieve data from server",color:"green"},{method:"POST",desc:"Send data to server",color:"blue"},{method:"PUT",desc:"Update/replace data",color:"yellow"},{method:"DELETE",desc:"Remove data",color:"red"},{method:"HEAD",desc:"Get headers only",color:"gray"},{method:"PATCH",desc:"Partial update",color:"purple"}].map((i,f)=>t.jsxs("div",{className:"flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3",children:[t.jsx("span",{className:`px-2 py-1 bg-${i.color}-500 text-white text-xs font-bold rounded`,children:i.method}),t.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3 mt-6",children:"HTTP Status Codes"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3",children:[{range:"1xx",name:"Informational",example:"100 Continue",color:"gray"},{range:"2xx",name:"Success",example:"200 OK, 201 Created",color:"green"},{range:"3xx",name:"Redirection",example:"301 Moved, 304 Not Modified",color:"blue"},{range:"4xx",name:"Client Error",example:"404 Not Found, 400 Bad Request",color:"red"}].map((i,f)=>t.jsxs("div",{className:`bg-${i.color}-50 dark:bg-${i.color}-900/20 border border-${i.color}-200 dark:border-${i.color}-800 rounded-xl p-4`,children:[t.jsx("p",{className:`text-2xl font-bold text-${i.color}-600 dark:text-${i.color}-400`,children:i.range}),t.jsx("p",{className:"text-sm font-medium text-gray-800 dark:text-white",children:i.name}),t.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:i.example})]},f))})]}),t.jsx(B,{title:"HTTP Request Example",language:"javascript",initialCode:`// Simulating an HTTP GET request
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
console.log("Server: Apache/2.4"`}),t.jsx(ce,{questions:[{question:"Which HTTP status code indicates 'Page Not Found'?",options:["200 OK","301 Moved","404 Not Found","500 Internal Server Error"],correctAnswer:2,explanation:"404 is the standard response when the server cannot find the requested resource."},{question:"What type of protocol is HTTP?",options:["Stateful","Stateless","Connection-oriented only","Connectionless only"],correctAnswer:1,explanation:"HTTP is stateless - each request is independent and the server doesn't maintain session state."}]})]})},"dns-url":{id:"dns-url",title:"DNS and URLs",icon:t.jsx(Gn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Domain Name System (DNS)"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["DNS is like the ",t.jsx("strong",{children:"phonebook of the Internet"}),". It translates human-readable domain names (like google.com) into IP addresses (like 142.250.185.206) that computers use to identify each other."]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Why do we need DNS?"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300 mb-3",children:"Humans are better at remembering words than numbers. DNS makes the web easier to navigate."}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"flex-1 text-center p-3 bg-white dark:bg-gray-800 rounded-lg",children:[t.jsx("p",{className:"text-gray-500 text-sm mb-1",children:"Hard to remember"}),t.jsx("p",{className:"font-mono text-red-600",children:"192.68.20.50"})]}),t.jsx("div",{className:"text-2xl text-blue-500",children:"→"}),t.jsxs("div",{className:"flex-1 text-center p-3 bg-white dark:bg-gray-800 rounded-lg",children:[t.jsx("p",{className:"text-gray-500 text-sm mb-1",children:"Easy to remember"}),t.jsx("p",{className:"font-mono text-green-600",children:"www.example.com"})]})]})]}),t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8",children:"URL Structure"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"A URL (Uniform Resource Locator) tells browsers how to access a resource. Let's break down its components:"}),t.jsxs("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-6",children:[t.jsxs("p",{className:"font-mono text-lg mb-4 break-all",children:[t.jsx("span",{className:"bg-white/20 px-2 rounded",children:"http"}),"://",t.jsx("span",{className:"bg-white/20 px-2 rounded",children:"www.example.com"}),":",t.jsx("span",{className:"bg-white/20 px-2 rounded",children:"80"}),"/",t.jsx("span",{className:"bg-white/20 px-2 rounded",children:"path/page.html"}),"?",t.jsx("span",{className:"bg-white/20 px-2 rounded",children:"name=value"})]}),t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-2 text-sm",children:[t.jsxs("div",{children:[t.jsx("strong",{children:"http"})," = Protocol"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"www"})," = Subdomain"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"example.com"})," = Domain"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"80"})," = Port"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"/path"})," = Path"]})]})]})]}),t.jsx(tr,{type:"diagram",title:"DNS Resolution Process",description:"How domain names are converted to IP addresses",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3 text-center w-28",children:[t.jsx(qr,{className:"w-6 h-6 text-blue-600 mx-auto mb-1"}),t.jsx("p",{className:"text-xs font-medium text-blue-800 dark:text-blue-200",children:"User types URL"})]}),t.jsx(Xl,{className:"w-5 h-5 text-gray-400"}),t.jsx("div",{className:"bg-gray-100 dark:bg-gray-700 rounded-xl p-3 text-center flex-1",children:t.jsx("p",{className:"text-xs font-medium text-gray-600 dark:text-gray-400",children:"www.example.com"})})]}),t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"text-gray-400",children:"↓"})}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"bg-yellow-100 dark:bg-yellow-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx("p",{className:"text-xs font-bold text-yellow-800 dark:text-yellow-200",children:"Local DNS Resolver"}),t.jsx("p",{className:"text-xs text-yellow-600 dark:text-yellow-400",children:"Checks cache first"})]}),t.jsx("div",{className:"text-gray-400",children:"↓ (if not cached)"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"bg-green-100 dark:bg-green-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx("p",{className:"text-xs font-bold text-green-800 dark:text-green-200",children:"Root Server"}),t.jsx("p",{className:"text-xs text-green-600 dark:text-green-400",children:"Knows .com servers"})]}),t.jsx("div",{className:"text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-purple-100 dark:bg-purple-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx("p",{className:"text-xs font-bold text-purple-800 dark:text-purple-200",children:"TLD Server (.com)"}),t.jsx("p",{className:"text-xs text-purple-600 dark:text-purple-400",children:"Knows example.com"})]}),t.jsx("div",{className:"text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3 text-center flex-1",children:[t.jsx("p",{className:"text-xs font-bold text-blue-800 dark:text-blue-200",children:"Authoritative DNS"}),t.jsx("p",{className:"text-xs text-blue-600 dark:text-blue-400",children:"Returns IP"})]})]})]})})]})},"client-server":{id:"client-server",title:"Client-Server Architecture",icon:t.jsx(jt,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Client-Server Model"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["The Internet revolves around the ",t.jsx("strong",{children:"client-server architecture"}),". Your computer (client) runs software that interacts with servers located on remote computers."]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[t.jsxs("div",{className:"bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white",children:[t.jsx("h4",{className:"font-bold text-xl mb-3",children:"Client"}),t.jsxs("ul",{className:"space-y-2 text-blue-100",children:[t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(z,{className:"w-4 h-4"}),t.jsx("span",{children:"Browser (Chrome, Firefox, Safari)"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(z,{className:"w-4 h-4"}),t.jsx("span",{children:"Makes requests to servers"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(z,{className:"w-4 h-4"}),t.jsx("span",{children:"Displays responses to users"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(z,{className:"w-4 h-4"}),t.jsx("span",{children:"Runs on user's device"})]})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white",children:[t.jsx("h4",{className:"font-bold text-xl mb-3",children:"Server"}),t.jsxs("ul",{className:"space-y-2 text-purple-100",children:[t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(z,{className:"w-4 h-4"}),t.jsx("span",{children:"Apache, Nginx, IIS"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(z,{className:"w-4 h-4"}),t.jsx("span",{children:"Responds to client requests"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(z,{className:"w-4 h-4"}),t.jsx("span",{children:"Stores and processes data"})]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(z,{className:"w-4 h-4"}),t.jsx("span",{children:"Runs in data centers"})]})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Three Models of Web Architecture"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx("span",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs",children:"1"}),"Static HTML Pages"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Server sends pre-created HTML files. Content doesn't change unless developer modifies the files."}),t.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[t.jsx("span",{className:"bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded",children:"Browser"}),t.jsx("span",{children:"→"}),t.jsx("span",{className:"bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded",children:"Request HTML"}),t.jsx("span",{children:"→"}),t.jsx("span",{className:"bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded",children:"Server"}),t.jsx("span",{children:"→"}),t.jsx("span",{className:"bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded",children:"Response HTML"})]})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx("span",{className:"w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs",children:"2"}),"CGI/Server-Side Scripts"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Server processes code (PHP, Python, Ruby) to generate dynamic content based on user input."}),t.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[t.jsx("span",{className:"bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded",children:"User Query"}),t.jsx("span",{children:"→"}),t.jsx("span",{className:"bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded",children:"CGI Script"}),t.jsx("span",{children:"→"}),t.jsx("span",{className:"bg-green-200 dark:bg-green-800 px-2 py-1 rounded",children:"Dynamic HTML"})]})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("h5",{className:"font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2",children:[t.jsx("span",{className:"w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs",children:"3"}),"Full-Stack Applications"]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Modern apps with databases, APIs, client-side rendering, and real-time updates."})]})]})]}),t.jsx(tr,{type:"diagram",title:"Client-Server Communication",description:"Request-Response cycle",content:t.jsx("div",{className:"flex flex-col items-center gap-4",children:t.jsxs("div",{className:"flex items-center gap-8",children:[t.jsxs("div",{className:"text-center",children:[t.jsx(qr,{className:"w-16 h-16 text-blue-500 mx-auto mb-2"}),t.jsx("p",{className:"font-bold text-gray-800 dark:text-white",children:"Client (Browser)"}),t.jsx("p",{className:"text-xs text-gray-500",children:"HTTP Request"})]}),t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("div",{className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-sm",children:"GET /api/data HTTP/1.1"}),t.jsx("div",{className:"px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-sm",children:"HTTP/1.1 200 OK"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx(jt,{className:"w-16 h-16 text-purple-500 mx-auto mb-2"}),t.jsx("p",{className:"font-bold text-gray-800 dark:text-white",children:"Server"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Process & Respond"})]})]})})}),t.jsx(Oe,{question:"Which model would be best for a personal blog with rarely changing content?",hint:"Think about whether the content changes based on user input or stays the same for all visitors",solution:"Model 1 - Static HTML Pages would be most efficient for a personal blog"})]})},"web-security":{id:"web-security",title:"Web Security Basics",icon:t.jsx(ip,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Web Security Considerations"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Websites are always prone to security risks. Understanding common vulnerabilities helps you build more secure applications."}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{title:"SQL Injection",desc:"Attackers insert malicious SQL code into queries",color:"red",icon:"💉",prevention:"Use parameterized queries, input validation"},{title:"Cross-Site Scripting (XSS)",desc:"Injecting malicious scripts into web pages",color:"orange",icon:"⚠️",prevention:"Sanitize input, encode output, CSP headers"},{title:"CSRF",desc:"Tricking users into performing unintended actions",color:"yellow",icon:"🔄",prevention:"Use anti-CSRF tokens, SameSite cookies"},{title:"Man-in-the-Middle",desc:"Attackers intercept communication between parties",color:"purple",icon:"👤",prevention:"Use HTTPS, SSL/TLS encryption"}].map((i,f)=>t.jsxs("div",{className:`bg-${i.color}-50 dark:bg-${i.color}-900/20 border border-${i.color}-200 dark:border-${i.color}-800 rounded-xl p-4`,children:[t.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[t.jsx("span",{className:"text-2xl",children:i.icon}),t.jsx("h4",{className:`font-bold text-${i.color}-800 dark:text-${i.color}-200`,children:i.title})]}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:i.desc}),t.jsxs("p",{className:"text-xs font-medium text-gray-500",children:["Prevention: ",i.prevention]})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Best Practices"}),t.jsx("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 space-y-3",children:["Keep all software updated (servers, libraries, frameworks)","Validate data on both client-side AND server-side","Use strong password policies with hashing (bcrypt)","Implement rate limiting to prevent brute force attacks","Use HTTPS everywhere (SSL/TLS certificates)","Follow the principle of least privilege","Regular security audits and penetration testing"].map((i,f)=>t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx(z,{className:"w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"}),t.jsx("span",{className:"text-green-800 dark:text-green-200",children:i})]},f))})]}),t.jsx(ce,{questions:[{question:"What is SQL Injection?",options:["Flooding a server with requests","Inserting malicious SQL code into database queries","Intercepting network traffic","Stealing user passwords"],correctAnswer:1,explanation:"SQL Injection occurs when attackers insert malicious SQL code into queries, potentially gaining access to or destroying database data."},{question:"What does HTTPS provide that HTTP doesn't?",options:["Faster page loads","Better SEO","Encrypted communication","Better caching"],correctAnswer:2,explanation:"HTTPS uses SSL/TLS to encrypt data transmitted between the browser and server, protecting against eavesdropping and tampering."}]})]})}},P=Object.values($);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx($s,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 1: Introduction to Internet Programming"}),t.jsx("p",{className:"text-white/80",children:"Learn the fundamentals of the Internet, WWW, HTTP, TCP/IP, DNS, and client-server architecture"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:P.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:P.map((i,f)=>{const C=p===i.id,M=y[`chapter1-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${C?"border-blue-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>k(C?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${M?"bg-green-100 dark:bg-green-900/30 text-green-600":"bg-blue-100 dark:bg-blue-900/30 text-blue-600"}`,children:M?t.jsx(z,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",C?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),C?t.jsx(Br,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),C&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(ce,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!M&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(z,{className:"w-5 h-5"}),"Mark as Complete"]}),M&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(z,{className:"w-5 h-5"}),"Completed"]})]})]})]},i.id)})})]})}function cp({progress:y,updateProgress:T}){const[p,k]=U.useState("html-basics"),S=i=>{T("chapter2",i,!0)},$={"html-basics":{id:"html-basics",title:"HTML Basics & Document Structure",icon:t.jsx(cc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"What is HTML?"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"HTML (HyperText Markup Language)"})," is the standard markup language for creating web pages. It describes the structure of a web page using elements."]}),t.jsxs("div",{className:"bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"The Three Core Web Technologies"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold",children:"HTML"}),t.jsx("p",{className:"text-sm",children:"Structure"})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold",children:"CSS"}),t.jsx("p",{className:"text-sm",children:"Presentation"})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold",children:"JavaScript"}),t.jsx("p",{className:"text-sm",children:"Behavior"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"HTML Tags"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Tags are enclosed in angle brackets. Most tags have an opening and closing tag, but some are self-closing."}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-4",children:[t.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"<tagname>content</tagname>"}),t.jsx("p",{className:"text-green-600 dark:text-green-400 mt-2",children:"// Opening tag"}),t.jsx("p",{className:"text-green-600 dark:text-green-400",children:"content"}),t.jsx("p",{className:"text-red-600 dark:text-red-400",children:"</tagname> // Closing tag"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Basic HTML Structure"})]}),t.jsx(B,{title:"Your First HTML Page",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-blue-800 dark:text-blue-200 mb-2",children:"Understanding the Structure"}),t.jsxs("ul",{className:"space-y-2 text-blue-700 dark:text-blue-300 text-sm",children:[t.jsxs("li",{children:[t.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:"<!DOCTYPE html>"})," - Declares HTML5 document type"]}),t.jsxs("li",{children:[t.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:"<html>"})," - Root element of the page"]}),t.jsxs("li",{children:[t.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:"<head>"})," - Contains metadata (not visible)"]}),t.jsxs("li",{children:[t.jsx("code",{className:"bg-blue-100 dark:bg-blue-800 px-1 rounded",children:"<body>"})," - Contains visible content"]})]})]}),t.jsx(Oe,{question:"Write the HTML code to create a simple page with a heading 'Hello World' and a paragraph 'This is my first webpage.'",hint:"Remember to include DOCTYPE, html, head, body tags",solution:`<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is my first webpage.</p>
</body>
</html>`})]})},"text-formatting":{id:"text-formatting",title:"Text Formatting Tags",icon:t.jsx(ro,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Formatting Text in HTML"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"HTML provides various tags to format text - making it bold, italic, underlined, and more."}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mb-6",children:[{tag:"<h1> to <h6>",desc:"Headings"},{tag:"<p>",desc:"Paragraph"},{tag:"<br>",desc:"Line break"},{tag:"<hr>",desc:"Horizontal rule"},{tag:"<strong>",desc:"Bold (important)"},{tag:"<em>",desc:"Italic (emphasis)"},{tag:"<u>",desc:"Underline"},{tag:"<mark>",desc:"Highlighted"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3",children:[t.jsx("code",{className:"text-sm text-blue-600 dark:text-blue-400",children:i.tag}),t.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:i.desc})]},f))})]}),t.jsx(B,{title:"Text Formatting Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(tr,{type:"diagram",title:"Inline vs Block Elements",description:"Understanding how elements display",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl",children:[t.jsx("h5",{className:"font-bold text-blue-800 dark:text-blue-200 mb-2",children:"Block Elements"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Start on a new line, take full width"}),t.jsxs("div",{className:"border-2 border-blue-300 p-2",children:[t.jsx("div",{className:"bg-blue-200 p-2 text-center text-sm",children:"div"}),t.jsx("div",{className:"bg-blue-200 p-2 text-center text-sm mt-1",children:"p"}),t.jsx("div",{className:"bg-blue-200 p-2 text-center text-sm mt-1",children:"h1"})]})]}),t.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-xl",children:[t.jsx("h5",{className:"font-bold text-green-800 dark:text-green-200 mb-2",children:"Inline Elements"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Stay on same line, take only necessary width"}),t.jsxs("div",{className:"border-2 border-green-300 p-2",children:[t.jsx("span",{className:"bg-green-200 px-2 text-sm",children:"span"}),t.jsx("strong",{className:"bg-green-200 px-2 text-sm mx-1",children:"strong"}),t.jsx("em",{className:"bg-green-200 px-2 text-sm",children:"em"}),t.jsx("a",{className:"bg-green-200 px-2 text-sm mx-1",children:"a"})]})]})]})}),t.jsx(ce,{questions:[{question:"Which tag is used for the most important heading?",options:["<heading>","<h6>","<h1>","<head>"],correctAnswer:2,explanation:"<h1> defines the most important heading, while <h6> defines the least important."},{question:"What's the difference between <strong> and <b>?",options:["There's no difference","<strong> indicates importance, <b> is just visual styling","<b> is for larger text","<strong> is deprecated"],correctAnswer:1,explanation:"<strong> has semantic meaning (important text), while <b> is purely visual. Use <strong> for accessibility."}]})]})},"links-images":{id:"links-images",title:"Links and Images",icon:t.jsx(Qm,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Creating Links & Adding Images"}),t.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-white mb-3",children:"HTML Links (Anchor Tags)"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["Links are created using the ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"<a>"})," tag with the ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"href"})," attribute."]}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-blue-600",children:'<a href="url">Link Text</a>'}),t.jsx("p",{className:"text-gray-500 mt-2",children:"Target attributes:"}),t.jsx("p",{className:"text-green-600",children:"_self (default) - Same window"}),t.jsx("p",{className:"text-green-600",children:"_blank - New tab/window"})]})]}),t.jsx(B,{title:"Links Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-white mb-3",children:"HTML Images"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["Images are added using the ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"<img>"})," tag. It's a self-closing tag that requires the ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"src"})," (source) and ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"alt"})," (alternative text) attributes."]})]}),t.jsx(B,{title:"Images Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"Which attribute is required for the <img> tag?",options:["width","height","alt","title"],correctAnswer:2,explanation:"The alt attribute is required for accessibility and provides text if the image can't load."},{question:"What does target='_blank' do?",options:["Opens link in same tab","Opens link in a new tab or window","Closes the current page","Downloads the file"],correctAnswer:1,explanation:"target='_blank' opens the linked page in a new browser tab or window."}]})]})},lists:{id:"lists",title:"HTML Lists",icon:t.jsx(Km,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Creating Lists"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["HTML supports three types of lists: ",t.jsx("strong",{children:"ordered"}),", ",t.jsx("strong",{children:"unordered"}),", and ",t.jsx("strong",{children:"description"})," lists."]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-blue-800 dark:text-blue-200 mb-2",children:"Unordered List"}),t.jsx("p",{className:"text-sm text-blue-700 dark:text-blue-300 mb-2",children:"<ul> with <li>"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Bulleted points"})]}),t.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-green-800 dark:text-green-200 mb-2",children:"Ordered List"}),t.jsx("p",{className:"text-sm text-green-700 dark:text-green-300 mb-2",children:"<ol> with <li>"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Numbered points"})]}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-purple-800 dark:text-purple-200 mb-2",children:"Description List"}),t.jsx("p",{className:"text-sm text-purple-700 dark:text-purple-300 mb-2",children:"<dl>, <dt>, <dd>"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Term-definition pairs"})]})]})]}),t.jsx(B,{title:"Lists Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(Oe,{question:"Create an ordered list of steps to make a cup of tea: 1) Boil water, 2) Add tea leaves, 3) Pour hot water, 4) Wait 3 minutes, 5) Enjoy!",hint:"Use <ol> for ordered list and <li> for each item",solution:`<ol>
    <li>Boil water</li>
    <li>Add tea leaves</li>
    <li>Pour hot water</li>
    <li>Wait 3 minutes</li>
    <li>Enjoy!</li>
</ol>`})]})},tables:{id:"tables",title:"HTML Tables",icon:t.jsx(op,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Creating Tables"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Tables are used to display data in rows and columns. The main table elements are:"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-orange-600",children:"<table>"}),t.jsx("p",{className:"text-blue-600 ml-4",children:"<thead>"}),t.jsx("p",{className:"text-green-600 ml-8",children:"<tr>"}),t.jsx("p",{className:"text-purple-600 ml-12",children:"<th>Header</th>"}),t.jsx("p",{className:"text-green-600 ml-8",children:"</tr>"}),t.jsx("p",{className:"text-blue-600 ml-4",children:"</thead>"}),t.jsx("p",{className:"text-blue-600 ml-4",children:"<tbody>"}),t.jsx("p",{className:"text-green-600 ml-8",children:"<tr>"}),t.jsx("p",{className:"text-purple-600 ml-12",children:"<td>Data</td>"}),t.jsx("p",{className:"text-green-600 ml-8",children:"</tr>"}),t.jsx("p",{className:"text-blue-600 ml-4",children:"</tbody>"}),t.jsx("p",{className:"text-orange-600",children:"</table>"})]})]}),t.jsx(B,{title:"Tables Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"What tag is used for table header cells?",options:["<td>","<th>","<tr>","<thead>"],correctAnswer:1,explanation:"<th> defines header cells which are typically bold and centered by default."},{question:"What attribute merges cells horizontally?",options:["rowspan","colspan","cellspacing","cellpadding"],correctAnswer:1,explanation:"colspan merges cells horizontally, while rowspan merges them vertically."}]})]})},forms:{id:"forms",title:"HTML Forms",icon:t.jsx(qm,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"HTML Forms"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Forms are used to collect user input. They contain various form elements like text fields, checkboxes, radio buttons, and submit buttons."}),t.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-white mb-3",children:"Form Elements"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mb-6",children:[{tag:'<input type="text">',desc:"Text input"},{tag:'<input type="password">',desc:"Password"},{tag:'<input type="email">',desc:"Email input"},{tag:'<input type="checkbox">',desc:"Checkbox"},{tag:'<input type="radio">',desc:"Radio button"},{tag:"<select>",desc:"Dropdown"},{tag:"<textarea>",desc:"Multi-line text"},{tag:"<button>",desc:"Clickable button"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3",children:[t.jsx("code",{className:"text-xs text-blue-600 dark:text-blue-400",children:i.tag}),t.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:i.desc})]},f))})]}),t.jsx(B,{title:"Complete Form Example",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(Oe,{question:"Create a simple login form with fields for username, password, and a submit button",hint:"Use input types 'text' and 'password', and don't forget the form tags!",solution:`<form action="/login" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Login</button>
</form>`})]})},multimedia:{id:"multimedia",title:"HTML5 Multimedia",icon:t.jsx(Zn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Audio & Video in HTML5"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"HTML5 introduced native support for audio and video without needing plugins like Flash."}),t.jsxs("div",{className:"bg-gradient-to-r from-red-500 to-purple-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"Video Element"}),t.jsx("p",{className:"text-sm",children:"Supports MP4, WebM, and Ogg formats"})]}),t.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"Audio Element"}),t.jsx("p",{className:"text-sm",children:"Supports MP3, WAV, and Ogg formats"})]})]}),t.jsx(B,{title:"Multimedia Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"Which attribute enables video controls like play/pause?",options:["controls","autoplay","muted","loop"],correctAnswer:0,explanation:"The controls attribute adds video controls (play, pause, volume, etc.) to the video player."},{question:"What element is used to embed external web content?",options:["<video>","<audio>","<iframe>","<embed>"],correctAnswer:2,explanation:"<iframe> is used to embed external content like YouTube videos, Google Maps, or other web pages."}]})]})},semantic:{id:"semantic",title:"Semantic HTML",icon:t.jsx(xc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Semantic HTML Elements"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Semantic HTML elements clearly describe their meaning to both the browser and the developer. They improve accessibility and SEO."}),t.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-yellow-800 dark:text-yellow-200 mb-3",children:"Why Semantic HTML?"}),t.jsxs("ul",{className:"space-y-2 text-yellow-700 dark:text-yellow-300",children:[t.jsx("li",{children:"✅ Better accessibility for screen readers"}),t.jsx("li",{children:"✅ Improved SEO (Search Engine Optimization)"}),t.jsx("li",{children:"✅ Easier to maintain and understand code"}),t.jsx("li",{children:"✅ Standardized structure across websites"})]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{tag:"<header>",desc:"Introductory content or navigation links"},{tag:"<nav>",desc:"Navigation links section"},{tag:"<main>",desc:"Main content of the document"},{tag:"<article>",desc:"Self-contained content"},{tag:"<section>",desc:"Thematic grouping of content"},{tag:"<aside>",desc:"Content aside from main content"},{tag:"<footer>",desc:"Footer for a section or page"},{tag:"<figure>",desc:"Self-contained content (images, diagrams)"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3",children:[t.jsx("code",{className:"text-sm text-blue-600 dark:text-blue-400",children:i.tag}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:i.desc})]},f))})]}),t.jsx(B,{title:"Semantic HTML Structure",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(Oe,{question:"Convert this non-semantic HTML to semantic HTML using appropriate semantic tags: A div with id='header' containing navigation links, a div with id='main' containing articles, and a div with id='footer' containing copyright info.",hint:"Think about which semantic tags describe the purpose of each section",solution:`<header>
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
</footer>`})]})}},P=Object.values($);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx(Wr,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 2: HTML Fundamentals"}),t.jsx("p",{className:"text-white/80",children:"Master HTML tags, elements, forms, tables, lists, images, and multimedia content"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:P.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:P.map((i,f)=>{const C=p===i.id,M=y[`chapter2-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${C?"border-orange-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>k(C?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${M?"bg-green-100 dark:bg-green-900/30 text-green-600":"bg-orange-100 dark:bg-orange-900/30 text-orange-600"}`,children:M?t.jsx(z,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",C?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),C?t.jsx(Br,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),C&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(ce,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!M&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(z,{className:"w-5 h-5"})," Mark as Complete"]}),M&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(z,{className:"w-5 h-5"})," Completed"]})]})]})]},i.id)})})]})}function up({progress:y,updateProgress:T}){const[p,k]=U.useState("js-intro"),S=i=>{T("chapter3",i,!0)},$={"js-intro":{id:"js-intro",title:"Introduction to JavaScript",icon:t.jsx(Kn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"What is JavaScript?"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"JavaScript"})," is the programming language of the Web. It can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data."]}),t.jsxs("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"The Three Core Web Technologies"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg p-3",children:[t.jsx("p",{className:"font-bold",children:"HTML"}),t.jsx("p",{className:"text-sm",children:"Structure"})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-3",children:[t.jsx("p",{className:"font-bold",children:"CSS"}),t.jsx("p",{className:"text-sm",children:"Presentation"})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-3",children:[t.jsx("p",{className:"font-bold",children:"JavaScript"}),t.jsx("p",{className:"text-sm",children:"Behavior"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"JavaScript Can:"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:["Change HTML content dynamically","Change HTML attributes","Change HTML styles (CSS)","Show and hide HTML elements","Validate user input","Create interactive web applications"].map((i,f)=>t.jsxs("div",{className:"flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3",children:[t.jsx(z,{className:"w-5 h-5 text-green-600 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 dark:text-gray-300 text-sm",children:i})]},f))})]}),t.jsx(B,{title:"Your First JavaScript",language:"javascript",initialCode:`// JavaScript can output content in different ways
console.log("Hello, World!");

// Change HTML content
document.getElementById("demo").innerHTML = "Hello JavaScript!";

// Show an alert
alert("Welcome to JavaScript!");

// Write directly to document
document.write("This was written by JavaScript");

// Output styling
document.body.style.backgroundColor = "lightblue";`}),t.jsx(Oe,{question:"Write JavaScript code that outputs 'I am learning JavaScript' to the console and displays an alert saying 'Hello!'",hint:"Use console.log() for console output and alert() for popup messages",solution:`console.log("I am learning JavaScript");
alert("Hello!");`})]})},"js-variables":{id:"js-variables",title:"Variables and Data Types",icon:t.jsx(yc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Variables"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["Variables are containers for storing data values. In JavaScript, we use ",t.jsx("code",{children:"var"}),", ",t.jsx("code",{children:"let"}),", and ",t.jsx("code",{children:"const"})," to declare variables."]}),t.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-6",children:t.jsxs("div",{className:"space-y-3 font-mono text-sm",children:[t.jsxs("div",{className:"p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg",children:[t.jsxs("p",{className:"text-blue-800 dark:text-blue-200",children:[t.jsx("strong",{children:"let"})," - Block-scoped, can be reassigned"]}),t.jsx("p",{className:"text-blue-600 dark:text-blue-400 text-xs",children:'let name = "John";'})]}),t.jsxs("div",{className:"p-3 bg-green-100 dark:bg-green-900/30 rounded-lg",children:[t.jsxs("p",{className:"text-green-800 dark:text-green-200",children:[t.jsx("strong",{children:"const"})," - Block-scoped, cannot be reassigned"]}),t.jsx("p",{className:"text-green-600 dark:text-green-400 text-xs",children:"const PI = 3.14159;"})]}),t.jsxs("div",{className:"p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg",children:[t.jsxs("p",{className:"text-yellow-800 dark:text-yellow-200",children:[t.jsx("strong",{children:"var"})," - Function-scoped, older way (avoid)"]}),t.jsx("p",{className:"text-yellow-600 dark:text-yellow-400 text-xs",children:'var oldWay = "legacy";'})]})]})}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Data Types"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[{type:"String",example:`"Hello" or 'Hi'`,color:"blue"},{type:"Number",example:"42, 3.14, -10",color:"green"},{type:"Boolean",example:"true, false",color:"purple"},{type:"Undefined",example:"let x; // undefined",color:"red"},{type:"Null",example:"let empty = null",color:"orange"},{type:"Object",example:'{name: "John"}',color:"pink"},{type:"Array",example:"[1, 2, 3]",color:"cyan"},{type:"Symbol",example:'Symbol("id")',color:"indigo"}].map((i,f)=>t.jsxs("div",{className:`bg-${i.color}-50 dark:bg-${i.color}-900/20 border border-${i.color}-200 dark:border-${i.color}-800 rounded-xl p-4`,children:[t.jsx("p",{className:`font-bold text-${i.color}-800 dark:text-${i.color}-200`,children:i.type}),t.jsx("code",{className:`text-xs text-${i.color}-600 dark:text-${i.color}-400`,children:i.example})]},f))})]}),t.jsx(B,{title:"Variables Demo",language:"javascript",initialCode:`// Declaring variables
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
console.log(typeof fruits);    // object (arrays are objects)`}),t.jsx(ce,{questions:[{question:"Which keyword should you use to declare a constant that won't change?",options:["var","let","const","static"],correctAnswer:2,explanation:"const declares a constant that cannot be reassigned after initialization."},{question:"What is the typeof [] (empty array)?",options:["array","object","undefined","null"],correctAnswer:1,explanation:"In JavaScript, arrays are technically objects, so typeof [] returns 'object'."}]})]})},"js-operators":{id:"js-operators",title:"Operators",icon:t.jsx(Um,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Operators"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Arithmetic Operators"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"+ Addition"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"- Subtraction"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"* Multiplication"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"/ Division"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"% Modulus (remainder)"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"** Exponentiation"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"++ Increment"}),t.jsx("p",{className:"text-blue-700 dark:text-blue-300",children:"-- Decrement"})]})]}),t.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-green-800 dark:text-green-200 mb-3",children:"Comparison Operators"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"== Equal (value)"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"=== Strict equal (value + type)"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"!= Not equal (value)"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"!== Strict not equal"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"> Greater than"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"< Less than"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:">= Greater or equal"}),t.jsx("p",{className:"text-green-700 dark:text-green-300",children:"<= Less or equal"})]})]})]})]}),t.jsx(B,{title:"Operators Demo",language:"javascript",initialCode:`// Arithmetic Operators
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
console.log(\`Hello, \${firstName} \${lastName}!\`);`}),t.jsx(Oe,{question:"Calculate and print: 1) The area of a circle with radius 7 (use PI * r^2), 2) Check if 10 is greater than 5, 3) Use a ternary operator to check if a number is positive or negative",hint:"Use Math.PI for PI and Math.pow() or ** for exponentiation",solution:`// Circle area
let radius = 7;
let area = Math.PI * radius ** 2;
console.log("Area:", area);

// Comparison
console.log("10 > 5:", 10 > 5);

// Ternary
let number = -5;
let result = number >= 0 ? "Positive" : "Negative";
console.log("Number is:", result);`})]})},"js-conditionals":{id:"js-conditionals",title:"Conditional Statements",icon:t.jsx(uc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Conditional Statements"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Conditional statements are used to perform different actions based on different conditions."}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-3",children:"Types of Conditionals"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-purple-600",children:"if"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Executes code if condition is true"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-purple-600",children:"else"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Executes code if condition is false"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-purple-600",children:"else if"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Tests multiple conditions"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-purple-600",children:"switch"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Selects from multiple code blocks"})]})]})]})]}),t.jsx(B,{title:"Conditionals Demo",language:"javascript",initialCode:`// If...Else Statement
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
console.log("Boolean([]):", Boolean([]));       // true`}),t.jsx(ce,{questions:[{question:"What keyword is used to check an additional condition in an if...else chain?",options:["elseif","else if","elsif","default"],correctAnswer:1,explanation:"In JavaScript, it's written as 'else if' (two words), not 'elseif' like in PHP."},{question:"Which value is NOT falsy in JavaScript?",options:["0",'""','"false"',"null"],correctAnswer:2,explanation:'"false" is a non-empty string, which is truthy. 0, empty string, and null are all falsy values.'}]})]})},"js-loops":{id:"js-loops",title:"Loops",icon:t.jsx(hc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Loops"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Loops can execute a block of code a number of times. They are handy when you want to run the same code over and over again."}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{name:"for",desc:"Loop through code a specific number of times"},{name:"for...in",desc:"Loop through object properties"},{name:"for...of",desc:"Loop through array elements"},{name:"while",desc:"Loop while a condition is true"},{name:"do...while",desc:"Execute at least once, then loop"},{name:"break/continue",desc:"Control loop execution"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("p",{className:"font-mono font-bold text-blue-600 dark:text-blue-400",children:i.name}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]},f))})]}),t.jsx(B,{title:"Loops Demo",language:"javascript",initialCode:`// For Loop
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
console.log("Sum:", sum);`}),t.jsx(Oe,{question:"Write a loop that prints the first 10 numbers of the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)",hint:"Each number is the sum of the two preceding ones: F(n) = F(n-1) + F(n-2)",solution:`let a = 0, b = 1;
console.log(a);
console.log(b);

for (let i = 2; i < 10; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}`})]})},"js-functions":{id:"js-functions",title:"Functions",icon:t.jsx(fc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Functions"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"A function is a block of code designed to perform a particular task. It is executed when something invokes (calls) it."}),t.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-indigo-800 dark:text-indigo-200 mb-3",children:"Function Declaration Types"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-indigo-600 text-sm mb-2",children:"Function Declaration"}),t.jsxs("code",{className:"text-xs text-gray-600 dark:text-gray-400",children:["function name(params) ","{","...","}"]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-indigo-600 text-sm mb-2",children:"Function Expression"}),t.jsxs("code",{className:"text-xs text-gray-600 dark:text-gray-400",children:["const name = function()","{","...","}"]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-indigo-600 text-sm mb-2",children:"Arrow Function"}),t.jsx("code",{className:"text-xs text-gray-600 dark:text-gray-400",children:"const name = () => {...}"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3",children:[t.jsx("p",{className:"font-mono text-indigo-600 text-sm mb-2",children:"IIFE"}),t.jsxs("code",{className:"text-xs text-gray-600 dark:text-gray-400",children:["(function()","{","...","}",")()"]})]})]})]})]}),t.jsx(B,{title:"Functions Demo",language:"javascript",initialCode:`// Function Declaration
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
console.log("Counter:", counter()); // 3`}),t.jsx(ce,{questions:[{question:"What is a closure in JavaScript?",options:["A way to end a function","A function that has access to variables from its outer scope","A type of loop","A method to import code"],correctAnswer:1,explanation:"A closure is a function that has access to its outer scope's variables even after the outer function has returned."},{question:"What is the main difference between let and var in function scope?",options:["No difference","let is block-scoped, var is function-scoped","var is faster","let cannot be reassigned"],correctAnswer:1,explanation:"let is block-scoped (only available within {}), while var is function-scoped (available throughout the function)."}]})]})},"js-arrays":{id:"js-arrays",title:"Arrays",icon:t.jsx(Gm,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Arrays"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Arrays are used to store multiple values in a single variable. They are zero-indexed, meaning the first element is at position 0."}),t.jsxs("div",{className:"bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-cyan-800 dark:text-cyan-200 mb-3",children:"Array Methods"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2 text-sm",children:["push()","pop()","shift()","unshift()","slice()","splice()","concat()","join()","indexOf()","includes()","find()","filter()","map()","reduce()","sort()","reverse()"].map((i,f)=>t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded text-cyan-600 dark:text-cyan-400",children:i},f))})]})]}),t.jsx(B,{title:"Arrays Demo",language:"javascript",initialCode:`// Creating Arrays
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
console.log("Copy:", copy);`}),t.jsx(Oe,{question:"Given an array of scores [85, 92, 78, 95, 88], find the average score",hint:"Use reduce to sum all values, then divide by array length",solution:`const scores = [85, 92, 78, 95, 88];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Average score:", average);`})]})},"js-objects":{id:"js-objects",title:"Objects",icon:t.jsx(Dm,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Objects"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Objects are collections of key-value pairs. They are used to store related data and functionality."}),t.jsxs("div",{className:"bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-pink-800 dark:text-pink-200 mb-3",children:"Object Properties"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-pink-600",children:["const person = ","{"]}),t.jsx("p",{className:"text-pink-600 ml-4",children:'name: "John",'}),t.jsx("p",{className:"text-pink-600 ml-4",children:"age: 30,"}),t.jsx("p",{className:"text-pink-600 ml-4",children:"isStudent: false,"}),t.jsxs("p",{className:"text-pink-600 ml-4",children:["greet: function() ","{","...","}"]}),t.jsx("p",{className:"text-pink-600",children:"}"})]})]})]}),t.jsx(B,{title:"Objects Demo",language:"javascript",initialCode:`// Creating Objects
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
console.log(dog.speak());`}),t.jsx(ce,{questions:[{question:"What is the correct way to access a property named 'first-name' from an object?",options:["obj.first-name",'obj["first-name"]',"obj.firstName","Both B and C"],correctAnswer:1,explanation:'When property names contain hyphens or start with numbers, you must use bracket notation: obj["first-name"].'},{question:"What does the Object.freeze() method do?",options:["Deletes all object properties","Prevents modifications to object properties","Creates a copy of the object","Converts object to array"],correctAnswer:1,explanation:"Object.freeze() makes an object immutable - you cannot add, remove, or modify its properties."}]})]})}},P=Object.values($);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx(Kn,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 3: JavaScript Basics"}),t.jsx("p",{className:"text-white/80",children:"Learn JavaScript fundamentals: variables, operators, conditionals, loops, functions, and arrays"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:P.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:P.map((i,f)=>{const C=p===i.id,M=y[`chapter3-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${C?"border-yellow-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>k(C?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${M?"bg-green-100 dark:bg-green-900/30 text-green-600":"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600"}`,children:M?t.jsx(z,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",C?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),C?t.jsx(Br,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),C&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(ce,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!M&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(z,{className:"w-5 h-5"})," Mark as Complete"]}),M&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(z,{className:"w-5 h-5"})," Completed"]})]})]})]},i.id)})})]})}function mp({progress:y,updateProgress:T}){const[p,k]=U.useState("dom-intro"),S=i=>{T("chapter4",i,!0)},$={"dom-intro":{id:"dom-intro",title:"The DOM (Document Object Model)",icon:t.jsx(Wr,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"What is the DOM?"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["The ",t.jsx("strong",{children:"DOM (Document Object Model)"})," is a programming interface for HTML documents. It represents the page so that programs can change the document structure, style, and content."]}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-3",children:"DOM Tree Structure"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsx("p",{className:"text-gray-500",children:"document"}),t.jsx("p",{className:"text-gray-500 ml-4",children:"└── html"}),t.jsx("p",{className:"text-gray-500 ml-8",children:"├── head"}),t.jsx("p",{className:"text-gray-500 ml-12",children:"└── title"}),t.jsx("p",{className:"text-gray-500 ml-8",children:"└── body"}),t.jsx("p",{className:"text-gray-500 ml-12",children:"├── h1"}),t.jsx("p",{className:"text-gray-500 ml-12",children:"└── p"})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Selecting DOM Elements"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[{method:"getElementById()",desc:"Select by ID",example:'getElementById("myId")'},{method:"getElementsByClassName()",desc:"Select by class",example:'getElementsByClassName("myClass")'},{method:"getElementsByTagName()",desc:"Select by tag",example:'getElementsByTagName("p")'},{method:"querySelector()",desc:"Select first match",example:'querySelector(".myClass")'},{method:"querySelectorAll()",desc:"Select all matches",example:'querySelectorAll("div p")'}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("p",{className:"font-mono text-purple-600 dark:text-purple-400",children:i.method}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc}),t.jsx("code",{className:"text-xs text-blue-600 dark:text-blue-400",children:i.example})]},f))})]}),t.jsx(B,{title:"DOM Manipulation Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>DOM Demo</title>
    <style>
        .highlight { background: yellow; padding: 10px; }
        .big { font-size: 24px; font-weight: bold; }
        .hidden { display: none; }
    </style>
</head>
<body>
    <h1 id="title">DOM Manipulation</h1>
    <p class="description">Learn how to manipulate HTML elements</p>
    <div id="content">
        <p>First paragraph</p>
        <p>Second paragraph</p>
    </div>
    <button onclick="changeContent()">Change Content</button>
    <button onclick="addStyle()">Add Style</button>
    <button onclick="createElement()">Create Element</button>
    <button onclick="removeElement()">Remove Element</button>

    <script>
        function changeContent() {
            // Change text content
            document.getElementById("title").textContent = "DOM Changed!";

            // Change HTML content
            document.querySelector(".description").innerHTML = "Content <em>modified</em>!";
        }

        function addStyle() {
            const title = document.getElementById("title");
            title.classList.add("highlight", "big");
        }

        function createElement() {
            const newP = document.createElement("p");
            newP.textContent = "New paragraph added!";
            newP.style.color = "green";
            document.getElementById("content").appendChild(newP);
        }

        function removeElement() {
            const content = document.getElementById("content");
            if (content.lastElementChild.tagName === "P") {
                content.removeChild(content.lastElementChild);
            }
        }
    <\/script>
</body>
</html>`}),t.jsx(ce,{questions:[{question:"Which method selects all elements with a specific class name?",options:["getElementById()","getElementsByClassName()","querySelector()","getElementByTag()"],correctAnswer:1,explanation:"getElementsByClassName() returns a collection of elements with the specified class name."},{question:"What is the difference between textContent and innerHTML?",options:["No difference","textContent sets plain text, innerHTML can set HTML tags","textContent is faster","innerHTML is deprecated"],correctAnswer:1,explanation:"textContent treats the value as plain text, while innerHTML parses and renders HTML tags."}]})]})},events:{id:"events",title:"JavaScript Events",icon:t.jsx(pc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Events"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Events are actions that happen in the browser - clicking a button, hovering over text, submitting a form. JavaScript can respond to these events."}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{category:"Mouse",events:["click","dblclick","mouseenter","mouseleave","mousemove"]},{category:"Keyboard",events:["keydown","keyup","keypress"]},{category:"Form",events:["submit","change","input","focus","blur"]},{category:"Document",events:["DOMContentLoaded","load","resize","scroll"]}].map((i,f)=>t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-2",children:i.category}),t.jsx("div",{className:"flex flex-wrap gap-1",children:i.events.map((C,M)=>t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs text-blue-600 dark:text-blue-400",children:C},M))})]},f))})]}),t.jsx(B,{title:"Events Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>Events Demo</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background: #3498db;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px auto;
            border-radius: 10px;
            transition: all 0.3s;
        }
        .box:hover {
            background: #2ecc71;
            transform: scale(1.05);
        }
        .input-group { margin: 20px; }
        input { padding: 10px; border: 2px solid #ddd; border-radius: 5px; }
        input:focus { border-color: #3498db; outline: none; }
    </style>
</head>
<body>
    <h1 style="text-align:center;">JavaScript Events</h1>

    <!-- Mouse Events -->
    <div class="box" id="box">
        Hover or click me!
    </div>
    <p id="eventOutput" style="text-align:center;">Event: none</p>

    <!-- Form Events -->
    <div class="input-group" style="text-align:center;">
        <input type="text" id="nameInput" placeholder="Type your name...">
        <p id="inputStatus">Characters: 0</p>
    </div>

    <form id="myForm" style="text-align:center; margin:20px;">
        <input type="email" id="emailInput" placeholder="Enter email">
        <button type="submit">Submit</button>
    </form>
    <p id="formMessage" style="text-align:center;"></p>

    <script>
        // Mouse Events
        const box = document.getElementById("box");
        const output = document.getElementById("eventOutput");

        box.addEventListener("click", function() {
            output.textContent = "Event: clicked!";
            this.style.background = "#e74c3c";
        });

        box.addEventListener("dblclick", function() {
            output.textContent = "Event: double-clicked!";
            this.style.background = "#9b59b6";
        });

        box.addEventListener("mouseenter", function() {
            output.textContent = "Event: mouse entered";
        });

        box.addEventListener("mouseleave", function() {
            output.textContent = "Event: mouse left";
            this.style.background = "#3498db";
        });

        // Keyboard Events
        const nameInput = document.getElementById("nameInput");
        const inputStatus = document.getElementById("inputStatus");

        nameInput.addEventListener("input", function() {
            inputStatus.textContent = "Characters: " + this.value.length;
        });

        nameInput.addEventListener("focus", function() {
            this.style.boxShadow = "0 0 10px #3498db";
        });

        nameInput.addEventListener("blur", function() {
            this.style.boxShadow = "none";
        });

        // Form Events
        const form = document.getElementById("myForm");
        const formMessage = document.getElementById("formMessage");

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            formMessage.textContent = "Form submitted!";
            formMessage.style.color = "green";
        });

        // Event Object
        document.addEventListener("keydown", function(event) {
            console.log("Key pressed:", event.key);
        });
    <\/script>
</body>
</html>`}),t.jsx(Oe,{question:"Create a button that counts how many times it has been clicked and displays the count",hint:"Use a variable to store the count and increment it on each click event",solution:`let count = 0;
const button = document.getElementById("myButton");
const display = document.getElementById("countDisplay");

button.addEventListener("click", function() {
    count++;
    display.textContent = "Clicked " + count + " times";
});`})]})},"string-methods":{id:"string-methods",title:"String Methods",icon:t.jsx(ro,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript String Methods"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:[{method:"length",desc:"Returns string length",example:'"hello".length // 5'},{method:"slice(start, end)",desc:"Extract portion",example:'"hello".slice(1,4) // "ell"'},{method:"substring(start, end)",desc:"Like slice, no negatives",example:'"hello".substring(1,4)'},{method:"replace(old, new)",desc:"Replace text",example:'"hi".replace("hi","hello")'},{method:"toUpperCase()",desc:"Convert to uppercase",example:'"hello".toUpperCase()'},{method:"toLowerCase()",desc:"Convert to lowercase",example:'"HELLO".toLowerCase()'},{method:"trim()",desc:"Remove whitespace",example:'" hello ".trim()'},{method:"split(separator)",desc:"Split into array",example:'"a,b".split(",")'}].map((i,f)=>t.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-3",children:[t.jsx("p",{className:"font-mono text-green-600 dark:text-green-400",children:i.method}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc}),t.jsx("code",{className:"text-xs text-blue-600 dark:text-blue-400",children:i.example})]},f))})]}),t.jsx(B,{title:"String Methods Demo",language:"javascript",initialCode:`// String Methods
let text = "   Hello, World!   ";

console.log("=== Basic Methods ===");
console.log("Length:", text.length);
console.log("Trimmed:", text.trim());
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// Extracting
console.log("\\n=== Extracting ===");
console.log("charAt(0):", text.charAt(0));
console.log("charCodeAt(0):", text.charCodeAt(0));
console.log("slice(0, 5):", text.slice(0, 5));
console.log("substring(0, 5):", text.substring(0, 5));

// Searching
console.log("\\n=== Searching ===");
let sentence = "The quick brown fox jumps over the lazy dog";
console.log("indexOf('fox'):", sentence.indexOf("fox"));
console.log("lastIndexOf('the'):", sentence.lastIndexOf("the"));
console.log("includes('quick'):", sentence.includes("quick"));
console.log("startsWith('The'):", sentence.startsWith("The"));
console.log("endsWith('dog'):", sentence.endsWith("dog"));

// Modifying
console.log("\\n=== Modifying ===");
console.log("replace():", "hello world".replace("world", "JavaScript"));
console.log("replaceAll():", "hello hello hello".replaceAll("hello", "hi"));
console.log("concat():", "Hello".concat(" ", "World"));
console.log("padStart():", "5".padStart(3, "0"));
console.log("padEnd():", "5".padEnd(3, "0"));

// Split and Join
console.log("\\n=== Split/Join ===");
let csv = "apple,banana,orange";
let fruits = csv.split(",");
console.log("Split:", fruits);

let words = ["Hello", "World"];
console.log("Join:", words.join(" "));

// Template Literals
console.log("\\n=== Template Literals ===");
let name = "Alice";
let age = 25;
let city = "New York";

// Old way
console.log("Old way: My name is " + name + " and I am " + age + " years old.");

// Template literal (preferred)
console.log(\`Template: My name is \${name} and I am \${age} years old.\`);
console.log(\`Multiline:
First line
Second line
Third line\`);

// Expression interpolation
console.log(\`Math: 2 + 3 = \${2 + 3}\`);
console.log(\`Is adult: \${age >= 18 ? "Yes" : "No"}\`);`}),t.jsx(ce,{questions:[{question:"What does the split() method return?",options:["String","Array","Object","Number"],correctAnswer:1,explanation:"split() divides a string into an array of substrings based on the separator."},{question:"What's the difference between slice() and substring()?",options:["No difference","slice() can use negative indices, substring() cannot","substring() is faster","slice() returns first occurrence"],correctAnswer:1,explanation:"slice() allows negative indices (counts from end), while substring() treats negative values as 0."}]})]})},"date-math":{id:"date-math",title:"Date and Math Objects",icon:t.jsx(Hm,{className:"w-5 h-5"}),content:t.jsx("div",{className:"space-y-6",children:t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Date Object"}),t.jsx(B,{title:"Date Demo",language:"javascript",initialCode:`// Creating Dates
console.log("=== Creating Dates ===");
let now = new Date();
console.log("Now:", now);
console.log("Date string:", now.toDateString());
console.log("ISO string:", now.toISOString());

// Specific Date
let birthday = new Date("2000-01-01");
console.log("Birthday:", birthday);

// Date from components
let customDate = new Date(2024, 0, 15, 10, 30, 0);
console.log("Custom date:", customDate);

// Getting Date Components
console.log("\\n=== Get Methods ===");
console.log("getFullYear():", now.getFullYear());
console.log("getMonth():", now.getMonth()); // 0-11
console.log("getDate():", now.getDate()); // 1-31
console.log("getDay():", now.getDay()); // 0-6 (Sunday = 0)
console.log("getHours():", now.getHours());
console.log("getMinutes():", now.getMinutes());
console.log("getSeconds():", now.getSeconds());
console.log("getMilliseconds():", now.getMilliseconds());
console.log("getTime():", now.getTime()); // Timestamp

// Setting Date Components
console.log("\\n=== Set Methods ===");
let date = new Date();
date.setFullYear(2030);
date.setMonth(5); // June
date.setDate(15);
console.log("Set date:", date.toDateString());

// Formatting
console.log("\\n=== Formatting ===");
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toLocaleTimeString():", now.toLocaleTimeString());
console.log("toLocaleString():", now.toLocaleString());

// Date Math
console.log("\\n=== Date Math ===");
let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
console.log("Today:", today.toDateString());
console.log("Tomorrow:", tomorrow.toDateString());

// Date Comparison
let date1 = new Date("2024-01-01");
let date2 = new Date("2024-12-31");
console.log("date1 < date2:", date1 < date2);

// Math Object
console.log("\\n=== Math Object ===");
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.abs(-5):", Math.abs(-5));
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.max(1,5,3):", Math.max(1, 5, 3));
console.log("Math.min(1,5,3):", Math.min(1, 5, 3));
console.log("Math.random():", Math.random());
console.log("Math.random() 0-10:", Math.floor(Math.random() * 11));
console.log("Math.random() 1-100:", Math.floor(Math.random() * 100) + 1);`}),t.jsx(Oe,{question:"Write JavaScript to display the current date in the format 'Day, Month DD, YYYY' (e.g., 'Tuesday, January 15, 2024')",hint:"Use toLocaleDateString() with specific options or combine individual date methods",solution:"const date = new Date();\nconst day = date.toLocaleDateString('en-US', { weekday: 'long' });\nconst month = date.toLocaleDateString('en-US', { month: 'long' });\nconst dayNum = date.getDate();\nconst year = date.getFullYear();\n\nconsole.log(`${day}, ${month} ${dayNum}, ${year}`);"})]})})},regex:{id:"regex",title:"Regular Expressions",icon:t.jsx(Wr,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Regular Expressions"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Regular expressions are patterns used to match character combinations in strings. They are powerful for form validation and text processing."}),t.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-indigo-800 dark:text-indigo-200 mb-3",children:"Common Patterns"}),t.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:"\\d - digit"}),t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:"\\w - word char"}),t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:"\\s - whitespace"}),t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:". - any char"}),t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:"[abc] - any of a,b,c"}),t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:"[^abc] - not a,b,c"}),t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:"^ - start"}),t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:"$ - end"}),t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:"* - 0 or more"}),t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:"+ - 1 or more"}),t.jsx("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:"? - 0 or 1"}),t.jsxs("code",{className:"bg-white dark:bg-gray-800 px-2 py-1 rounded",children:["{n}"," - exactly n"]})]})]})]}),t.jsx(B,{title:"RegExp Demo",language:"javascript",initialCode:`// Creating Regular Expressions
console.log("=== Creating RegExp ===");
let pattern1 = /hello/i; // Case-insensitive
let pattern2 = new RegExp("world", "gi"); // Global, case-insensitive

// test() - returns true/false
console.log("\\n=== test() ===");
let text = "Hello World!";
console.log("/hello/i.test():", /hello/i.test(text));
console.log("/goodbye/i.test():", /goodbye/i.test(text));

// exec() - returns match or null
console.log("\\n=== exec() ===");
let result = /World/.exec(text);
console.log("Match:", result ? result[0] : null);
console.log("Index:", result ? result.index : null);

// String methods with RegExp
console.log("\\n=== String Methods ===");
console.log("match():", text.match(/world/i));
console.log("search():", text.search(/world/i));
console.log("replace():", text.replace(/world/gi, "Universe"));
console.log("split():", "a,b;c d".split(/[,;s]+/));

// Quantifiers
console.log("\\n=== Quantifiers ===");
let nums = "123 4567 89 12345";
console.log("\\d+ (one or more digits):", nums.match(/d+/g));
console.log("\\d{3} (exactly 3 digits):", nums.match(/d{3}/g));
console.log("\\d{2,4} (2-4 digits):", nums.match(/d{2,4}/g));

// Character classes
console.log("\\n=== Character Classes ===");
console.log("[aeiou] (vowels):", "hello world".match(/[aeiou]/gi));
console.log("[0-9] (digits):", "abc123xyz".match(/[0-9]/g));
console.log("[^0-9] (non-digits):", "abc123xyz".match(/[^0-9]/g));

// Anchors
console.log("\\n=== Anchors ===");
console.log("^Hello (starts with):", /^Hello/.test("Hello World"));
console.log("World$ (ends with):", /World$/.test("Hello World"));
console.log("^Hello World$ (exact):", /^Hello World$/.test("Hello World"));

// Email validation
console.log("\\n=== Email Validation ===");
let emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
console.log("Valid email?:", emailPattern.test("test@example.com"));
console.log("Valid email?:", emailPattern.test("invalid.email"));

// Phone validation
console.log("\\n=== Phone Validation ===");
let phonePattern = /^\\d{3}-\\d{3}-\\d{4}$/;
console.log("Valid phone?:", phonePattern.test("123-456-7890"));

// URL validation
console.log("\\n=== URL Validation ===");
let urlPattern = /^https?:\\/\\/[^\\s]+$/;
console.log("Valid URL?:", urlPattern.test("https://example.com"));
console.log("Valid URL?:", urlPattern.test("not a url"));`}),t.jsx(ce,{questions:[{question:"What does the 'g' flag in /test/g do?",options:["Makes it case-insensitive","Finds all matches, not just first","Matches at word boundaries","Enables multiline mode"],correctAnswer:1,explanation:"The 'g' (global) flag makes the regex find all matches, not just the first one."},{question:"What does [^0-9] match?",options:["All digits","All non-digits","Numbers 0-9","Nothing"],correctAnswer:1,explanation:"The ^ inside brackets negates the class, so [^0-9] matches any character that is NOT a digit."}]})]})},cookies:{id:"cookies",title:"JavaScript Cookies",icon:t.jsx(sp,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"JavaScript Cookies"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Cookies are small files stored on a user's computer. They are used to remember information about the user between visits."}),t.jsxs("div",{className:"bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-orange-800 dark:text-orange-200 mb-3",children:"Cookie Structure"}),t.jsx("p",{className:"text-sm text-orange-700 dark:text-orange-300 mb-3",children:t.jsx("code",{children:"name=value; expires=date; path=/; domain=example.com; secure"})}),t.jsxs("ul",{className:"text-sm space-y-1 text-orange-700 dark:text-orange-300",children:[t.jsxs("li",{children:[t.jsx("strong",{children:"name=value"})," - Cookie data (required)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"expires"})," - When cookie expires"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"path"})," - URL path the cookie applies to"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"domain"})," - Domain the cookie applies to"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"secure"})," - Only over HTTPS"]})]})]})]}),t.jsx(B,{title:"Cookies Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>Cookies Demo</title>
</head>
<body>
    <h1>Cookie Management</h1>

    <div>
        <label>Username:</label>
        <input type="text" id="usernameInput" placeholder="Enter username">
        <button onclick="setCookie()">Save Cookie</button>
    </div>

    <div style="margin-top:20px;">
        <button onclick="getCookie()">Get Cookie</button>
        <button onclick="showAllCookies()">Show All Cookies</button>
        <button onclick="deleteCookie()">Delete Cookie</button>
    </div>

    <p id="cookieOutput"></p>

    <script>
        // Set Cookie
        function setCookie() {
            const username = document.getElementById("usernameInput").value;
            if (!username) {
                alert("Please enter a username");
                return;
            }

            // Set expiration date (7 days from now)
            const expires = new Date();
            expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);

            document.cookie = "username=" + encodeURIComponent(username) +
                "; expires=" + expires.toUTCString() +
                "; path=/";

            document.getElementById("cookieOutput").innerHTML =
                "Cookie saved: <strong>" + username + "</strong>";
        }

        // Get Cookie
        function getCookie() {
            const name = "username=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const ca = decodedCookie.split(';');

            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    const username = c.substring(name.length, c.length);
                    document.getElementById("cookieOutput").innerHTML =
                        "Welcome back: <strong>" + username + "</strong>";
                    return;
                }
            }
            document.getElementById("cookieOutput").innerHTML =
                "No cookie found!";
        }

        // Show All Cookies
        function showAllCookies() {
            const output = document.getElementById("cookieOutput");
            if (document.cookie) {
                const cookies = document.cookie.split(';');
                let html = "<strong>All Cookies:</strong><br>";
                cookies.forEach(cookie => {
                    html += cookie.trim() + "<br>";
                });
                output.innerHTML = html;
            } else {
                output.innerHTML = "No cookies found!";
            }
        }

        // Delete Cookie
        function deleteCookie() {
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.getElementById("usernameInput").value = "";
            document.getElementById("cookieOutput").innerHTML =
                "Cookie deleted!";
        }

        // Auto-load on page visit
        window.addEventListener('load', function() {
            const name = "username=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) {
                    const username = c.substring(name.length, c.length);
                    document.getElementById("cookieOutput").innerHTML =
                        "Welcome back: <strong>" + username + "</strong>";
                }
            }
        });
    <\/script>
</body>
</html>`}),t.jsx(Oe,{question:"Create a function that checks if a cookie named 'isLoggedIn' exists and returns true or false",hint:"Search through document.cookie for the cookie name",solution:`function isLoggedIn() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        if (cookie.trim().startsWith('isLoggedIn=')) {
            return true;
        }
    }
    return false;
}`})]})},"jquery-intro":{id:"jquery-intro",title:"Introduction to jQuery",icon:t.jsx(As,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"What is jQuery?"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["jQuery is a ",t.jsx("strong",{children:"lightweight JavaScript library"}),' that simplifies HTML DOM manipulation, event handling, and animations. The motto is "write less, do more."']}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Why jQuery?"}),t.jsxs("ul",{className:"space-y-2 text-blue-700 dark:text-blue-300",children:[t.jsx("li",{children:"✅ Cross-browser compatible"}),t.jsx("li",{children:"✅ Simplified DOM manipulation"}),t.jsx("li",{children:"✅ Easy event handling"}),t.jsx("li",{children:"✅ Powerful animations"}),t.jsx("li",{children:"✅ AJAX support"}),t.jsx("li",{children:"✅ Large ecosystem of plugins"})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Basic Syntax"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"$(selector).action()"}),t.jsx("p",{className:"text-gray-500 mt-2",children:"$ - Define/access jQuery"}),t.jsx("p",{className:"text-gray-500",children:"(selector) - Find HTML elements"}),t.jsx("p",{className:"text-gray-500",children:".action() - jQuery method"})]}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm",children:[t.jsx("p",{className:"text-green-600",children:"// Document ready"}),t.jsx("p",{className:"text-blue-600",children:"$(document).ready(function(){"}),t.jsx("p",{className:"pl-4 text-gray-600",children:"// jQuery code here"}),t.jsx("p",{className:"text-blue-600",children:"});"}),t.jsx("p",{className:"text-green-600 mt-2",children:"// Shorthand"}),t.jsx("p",{className:"text-blue-600",children:"$(function(){"}),t.jsx("p",{className:"pl-4 text-gray-600",children:"// jQuery code here"}),t.jsx("p",{className:"text-blue-600",children:"});"})]})]}),t.jsx(B,{title:"jQuery Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>jQuery Demo</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>
    <style>
        .demo-box {
            width: 200px;
            height: 200px;
            background: #3498db;
            margin: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            border-radius: 10px;
        }
        .highlight { background: yellow !important; }
    </style>
</head>
<body>
    <h1>jQuery Demonstration</h1>

    <!-- Selectors -->
    <div id="content">
        <p class="text">First paragraph</p>
        <p class="text">Second paragraph</p>
        <p>Third paragraph</p>
    </div>

    <!-- Buttons -->
    <button id="btn1">Hide All</button>
    <button id="btn2">Show All</button>
    <button id="btn3">Toggle</button>
    <button id="btn4">Fade</button>
    <button id="btn5">Slide</button>

    <!-- Animation -->
    <div class="demo-box" id="box">Click me!</div>

    <script>
        $(document).ready(function() {
            // Click handler
            $("#btn1").click(function() {
                $(".text").hide();
            });

            $("#btn2").click(function() {
                $(".text").show();
            });

            // Toggle
            $("#btn3").click(function() {
                $(".text").toggle();
            });

            // Fade
            $("#btn4").click(function() {
                $("#box").fadeToggle(500);
            });

            // Slide
            $("#btn5").click(function() {
                $("#box").slideToggle();
            });

            // jQuery Selectors
            console.log("All p elements:", $("p").length);
            console.log("Elements with class 'text':", $(".text").length);
            console.log("Element with id 'content':", $("#content").text());
        });
    <\/script>
</body>
</html>`}),t.jsx(ce,{questions:[{question:"What is the jQuery syntax for selecting all paragraphs?",options:["$('p')","$('#p')","$('.p')","$('paragraph')"],correctAnswer:0,explanation:"$('p') selects all <p> elements, just like the CSS selector for paragraphs."},{question:"What does $(document).ready() do?",options:["Creates a new document","Waits for DOM to be fully loaded before executing code","Loads external files","Creates a new jQuery object"],correctAnswer:1,explanation:"The ready event ensures code runs after the DOM is fully loaded, preventing errors from accessing elements that don't exist yet."}]})]})},"dom-advanced":{id:"dom-advanced",title:"Advanced DOM Manipulation",icon:t.jsx(Gn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Advanced DOM Operations"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-green-800 dark:text-green-200 mb-2",children:"Adding Elements"}),t.jsx("code",{className:"text-sm text-green-600",children:"append()"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Add to end"}),t.jsx("code",{className:"text-sm text-green-600",children:"prepend()"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Add to beginning"}),t.jsx("code",{className:"text-sm text-green-600",children:"after()"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Insert after"}),t.jsx("code",{className:"text-sm text-green-600",children:"before()"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Insert before"})]}),t.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-red-800 dark:text-red-200 mb-2",children:"Removing Elements"}),t.jsx("code",{className:"text-sm text-red-600",children:"remove()"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Remove element + children"}),t.jsx("code",{className:"text-sm text-red-600",children:"empty()"}),t.jsx("p",{className:"text-xs text-gray-500",children:"Remove children only"})]})]})]}),t.jsx(B,{title:"Advanced DOM Demo",language:"html",initialCode:`<!DOCTYPE html>
<html>
<head>
    <title>Advanced DOM</title>
    <style>
        .card { border: 2px solid #3498db; padding: 10px; margin: 10px; border-radius: 5px; }
        .highlight { background: yellow; }
        .bold { font-weight: bold; }
    </style>
</head>
<body>
    <h1>Advanced DOM Manipulation</h1>

    <div id="container">
        <div class="card" id="card1">Card 1</div>
        <div class="card" id="card2">Card 2</div>
    </div>

    <button onclick="addElement()">Add Card</button>
    <button onclick="removeElement()">Remove Last</button>
    <button onclick="cloneElement()">Clone First</button>
    <button onclick="replaceElement()">Replace Card 2</button>

    <hr>

    <div id="contentBox">
        <p>Original content</p>
    </div>
    <button onclick="changeStyles()">Change Styles</button>
    <button onclick="getAttributes()">Get Attributes</button>
    <button onclick="setAttributes()">Set Attributes</button>

    <script>
        let cardCount = 2;

        function addElement() {
            cardCount++;
            const newCard = document.createElement("div");
            newCard.className = "card";
            newCard.id = "card" + cardCount;
            newCard.textContent = "Card " + cardCount;
            document.getElementById("container").appendChild(newCard);
        }

        function removeElement() {
            const container = document.getElementById("container");
            if (container.lastElementChild) {
                container.removeChild(container.lastElementChild);
            }
        }

        function cloneElement() {
            const original = document.getElementById("card1");
            const clone = original.cloneNode(true);
            clone.id = "card" + (cardCount + 1);
            document.getElementById("container").appendChild(clone);
        }

        function replaceElement() {
            const newElement = document.createElement("div");
            newElement.className = "card";
            newElement.textContent = "Replaced!";
            newElement.style.background = "#e74c3c";
            newElement.style.color = "white";

            const oldElement = document.getElementById("card2");
            oldElement.parentNode.replaceChild(newElement, oldElement);
        }

        function changeStyles() {
            const box = document.getElementById("contentBox");
            box.classList.toggle("highlight");
            box.classList.toggle("bold");

            // Direct style manipulation
            box.style.padding = "20px";
            box.style.backgroundColor = box.style.backgroundColor ? "" : "#f0f0f0";
        }

        function getAttributes() {
            const box = document.getElementById("contentBox");
            console.log("ID:", box.id);
            console.log("Class:", box.className);
            console.log("Tag:", box.tagName);
        }

        function setAttributes() {
            const box = document.getElementById("contentBox");
            box.setAttribute("data-info", "custom data");
            box.setAttribute("title", "This is a tooltip");
            console.log("Data-info set:", box.getAttribute("data-info"));
        }
    <\/script>
</body>
</html>`}),t.jsx(Oe,{question:"Write JavaScript to create a todo list where users can add new items and remove existing ones",hint:"Use createElement, appendChild, and removeChild",solution:`const todoList = [];

function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (!text) return;

    todoList.push(text);
    renderTodos();
    input.value = "";
}

function removeTodo(index) {
    todoList.splice(index, 1);
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    todoList.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = todo;
        li.onclick = () => removeTodo(index);
        list.appendChild(li);
    });
}`})]})}},P=Object.values($);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx(As,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 4: Advanced JavaScript & jQuery"}),t.jsx("p",{className:"text-white/80",children:"Explore DOM manipulation, events, objects, strings, dates, regular expressions, cookies, and jQuery"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:P.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:P.map((i,f)=>{const C=p===i.id,M=y[`chapter4-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${C?"border-purple-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>k(C?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${M?"bg-green-100 dark:bg-green-900/30 text-green-600":"bg-purple-100 dark:bg-purple-900/30 text-purple-600"}`,children:M?t.jsx(z,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",C?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),C?t.jsx(Br,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),C&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(ce,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!M&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(z,{className:"w-5 h-5"})," Mark as Complete"]}),M&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(z,{className:"w-5 h-5"})," Completed"]})]})]})]},i.id)})})]})}function pp({progress:y,updateProgress:T}){const[p,k]=U.useState("css-intro"),S=i=>{T("chapter5",i,!0)},$={"css-intro":{id:"css-intro",title:"Introduction to CSS",icon:t.jsx(Jn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"What is CSS?"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"CSS (Cascading Style Sheets)"})," is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."]}),t.jsxs("div",{className:"bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-2",children:"Why Learn CSS?"}),t.jsxs("ul",{className:"space-y-2 text-white/90",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Control the visual design of web pages"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Separate content from presentation"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Create responsive, mobile-friendly designs"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Enable animations and interactive effects"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"CSS Syntax"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-blue-600 dark:text-blue-400",children:"/* Selector */"}),t.jsxs("p",{className:"text-purple-600 dark:text-purple-400",children:["h1 ",t.jsx("span",{className:"text-gray-500",children:"{"})]}),t.jsxs("p",{className:"ml-4 text-green-600 dark:text-green-400",children:["color: ",t.jsx("span",{className:"text-orange-500",children:"blue"}),";"]}),t.jsxs("p",{className:"ml-4 text-green-600 dark:text-green-400",children:["font-size: ",t.jsx("span",{className:"text-orange-500",children:"24px"}),";"]}),t.jsxs("p",{className:"ml-4 text-green-600 dark:text-green-400",children:["text-align: ",t.jsx("span",{className:"text-orange-500",children:"center"}),";"]}),t.jsx("p",{className:"text-gray-500",children:"}"})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{part:"Selector",desc:"Points to the HTML element you want to style",color:"blue"},{part:"Property",desc:"The attribute you want to change",color:"green"},{part:"Value",desc:"The new value for the property",color:"orange"}].map((i,f)=>t.jsxs("div",{className:`bg-${i.color}-50 dark:bg-${i.color}-900/20 border border-${i.color}-200 dark:border-${i.color}-800 rounded-xl p-4 text-center`,children:[t.jsx("p",{className:`font-bold text-${i.color}-800 dark:text-${i.color}-200 mb-2`,children:i.part}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]},f))})]}),t.jsx(B,{title:"Your First CSS",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`})]})},"css-selectors":{id:"css-selectors",title:"CSS Selectors",icon:t.jsx(pc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"CSS Selectors"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"Selectors"})," are patterns used to select the element(s) you want to style. CSS selectors can select elements based on their tag name, class, id, attributes, and more."]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Basic Selectors"}),t.jsx("div",{className:"space-y-3 mb-6",children:[{selector:"element",example:"p { }",desc:"Selects all paragraph elements"},{selector:".class",example:".highlight { }",desc:'Selects elements with class="highlight"'},{selector:"#id",example:"#header { }",desc:'Selects the element with id="header"'},{selector:"*",example:"* { }",desc:"Selects all elements"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center gap-4",children:[t.jsx("code",{className:"px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded font-mono",children:i.selector}),t.jsx("code",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-mono",children:i.example}),t.jsx("span",{className:"text-gray-600 dark:text-gray-400 flex-1",children:i.desc})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Combinators"}),t.jsx("div",{className:"space-y-3 mb-6",children:[{selector:"A B",example:"div p { }",desc:"Descendant selector - p inside div"},{selector:"A > B",example:"div > p { }",desc:"Child selector - direct child of div"},{selector:"A + B",example:"h1 + p { }",desc:"Adjacent sibling - p right after h1"},{selector:"A ~ B",example:"h1 ~ p { }",desc:"General sibling - all p after h1"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center gap-4",children:[t.jsx("code",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded font-mono",children:i.selector}),t.jsx("code",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-mono",children:i.example}),t.jsx("span",{className:"text-gray-600 dark:text-gray-400 flex-1",children:i.desc})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Attribute Selectors"}),t.jsx("div",{className:"space-y-3 mb-6",children:[{selector:"[attr]",example:"[disabled] { }",desc:"Elements with the attribute"},{selector:"[attr=value]",example:'[type="text"] { }',desc:"Exact match"},{selector:"[attr~=value]",example:'[class~="highlight"] { }',desc:"Contains word"},{selector:"[attr^=value]",example:'[href^="https"] { }',desc:"Starts with"},{selector:"[attr$=value]",example:'[src$=".png"] { }',desc:"Ends with"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center gap-4",children:[t.jsx("code",{className:"px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded font-mono",children:i.selector}),t.jsx("span",{className:"text-gray-600 dark:text-gray-400 flex-1",children:i.desc})]},f))})]}),t.jsx(B,{title:"Practice CSS Selectors",language:"html",initialCode:`<!DOCTYPE html>
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

        /* Multiple classes */
        .btn.primary { background: blue; color: white; }
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
    <button class="btn primary">Primary Button</button>
</body>
</html>`}),t.jsx(ce,{questions:[{question:"Which selector targets an element with id='main'?",options:[".main","#main","element.main","*main"],correctAnswer:1,explanation:"The # symbol is used for ID selectors in CSS."},{question:"What does the descendant selector (A B) do?",options:["Selects B that is a direct child of A","Selects B that is anywhere inside A","Selects A and B","Selects A only if it has B"],correctAnswer:1,explanation:"The descendant selector (space) selects all B elements that are nested anywhere inside A."}]})]})},"css-box-model":{id:"css-box-model",title:"CSS Box Model",icon:t.jsx($m,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Understanding the Box Model"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["Every element in HTML is treated as a box. The ",t.jsx("strong",{children:"CSS Box Model"})," consists of: content, padding, border, and margin. These properties control the space around and within an element."]}),t.jsx(tr,{type:"diagram",title:"CSS Box Model Visualization",description:"See how each part of the box model works",content:t.jsxs("div",{className:"bg-yellow-100 dark:bg-yellow-900/30 rounded-xl p-8 max-w-md mx-auto",children:[t.jsx("p",{className:"text-center text-sm text-yellow-700 dark:text-yellow-300 mb-4",children:"Margin (outside)"}),t.jsxs("div",{className:"bg-orange-100 dark:bg-orange-900/30 rounded-lg p-1",children:[t.jsx("p",{className:"text-center text-sm text-orange-700 dark:text-orange-300",children:"Border"}),t.jsxs("div",{className:"bg-green-100 dark:bg-green-900/30 rounded p-1",children:[t.jsx("p",{className:"text-center text-sm text-green-700 dark:text-green-300",children:"Padding"}),t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded p-6 text-center",children:[t.jsx("p",{className:"font-bold text-blue-800 dark:text-blue-200",children:"Content"}),t.jsx("p",{className:"text-xs text-blue-600 dark:text-blue-400",children:"width × height"})]})]})]})]})}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3 mt-6",children:"Box Model Properties"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{prop:"content",desc:"The actual content area",example:"text, images, etc."},{prop:"padding",desc:"Space inside the border",example:"padding: 20px;"},{prop:"border",desc:"Line around padding",example:"border: 2px solid black;"},{prop:"margin",desc:"Space outside the border",example:"margin: 10px auto;"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("p",{className:"font-bold text-purple-600 dark:text-purple-400 mb-1",children:i.prop}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:i.desc}),t.jsx("code",{className:"text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded",children:i.example})]},f))}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Box-Sizing: Border-Box"}),t.jsxs("p",{className:"text-blue-700 dark:text-blue-300 mb-3",children:["By default, width/height only applies to content. Use ",t.jsx("code",{children:"box-sizing: border-box"})," to include padding and border in the total width/height!"]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold mb-2",children:"Without border-box:"}),t.jsx("p",{className:"text-sm text-gray-600",children:"width: 100px + 20px padding + 4px border = 124px total"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold mb-2",children:"With border-box:"}),t.jsx("p",{className:"text-sm text-gray-600",children:"width: 100px (includes padding + border) = 100px total"})]})]})]})]}),t.jsx(B,{title:"Box Model Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"What does margin control?",options:["Space inside the element","Space between elements","The border width","The content size"],correctAnswer:1,explanation:"Margin controls the space OUTSIDE the border, between elements."},{question:"Which property includes padding and border in the element's total width?",options:["margin: auto","box-sizing: border-box","display: flex","overflow: hidden"],correctAnswer:1,explanation:"box-sizing: border-box includes padding and border in the width/height calculation."}]})]})},"css-layout":{id:"css-layout",title:"CSS Layout (Display & Position)",icon:t.jsx(xc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"CSS Display Property"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["The ",t.jsx("strong",{children:"display"})," property determines how an element is displayed. Common values include block, inline, inline-block, and flex."]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{value:"block",desc:"Takes full width, starts on new line",example:"div, p, h1"},{value:"inline",desc:"Takes only needed width, stays in line",example:"span, a, strong"},{value:"inline-block",desc:"Like inline but can have width/height",example:"button, input"},{value:"none",desc:"Element is hidden and removed from flow",example:"display: none"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("code",{className:"px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded font-mono",children:i.value}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:i.desc}),t.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["e.g. ",i.example]})]},f))}),t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8",children:"CSS Position Property"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["The ",t.jsx("strong",{children:"position"})," property specifies the positioning method for an element."]}),t.jsx("div",{className:"space-y-3 mb-6",children:[{value:"static",desc:"Default. Normal document flow",note:"Not affected by top, bottom, left, right"},{value:"relative",desc:"Positioned relative to normal position",note:"Other elements ignore this element's space"},{value:"absolute",desc:"Positioned relative to nearest positioned ancestor",note:"Removed from normal document flow"},{value:"fixed",desc:"Positioned relative to viewport",note:"Stays in place when scrolling"},{value:"sticky",desc:"Switches between relative and fixed",note:"Sticks when scrolling reaches threshold"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[t.jsx("code",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded font-mono",children:i.value}),t.jsx("span",{className:"font-medium text-gray-800 dark:text-white",children:i.desc})]}),t.jsx("p",{className:"text-sm text-gray-500",children:i.note})]},f))})]}),t.jsx(B,{title:"Display and Position Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`})]})},"css-flexbox":{id:"css-flexbox",title:"CSS Flexbox",icon:t.jsx(Ym,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Flexbox Layout"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"Flexbox"})," is a one-dimensional layout method for arranging items in rows or columns. It makes complex layouts easy to implement with clean, maintainable code."]}),t.jsxs("div",{className:"bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Container Properties (Parent)"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:["display: flex","flex-direction","justify-content","align-items","flex-wrap","gap"].map((i,f)=>t.jsx("code",{className:"bg-white/20 px-2 py-1 rounded text-sm",children:i},f))})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"flex-direction Options"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:["row","row-reverse","column","column-reverse"].map((i,f)=>t.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 text-center",children:t.jsx("p",{className:"font-mono text-sm text-purple-600",children:i})},f))})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"justify-content Options"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-2",children:["flex-start","flex-end","center","space-between","space-around"].map((i,f)=>t.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 text-center",children:t.jsx("p",{className:"font-mono text-xs text-blue-600",children:i})},f))})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Item Properties (Children)"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[{prop:"flex-grow",desc:"How much to grow"},{prop:"flex-shrink",desc:"How much to shrink"},{prop:"flex-basis",desc:"Initial size"},{prop:"align-self",desc:"Override alignment"},{prop:"order",desc:"Display order"}].map((i,f)=>t.jsxs("div",{className:"bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3",children:[t.jsx("code",{className:"text-orange-700 dark:text-orange-300",children:i.prop}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]},f))})]}),t.jsx(B,{title:"Flexbox Gallery",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"Which property creates a flex container?",options:["position: flex","display: flex","flex: container","layout: flexbox"],correctAnswer:1,explanation:"display: flex creates a flex container."},{question:"What does justify-content control?",options:["Vertical alignment of items","Horizontal alignment of items","Item order","Item size"],correctAnswer:1,explanation:"justify-content controls alignment along the main axis (horizontal in row direction)."}]})]})},"css-grid":{id:"css-grid",title:"CSS Grid",icon:t.jsx(mc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"CSS Grid Layout"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"CSS Grid"})," is a two-dimensional layout system that handles both columns and rows simultaneously. It's perfect for complex page layouts and gallery grids."]}),t.jsxs("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Grid Container Properties"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:["display: grid","grid-template-columns","grid-template-rows","grid-template-areas","gap","grid-column/row"].map((i,f)=>t.jsx("code",{className:"bg-white/20 px-2 py-1 rounded text-sm",children:i},f))})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Defining Grid Tracks"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["grid-template-columns: ",t.jsx("span",{className:"text-green-600",children:"100px 100px 100px"}),";"]}),t.jsxs("p",{className:"text-purple-600",children:["grid-template-columns: ",t.jsx("span",{className:"text-green-600",children:"1fr 2fr 1fr"}),";"]}),t.jsxs("p",{className:"text-purple-600",children:["grid-template-columns: ",t.jsx("span",{className:"text-green-600",children:"repeat(3, 1fr)"}),";"]}),t.jsxs("p",{className:"text-purple-600",children:["grid-template-columns: ",t.jsx("span",{className:"text-green-600",children:"repeat(auto-fit, minmax(200px, 1fr))"}),";"]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Grid Item Placement"}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsxs("p",{className:"text-blue-600",children:[".item ","{"]}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["grid-column: ",t.jsx("span",{className:"text-green-600",children:"1 / 3"}),"; ",t.jsx("span",{className:"text-gray-500",children:"/* span columns 1 to 3 */"})]}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["grid-row: ",t.jsx("span",{className:"text-green-600",children:"2 / 4"}),"; ",t.jsx("span",{className:"text-gray-500",children:"/* span rows 2 to 4 */"})]}),t.jsx("p",{className:"text-blue-600",children:"}"})]})]}),t.jsx(B,{title:"CSS Grid Layout",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`})]})},"css-colors-backgrounds":{id:"css-colors-backgrounds",title:"Colors and Backgrounds",icon:t.jsx(Jn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"CSS Colors"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"CSS supports multiple ways to specify colors: color names, HEX codes, RGB, RGBA, HSL, and HSLA."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Color Formats"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsx("p",{className:"text-red-500",children:"color: red;"}),t.jsx("p",{className:"text-purple-500",children:"color: #ff00ff;"}),t.jsx("p",{className:"text-blue-500",children:"color: rgb(0, 0, 255);"}),t.jsx("p",{className:"text-green-500",children:"color: rgba(0, 255, 0, 0.5);"}),t.jsx("p",{className:"text-teal-500",children:"color: hsl(180, 100%, 50%);"})]})]}),t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Background Properties"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsx("p",{children:"background-color"}),t.jsx("p",{children:"background-image"}),t.jsx("p",{children:"background-size"}),t.jsx("p",{children:"background-position"}),t.jsx("p",{children:"background-repeat"})]})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-3",children:"Gradient Syntax"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["background: ",t.jsx("span",{className:"text-green-600",children:"linear-gradient(direction, color1, color2)"}),";"]}),t.jsx("p",{className:"text-gray-500 mt-2",children:"/* Examples: */"}),t.jsx("p",{className:"text-blue-500",children:"linear-gradient(to right, red, yellow)"}),t.jsx("p",{className:"text-blue-500",children:"linear-gradient(45deg, blue, pink)"}),t.jsx("p",{className:"text-blue-500",children:"radial-gradient(circle, red, blue)"})]})]})]}),t.jsx(B,{title:"Colors and Gradients",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`})]})},"css-typography":{id:"css-typography",title:"CSS Typography",icon:t.jsx(ro,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Text and Typography"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"CSS provides extensive control over text appearance including font families, sizes, weights, styles, and spacing."}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{prop:"font-family",example:"Arial, sans-serif"},{prop:"font-size",example:"16px, 1.5em, 2rem"},{prop:"font-weight",example:"normal, bold, 100-900"},{prop:"font-style",example:"normal, italic, oblique"},{prop:"text-align",example:"left, center, right, justify"},{prop:"text-decoration",example:"none, underline, line-through"},{prop:"line-height",example:"1.5, 24px"},{prop:"letter-spacing",example:"2px, -1px"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3",children:[t.jsx("code",{className:"text-purple-600 dark:text-purple-400",children:i.prop}),t.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["e.g. ",i.example]})]},f))}),t.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-yellow-800 dark:text-yellow-200 mb-3",children:"Google Fonts Example"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsx("p",{className:"text-green-600"}),t.jsx("p",{className:"text-blue-600",children:'<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">'}),t.jsx("p",{className:"text-green-600 mt-3",children:"/* In CSS */"}),t.jsxs("p",{className:"text-purple-600",children:["font-family: ",t.jsx("span",{className:"text-green-600",children:"'Roboto', sans-serif"}),";"]})]})]})]}),t.jsx(B,{title:"Typography Showcase",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`})]})},"css-transitions-animations":{id:"css-transitions-animations",title:"Transitions and Animations",icon:t.jsx(As,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"CSS Transitions"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"Transitions"})," allow you to smoothly animate changes to CSS properties over a specified duration."]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Transition Properties"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["transition: ",t.jsx("span",{className:"text-green-600",children:"property duration timing-function delay"}),";"]}),t.jsx("p",{className:"text-gray-500 mt-2",children:"/* Shorthand example: */"}),t.jsx("p",{className:"text-blue-500",children:"transition: all 0.3s ease-in-out;"}),t.jsx("p",{className:"text-blue-500",children:"transition: background-color 0.5s linear, transform 0.3s ease;"})]})]}),t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8",children:"CSS Animations"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"Animations"})," allow you to create more complex effects with multiple keyframes."]}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-3",children:"Animation Syntax"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["animation: ",t.jsx("span",{className:"text-green-600",children:"name duration timing-function delay iteration-count"}),";"]}),t.jsxs("p",{className:"mt-3 text-purple-600",children:["@keyframes ",t.jsx("span",{className:"text-green-600",children:"name"})," ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-500",children:["0% ","{"," /* starting state */ ","}"]}),t.jsxs("p",{className:"ml-4 text-blue-500",children:["50% ","{"," /* middle state */ ","}"]}),t.jsxs("p",{className:"ml-4 text-blue-500",children:["100% ","{"," /* ending state */ ","}"]}),t.jsx("p",{className:"text-purple-600",children:"}"})]})]})]}),t.jsx(B,{title:"Transitions and Animations",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"What does transition: all 0.5s ease do?",options:["Transitions all properties over 0.5 seconds with ease timing","Transitions only the color property","Transitions with no animation","Makes element invisible"],correctAnswer:0,explanation:"transition: all animates all animatable properties over 0.5 seconds with ease timing."},{question:"What is required to create a CSS animation?",options:["Only the animation property","@keyframes rule and animation property","JavaScript","No special requirements"],correctAnswer:1,explanation:"You need both @keyframes to define the animation stages AND the animation property to apply it."}]})]})},"css-media-queries":{id:"css-media-queries",title:"Media Queries & Responsive Design",icon:t.jsx(qr,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Responsive Design with Media Queries"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"Media queries"})," allow you to apply CSS styles based on device characteristics like screen width, height, and orientation. This is the foundation of responsive web design."]}),t.jsxs("div",{className:"bg-gradient-to-r from-teal-500 to-green-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Basic Syntax"}),t.jsxs("div",{className:"bg-white/20 rounded-lg p-4 font-mono text-sm",children:[t.jsxs("p",{children:["@media ",t.jsx("span",{className:"text-yellow-300",children:"media-type"})," and ",t.jsx("span",{className:"text-yellow-300",children:"(condition)"})," ","{"]}),t.jsx("p",{className:"ml-4",children:"/* CSS rules */"}),t.jsx("p",{children:"}"})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Common Breakpoints"}),t.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6",children:t.jsx("div",{className:"space-y-2",children:[{size:"< 576px",desc:"Extra small devices (phones)"},{size:"576px - 768px",desc:"Small devices (tablets)"},{size:"768px - 992px",desc:"Medium devices (small laptops)"},{size:"992px - 1200px",desc:"Large devices (desktops)"},{size:"> 1200px",desc:"Extra large devices (large desktops)"}].map((i,f)=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("code",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-mono text-sm",children:i.size}),t.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:i.desc})]},f))})}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Mobile-First Approach"}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm",children:[t.jsx("p",{className:"text-green-600",children:"/* Base styles (mobile) */"}),t.jsxs("p",{className:"text-purple-600",children:[".container ","{"," width: 100%; ","}"]}),t.jsx("p",{className:"mt-3 text-green-600",children:"/* Tablet and up */"}),t.jsxs("p",{className:"text-purple-600",children:["@media (min-width: 768px) ","{"," .container ","{"," width: 750px; ","}"," ","}"]}),t.jsx("p",{className:"mt-3 text-green-600",children:"/* Desktop and up */"}),t.jsxs("p",{className:"text-purple-600",children:["@media (min-width: 992px) ","{"," .container ","{"," width: 970px; ","}"," ","}"]})]})]})]}),t.jsx(B,{title:"Media Queries Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(Oe,{question:"Create a responsive layout that shows 1 column on mobile, 2 columns on tablets, and 4 columns on desktop screens.",hint:"Use media queries with min-width breakpoints at 576px and 992px. Use flexbox with flex-wrap and the flex property.",solution:"Use @media (min-width: 576px) { } and @media (min-width: 992px) { } to change the flex property from flex: 1 1 100% to flex: 1 1 50% and then flex: 1 1 25%."})]})},"css-practical-exercise":{id:"css-practical-exercise",title:"Practical Exercise: Build a Card Component",icon:t.jsx(np,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Challenge: Create a Responsive Card"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Now let's put everything together! Build a beautiful, responsive card component using all the CSS concepts you've learned."}),t.jsxs("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Requirements"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Card with shadow and rounded corners"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Image at the top"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Title and description"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Hover effect with transform"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Responsive: stack on mobile, row on desktop"})]})]})]})]}),t.jsx(B,{title:"Build Your Card Component",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"Which CSS property creates the shadow around the card?",options:["border","outline","box-shadow","drop-shadow"],correctAnswer:2,explanation:"box-shadow creates the shadow effect around an element."},{question:"What makes the card container responsive with flexbox?",options:["display: flex only","flex-wrap: wrap and flex: 1 1 300px","position: relative","margin: auto"],correctAnswer:1,explanation:"flex-wrap: wrap allows items to wrap, and flex: 1 1 300px makes cards grow/shrink but have a minimum width."}]})]})}},P=Object.values($);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx(Jn,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 5: CSS - Styling the Web"}),t.jsx("p",{className:"text-white/80",children:"Master CSS selectors, box model, flexbox, grid, animations, and responsive design"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:P.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:P.map((i,f)=>{const C=p===i.id,M=y[`chapter5-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${C?"border-purple-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>k(C?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${M?"bg-green-100 dark:bg-green-900/30 text-green-600":"bg-purple-100 dark:bg-purple-900/30 text-purple-600"}`,children:M?t.jsx(z,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",C?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),C?t.jsx(Br,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),C&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(ce,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!M&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(z,{className:"w-5 h-5"}),"Mark as Complete"]}),M&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(z,{className:"w-5 h-5"}),"Completed"]})]})]})]},i.id)})})]})}function xp({progress:y,updateProgress:T}){const[p,k]=U.useState("php-intro"),S=i=>{T("chapter6",i,!0)},$={"php-intro":{id:"php-intro",title:"Introduction to PHP",icon:t.jsx(jt,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"What is PHP?"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:[t.jsx("strong",{children:"PHP (PHP: Hypertext Preprocessor)"})," is a server-side scripting language designed specifically for web development. Unlike JavaScript which runs in the browser, PHP executes on the server and sends the result to the client."]}),t.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Why Learn PHP?"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Powerful server-side capabilities"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Seamless database integration (MySQL)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"60% of all websites use PHP (WordPress, Facebook, etc.)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Easy to learn and deploy"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"How PHP Works"}),t.jsx(tr,{type:"diagram",title:"Client-Server Architecture",description:"See how PHP processes requests on the server",content:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between gap-4",children:[t.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/30 rounded-xl p-4 text-center flex-1",children:[t.jsx("div",{className:"bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2",children:t.jsx("span",{className:"text-white text-2xl",children:"💻"})}),t.jsx("p",{className:"font-bold text-blue-800 dark:text-blue-200",children:"Client Browser"}),t.jsx("p",{className:"text-xs text-blue-600 dark:text-blue-400",children:"HTML/CSS/JavaScript"})]}),t.jsx("div",{className:"text-3xl text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-purple-100 dark:bg-purple-900/30 rounded-xl p-4 text-center flex-1",children:[t.jsx("div",{className:"bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2",children:t.jsx("span",{className:"text-white text-2xl",children:"🌐"})}),t.jsx("p",{className:"font-bold text-purple-800 dark:text-purple-200",children:"Web Server"}),t.jsx("p",{className:"text-xs text-purple-600 dark:text-purple-400",children:"Apache/Nginx"})]}),t.jsx("div",{className:"text-3xl text-gray-400",children:"→"}),t.jsxs("div",{className:"bg-green-100 dark:bg-green-900/30 rounded-xl p-4 text-center flex-1",children:[t.jsx("div",{className:"bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2",children:t.jsx("span",{className:"text-white text-2xl",children:"🐘"})}),t.jsx("p",{className:"font-bold text-green-800 dark:text-green-200",children:"PHP Engine"}),t.jsx("p",{className:"text-xs text-green-600 dark:text-green-400",children:"Server-side Code"})]})]}),t.jsx("div",{className:"flex justify-center",children:t.jsxs("div",{className:"bg-orange-100 dark:bg-orange-900/30 rounded-xl p-4 text-center",children:[t.jsx("div",{className:"bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2",children:t.jsx("span",{className:"text-white text-2xl",children:"🗄️"})}),t.jsx("p",{className:"font-bold text-orange-800 dark:text-orange-200",children:"MySQL Database"})]})})]})}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3 mt-6",children:"Basic PHP Syntax"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm",children:[t.jsx("p",{className:"text-purple-600",children:"<?php"}),t.jsx("p",{className:"text-green-600",children:"// PHP code goes here"}),t.jsxs("p",{className:"text-purple-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Hello World!"'}),";"]}),t.jsx("p",{className:"text-purple-600",children:"?>"})]})]}),t.jsx(B,{title:"Your First PHP Script",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`})]})},"php-variables":{id:"php-variables",title:"Variables and Data Types",icon:t.jsx(yc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Variables"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["In PHP, variables are represented by a dollar sign ",t.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"$"})," followed by the variable name. PHP is a loosely typed language - you don't need to declare variable types."]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Data Types in PHP"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",children:[{type:"String",example:'"Hello"',color:"green"},{type:"Integer",example:"42",color:"blue"},{type:"Float",example:"3.14",color:"purple"},{type:"Boolean",example:"true / false",color:"orange"},{type:"Array",example:"[1, 2, 3]",color:"red"},{type:"NULL",example:"null",color:"gray"}].map((i,f)=>t.jsxs("div",{className:`bg-${i.color}-50 dark:bg-${i.color}-900/20 border border-${i.color}-200 dark:border-${i.color}-800 rounded-xl p-4`,children:[t.jsx("p",{className:`font-bold text-${i.color}-800 dark:text-${i.color}-200 mb-1`,children:i.type}),t.jsx("code",{className:"text-sm",children:i.example})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Variable Naming Rules"}),t.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6",children:t.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-400",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"}),t.jsxs("span",{children:["Variables must start with ",t.jsx("code",{children:"$"})," followed by letter or underscore"]})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"}),t.jsx("span",{children:"Can only contain alphanumeric characters and underscores (A-z, 0-9, _)"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"}),t.jsxs("span",{children:["Variable names are case-sensitive (",t.jsx("code",{children:"$name"})," ≠ ",t.jsx("code",{children:"$Name"}),")"]})]})]})})]}),t.jsx(B,{title:"PHP Variables Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"Which is the correct way to declare a variable in PHP?",options:["var name = 'John'","let name = 'John'","$name = 'John'","int name = 5"],correctAnswer:2,explanation:"PHP variables start with the $ symbol, followed by the variable name."},{question:"How do you concatenate two strings in PHP?",options:["'Hello' + 'World'","'Hello' . 'World'","'Hello' & 'World'","'Hello' :: 'World'"],correctAnswer:1,explanation:"PHP uses the dot (.) operator for string concatenation."}]})]})},"php-operators":{id:"php-operators",title:"Operators in PHP",icon:t.jsx(Am,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Operators"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Operators are used to perform operations on variables and values. PHP supports various types of operators."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-4",children:"Arithmetic Operators"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Addition"}),t.jsx("code",{className:"text-green-600",children:"$a + $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Subtraction"}),t.jsx("code",{className:"text-green-600",children:"$a - $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Multiplication"}),t.jsx("code",{className:"text-green-600",children:"$a * $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Division"}),t.jsx("code",{className:"text-green-600",children:"$a / $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Modulus"}),t.jsx("code",{className:"text-green-600",children:"$a % $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Exponentiation"}),t.jsx("code",{className:"text-green-600",children:"$a ** $b"})]})]})]}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-4",children:"Comparison Operators"}),t.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Equal"}),t.jsx("code",{className:"text-green-600",children:"$a == $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Identical"}),t.jsx("code",{className:"text-green-600",children:"$a === $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Not Equal"}),t.jsx("code",{className:"text-green-600",children:"$a != $b"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Greater Than"}),t.jsxs("code",{className:"text-green-600",children:["$a ",">"," $b"]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Less Than"}),t.jsxs("code",{className:"text-green-600",children:["$a ","<"," $b"]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 flex justify-between",children:[t.jsx("span",{children:"Spaceship"}),t.jsxs("code",{className:"text-green-600",children:["$a ","<=>"," $b"]})]})]})]})]}),t.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-green-800 dark:text-green-200 mb-4",children:"Logical Operators"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{op:"AND",symbol:"&&"},{op:"OR",symbol:"||"},{op:"XOR",symbol:"xor"},{op:"NOT",symbol:"!"}].map((i,f)=>t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-3 text-center",children:[t.jsx("p",{className:"font-bold text-green-600",children:i.op}),t.jsx("code",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.symbol})]},f))})]})]}),t.jsx(B,{title:"PHP Operators Practice",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`})]})},"php-conditionals":{id:"php-conditionals",title:"Conditional Statements",icon:t.jsx(uc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Conditionals"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Conditional statements allow you to execute code based on certain conditions. PHP provides several conditional structures."}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// if statement"}),t.jsxs("p",{className:"text-green-600",children:["if ($score ",">="," 90) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Excellent!"'}),";"]}),t.jsx("p",{className:"text-green-600",children:"}"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// if...else statement"}),t.jsxs("p",{className:"text-green-600",children:["if ($age ",">="," 18) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Adult"'}),";"]}),t.jsxs("p",{className:"text-green-600",children:["}"," else ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Minor"'}),";"]}),t.jsx("p",{className:"text-green-600",children:"}"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// elseif"}),t.jsxs("p",{className:"text-green-600",children:["if ($grade ",">="," 90) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"A"'}),";"]}),t.jsxs("p",{className:"text-green-600",children:["}"," elseif ($grade ",">="," 80) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"B"'}),";"]}),t.jsxs("p",{className:"text-green-600",children:["}"," else ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"C"'}),";"]}),t.jsx("p",{className:"text-green-600",children:"}"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Switch Statement"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-green-600",children:["switch ($day) ","{"]}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["case ",t.jsx("span",{className:"text-orange-500",children:'"Monday"'}),":"]}),t.jsxs("p",{className:"ml-8 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Start of work week"'}),";"]}),t.jsx("p",{className:"ml-8 text-green-600",children:"break;"}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["case ",t.jsx("span",{className:"text-orange-500",children:'"Friday"'}),":"]}),t.jsxs("p",{className:"ml-8 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"End of work week"'}),";"]}),t.jsx("p",{className:"ml-8 text-green-600",children:"break;"}),t.jsx("p",{className:"ml-4 text-purple-600",children:"default:"}),t.jsxs("p",{className:"ml-8 text-blue-600",children:["echo ",t.jsx("span",{className:"text-orange-500",children:'"Regular day"'}),";"]}),t.jsx("p",{className:"text-green-600",children:"}"})]})]}),t.jsx(B,{title:"Conditional Statements Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"Which operator is used for strict equality (checks value AND type)?",options:["=","==","===","!=="],correctAnswer:2,explanation:"=== is the identical operator that checks both value and type."},{question:"What is the ternary operator in PHP?",options:["&&","?:","??","||"],correctAnswer:1,explanation:"The ternary operator is ?: which acts as a shorthand if-else statement."}]})]})},"php-loops":{id:"php-loops",title:"Loop Statements",icon:t.jsx(hc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Loops"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Loops allow you to execute a block of code multiple times. PHP supports several types of loops."}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{name:"while",desc:"Loops while condition is true",icon:"🔄"},{name:"do...while",desc:"Executes once, then loops",icon:"⚡"},{name:"for",desc:"Known number of iterations",icon:"🔢"},{name:"foreach",desc:"Iterates over arrays",icon:"📦"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-start gap-3",children:[t.jsx("span",{className:"text-2xl",children:i.icon}),t.jsxs("div",{children:[t.jsx("p",{className:"font-bold text-gray-800 dark:text-white",children:i.name}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]})]},f))}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Loop Syntax"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm space-y-4",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-purple-600",children:"// while loop"}),t.jsx("p",{className:"text-green-600",children:"$i = 1;"}),t.jsxs("p",{className:"text-green-600",children:["while ($i ","<="," 5) ","{"]}),t.jsx("p",{className:"ml-4 text-blue-600",children:"echo $i;"}),t.jsx("p",{className:"ml-4 text-green-600",children:"$i++;"}),t.jsx("p",{className:"text-green-600",children:"}"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-purple-600",children:"// for loop"}),t.jsxs("p",{className:"text-green-600",children:["for ($i = 0; $i ","<"," 5; $i++) ","{"]}),t.jsx("p",{className:"ml-4 text-blue-600",children:"echo $i;"}),t.jsx("p",{className:"text-green-600",children:"}"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-purple-600",children:"// foreach loop"}),t.jsxs("p",{className:"text-green-600",children:["$colors = [",t.jsx("span",{className:"text-orange-500",children:'"red"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"green"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"blue"'}),"];"]}),t.jsxs("p",{className:"text-green-600",children:["foreach ($colors as $color) ","{"]}),t.jsx("p",{className:"ml-4 text-blue-600",children:"echo $color;"}),t.jsx("p",{className:"text-green-600",children:"}"})]})]})]}),t.jsx(B,{title:"PHP Loops Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(Oe,{question:"Create a PHP script that prints the first 10 numbers of the Fibonacci sequence using a for loop.",hint:"The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two. Use a for loop with variables to track the sequence.",solution:"Use two variables to track the previous two numbers, and a for loop to iterate 10 times, printing each number and updating the variables."})]})},"php-arrays":{id:"php-arrays",title:"Arrays in PHP",icon:t.jsx(mc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Arrays"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Arrays are special variables that can hold multiple values at once. PHP supports both indexed and associative arrays."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Indexed Arrays"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm",children:[t.jsxs("p",{className:"text-green-600",children:["$colors = [",t.jsx("span",{className:"text-orange-500",children:'"red"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"green"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"blue"'}),"];"]}),t.jsx("p",{className:"text-gray-500 mt-2",children:"// Index: 0, 1, 2"})]})]}),t.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-bold text-purple-800 dark:text-purple-200 mb-3",children:"Associative Arrays"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm",children:[t.jsx("p",{className:"text-green-600",children:"$person = ["}),t.jsxs("p",{className:"ml-4 text-purple-600",children:['"name" ',"=>"," ",t.jsx("span",{className:"text-orange-500",children:'"John"'}),","]}),t.jsxs("p",{className:"ml-4 text-purple-600",children:['"age" ',"=>"," ",t.jsx("span",{className:"text-blue-500",children:"25"})]}),t.jsx("p",{className:"text-green-600",children:"];"})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Common Array Functions"}),t.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:["count()","array_push()","array_pop()","sort()","array_search()","in_array()","array_merge()","array_slice()"].map((i,f)=>t.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 text-center",children:t.jsx("code",{className:"text-sm text-green-600",children:i})},f))})})]}),t.jsx(B,{title:"PHP Arrays Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"How do you access the second element of an indexed array?",options:["$arr(1)","$arr{1}","$arr[1]","$arr->1"],correctAnswer:2,explanation:"Arrays in PHP use square brackets [] for indexing, starting from 0."},{question:"Which creates an associative array?",options:["$arr = [1, 2, 3]",'$arr = ["a", "b"]','$arr = ["name" => "John", "age" => 25]','$arr = {1: "a"}'],correctAnswer:2,explanation:"Associative arrays use key => value pairs."}]})]})},"php-functions":{id:"php-functions",title:"PHP Functions",icon:t.jsx(fc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Functions in PHP"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Functions are reusable blocks of code that perform a specific task. PHP has built-in functions and allows you to create custom functions."}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Creating Functions"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// User-defined function"}),t.jsxs("p",{className:"text-green-600",children:["function ",t.jsx("span",{className:"text-blue-600",children:"greet"}),"($name) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["return ",t.jsx("span",{className:"text-orange-500",children:'"Hello, " . $name;'})]}),t.jsx("p",{className:"text-green-600",children:"}"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Function with default parameter"}),t.jsxs("p",{className:"text-green-600",children:["function ",t.jsx("span",{className:"text-blue-600",children:"add"}),"($a, $b = 10) ","{"]}),t.jsx("p",{className:"ml-4 text-blue-600",children:"return $a + $b;"}),t.jsx("p",{className:"text-green-600",children:"}"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Built-in PHP Functions"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[t.jsxs("div",{className:"bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-orange-800 dark:text-orange-200 mb-2",children:"String Functions"}),t.jsx("code",{className:"text-sm text-orange-600",children:"strlen()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-orange-600",children:"str_replace()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-orange-600",children:"strtoupper()"})]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-blue-800 dark:text-blue-200 mb-2",children:"Array Functions"}),t.jsx("code",{className:"text-sm text-blue-600",children:"count()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-blue-600",children:"sort()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-blue-600",children:"array_sum()"})]}),t.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-4",children:[t.jsx("h5",{className:"font-bold text-green-800 dark:text-green-200 mb-2",children:"Math Functions"}),t.jsx("code",{className:"text-sm text-green-600",children:"abs()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-green-600",children:"round()"}),t.jsx("br",{}),t.jsx("code",{className:"text-sm text-green-600",children:"max()"})]})]})]}),t.jsx(B,{title:"PHP Functions Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(Oe,{question:"Write a PHP function that takes a number as a parameter and returns 'positive', 'negative', or 'zero' based on the number.",hint:"Use conditional statements inside the function. Check if the number is greater than, less than, or equal to zero.",solution:"Create a function with a number parameter and use if-elseif-else to return the appropriate string."})]})},"php-forms":{id:"php-forms",title:"Form Processing",icon:t.jsx(cc,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Form Processing"}),t.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:["PHP is commonly used to process HTML forms. You can use ",t.jsx("code",{children:"$_GET"})," and ",t.jsx("code",{children:"$_POST"})," superglobals to access form data."]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"GET vs POST"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold text-green-600 mb-2",children:"$_GET"}),t.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[t.jsx("li",{children:"Data in URL (visible)"}),t.jsx("li",{children:"Bookmarkable"}),t.jsx("li",{children:"Limited data size"}),t.jsx("li",{children:"Use for: Search, filters"})]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold text-purple-600 mb-2",children:"$_POST"}),t.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[t.jsx("li",{children:"Data in request body"}),t.jsx("li",{children:"Not visible in URL"}),t.jsx("li",{children:"Larger data capacity"}),t.jsx("li",{children:"Use for: Forms, sensitive data"})]})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Processing Form Data"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm",children:[t.jsxs("p",{className:"text-purple-600",children:["<",'form method="POST" action="process.php"',">"]}),t.jsxs("p",{className:"text-purple-600",children:["<",'input type="text" name="username"',">"]}),t.jsxs("p",{className:"text-purple-600",children:["<",'input type="password" name="password"',">"]}),t.jsxs("p",{className:"text-purple-600",children:["<",'button type="submit"',">","Login","<","/button",">"]}),t.jsxs("p",{className:"text-purple-600",children:["<","/form",">"]}),t.jsx("br",{}),t.jsx("p",{className:"text-green-600",children:"// In process.php:"}),t.jsxs("p",{className:"text-blue-600",children:["$username = $_POST[",t.jsx("span",{className:"text-orange-500",children:'"username"'}),"];"]}),t.jsxs("p",{className:"text-blue-600",children:["$password = $_POST[",t.jsx("span",{className:"text-orange-500",children:'"password"'}),"];"]})]})]}),t.jsx(B,{title:"PHP Form Processing Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(Oe,{question:"Create a simple contact form in HTML with name, email, and message fields. Then write PHP code to process the form and display the submitted data (with basic validation).",hint:"Create an HTML form with POST method and a corresponding PHP section that retrieves the data using $_POST and validates that fields are not empty.",solution:"Use htmlspecialchars() to sanitize output, check !empty() for required fields, and filter_var() for email validation."})]})},"php-files":{id:"php-files",title:"File Handling",icon:t.jsx(Wm,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP File Handling"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"PHP can read from and write to files on the server. This is useful for storing data persistently without a database."}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"File Operations"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// Reading a file"}),t.jsxs("p",{className:"text-green-600",children:["$content = file_get_contents(",t.jsx("span",{className:"text-orange-500",children:'"data.txt"'}),");"]}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Writing to a file"}),t.jsxs("p",{className:"text-green-600",children:["file_put_contents(",t.jsx("span",{className:"text-orange-500",children:'"data.txt"'}),", $data);"]}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Opening a file"}),t.jsxs("p",{className:"text-green-600",children:["$file = fopen(",t.jsx("span",{className:"text-orange-500",children:'"data.txt"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"r"'}),");"]}),t.jsx("p",{className:"text-blue-600",children:"$line = fgets($file);"}),t.jsx("p",{className:"text-green-600",children:"fclose($file);"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"File Modes"}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[{mode:"r",desc:"Read only"},{mode:"w",desc:"Write (overwrite)"},{mode:"a",desc:"Append"},{mode:"r+",desc:"Read & Write"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center",children:[t.jsx("code",{className:"text-lg text-green-600",children:i.mode}),t.jsx("p",{className:"text-xs text-gray-500 mt-1",children:i.desc})]},f))})]}),t.jsx(B,{title:"PHP File Handling Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"Which function reads entire file contents?",options:["fread()","file_get_contents()","read_file()","get_contents()"],correctAnswer:1,explanation:"file_get_contents() reads an entire file into a string."},{question:"What does the 'a' file mode do?",options:["Reads the file","Overwrites the file","Appends to the file","Creates a new file only"],correctAnswer:2,explanation:"The 'a' mode opens the file for writing and appends to the end."}]})]})},"php-sessions-cookies":{id:"php-sessions-cookies",title:"Sessions and Cookies",icon:t.jsx(Rm,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Sessions and Cookies"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Sessions and cookies allow you to store user data across multiple pages. They're essential for user authentication and maintaining state."}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6",children:[t.jsx("h4",{className:"font-bold text-blue-800 dark:text-blue-200 mb-3",children:"Cookies vs Sessions"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold text-purple-600 mb-2",children:"Cookies"}),t.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[t.jsx("li",{children:"Stored in user's browser"}),t.jsx("li",{children:"Smaller data (4KB max)"}),t.jsx("li",{children:"Persists until expiry"}),t.jsx("li",{children:"Less secure (client-side)"})]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4",children:[t.jsx("p",{className:"font-bold text-green-600 mb-2",children:"Sessions"}),t.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[t.jsx("li",{children:"Stored on server"}),t.jsx("li",{children:"Larger data capacity"}),t.jsx("li",{children:"Ends when browser closes"}),t.jsx("li",{children:"More secure (server-side)"})]})]})]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Syntax"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm space-y-4",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-purple-600",children:"// Setting a cookie"}),t.jsx("p",{className:"text-green-600",children:"setcookie("}),t.jsxs("p",{className:"ml-4 text-blue-600",children:['"username", ',t.jsx("span",{className:"text-orange-500",children:'"John"'}),","]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["time() + 3600  ",t.jsx("span",{className:"text-gray-500",children:"// expires in 1 hour"})]}),t.jsx("p",{className:"text-green-600",children:");"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-purple-600",children:"// Starting a session"}),t.jsx("p",{className:"text-green-600",children:"session_start();"}),t.jsxs("p",{className:"text-blue-600",children:["$_SESSION[",t.jsx("span",{className:"text-orange-500",children:'"user"'}),"] = ",t.jsx("span",{className:"text-orange-500",children:'"John"'}),";"]})]})]})]}),t.jsx(B,{title:"Sessions and Cookies Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"Where are session variables stored?",options:["In the user's browser","On the server","In a text file","In a database"],correctAnswer:1,explanation:"Sessions are stored on the server, while cookies are stored in the user's browser."},{question:"What function starts a session in PHP?",options:["start_session()","session_start()","begin_session()","init_session()"],correctAnswer:1,explanation:"session_start() must be called before using $_SESSION variables."}]})]})},"php-database":{id:"php-database",title:"Database Programming",icon:t.jsx(Gn,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP & MySQL Database"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"PHP can connect to MySQL databases to store and retrieve dynamic data. This is fundamental for building web applications."}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Database Connection Steps"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// 1. Create connection"}),t.jsx("p",{className:"text-green-600",children:"$conn = new mysqli($servername, $username, $password, $dbname);"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// 2. Execute query"}),t.jsxs("p",{className:"text-green-600",children:["$result = $conn->query(",t.jsx("span",{className:"text-orange-500",children:'"SELECT * FROM users"'}),");"]}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// 3. Fetch results"}),t.jsxs("p",{className:"text-green-600",children:["while ($row = $result->fetch_assoc()) ","{"]}),t.jsxs("p",{className:"ml-4 text-blue-600",children:["echo $row[",t.jsx("span",{className:"text-orange-500",children:'"name"'}),"];"]}),t.jsx("p",{className:"text-green-600",children:"}"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// 4. Close connection"}),t.jsx("p",{className:"text-green-600",children:"$conn->close();"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"CRUD Operations"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6",children:[{op:"CREATE",sql:"INSERT INTO",color:"green"},{op:"READ",sql:"SELECT",color:"blue"},{op:"UPDATE",sql:"UPDATE",color:"orange"},{op:"DELETE",sql:"DELETE",color:"red"}].map((i,f)=>t.jsxs("div",{className:`bg-${i.color}-50 dark:bg-${i.color}-900/20 border border-${i.color}-200 dark:border-${i.color}-800 rounded-xl p-3`,children:[t.jsx("p",{className:`font-bold text-${i.color}-800 dark:text-${i.color}-200`,children:i.op}),t.jsx("code",{className:"text-xs",children:i.sql})]},f))})]}),t.jsx(B,{title:"PHP Database Operations",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(Oe,{question:"Write PHP code to create a connection to a MySQL database, insert a new student record with name and age, then retrieve and display all students.",hint:"Use mysqli_connect() for connection, INSERT INTO and SELECT queries, and fetch_assoc() to retrieve results.",solution:"Create connection, use INSERT INTO to add data, use SELECT * to fetch all records, and loop through results with fetch_assoc()."})]})},"php-date-time":{id:"php-date-time",title:"Date and Time Functions",icon:t.jsx(zm,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP Date and Time"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"PHP has powerful date and time functions for formatting timestamps, calculating dates, and more."}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Common Date Functions"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// Current date/time"}),t.jsxs("p",{className:"text-green-600",children:["date(",t.jsx("span",{className:"text-orange-500",children:'"Y-m-d H:i:s"'}),");  ",t.jsx("span",{className:"text-gray-500",children:"// 2024-01-15 14:30:00"})]}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Format options"}),t.jsx("p",{className:"text-blue-600",children:"Y"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 2024 (4-digit year)"}),t.jsx("p",{className:"text-blue-600",children:"m"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 01-12 (month)"}),t.jsx("p",{className:"text-blue-600",children:"d"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 01-31 (day)"}),t.jsx("p",{className:"text-blue-600",children:"H"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 00-23 (hour)"}),t.jsx("p",{className:"text-blue-600",children:"i"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 00-59 (minutes)"}),t.jsx("p",{className:"text-blue-600",children:"s"}),"  ",t.jsx("span",{className:"text-gray-500",children:"// 00-59 (seconds)"})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Date Calculations"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm",children:[t.jsx("p",{className:"text-purple-600",children:"// Adding days"}),t.jsxs("p",{className:"text-green-600",children:["$future = date(",t.jsx("span",{className:"text-orange-500",children:'"Y-m-d"'}),", strtotime(",t.jsx("span",{className:"text-orange-500",children:'"+7 days"'}),"));"]}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Date difference"}),t.jsxs("p",{className:"text-green-600",children:["$diff = date_diff(date_create(",t.jsx("span",{className:"text-orange-500",children:'"2024-01-01"'}),"), date_create(",t.jsx("span",{className:"text-orange-500",children:'"2024-01-15"'}),"));"]}),t.jsxs("p",{className:"text-blue-600",children:["echo $diff->format(",t.jsx("span",{className:"text-orange-500",children:'"%a days"'}),");"]})]})]}),t.jsx(B,{title:"PHP Date & Time Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"What does date('Y-m-d') return?",options:["15-01-2024","2024-01-15","January 15, 2024","01/15/2024"],correctAnswer:1,explanation:"The format 'Y-m-d' returns year-month-day in that order."},{question:"What function adds time to a date string?",options:["date_add()","strtotime()","date_modify()","strtotime() with +/-"],correctAnswer:3,explanation:"strtotime() with expressions like '+7 days' or '-1 month' is commonly used for date arithmetic."}]})]})},"php-oop":{id:"php-oop",title:"PHP Object-Oriented Programming",icon:t.jsx(eo,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"PHP OOP"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"PHP supports Object-Oriented Programming (OOP) with classes, objects, inheritance, and more. OOP helps organize code into reusable components."}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"Classes and Objects"}),t.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-4 font-mono text-sm mb-6",children:[t.jsx("p",{className:"text-purple-600",children:"// Define a class"}),t.jsxs("p",{className:"text-green-600",children:["class ",t.jsx("span",{className:"text-blue-600",children:"Student"})," ","{"]}),t.jsx("p",{className:"ml-4 text-purple-600",children:"public $name;"}),t.jsx("p",{className:"ml-4 text-purple-600",children:"public $grade;"}),t.jsx("br",{}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["public function ",t.jsx("span",{className:"text-blue-600",children:"__construct"}),"($name, $grade) ","{"]}),t.jsx("p",{className:"ml-8 text-blue-600",children:"$this->name = $name;"}),t.jsx("p",{className:"ml-8 text-blue-600",children:"$this->grade = $grade;"}),t.jsx("p",{className:"ml-4 text-purple-600",children:"}"}),t.jsx("br",{}),t.jsxs("p",{className:"ml-4 text-purple-600",children:["public function ",t.jsx("span",{className:"text-blue-600",children:"getInfo"}),"() ","{"]}),t.jsxs("p",{className:"ml-8 text-blue-600",children:["return ",t.jsx("span",{className:"text-orange-500",children:'"$this->name - Grade: $this->grade"'}),";"]}),t.jsx("p",{className:"ml-4 text-purple-600",children:"}"}),t.jsx("p",{className:"text-green-600",children:"}"}),t.jsx("br",{}),t.jsx("p",{className:"text-purple-600",children:"// Create object"}),t.jsxs("p",{className:"text-green-600",children:["$student = new ",t.jsx("span",{className:"text-blue-600",children:"Student"}),"(",t.jsx("span",{className:"text-orange-500",children:'"Alice"'}),", ",t.jsx("span",{className:"text-orange-500",children:'"A"'}),");"]})]}),t.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-3",children:"OOP Concepts"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{concept:"Encapsulation",desc:"Bundling data and methods together"},{concept:"Inheritance",desc:"Child class inherits from parent"},{concept:"Polymorphism",desc:"Same method, different behavior"},{concept:"Abstraction",desc:"Hiding complex implementation"}].map((i,f)=>t.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[t.jsx("p",{className:"font-bold text-purple-600 mb-1",children:i.concept}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:i.desc})]},f))})]}),t.jsx(B,{title:"PHP OOP Demo",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`}),t.jsx(ce,{questions:[{question:"What is the correct way to create an object of a class named 'Car'?",options:["car = new Car()","$car = new Car()","create Car()","$car = Car->new()"],correctAnswer:1,explanation:"In PHP, objects are created using the 'new' keyword followed by the class name, and variables start with $."},{question:"What magic method is called when an object is created?",options:["__init__","__construct","__create","__new"],correctAnswer:1,explanation:"__construct is the PHP magic method called when an object is instantiated."}]})]})},"php-exercises":{id:"php-exercises",title:"Practical Exercises",icon:t.jsx(Bm,{className:"w-5 h-5"}),content:t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Chapter 6 Practice"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Let's put everything together! Complete these exercises to practice PHP server-side programming."}),t.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white mb-6",children:[t.jsx("h4",{className:"font-bold mb-3",children:"Exercise Challenges"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Create a student registration form"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Implement a login system with sessions"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Build a simple CRUD application"})]}),t.jsxs("li",{className:"flex items-start gap-2",children:[t.jsx(z,{className:"w-5 h-5 mt-0.5 flex-shrink-0"}),t.jsx("span",{children:"Create a file-based guestbook"})]})]})]})]}),t.jsx(B,{title:"Build a Simple Counter App",language:"html",initialCode:`<!DOCTYPE html>
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
</html>`})]})}},P=Object.values($);return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",children:t.jsx(jt,{className:"w-10 h-10"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Chapter 6: PHP & Server-Side Programming"}),t.jsx("p",{className:"text-white/80",children:"Master PHP: variables, operators, conditionals, loops, arrays, functions, forms, files, sessions, and database connectivity"})]})]}),t.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Topics"}),t.jsx("p",{className:"font-bold",children:P.length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Exercises"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.exercise).length})]}),t.jsxs("div",{className:"bg-white/20 rounded-lg px-4 py-2",children:[t.jsx("p",{className:"text-sm opacity-80",children:"Quizzes"}),t.jsx("p",{className:"font-bold",children:P.filter(i=>i.quiz).length})]})]})]}),t.jsx("div",{className:"space-y-4",children:P.map((i,f)=>{const C=p===i.id,M=y[`chapter6-${i.id}`];return t.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${C?"border-green-500":"border-transparent hover:border-gray-200 dark:border-gray-700"}`,children:[t.jsxs("button",{onClick:()=>k(C?null:i.id),className:"w-full p-4 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600",children:M?t.jsx(z,{className:"w-6 h-6"}):t.jsx("span",{className:"font-bold",children:f+1})}),t.jsxs("div",{className:"text-left",children:[t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Click to ",C?"collapse":"expand"]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[i.exercise&&t.jsx("span",{className:"px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-xs rounded-lg",children:"Exercise"}),i.quiz&&t.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-lg",children:"Quiz"}),C?t.jsx(Br,{className:"w-5 h-5 text-gray-400"}):t.jsx(Ht,{className:"w-5 h-5 text-gray-400"})]})]}),C&&t.jsxs("div",{className:"p-6 pt-0 space-y-6 border-t border-gray-100 dark:border-gray-700",children:[i.content,i.exercise&&t.jsx("div",{className:"mt-6",children:i.exercise}),i.quiz&&t.jsx("div",{className:"mt-6",children:t.jsx(ce,{questions:i.quiz.questions})}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700",children:[!M&&t.jsxs("button",{onClick:()=>S(i.id),className:"flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors",children:[t.jsx(z,{className:"w-5 h-5"}),"Mark as Complete"]}),M&&t.jsxs("span",{className:"flex items-center gap-2 text-green-600 font-medium",children:[t.jsx(z,{className:"w-5 h-5"}),"Completed"]})]})]})]},i.id)})})]})}function hp({chapters:y,setCurrentChapter:T}){const p=[{icon:t.jsx(Zn,{className:"w-6 h-6"}),title:"Interactive Learning",description:"Learn by doing with live code editors and instant feedback"},{icon:t.jsx(dc,{className:"w-6 h-6"}),title:"Visual Explanations",description:"Complex concepts explained with animations and diagrams"},{icon:t.jsx(Ds,{className:"w-6 h-6"}),title:"Practice Exercises",description:"Reinforce your learning with hands-on challenges"},{icon:t.jsx(As,{className:"w-6 h-6"}),title:"Track Progress",description:"Monitor your learning journey and celebrate achievements"},{icon:t.jsx(jt,{className:"w-6 h-6"}),title:"Server-Side PHP",description:"Learn server-side programming with PHP and database connectivity"}];return t.jsxs("div",{className:"space-y-12",children:[t.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-8 md:p-12 text-white",children:[t.jsx("div",{className:"absolute inset-0 bg-black/10"}),t.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"}),t.jsx("div",{className:"absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"}),t.jsxs("div",{className:"relative z-10",children:[t.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:"Welcome to WebDev Academy"}),t.jsx("p",{className:"text-xl text-white/90 mb-8 max-w-2xl",children:"Master web development through interactive lessons, hands-on coding, and visual demonstrations. Start your journey from beginner to professional."}),t.jsxs("button",{onClick:()=>T("chapter1"),className:"inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg",children:["Start Learning",t.jsx(Xl,{className:"w-5 h-5"})]})]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:p.map((k,S)=>t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4",children:k.icon}),t.jsx("h3",{className:"text-lg font-bold text-gray-800 dark:text-white mb-2",children:k.title}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:k.description})]},S))}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6",children:"Choose Your Learning Path"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:y.map(k=>t.jsxs("button",{onClick:()=>T(k.id),className:`${k.bgColor} ${k.borderColor} border-2 rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`,children:[t.jsxs("div",{className:"flex items-start justify-between mb-4",children:[t.jsx("div",{className:`${k.color}`,children:k.icon}),t.jsxs("div",{className:"text-right",children:[t.jsxs("div",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:[k.progress,"%"]}),t.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Complete"})]})]}),t.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-2",children:k.title}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-4",children:k.subtitle}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-4",children:k.description}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400",children:[t.jsxs("span",{children:[k.topics," Topics"]}),t.jsxs("span",{children:[k.exercises," Exercises"]})]}),t.jsxs("div",{className:`flex items-center gap-2 ${k.color} font-semibold group-hover:gap-3 transition-all`,children:["Start",t.jsx(Xl,{className:"w-4 h-4"})]})]}),t.jsx("div",{className:"mt-4 bg-white/50 dark:bg-gray-700/50 rounded-full h-2",children:t.jsx("div",{className:`bg-gradient-to-r ${k.color.replace("text-","from-").replace("600","400")} to-${k.color.replace("text-","to-")} rounded-full h-2 transition-all duration-500`,style:{width:`${k.progress}%`}})})]},k.id))})]}),t.jsxs("div",{className:"bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8",children:[t.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center",children:"How to Use This Platform"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4",children:"1"}),t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white mb-2",children:"Read & Learn"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Each topic includes clear explanations with visual examples"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4",children:"2"}),t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white mb-2",children:"Code & Practice"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Write real code in the interactive editor and see instant results"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4",children:"3"}),t.jsx("h3",{className:"font-bold text-gray-800 dark:text-white mb-2",children:"Test Yourself"}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Complete exercises and quizzes to verify your understanding"})]})]})]})]})}function gp({progress:y}){const T=()=>y>=80?"text-yellow-500":y>=50?"text-blue-500":"text-gray-500",p=()=>y>=80?"bg-yellow-100 dark:bg-yellow-900/30":y>=50?"bg-blue-100 dark:bg-blue-900/30":"bg-gray-100 dark:bg-gray-700";return t.jsxs("div",{className:`flex items-center gap-2 px-4 py-2 rounded-full ${p()}`,children:[y>=80?t.jsx(Ds,{className:`w-5 h-5 ${T()}`}):t.jsx(ap,{className:`w-5 h-5 ${T()}`}),t.jsx("div",{className:"flex flex-col",children:t.jsxs("span",{className:`text-sm font-bold ${T()}`,children:[y,"%"]})}),t.jsx("div",{className:"w-20 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden",children:t.jsx("div",{className:`h-full transition-all duration-500 ${y>=80?"bg-gradient-to-r from-yellow-400 to-yellow-600":y>=50?"bg-gradient-to-r from-blue-400 to-blue-600":"bg-gradient-to-r from-gray-400 to-gray-600"}`,style:{width:`${y}%`}})})]})}function fp({onAuthSuccess:y,onClose:T}){const[p,k]=U.useState("login"),[S,$]=U.useState(!1),[P,i]=U.useState(null),[f,C]=U.useState(null),[M,J]=U.useState(!1),[F,ue]=U.useState(!1),[ne,re]=U.useState(""),[R,Te]=U.useState(""),[he,ae]=U.useState(""),[ee,X]=U.useState(""),[ve,Me]=U.useState(""),[G,K]=U.useState({}),me=Q=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Q),tt=Q=>Q.length>=8,De=()=>{const Q={};return(p==="register"||p==="login")&&(ne?me(ne)||(Q.email="Please enter a valid email address"):Q.email="Email is required"),(p==="register"||p==="login"||p==="reset-password")&&(R?p==="register"&&!tt(R)&&(Q.password="Password must be at least 8 characters"):Q.password="Password is required"),p==="register"&&(ee||(Q.name="Name is required"),he?R!==he&&(Q.confirmPassword="Passwords do not match"):Q.confirmPassword="Please confirm your password"),p==="reset-password"&&(ve||(Q.resetCode="Reset code is required")),K(Q),Object.keys(Q).length===0},Ve=async Q=>{if(Q.preventDefault(),i(null),C(null),!!De()){$(!0);try{switch(await new Promise(Le=>setTimeout(Le,1500)),p){case"login":const Le={id:"user_"+Date.now(),email:ne,name:ee||ne.split("@")[0]};y(Le);break;case"register":const we={id:"user_"+Date.now(),email:ne,name:ee};C("Account created successfully! Please check your email to verify your account."),setTimeout(()=>{k("login")},2e3);break;case"forgot-password":C("Password reset link has been sent to your email address."),k("login");break;case"reset-password":C("Password has been reset successfully! You can now login with your new password."),k("login"),Te(""),ae(""),Me("");break}}catch{i("An error occurred. Please try again.")}finally{$(!1)}}},rt=()=>{switch(p){case"login":return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email Address"}),t.jsxs("div",{className:"relative",children:[t.jsx(Yn,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:"email",value:ne,onChange:Q=>re(Q.target.value),className:`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${G.email?"border-red-500":"border-gray-300"}`,placeholder:"you@example.com"})]}),G.email&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:G.email})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(Fr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:M?"text":"password",value:R,onChange:Q=>Te(Q.target.value),className:`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${G.password?"border-red-500":"border-gray-300"}`,placeholder:"Enter your password"}),t.jsx("button",{type:"button",onClick:()=>J(!M),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:M?t.jsx(Ls,{className:"w-5 h-5"}):t.jsx(hr,{className:"w-5 h-5"})})]}),G.password&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:G.password})]})]}),t.jsx("button",{type:"button",onClick:()=>k("forgot-password"),className:"text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400",children:"Forgot your password?"}),t.jsxs("button",{type:"submit",disabled:S,className:"w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2",children:[S&&t.jsx(Qn,{className:"w-5 h-5 animate-spin"}),"Sign In"]}),t.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Don't have an account?"," ",t.jsx("button",{type:"button",onClick:()=>k("register"),className:"text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium",children:"Sign up"})]})]});case"register":return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Full Name"}),t.jsxs("div",{className:"relative",children:[t.jsx(Xn,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:"text",value:ee,onChange:Q=>X(Q.target.value),className:`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${G.name?"border-red-500":"border-gray-300"}`,placeholder:"John Doe"})]}),G.name&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:G.name})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email Address"}),t.jsxs("div",{className:"relative",children:[t.jsx(Yn,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:"email",value:ne,onChange:Q=>re(Q.target.value),className:`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${G.email?"border-red-500":"border-gray-300"}`,placeholder:"you@example.com"})]}),G.email&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:G.email})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(Fr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:M?"text":"password",value:R,onChange:Q=>Te(Q.target.value),className:`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${G.password?"border-red-500":"border-gray-300"}`,placeholder:"At least 8 characters"}),t.jsx("button",{type:"button",onClick:()=>J(!M),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:M?t.jsx(Ls,{className:"w-5 h-5"}):t.jsx(hr,{className:"w-5 h-5"})})]}),G.password&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:G.password})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Confirm Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(Fr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:F?"text":"password",value:he,onChange:Q=>ae(Q.target.value),className:`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${G.confirmPassword?"border-red-500":"border-gray-300"}`,placeholder:"Confirm your password"}),t.jsx("button",{type:"button",onClick:()=>ue(!F),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:F?t.jsx(Ls,{className:"w-5 h-5"}):t.jsx(hr,{className:"w-5 h-5"})})]}),G.confirmPassword&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:G.confirmPassword})]})]}),t.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4",children:[t.jsx("h4",{className:"font-medium text-blue-800 dark:text-blue-200 mb-2",children:"Password Requirements:"}),t.jsxs("ul",{className:"space-y-1 text-sm text-blue-700 dark:text-blue-300",children:[t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(z,{className:"w-4 h-4"}),"At least 8 characters long"]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(z,{className:"w-4 h-4"}),"Contains uppercase and lowercase letters"]}),t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(z,{className:"w-4 h-4"}),"Contains at least one number"]})]})]}),t.jsxs("button",{type:"submit",disabled:S,className:"w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2",children:[S&&t.jsx(Qn,{className:"w-5 h-5 animate-spin"}),"Create Account"]}),t.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["Already have an account?"," ",t.jsx("button",{type:"button",onClick:()=>k("login"),className:"text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium",children:"Sign in"})]})]});case"forgot-password":return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("div",{className:"w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4",children:t.jsx(Yn,{className:"w-8 h-8 text-blue-600"})}),t.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Reset Password"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:"Enter your email address and we'll send you a link to reset your password."})]}),t.jsx("div",{className:"space-y-4",children:t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email Address"}),t.jsxs("div",{className:"relative",children:[t.jsx(Yn,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:"email",value:ne,onChange:Q=>re(Q.target.value),className:`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${G.email?"border-red-500":"border-gray-300"}`,placeholder:"you@example.com"})]}),G.email&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:G.email})]})}),t.jsxs("button",{type:"submit",disabled:S,className:"w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2",children:[S&&t.jsx(Qn,{className:"w-5 h-5 animate-spin"}),"Send Reset Link"]}),t.jsxs("button",{type:"button",onClick:()=>k("login"),className:"w-full flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200",children:[t.jsx(oc,{className:"w-4 h-4"}),"Back to Sign In"]})]});case"reset-password":return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("div",{className:"w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4",children:t.jsx(Fr,{className:"w-8 h-8 text-green-600"})}),t.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Set New Password"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:"Create a new password for your account."})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Reset Code"}),t.jsxs("div",{className:"relative",children:[t.jsx(z,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:"text",value:ve,onChange:Q=>Me(Q.target.value),className:`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${G.resetCode?"border-red-500":"border-gray-300"}`,placeholder:"Enter the reset code from your email"})]}),G.resetCode&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:G.resetCode})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"New Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(Fr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:M?"text":"password",value:R,onChange:Q=>Te(Q.target.value),className:`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${G.password?"border-red-500":"border-gray-300"}`,placeholder:"At least 8 characters"}),t.jsx("button",{type:"button",onClick:()=>J(!M),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:M?t.jsx(Ls,{className:"w-5 h-5"}):t.jsx(hr,{className:"w-5 h-5"})})]}),G.password&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:G.password})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Confirm New Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(Fr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),t.jsx("input",{type:F?"text":"password",value:he,onChange:Q=>ae(Q.target.value),className:`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${G.confirmPassword?"border-red-500":"border-gray-300"}`,placeholder:"Confirm your new password"}),t.jsx("button",{type:"button",onClick:()=>ue(!F),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:F?t.jsx(Ls,{className:"w-5 h-5"}):t.jsx(hr,{className:"w-5 h-5"})})]}),G.confirmPassword&&t.jsx("p",{className:"mt-1 text-sm text-red-500",children:G.confirmPassword})]})]}),t.jsxs("button",{type:"submit",disabled:S,className:"w-full py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2",children:[S&&t.jsx(Qn,{className:"w-5 h-5 animate-spin"}),"Reset Password"]}),t.jsxs("button",{type:"button",onClick:()=>k("login"),className:"w-full flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200",children:[t.jsx(oc,{className:"w-4 h-4"}),"Back to Sign In"]})]})}};return t.jsx("div",{className:"min-h-[calc(100vh-8rem)] flex items-center justify-center py-12",children:t.jsx("div",{className:"w-full max-w-md",children:t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 relative",children:[t.jsx("button",{onClick:T,className:"absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:t.jsx(bc,{className:"w-5 h-5 text-gray-500"})}),t.jsxs("div",{className:"flex items-center justify-center gap-3 mb-8",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center",children:t.jsx(Xn,{className:"w-7 h-7 text-white"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"WebDev Academy"}),t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[p==="login"&&"Welcome back!",p==="register"&&"Create your account",p==="forgot-password"&&"Reset your password",p==="reset-password"&&"Create new password"]})]})]}),P&&t.jsxs("div",{className:"mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3",children:[t.jsx(Im,{className:"w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"}),t.jsx("p",{className:"text-sm text-red-700 dark:text-red-300",children:P})]}),f&&t.jsxs("div",{className:"mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-start gap-3",children:[t.jsx(z,{className:"w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"}),t.jsx("p",{className:"text-sm text-green-700 dark:text-green-300",children:f})]}),t.jsx("form",{onSubmit:Ve,className:"space-y-5",children:rt()}),t.jsx("div",{className:"mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl",children:t.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:[t.jsx("strong",{children:"Demo Mode:"})," Enter any valid email and password (8+ chars) to test authentication."]})})]})})})}function yp(){const[y,T]=U.useState("home"),[p,k]=U.useState(!0),[S,$]=U.useState(!1),[P,i]=U.useState({}),[f,C]=U.useState(!1),[M,J]=U.useState(!1),[F,ue]=U.useState(null),[ne,re]=U.useState(!1);U.useEffect(()=>{const K=localStorage.getItem("chapterProgress");K&&i(JSON.parse(K));const me=localStorage.getItem("user");me&&ue(JSON.parse(me))},[]),U.useEffect(()=>{const K=me=>{me.detail?(ue(me.detail),localStorage.setItem("user",JSON.stringify(me.detail))):(ue(null),localStorage.removeItem("user"))};return window.addEventListener("authStateChange",K),()=>window.removeEventListener("authStateChange",K)},[]);const R=(K,me,tt)=>{const De={...P,[`${K}-${me}`]:tt};i(De),localStorage.setItem("chapterProgress",JSON.stringify(De)),F&&Te(F.id,De)},Te=async(K,me)=>{localStorage.setItem(`progress_${K}`,JSON.stringify(me))},he=async K=>{const me=localStorage.getItem(`progress_${K}`);me&&(i(JSON.parse(me)),localStorage.setItem("chapterProgress",me))},ae=()=>{ue(null),localStorage.removeItem("user"),re(!1),window.dispatchEvent(new CustomEvent("authStateChange",{detail:null}))},ee=(K,me)=>{const tt=Object.keys(P).filter(De=>De.startsWith(K)&&P[De]).length;return Math.round(tt/me*100)},X=[{id:"chapter1",title:"Chapter 1",subtitle:"Introduction to Internet Programming",icon:t.jsx($s,{className:"w-8 h-8"}),color:"text-blue-600",bgColor:"bg-blue-50 dark:bg-blue-900/20",borderColor:"border-blue-500",progress:ee("chapter1",12),description:"Learn the fundamentals of the Internet, WWW, HTTP protocol, TCP/IP, DNS, URLs, and client-server architecture.",topics:12,exercises:8},{id:"chapter2",title:"Chapter 2",subtitle:"HTML Fundamentals",icon:t.jsx(Wr,{className:"w-8 h-8"}),color:"text-orange-600",bgColor:"bg-orange-50 dark:bg-orange-900/20",borderColor:"border-orange-500",progress:ee("chapter2",20),description:"Master HTML tags, elements, attributes, forms, tables, lists, images, and multimedia content.",topics:20,exercises:15},{id:"chapter3",title:"Chapter 3",subtitle:"JavaScript Basics",icon:t.jsx(Kn,{className:"w-8 h-8"}),color:"text-yellow-600",bgColor:"bg-yellow-50 dark:bg-yellow-900/20",borderColor:"border-yellow-500",progress:ee("chapter3",18),description:"Learn JavaScript fundamentals: variables, operators, conditionals, loops, functions, and arrays.",topics:18,exercises:12},{id:"chapter4",title:"Chapter 4",subtitle:"Advanced JavaScript & jQuery",icon:t.jsx(As,{className:"w-8 h-8"}),color:"text-purple-600",bgColor:"bg-purple-50 dark:bg-purple-900/20",borderColor:"border-purple-500",progress:ee("chapter4",20),description:"Explore DOM manipulation, events, objects, strings, dates, regular expressions, cookies, and jQuery.",topics:20,exercises:15},{id:"chapter5",title:"Chapter 5",subtitle:"CSS - Styling the Web",icon:t.jsx(Jn,{className:"w-8 h-8"}),color:"text-pink-600",bgColor:"bg-pink-50 dark:bg-pink-900/20",borderColor:"border-pink-500",progress:ee("chapter5",26),description:"Master CSS: selectors, box model, flexbox, grid, responsive design, animations, and modern CSS3 features.",topics:26,exercises:18},{id:"chapter6",title:"Chapter 6",subtitle:"PHP & Server-Side Programming",icon:t.jsx(jt,{className:"w-8 h-8"}),color:"text-green-600",bgColor:"bg-green-50 dark:bg-green-900/20",borderColor:"border-green-500",progress:ee("chapter6",24),description:"Learn PHP: variables, operators, conditionals, loops, arrays, functions, forms, files, sessions, and database connectivity.",topics:24,exercises:16}],ve=()=>{switch(y){case"chapter1":return t.jsx(dp,{progress:P,updateProgress:R});case"chapter2":return t.jsx(cp,{progress:P,updateProgress:R});case"chapter3":return t.jsx(up,{progress:P,updateProgress:R});case"chapter4":return t.jsx(mp,{progress:P,updateProgress:R});case"chapter5":return t.jsx(pp,{progress:P,updateProgress:R});case"chapter6":return t.jsx(xp,{progress:P,updateProgress:R});default:return t.jsx(hp,{chapters:X,setCurrentChapter:T})}},Me=Math.round(X.reduce((K,me)=>K+me.progress,0)/X.length),G=K=>{ue(K),J(!1),localStorage.setItem("user",JSON.stringify(K)),he(K.id)};return t.jsx("div",{className:`${S?"dark":""}`,children:t.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:[t.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700",children:t.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("button",{onClick:()=>C(!f),className:"lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:f?t.jsx(bc,{className:"w-6 h-6"}):t.jsx(Zm,{className:"w-6 h-6"})}),t.jsxs("button",{onClick:()=>T("home"),className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg",children:t.jsx(Lm,{className:"w-6 h-6 text-white"})}),t.jsxs("div",{className:"hidden sm:block",children:[t.jsx("h1",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"WebDev Academy"}),t.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Interactive Learning Platform"})]})]})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(gp,{progress:Me}),F?t.jsxs("div",{className:"relative",children:[t.jsxs("button",{onClick:()=>re(!ne),className:"flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:[t.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center",children:t.jsx("span",{className:"text-white text-sm font-bold",children:F.name.charAt(0).toUpperCase()})}),t.jsx("span",{className:"hidden md:block text-sm text-gray-700 dark:text-gray-300",children:F.name})]}),ne&&t.jsxs("div",{className:"absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50",children:[t.jsxs("div",{className:"px-4 py-2 border-b border-gray-200 dark:border-gray-700",children:[t.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:F.name}),t.jsx("p",{className:"text-sm text-gray-500",children:F.email})]}),t.jsxs("button",{onClick:()=>{re(!1)},className:"w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",children:[t.jsx(Xn,{className:"w-4 h-4"}),"Profile"]}),t.jsxs("button",{onClick:()=>{re(!1)},className:"w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",children:[t.jsx(rp,{className:"w-4 h-4"}),"Settings"]}),t.jsx("div",{className:"border-t border-gray-200 dark:border-gray-700 mt-2 pt-2",children:t.jsxs("button",{onClick:ae,className:"w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20",children:[t.jsx(Xm,{className:"w-4 h-4"}),"Logout"]})})]})]}):t.jsxs("button",{onClick:()=>J(!0),className:"flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity",children:[t.jsx(Xn,{className:"w-4 h-4"}),t.jsx("span",{className:"hidden md:block",children:"Sign In"})]}),t.jsx("button",{onClick:()=>$(!S),className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:S?t.jsx(lp,{className:"w-5 h-5 text-yellow-500"}):t.jsx(ep,{className:"w-5 h-5 text-gray-600"})})]})]})}),t.jsxs("aside",{className:`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-40
          ${f?"translate-x-0":"-translate-x-full lg:translate-x-0"}
          ${p?"w-64":"w-20"}`,children:[t.jsx("div",{className:"p-4",children:t.jsxs("button",{onClick:()=>k(!p),className:"hidden lg:flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:[p?t.jsx(_m,{className:"w-5 h-5"}):t.jsx(Ht,{className:"w-5 h-5"}),p&&t.jsx("span",{className:"text-sm",children:"Collapse"})]})}),t.jsxs("nav",{className:"px-2 space-y-1 overflow-y-auto max-h-[calc(100vh-12rem)]",children:[t.jsxs("button",{onClick:()=>{T("home"),C(!1)},className:`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${y==="home"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg":"hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:[t.jsx(Vm,{className:"w-5 h-5 flex-shrink-0"}),p&&t.jsx("span",{className:"font-medium whitespace-nowrap",children:"Home"})]}),X.map(K=>t.jsxs("button",{onClick:()=>{T(K.id),C(!1)},className:`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${y===K.id?`bg-gradient-to-r ${K.bgColor.replace("bg-","from-").replace("/20","-500").replace("-50","-400")} ${K.color} shadow-lg`:"hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:[t.jsx("span",{className:K.color,children:K.icon}),p&&t.jsxs("div",{className:"text-left flex-1 min-w-0",children:[t.jsx("p",{className:"font-semibold text-sm truncate",children:K.title}),t.jsx("p",{className:"text-xs opacity-75 truncate whitespace-nowrap overflow-hidden text-overflow-ellipsis",children:K.subtitle})]})]},K.id))]}),p&&t.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:t.jsxs("div",{className:"bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-4 text-white",children:[t.jsx(Ds,{className:"w-8 h-8 mb-2"}),t.jsx("p",{className:"font-bold",children:"Keep Learning!"}),t.jsx("p",{className:"text-sm opacity-90",children:"Complete all chapters to earn your certificate"}),t.jsx("div",{className:"mt-2 bg-white/30 rounded-full h-2",children:t.jsx("div",{className:"bg-white rounded-full h-2 transition-all duration-500",style:{width:`${Me}%`}})})]})})]}),t.jsx("main",{className:`pt-16 min-h-screen transition-all duration-300 ${p?"lg:pl-64":"lg:pl-20"}`,children:t.jsx("div",{className:"container mx-auto px-4 py-8",children:M?t.jsx(fp,{onAuthSuccess:G,onClose:()=>J(!1)}):ve()})})]})})}Cm.createRoot(document.getElementById("root")).render(t.jsx(U.StrictMode,{children:t.jsx(Em,{children:t.jsx(yp,{})})}));
