!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/js/",o(o.s=2)}([function(e,t){function o(e){this.$el=e,this.setupEasel()}window._randomColorString=function(){return"#"+Math.random().toString(16).substr(-6)},o.prototype.exercise0=function(){$("li").removeClass("square")},o.prototype.exercise1=function(){$("li").addClass("orange")},o.prototype.exercise2=function(){$(".square").remove()},o.prototype.exercise3=function(){const e=$("<h1>").text("I love jQuery");$("#easel").append(e)},o.prototype.exercise4=function(){for(let e=0;e<$(".square").length;e+=2)even=$(".square")[e],$(even).text("V")},o.prototype.exercise5=function(){$(".square").on("click",e=>{alert($(e.target).attr("data-pos"))})},o.prototype.exercise6=function(){for(let e=0;e<$(".square").length;e++){const t=$(".square")[e];$(t).css("background-color",window._randomColorString())}},o.prototype.exercise7=function(){$("#easel").on("mouseenter",".square",e=>{const t=$(e.currentTarget);console.log(t.css("background-color"))})},o.prototype.setupEasel=function(){const e=$("<button>").html("Add a row");this.$el.append(e),e.on("click",this.addRow.bind(this));for(let e=0;e<=7;e++){const t=$("<button>").html("Exercise "+e);t.on("click",this["exercise"+e]),this.$el.append(t)}for(let e=0;e<20;e++)this.addRow()},o.prototype.addRow=function(){const e=this.$el.find(".row").length,t=$("<ul>").addClass("row").addClass("group");for(let o=0;o<20;o++){const n=$("<li>").addClass("square").attr("data-pos",[e,o]);n.on("mouseenter",e=>{$(e.currentTarget).css("background-color",window._randomColorString())}),t.append(n)}this.$el.append(t)},e.exports=o},function(e,t,o){var n=o(0);$(function(){var e=$("#easel");new n(e)})},function(e,t,o){e.exports=o(1)}]);
//# sourceMappingURL=bundle.js.map