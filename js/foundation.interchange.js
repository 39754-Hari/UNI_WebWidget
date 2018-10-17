!function(t,e,i,n){"use strict";Foundation.libs.interchange={name:"interchange",version:"4.2.4",cache:{},images_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen and (min-width: 1px)",small:"only screen and (min-width: 768px)",medium:"only screen and (min-width: 1280px)",large:"only screen and (min-width: 1440px)",landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(t,e){if(/IMG/.test(t[0].nodeName)){var i=t[0].src;if(new RegExp(e,"i").test(i))return;return t[0].src=e,t.trigger("replace",[t[0].src,i])}}}},init:function(e,i,n){return Foundation.inherit(this,"throttle"),"object"==typeof i&&t.extend(!0,this.settings,i),this.events(),this.images(),"string"!=typeof i?this.settings.init:this[i].call(this,n)},events:function(){var i=this;t(e).on("resize.fndtn.interchange",i.throttle(function(){i.resize.call(i)},50))},resize:function(){var e=this.cache;if(!this.images_loaded)return void setTimeout(t.proxy(this.resize,this),50);for(var i in e)if(e.hasOwnProperty(i)){var n=this.results(i,e[i]);n&&this.settings.directives[n.scenario[1]](n.el,n.scenario[0])}},results:function(e,i){var n=i.length;if(n>0)for(var r=t('[data-uuid="'+e+'"]'),a=n-1;a>=0;a--){var s,o=i[a][2];if(s=this.settings.named_queries.hasOwnProperty(o)?matchMedia(this.settings.named_queries[o]):matchMedia(o),s.matches)return{el:r,scenario:i[a]}}return!1},images:function(t){return"undefined"==typeof this.cached_images||t?this.update_images():this.cached_images},update_images:function(){var e=i.getElementsByTagName("img"),n=e.length,r=0,a="data-"+this.settings.load_attr;this.cached_images=[],this.images_loaded=!1;for(var s=n-1;s>=0;s--)this.loaded(t(e[s]),function(t){if(r++,t){var e=t.getAttribute(a)||"";e.length>0&&this.cached_images.push(t)}r===n&&(this.images_loaded=!0,this.enhance())}.bind(this));return"deferred"},loaded:function(t,e){function i(){e(t[0])}function n(){if(this.one("load",i),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?void(t[0].complete||4===t[0].readyState?i():n.call(t)):void i()},enhance:function(){for(var i=this.images().length,n=i-1;n>=0;n--)this._object(t(this.images()[n]));return t(e).trigger("resize")},parse_params:function(t,e,i){return[this.trim(t),this.convert_directive(e),this.trim(i)]},convert_directive:function(t){var e=this.trim(t);return e.length>0?e:"replace"},_object:function(t){var e=this.parse_data_attr(t),i=[],n=e.length;if(n>0)for(var r=n-1;r>=0;r--){var a=e[r].split(/\((.*?)(\))$/);if(a.length>1){var s=a[0].split(","),o=this.parse_params(s[0],s[1],a[1]);i.push(o)}}return this.store(t,i)},uuid:function(t){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}var i=t||"-";return e()+e()+i+e()+i+e()+i+e()+i+e()+e()+e()},store:function(t,e){var i=this.uuid(),n=t.data("uuid");return n?this.cache[n]:(t.attr("data-uuid",i),this.cache[i]=e)},trim:function(e){return"string"==typeof e?t.trim(e):e},parse_data_attr:function(t){for(var e=t.data(this.settings.load_attr).split(/\[(.*?)\]/),i=e.length,n=[],r=i-1;r>=0;r--)e[r].replace(/[\W\d]+/,"").length>4&&n.push(e[r]);return n},reflow:function(){this.images(!0)}}}(Foundation.zj,this,this.document);
//# sourceMappingURL=foundation.interchange.js.map