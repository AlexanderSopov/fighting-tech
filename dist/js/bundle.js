(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';$(document).ready(function(){window.script=require('./script');script.init()});

},{"./script":4}],2:[function(require,module,exports){
'use strict';module.exports=function(){function init(){$.fn.scrollToBottom=scrollToBottom;$.fn.scrollStop=scrollStop}function scrollToBottom(){return $(document).height()-this.scrollTop()-this.height()}function scrollStop(callback){var that=this,$this=$(that);$this.scroll(function(ev){clearTimeout($this.data('scrollTimeout'));$this.data('scrollTimeout',setTimeout(callback.bind(that),250,ev))})};return{init:init}}();

},{}],3:[function(require,module,exports){
"use strict";module.exports=function(){var menu=$("header div.menu");;function showMenu(logo){if($(window).width()<750)menu.toggleClass("visible")}return{showMenu:showMenu}}();

},{}],4:[function(require,module,exports){
'use strict';module.exports=function(){var var0,var1,var2;var nav=require('./nav'),utils=require('./utils'),jQPlugins=require('./jQPlugins');function init(){}var publicAPI={init:init,nav:nav,utils:utils,jQPlugins:jQPlugins};return publicAPI}();

},{"./jQPlugins":2,"./nav":3,"./utils":5}],5:[function(require,module,exports){
"use strict";module.exports=function(){}();

},{}]},{},[1]);
