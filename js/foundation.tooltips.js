!function(t,o,i,e){"use strict";Foundation.libs.tooltips={name:"tooltips",version:"4.3.2",settings:{selector:".has-tip",additionalInheritableClasses:[],tooltipClass:".tooltip",touchCloseText:"tap to close",appendTo:"body","disable-for-touch":!1,tipTemplate:function(t,o){return'<span data-selector="'+t+'" class="'+Foundation.libs.tooltips.settings.tooltipClass.substring(1)+'">'+o+'<span class="nub"></span></span>'}},cache:{},init:function(o,i,e){Foundation.inherit(this,"data_options");var s=this;return"object"==typeof i?t.extend(!0,this.settings,i):"undefined"!=typeof e&&t.extend(!0,this.settings,e),"string"==typeof i?this[i].call(this,e):void(Modernizr.touch?t(this.scope).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip","[data-tooltip]",function(o){var i=t.extend({},s.settings,s.data_options(t(this)));i["disable-for-touch"]||(o.preventDefault(),t(i.tooltipClass).hide(),s.showOrCreateTip(t(this)))}).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip",this.settings.tooltipClass,function(o){o.preventDefault(),t(this).fadeOut(150)}):t(this.scope).on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip","[data-tooltip]",function(o){var i=t(this);/enter|over/i.test(o.type)?s.showOrCreateTip(i):("mouseout"===o.type||"mouseleave"===o.type)&&s.hide(i)}))},showOrCreateTip:function(t){var o=this.getTip(t);return o&&o.length>0?this.show(t):this.create(t)},getTip:function(o){var i=this.selector(o),e=null;return i&&(e=t('span[data-selector="'+i+'"]'+this.settings.tooltipClass)),"object"==typeof e?e:!1},selector:function(t){var o=t.attr("id"),i=t.attr("data-tooltip")||t.attr("data-selector");return(o&&o.length<1||!o)&&"string"!=typeof i&&(i="tooltip"+Math.random().toString(36).substring(7),t.attr("data-selector",i)),o&&o.length>0?o:i},create:function(o){var i=t(this.settings.tipTemplate(this.selector(o),t("<div></div>").html(o.attr("title")).html())),e=this.inheritable_classes(o);i.addClass(e).appendTo(this.settings.appendTo),Modernizr.touch&&i.append('<span class="tap-to-close">'+this.settings.touchCloseText+"</span>"),o.removeAttr("title").attr("title",""),this.show(o)},reposition:function(i,e,s){var n,a,r,l,h;if(e.css("visibility","hidden").show(),n=i.data("width"),a=e.children(".nub"),r=this.outerHeight(a),l=this.outerHeight(a),h=function(t,o,i,e,s,n){return t.css({top:o?o:"auto",bottom:e?e:"auto",left:s?s:"auto",right:i?i:"auto",width:n?n:"auto"}).end()},h(e,i.offset().top+this.outerHeight(i)+10,"auto","auto",i.offset().left,n),t(o).width()<767)h(e,i.offset().top+this.outerHeight(i)+10,"auto","auto",12.5,t(this.scope).width()),e.addClass("tip-override"),h(a,-r,"auto","auto",i.offset().left);else{var p=i.offset().left;Foundation.rtl&&(p=i.offset().left+i.offset().width-this.outerWidth(e)),h(e,i.offset().top+this.outerHeight(i)+10,"auto","auto",p,n),e.removeClass("tip-override"),s&&s.indexOf("tip-top")>-1?h(e,i.offset().top-this.outerHeight(e),"auto","auto",p,n).removeClass("tip-override"):s&&s.indexOf("tip-left")>-1?h(e,i.offset().top+this.outerHeight(i)/2-2.5*r,"auto","auto",i.offset().left-this.outerWidth(e)-r,n).removeClass("tip-override"):s&&s.indexOf("tip-right")>-1&&h(e,i.offset().top+this.outerHeight(i)/2-2.5*r,"auto","auto",i.offset().left+this.outerWidth(i)+r,n).removeClass("tip-override")}e.css("visibility","visible").hide()},inheritable_classes:function(o){var i=["tip-top","tip-left","tip-bottom","tip-right","noradius"].concat(this.settings.additionalInheritableClasses),e=o.attr("class"),s=e?t.map(e.split(" "),function(o,e){return-1!==t.inArray(o,i)?o:void 0}).join(" "):"";return t.trim(s)},show:function(t){var o=this.getTip(t);this.reposition(t,o,t.attr("class")),o.fadeIn(150)},hide:function(t){var o=this.getTip(t);o.fadeOut(150)},reload:function(){var o=t(this);return o.data("fndtn-tooltips")?o.foundationTooltips("destroy").foundationTooltips("init"):o.foundationTooltips("init")},off:function(){t(this.scope).off(".fndtn.tooltip"),t(this.settings.tooltipClass).each(function(o){t("[data-tooltip]").get(o).attr("title",t(this).text())}).remove()},reflow:function(){}}}(Foundation.zj,this,this.document);
//# sourceMappingURL=foundation.tooltips.js.map