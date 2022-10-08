/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{315:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return v})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return f}));const r=function(e){const t=[];let p=0;for(let i=0;i<e.length;i++){let n=e.charCodeAt(i);n<128?t[p++]=n:n<2048?(t[p++]=n>>6|192,t[p++]=63&n|128):55296==(64512&n)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++i)),t[p++]=n>>18|240,t[p++]=n>>12&63|128,t[p++]=n>>6&63|128,t[p++]=63&n|128):(t[p++]=n>>12|224,t[p++]=n>>6&63|128,t[p++]=63&n|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(input,e){if(!Array.isArray(input))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,output=[];for(let i=0;i<input.length;i+=3){const e=input[i],n=i+1<input.length,r=n?input[i+1]:0,o=i+2<input.length,c=o?input[i+2]:0,h=e>>2,l=(3&e)<<4|r>>4;let d=(15&r)<<2|c>>6,f=63&c;o||(f=64,n||(d=64)),output.push(t[h],t[l],t[d],t[f])}return output.join("")},encodeString(input,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(input):this.encodeByteArray(r(input),e)},decodeString(input,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(input):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&c)}else if(o>239&&o<365){const u=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{const c=e[n++],h=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&c)<<6|63&h)}}return t.join("")}(this.decodeStringToByteArray(input,e))},decodeStringToByteArray(input,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,output=[];for(let i=0;i<input.length;){const e=t[input.charAt(i++)],n=i<input.length?t[input.charAt(i)]:0;++i;const r=i<input.length?t[input.charAt(i)]:64;++i;const o=i<input.length?t[input.charAt(i)]:64;if(++i,null==e||null==n||null==r||null==o)throw Error();const c=e<<2|n>>4;if(output.push(c),64!==r){const e=n<<4&240|r>>2;if(output.push(e),64!==o){const e=r<<6&192|o;output.push(e)}}}return output},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}},c=function(e){return function(e){const t=r(e);return o.encodeByteArray(t,!0)}(e).replace(/\./g,"")};class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function l(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,sub=e.sub||e.user_id;if(!sub)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:sub,user_id:sub,firebase:{sign_in_provider:"custom",identities:{}}},e);return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(o)),""].join(".")}function d(){return"object"==typeof indexedDB}function f(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class m extends Error{constructor(code,e,t){super(e),this.code=code,this.customData=t,this.name="FirebaseError",Object.setPrototypeOf(this,m.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(code,...data){const e=data[0]||{},t=`${this.service}/${code}`,template=this.errors[code],n=template?function(template,data){return template.replace(w,((e,t)=>{const n=data[t];return null!=n?String(n):`<${t}?>`}))}(template,e):"Error",r=`${this.serviceName}: ${n} (${t}).`;return new m(t,r,e)}}const w=/\{\$([^}]+)}/g;function v(a,b){if(a===b)return!0;const e=Object.keys(a),t=Object.keys(b);for(const n of e){if(!t.includes(n))return!1;const e=a[n],r=b[n];if(y(e)&&y(r)){if(!v(e,r))return!1}else if(e!==r)return!1}for(const n of t)if(!e.includes(n))return!1;return!0}function y(e){return null!==e&&"object"==typeof e}function E(e){return e&&e._delegate?e._delegate:e}}).call(this,n(43))},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return X})),n.d(t,"b",(function(){return V})),n.d(t,"c",(function(){return z})),n.d(t,"d",(function(){return Z})),n.d(t,"e",(function(){return K})),n.d(t,"f",(function(){return Y}));var r=n(322);const o=[];var c;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(c||(c={}));const h={debug:c.DEBUG,verbose:c.VERBOSE,info:c.INFO,warn:c.WARN,error:c.ERROR,silent:c.SILENT},l=c.INFO,d={[c.DEBUG]:"log",[c.VERBOSE]:"log",[c.INFO]:"info",[c.WARN]:"warn",[c.ERROR]:"error"},f=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=d[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};var m=n(315);let _,w;const v=new WeakMap,y=new WeakMap,E=new WeakMap,I=new WeakMap,C=new WeakMap;let k={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return y.get(e);if("objectStoreNames"===t)return e.objectStoreNames||E.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return R(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function S(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(w||(w=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(D(this),t),R(v.get(this))}:function(...t){return R(e.apply(D(this),t))}:function(t,...n){const r=e.call(D(this),t,...n);return E.set(r,t.sort?t.sort():[t]),R(r)}}function O(e){return"function"==typeof e?S(e):(e instanceof IDBTransaction&&function(e){if(y.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",c),e.removeEventListener("abort",c)},o=()=>{t(),r()},c=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",c),e.addEventListener("abort",c)}));y.set(e,t)}(e),object=e,(_||(_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>object instanceof e))?new Proxy(e,k):e);var object}function R(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",c)},o=()=>{t(R(e.result)),r()},c=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",c)}));return t.then((t=>{t instanceof IDBCursor&&v.set(t,e)})).catch((()=>{})),C.set(t,e),t}(e);if(I.has(e))return I.get(e);const t=O(e);return t!==e&&(I.set(e,t),C.set(t,e)),t}const D=e=>C.get(e);const T=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],x=new Map;function L(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(x.get(t))return x.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!T.includes(n))return;const c=async function(e,...t){const c=this.transaction(e,o?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(t.shift())),(await Promise.all([h[n](...t),o&&c.done]))[0]};return x.set(t,c),c}k=(e=>({...e,get:(t,n,r)=>L(t,n)||e.get(t,n,r),has:(t,n)=>!!L(t,n)||e.has(t,n)}))(k);class B{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const component=e.getComponent();return"VERSION"===(null==component?void 0:component.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const P="@firebase/app",N="0.7.33",M=new class{constructor(e){this.name=e,this._logLevel=l,this._logHandler=f,this._userLogHandler=null,o.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in c))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?h[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,c.DEBUG,...e),this._logHandler(this,c.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,c.VERBOSE,...e),this._logHandler(this,c.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,c.INFO,...e),this._logHandler(this,c.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,c.WARN,...e),this._logHandler(this,c.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,c.ERROR,...e),this._logHandler(this,c.ERROR,...e)}}("@firebase/app"),j="[DEFAULT]",$={[P]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},U=new Map,F=new Map;function H(e,component){try{e.container.addComponent(component)}catch(t){M.debug(`Component ${component.name} failed to register with FirebaseApp ${e.name}`,t)}}function z(component){const e=component.name;if(F.has(e))return M.debug(`There were multiple attempts to register component ${e}.`),!1;F.set(e,component);for(const e of U.values())H(e,component);return!0}function V(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const W={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},G=new m.b("app","Firebase",W);class J{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}const X="9.10.0";function K(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:j,automaticDataCollectionEnabled:!1},t),o=n.name;if("string"!=typeof o||!o)throw G.create("bad-app-name",{appName:String(o)});const c=U.get(o);if(c){if(Object(m.f)(e,c.options)&&Object(m.f)(n,c.config))return c;throw G.create("duplicate-app",{appName:o})}const h=new r.b(o);for(const component of F.values())h.addComponent(component);const l=new J(e,n,h);return U.set(o,l),l}function Z(e="[DEFAULT]"){const t=U.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function Y(e,t,n){var o;let c=null!==(o=$[e])&&void 0!==o?o:e;n&&(c+=`-${n}`);const h=c.match(/\s|\//),l=t.match(/\s|\//);if(h||l){const e=[`Unable to register library "${c}" with version "${t}":`];return h&&e.push(`library name "${c}" contains illegal characters (whitespace or "/")`),h&&l&&e.push("and"),l&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void M.warn(e.join(" "))}z(new r.a(`${c}-version`,(()=>({library:c,version:t})),"VERSION"))}const Q="firebase-heartbeat-store";let ee=null;function te(){return ee||(ee=function(e,t,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(e,t),l=R(h);return r&&h.addEventListener("upgradeneeded",(e=>{r(R(h.result),e.oldVersion,e.newVersion,R(h.transaction))})),n&&h.addEventListener("blocked",(()=>n())),l.then((e=>{c&&e.addEventListener("close",(()=>c())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),l}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Q)}}).catch((e=>{throw G.create("idb-open",{originalErrorMessage:e.message})}))),ee}async function ne(e,t){var n;try{const n=(await te()).transaction(Q,"readwrite"),r=n.objectStore(Q);return await r.put(t,re(e)),n.done}catch(e){if(e instanceof m.c)M.warn(e.message);else{const t=G.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});M.warn(t.message)}}}function re(e){return`${e.name}!${e.options.appId}`}class se{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ie();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ie(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),ae(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ae(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(m.d)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ie(){return(new Date).toISOString().substring(0,10)}class oe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(m.h)()&&Object(m.i)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await te()).transaction(Q).objectStore(Q).get(re(e))}catch(e){if(e instanceof m.c)M.warn(e.message);else{const n=G.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});M.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ae(e){return Object(m.d)(JSON.stringify({version:2,heartbeats:e})).length}var ce;ce="",z(new r.a("platform-logger",(e=>new B(e)),"PRIVATE")),z(new r.a("heartbeat",(e=>new se(e)),"PRIVATE")),Y(P,N,ce),Y(P,N,"esm2017"),Y("fire-js","")},321:function(e,t,n){"use strict";var r=n(317);n.d(t,"a",(function(){return r.e}));Object(r.f)("firebase","9.10.0","app")},322:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var r=n(315);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const c="[DEFAULT]";class h{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(component){if(component.name!==this.name)throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=component,this.shouldAutoInitialize()){if(function(component){return"EAGER"===component.instantiationMode}(component))try{this.getOrInitializeService({instanceIdentifier:c})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const c=this.instances.get(r);return c&&e(c,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===c?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:c:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class l{constructor(e){this.name=e,this.providers=new Map}addComponent(component){const e=this.getProvider(component.name);if(e.isComponentSet())throw new Error(`Component ${component.name} has already been registered with ${this.name}`);e.setComponent(component)}addOrOverwriteComponent(component){this.getProvider(component.name).isComponentSet()&&this.providers.delete(component.name),this.addComponent(component)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new h(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return re})),n.d(t,"b",(function(){return ie})),n.d(t,"c",(function(){return se}));var r=n(317),o=n(315),c=n(322);const h="firebasestorage.googleapis.com";class l extends o.c{constructor(code,e){super(d(code),`Firebase Storage: ${e} (${d(code)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}_codeEquals(code){return d(code)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(code){return"storage/"+code}function f(){return new l("unknown","An unknown error occurred, please check the error payload for server response.")}function m(){return new l("canceled","User canceled the upload/download.")}function _(e){return new l("invalid-argument",e)}function w(){return new l("app-deleted","The Firebase app was deleted.")}function v(e){throw new l("internal-error","Internal error: "+e)}class y{constructor(e,path){this.bucket=e,this.path_=path}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=y.makeFromUrl(e,t)}catch(t){return new y(e,"")}if(""===n.path)return n;throw new l("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+r+"(/(.*))?$","i");function c(e){e.path_=decodeURIComponent(e.path)}const d=t.replace(/[.]/g,"\\."),f=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${d}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:c},{regex:new RegExp(`^https?://${t===h?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:c}];for(let i=0;i<f.length;i++){const t=f[i],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let o=r[t.indices.path];o||(o=""),n=new y(e,o),t.postModify(n);break}}if(null==n)throw function(e){return new l("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class E{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function I(p){return"string"==typeof p||p instanceof String}function C(e,t,n,r){if(r<t)throw _(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw _(`Invalid value for '${e}'. Expected ${n} or less.`)}function k(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function S(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}var O;!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(O||(O={}));class R{constructor(e,t,n,r,o,c,h,l,d,f,m){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=c,this.callback_=h,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new D(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===O.NO_ERROR,o=n.getStatus();if(!t||this.isRetryStatusCode_(o)){const t=n.getErrorCode()===O.ABORT;return void e(!1,new D(!1,null,t))}const c=-1!==this.successCodes_.indexOf(o);e(!0,new D(c,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==o){const e=f();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){r(this.appDelete_?w():m())}else{r(new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new D(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,o=null,c=null,h=!1,l=0;function d(){return 2===l}let f=!1;function m(...e){f||(f=!0,t.apply(null,e))}function _(t){o=setTimeout((()=>{o=null,e(v,d())}),t)}function w(){c&&clearTimeout(c)}function v(e,...t){if(f)return void w();if(e)return w(),void m.call(null,e,...t);if(d()||h)return w(),void m.call(null,e,...t);let n;r<64&&(r*=2),1===l?(l=2,n=0):n=1e3*(r+Math.random()),_(n)}let y=!1;function E(e){y||(y=!0,w(),f||(null!==o?(e||(l=2),clearTimeout(o),_(0)):e||(l=1)))}return _(0),c=setTimeout((()=>{h=!0,E(!0)}),n),E}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class D{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function T(s){let e;try{e=JSON.parse(s)}catch(e){return null}return"object"!=typeof(p=e)||Array.isArray(p)?null:e;var p}function A(path){const e=path.lastIndexOf("/",path.length-2);return-1===e?path:path.slice(e+1)}function x(e,t){return t}class L{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||x}}let B=null;function P(){if(B)return B;const e=[];e.push(new L("bucket")),e.push(new L("generation")),e.push(new L("metageneration")),e.push(new L("name","fullPath",!0));const t=new L("name");t.xform=function(e,t){return function(e){return!I(e)||e.length<2?e:A(e)}(t)},e.push(t);const n=new L("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new L("timeCreated")),e.push(new L("updated")),e.push(new L("md5Hash",null,!0)),e.push(new L("cacheControl",null,!0)),e.push(new L("contentDisposition",null,!0)),e.push(new L("contentEncoding",null,!0)),e.push(new L("contentLanguage",null,!0)),e.push(new L("contentType",null,!0)),e.push(new L("metadata","customMetadata",!0)),B=e,B}function N(e,t,n){const r={type:"file"},o=n.length;for(let i=0;i<o;i++){const e=n[i];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,path=e.fullPath,r=new y(n,path);return t._makeStorageReference(r)}})}(r,e),r}function M(e,t,n){const r=T(t);if(null===r)return null;return N(e,r,n)}class j{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function $(e){if(!e)throw f()}function U(e,t){return function(n,text){const r=M(e,text,t);return $(null!==r),function(e,t,n,r){const o=T(t);if(null===o)return null;if(!I(o.downloadTokens))return null;const c=o.downloadTokens;if(0===c.length)return null;const h=encodeURIComponent;return c.split(",").map((t=>{const o=e.bucket,path=e.fullPath;return k("/b/"+h(o)+"/o/"+h(path),n,r)+S({alt:"media",token:t})}))[0]}(r,text,e.host,e._protocol)}}function F(e){return function(t,n){let r;var path,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new l("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new l("quota-exceeded","Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(path=e.path,r=new l("unauthorized","User does not have permission to access '"+path+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function H(e){const t=F(e);return function(n,r){let o=t(n,r);var path;return 404===n.getStatus()&&(path=e.path,o=new l("object-not-found","Object '"+path+"' does not exist.")),o.serverResponse=r.serverResponse,o}}class z{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=O.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=O.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=O.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,body,n){if(this.sent_)throw v("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(const e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==body?this.xhr_.send(body):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw v("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw v("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw v("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw v("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(header){return this.xhr_.getResponseHeader(header)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class V extends z{initXhr(){this.xhr_.responseType="text"}}function W(){return new V}class G{constructor(e,t){this._service=e,this._location=t instanceof y?t:y.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new G(e,t)}get root(){const e=new y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return A(this._location.path)}get storage(){return this._service}get parent(){const e=function(path){if(0===path.length)return null;const e=path.lastIndexOf("/");return-1===e?"":path.slice(0,e)}(this._location.path);if(null===e)return null;const t=new y(this._location.bucket,e);return new G(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new l("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function J(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=k(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,c=new j(r,"GET",U(e,n),o);return c.errorHandler=H(t),c}(e.storage,e._location,P());return e.storage.makeRequestWithTokens(t,W).then((e=>{if(null===e)throw new l("no-download-url","The given file does not have any download URLs.");return e}))}function X(e,t){const n=function(path,e){const t=e.split("/").filter((component=>component.length>0)).join("/");return 0===path.length?t:path+"/"+t}(e._location.path,t),r=new y(e._location.bucket,n);return new G(e.storage,r)}function K(e,path){if(e instanceof Q){const t=e;if(null==t._bucket)throw new l("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const n=new G(t,t._bucket);return null!=path?K(n,path):n}return void 0!==path?X(e,path):e}function Z(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Q)return new G(e,t);throw _("To use ref(service, url), the first argument must be a Storage instance.")}return K(e,t)}function Y(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:y.makeFromBucketSpec(n,e)}class Q{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=h,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?y.makeFromBucketSpec(r,this._host):Y(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=y.makeFromBucketSpec(this._url,e):this._bucket=Y(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(time){C("time",0,Number.POSITIVE_INFINITY,time),this._maxUploadRetryTime=time}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(time){C("time",0,Number.POSITIVE_INFINITY,time),this._maxOperationRetryTime=time}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new G(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new E(w());{const o=function(e,t,n,r,o,c){const h=S(e.urlParams),l=e.url+h,d=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(d,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(d,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(d,c),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(d,r),new R(l,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const ee="@firebase/storage",te="0.9.9",ne="storage";function re(e){return J(e=Object(o.g)(e))}function se(e,t){return Z(e=Object(o.g)(e),t)}function ie(e=Object(r.d)(),t){e=Object(o.g)(e);return Object(r.b)(e,ne).getImmediate({identifier:t})}function oe(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return new Q(n,o,c,t,r.a)}Object(r.c)(new c.a(ne,oe,"PUBLIC").setMultipleInstances(!0)),Object(r.f)(ee,te,""),Object(r.f)(ee,te,"esm2017")}}]);