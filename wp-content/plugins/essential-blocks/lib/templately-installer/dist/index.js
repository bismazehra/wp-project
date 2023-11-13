/*! For license information please see index.js.LICENSE.txt */
!function(){"use strict";var t={n:function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../../../"}();var e=window.wp.element,r=window.wp.components,n=window.wp.data,o=(window.wp.blocks,window.wp.i18n),a=t.p+"images/patternLibrary.d7a1dd4d.jpg",i=window.wp.apiFetch,c=t.n(i);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(){u=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,i=Object.create(a.prototype),c=new T(n||[]);return o(i,"_invoke",{value:_(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var y="suspendedStart",m="suspendedYield",d="executing",v="completed",b={};function g(){}function w(){}function E(){}var L={};f(L,i,(function(){return this}));var O=Object.getPrototypeOf,j=O&&O(O(A([])));j&&j!==r&&n.call(j,i)&&(L=j);var S=E.prototype=g.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,i,c){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==l(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function _(e,r,n){var o=y;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=P(c,n);if(l){if(l===b)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?v:m,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,b;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(l(e)+" is not iterable")}return w.prototype=E,o(S,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},k(x.prototype),f(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(p(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(S),f(S,s,"Generator"),f(S,i,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function s(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}var h=function(t){return new Promise((function(e,r){var n=document.createElement(t.nodeName);["id","rel","src","href","type"].forEach((function(e){t[e]&&(n[e]=t[e])})),t.innerHTML&&n.appendChild(document.createTextNode(t.innerHTML)),n.onload=function(){return e(!0)},n.onerror=function(){return r(new Error("Error loading asset."))},document.body.appendChild(n),("link"===n.nodeName.toLowerCase()||"script"===n.nodeName.toLowerCase()&&!n.src)&&e()}))};function y(){var t;return t=u().mark((function t(){var e,r,n,o,a,i,l,f;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c()({url:document.location.href,parse:!1});case 2:return e=t.sent,t.next=5,e.text();case 5:r=t.sent,n=(new window.DOMParser).parseFromString(r,"text/html"),o=["wp-blocks-js-after","essential-blocks-blocks-localize-js-extra","elementor-editor-js-before"],a=Array.from(n.querySelectorAll('link[rel="stylesheet"],script')).filter((function(t){return t.id&&(o.includes(t.id)||!document.getElementById(t.id))})),i=s(a),t.prev=10,i.s();case 12:if((l=i.n()).done){t.next=18;break}return f=l.value,t.next=16,h(f);case 16:t.next=12;break;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(10),i.e(t.t0);case 23:return t.prev=23,i.f(),t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[10,20,23,26]])})),y=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){p(a,n,o,i,c,"next",t)}function c(t){p(a,n,o,i,c,"throw",t)}i(void 0)}))},y.apply(this,arguments)}function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var E=window.EBControls.installPlugin,L="templately/templately.php",O=function(){var t,n=g((0,e.useState)(!1),2),i=n[0],c=n[1],l=g((0,e.useState)(!1),2),u=l[0],s=l[1],f=g((0,e.useState)(!1),2),p=f[0],h=f[1],m=function(){c(!i)};return React.createElement(React.Fragment,null,React.createElement(r.Button,{onClick:function(){return m()},className:"eb-pattern-library-button"},React.createElement("img",{src:"".concat(null===(t=EssentialBlocksLocalize)||void 0===t?void 0:t.eb_plugins_url,"assets/images/eb-logo.svg"),alt:"Essential Blocks Icon"})," ",(0,o.__)("Pattern Library","essential-blocks")),i&&React.createElement(r.Popover,{className:"eb-pattern-library-popover"},React.createElement("div",{className:"eb-pattern-library-popover-content"},React.createElement("div",{className:"pattern-content"},React.createElement("h2",{className:"eb-pattern-library-heading"},"Access To Thousands Of Ready Gutenberg Templates"),React.createElement("p",null,"Design unique websites using ready Gutenberg templates from Templately with absolute ease and instantly grab attention."),React.createElement(r.Button,{className:"eb-button ".concat(p?"eb-button-error":""),onClick:function(){return s(!0),void E("templately",L).then((function(t){if(JSON.parse(t).success){var e=document.createElement("div");e.setAttribute("id","templately-gutenberg"),document.querySelector("body").appendChild(e),function(){return y.apply(this,arguments)}().then((function(){s(!1),c(!1),window.TemplatelyAppManager.open(null,"templately-gutenberg","gutenberg"),EssentialBlocksLocalize.get_plugins=v(v({},EssentialBlocksLocalize.get_plugins),{},b({},L,v(v({},EssentialBlocksLocalize.get_plugins[L]),{},{active:!0})))}))}else h(!0),setTimeout((function(){c(!1)}),2e3)}))}},!p&&React.createElement(React.Fragment,null,(0,o.__)("I want access to FREE Templates","essential-blocks"),u&&React.createElement("img",{className:"eb-install-loader",src:"".concat(EssentialBlocksLocalize.eb_plugins_url,"/assets/images/loading.svg")})),p&&React.createElement(React.Fragment,null,(0,o.__)("Something went wrong!","essential-blocks")))),React.createElement("div",{className:"pattern-img"},React.createElement("img",{src:a,alt:"Pattern Library"}))),React.createElement("a",{className:"eb-pattern-library-close-btn",href:"#",onClick:function(){return m()}},React.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("g",{"clip-path":"url(#clip0_435_1560)"},React.createElement("path",{d:"M15 4.75L5 14.75",stroke:"#667085","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),React.createElement("path",{d:"M5 4.75L15 14.75",stroke:"#667085","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})),React.createElement("defs",null,React.createElement("clipPath",{id:"clip0_435_1560"},React.createElement("rect",{width:"20",height:"20",fill:"white"})))))))};document.addEventListener("DOMContentLoaded",(function(){var t="templately/templately.php",e=EssentialBlocksLocalize.get_plugins[t];if(!e||!e.active){var r=document.createElement("div");r.classList.add("eb-pattern-library-button-wrapper"),ReactDOM.render(React.createElement(O,null),r),(0,n.subscribe)((function(){var e=document.querySelector(".edit-post-header-toolbar");if(e){var n=EssentialBlocksLocalize.get_plugins[t];n&&n.active?e.querySelector(".eb-pattern-library-button-wrapper")&&e.removeChild(r):e.querySelector(".eb-pattern-library-button-wrapper")||e.appendChild(r)}}))}}))}();