function catSelect(t){document.querySelector(".home-cat-selector .active").classList.remove("active"),t.classList.add("active");var e=t.getAttribute("data-tab"),o=document.querySelectorAll(".home-cat-container .home-cat");Array.prototype.forEach.call(o,function(t){t.style.display="none"});var i=document.querySelectorAll(".home-cat-container ."+e);Array.prototype.forEach.call(i,function(t){t.style.display="block"})}function itemSearch(t){var e=t.value.toLowerCase(),o=document.querySelectorAll(".product"),i=document.querySelectorAll(".home-cat-container h2");e?(Array.prototype.forEach.call(o,function(t){var o=t.querySelector("h3").innerHTML.toLowerCase();o.indexOf(e)?t.style.display="none":t.style.display="block"}),Array.prototype.forEach.call(i,function(t){t.style.display="none"})):(Array.prototype.forEach.call(o,function(t){t.style.display="block"}),Array.prototype.forEach.call(i,function(t){t.style.display="block"}))}!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.Layzr=e()}(this,function(){"use strict";function t(t){this._lastScroll=0,this._ticking=!1,t=t||{},this._optionsContainer=document.querySelector(t.container)||window,this._optionsSelector=t.selector||"[data-layzr]",this._optionsAttr=t.attr||"data-layzr",this._optionsAttrRetina=t.retinaAttr||"data-layzr-retina",this._optionsAttrBg=t.bgAttr||"data-layzr-bg",this._optionsAttrHidden=t.hiddenAttr||"data-layzr-hidden",this._optionsThreshold=t.threshold||0,this._optionsCallback=t.callback||null,this._retina=window.devicePixelRatio>1,this._srcAttr=this._retina?this._optionsAttrRetina:this._optionsAttr,this._nodes=document.querySelectorAll(this._optionsSelector),this._handlerBind=this._requestScroll.bind(this),this._create()}return t.prototype._requestScroll=function(){this._lastScroll=this._optionsContainer===window?window.pageYOffset:this._optionsContainer.scrollTop+this._getOffset(this._optionsContainer),this._requestTick()},t.prototype._requestTick=function(){this._ticking||(requestAnimationFrame(this.update.bind(this)),this._ticking=!0)},t.prototype._getOffset=function(t){return t.getBoundingClientRect().top+window.pageYOffset},t.prototype._getContainerHeight=function(){return this._optionsContainer.innerHeight||this._optionsContainer.offsetHeight},t.prototype._create=function(){this._handlerBind(),this._optionsContainer.addEventListener("scroll",this._handlerBind,!1),this._optionsContainer.addEventListener("resize",this._handlerBind,!1)},t.prototype._destroy=function(){this._optionsContainer.removeEventListener("scroll",this._handlerBind,!1),this._optionsContainer.removeEventListener("resize",this._handlerBind,!1)},t.prototype._inViewport=function(t){var e=this._lastScroll,o=e+this._getContainerHeight(),i=this._getOffset(t),n=i+this._getContainerHeight(),r=this._optionsThreshold/100*window.innerHeight;return n>=e-r&&o+r>=i&&!t.hasAttribute(this._optionsAttrHidden)},t.prototype._reveal=function(t){var e=t.getAttribute(this._srcAttr)||t.getAttribute(this._optionsAttr);t.hasAttribute(this._optionsAttrBg)?t.style.backgroundImage="url("+e+")":t.setAttribute("src",e),"function"==typeof this._optionsCallback&&this._optionsCallback.call(t),t.removeAttribute(this._optionsAttr),t.removeAttribute(this._optionsAttrRetina),t.removeAttribute(this._optionsAttrBg),t.removeAttribute(this._optionsAttrHidden)},t.prototype.updateSelector=function(){this._nodes=document.querySelectorAll(this._optionsSelector)},t.prototype.update=function(){for(var t=this._nodes.length,e=0;t>e;e++){var o=this._nodes[e];o.hasAttribute(this._optionsAttr)&&this._inViewport(o)&&this._reveal(o)}this._ticking=!1},t});var layzr=new Layzr({threshold:70});jQuery(document).ready(function(t){function e(t,e,o){window.history.pushState(t,o+" | "+a,e),document.title=o+" | "+a}function o(){t(".current-menu-item").removeClass("current-menu-item");var e=window.location.href;t("a").each(function(){t(this).attr("href")==e&&t(this).parent("li").addClass("current-menu-item")})}var i=t("main"),n=t(".loading"),r=t("#header-logo").parent().attr("href"),s=document.title,a=s.split("|")[1];t(document).on({ajaxStart:function(){n.show()},ajaxStop:function(){n.hide()}}),t("a").on("click",function(n){n.preventDefault();var s=window.location.href,l=t(this).attr("href"),c=t(this).html();t(this).find("img").is("#header-logo")&&(c="My Consumables | "+a),l.match(r)?(t(document).scrollTop(0),i.load(l+" .ajax-container"),e(s,l,c),o()):window.location.replace(l)}),window.onpopstate=function(){t("main").load(location.href+" .ajax-container"),o(),$linkText=t(".current-menu-item a").html(),document.title=$linkText+" | "+a}}),jQuery(document).ready(function(t){t("#burger").click(function(){t("#main-menu ul").toggleClass("mobile-menu-open"),t(this).toggleClass("cooked"),t("#shade").toggle()}),t("#shade").click(function(){t("#main-menu ul").removeClass("mobile-menu-open"),t("#burger").removeClass("cooked"),t("#shade").hide()}),t(window).resize(function(){t(window).width()<993?(t("#main-menu ul").removeClass("mobile-menu-open"),t("#burger").removeClass("cooked")):(t("#main-menu ul").addClass("mobile-menu-open"),t("#burger").removeClass("cooked"))})});