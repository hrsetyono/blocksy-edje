(window.blocksyJsonP=window.blocksyJsonP||[]).push([[2],{32:function(e,t,n){var o,r,i;r=[t],void 0===(i="function"==typeof(o=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var o={get passive(){n=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),i=[],c=!1,a=-1,u=void 0,l=void 0,d=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},s=function(e){var t=e||window.event;return!!d(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},v=function(){setTimeout((function(){void 0!==l&&(document.body.style.paddingRight=l,l=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)}))};e.disableBodyScroll=function(e,o){if(r){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!i.some((function(t){return t.targetElement===e}))){var v={targetElement:e,options:o||{}};i=[].concat(t(i),[v]),e.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var n,o,r,i;1===t.targetTouches.length&&(o=e,i=(n=t).targetTouches[0].clientY-a,!d(n.target)&&(o&&0===o.scrollTop&&0<i?s(n):(r=o)&&r.scrollHeight-r.scrollTop<=r.clientHeight&&i<0?s(n):n.stopPropagation()))},c||(document.addEventListener("touchmove",s,n?{passive:!1}:void 0),c=!0)}}else{p=o,setTimeout((function(){if(void 0===l){var e=!!p&&!0===p.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(l=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}));var f={targetElement:e,options:o||{}};i=[].concat(t(i),[f])}var p},e.clearAllBodyScrollLocks=function(){r?(i.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),c&&(document.removeEventListener("touchmove",s,n?{passive:!1}:void 0),c=!1),i=[],a=-1):(v(),i=[])},e.enableBodyScroll=function(e){if(r){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,i=i.filter((function(t){return t.targetElement!==e})),c&&0===i.length&&(document.removeEventListener("touchmove",s,n?{passive:!1}:void 0),c=!1)}else(i=i.filter((function(t){return t.targetElement!==e}))).length||v()}})?o.apply(t,r):o)||(e.exports=i)},59:function(e,t,n){"use strict";n.r(t);var o=n(32);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"handleClick",(function(){return l})),n.d(t,"mount",(function(){return d}));var a=function(e){var t;(e=i({onClose:function(){},container:null,focus:!0},e)).container&&e.container.classList.add("active"),e.focus&&setTimeout((function(){e.container.querySelector("input")&&e.container.querySelector("input").focus()}),200),e.container.addEventListener("click",(function(t){t.stopPropagation(),e.clickOutside&&document.body.hasAttribute("data-panel")&&u(e)})),e.clickOutside&&(e.container.querySelector(".content-container").firstElementChild.addEventListener("click",(function(e){return e.stopPropagation()})),e.container.querySelector(".content-container").addEventListener("click",(function(t){document.body.hasAttribute("data-panel")&&u(e)}),{once:!0})),document.body.dataset.panel="in".concat(e.container.dataset.behaviour.indexOf("left")>-1?":left":e.container.dataset.behaviour.indexOf("right")>-1?":right":""),e.container.addEventListener(e.container.dataset.behaviour.indexOf("side")>-1?"transitionend":"animationend",(function(){}),{once:!0}),window.addEventListener("click",(function(){return document.body.hasAttribute("data-panel")&&u(e)}),{once:!0}),document.addEventListener("keyup",(function(t){var n=t.keyCode;t.target;27===n&&(t.preventDefault(),document.body.hasAttribute("data-panel")&&u(e))}),{once:!0}),e.container&&e.container.querySelector(".close-button").addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),u(e)}),{once:!0}),t=e.container.querySelector(".content-container"),Object(o.disableBodyScroll)(t,{reserveScrollBarGap:!0})},u=function(e){if(e=i({onClose:function(){},container:null},e),!document.body.hasAttribute("data-panel"))return e.container.classList.remove("active"),void e.onClose();e.container.classList.remove("active"),document.body.dataset.panel="out",e.container.addEventListener("transitionend",(function(){setTimeout((function(){var t;document.body.removeAttribute("data-panel"),ctEvents.trigger("ct:modal:closed",e.container),t=e.container.querySelector(".content-container"),Object(o.enableBodyScroll)(t,{reserveScrollBarGap:!0})}),300)}),{once:!0});e.onClose()},l=function(e,t){e.preventDefault(),e.stopPropagation(),t=i({onClose:function(){},container:null,focus:!0,clickOutside:!1},t),document.body.hasAttribute("data-panel")?u(t):a(t)};ctEvents.on("ct:offcanvas:force-close",(function(e){return u(e)}));var d=function(e){e.hasSearchEventListener||(e.hasSearchEventListener=!0,e.addEventListener("click",(function(t){l(t,{container:document.querySelector(e.hash)})})))}}}]);