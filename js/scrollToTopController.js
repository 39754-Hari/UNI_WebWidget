define(["jquery","backbone","BaseController"],function(o,e,i){"use strict";var r=i,n=r.prototype;return r.extend({className:"ScrollToTopController",domSelectors:{scrollArrow:".go-top",stopper:".go-top-stopper"},pixelsToShowElement:400,fixToFooterClass:"fix-to-footer",scrollSpeed:1e3,minimumScreenWidth:1310,bVisible:!1,initialize:function(){var e=this;n.initialize.apply(e,arguments),o(window).bind("ComponentPostLoaderFinish",function(){(o(document).height()<=o(window).height()||!e.hasBodyContent())&&e.domElements.scrollArrow.removeClass(e.fixToFooterClass),e.domElements.scrollArrow.click(e.doScrollToTop),e.onWindowScroll(),e.onWindowResize(),e.showHideScroller()})},hasBodyContent:function(){return o("#main").height()},isWithinMinimumScreenWidth:function(){var e=this;return o(window).width()<e.minimumScreenWidth?!0:!1},calcPositionToFix:function(){var o=this;return o.domElements.stopper.offset().top-parseInt(o.domElements.scrollArrow.css("padding-bottom"),10)-parseInt(o.domElements.scrollArrow.css("padding-top"),10)},onWindowResize:function(){var e=this;o(window).on("resize",function(){e.showHideScroller()})},showHideScroller:function(){var e=this;e.isWithinMinimumScreenWidth()?e.domElements.scrollArrow.hide():(e.domElements.scrollArrow.show().addClass(e.fixToFooterClass),o(window).trigger("scroll"))},onWindowScroll:function(){var e=this;o(window).scroll(function(){if(e.isWithinMinimumScreenWidth())return!1;if(o(this).scrollTop()>=e.pixelsToShowElement){if(e.domElements.scrollArrow.removeClass(e.fixToFooterClass),e.fadeArrowIn(),!e.domElements.scrollArrow.hasClass(e.fixToFooterClass)){var i=e.domElements.scrollArrow.offset().top,r=e.calcPositionToFix();i>=r&&e.domElements.scrollArrow.addClass(e.fixToFooterClass)}}else e.fadeArrowOut()})},doScrollToTop:function(){return o("body,html").animate({scrollTop:0},this.scrollSpeed),!1},fadeArrowIn:function(){var o=this;o.bVisible||o.domElements.scrollArrow.fadeIn("400",function(){o.bVisible=!0})},fadeArrowOut:function(){var o=this;o.bVisible&&o.domElements.scrollArrow.fadeOut("400",function(){o.bVisible=!1})}})});
//# sourceMappingURL=scrollToTopController.js.map