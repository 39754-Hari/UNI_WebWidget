!function(e,i){"undefined"!=typeof module&&module.exports?module.exports=i():"function"==typeof define&&define.amd?define(i):this[e]=i()}("bowser",function(){function e(e){function o(i){var o=e.match(i);return o&&o.length>1&&o[1]||""}function s(i){var o=e.match(i);return o&&o.length>1&&o[2]||""}var r,n=o(/(ipod|iphone|ipad)/i).toLowerCase(),t=/like android/i.test(e),a=!t&&/android/i.test(e),d=/CrOS/.test(e),m=o(/edge\/(\d+(\.\d+)?)/i),v=o(/version\/(\d+(\.\d+)?)/i),b=/tablet/i.test(e),c=!b&&/[^-]mobi/i.test(e);/opera|opr/i.test(e)?r={name:"Opera",opera:i,version:v||o(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(e)?r={name:"Yandex Browser",yandexbrowser:i,version:v||o(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(e)?(r={name:"Windows Phone",windowsphone:i},m?(r.msedge=i,r.version=m):(r.msie=i,r.version=o(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(e)?r={name:"Internet Explorer",msie:i,version:o(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:d?r={name:"Chrome",chromeBook:i,chrome:i,version:o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(e)?r={name:"Microsoft Edge",msedge:i,version:m}:/chrome|crios|crmo/i.test(e)?r={name:"Chrome",chrome:i,version:o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:n?(r={name:"iphone"==n?"iPhone":"ipad"==n?"iPad":"iPod"},v&&(r.version=v)):/sailfish/i.test(e)?r={name:"Sailfish",sailfish:i,version:o(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(e)?r={name:"SeaMonkey",seamonkey:i,version:o(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(e)?(r={name:"Firefox",firefox:i,version:o(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)&&(r.firefoxos=i)):/silk/i.test(e)?r={name:"Amazon Silk",silk:i,version:o(/silk\/(\d+(\.\d+)?)/i)}:a?r={name:"Android",version:v}:/phantom/i.test(e)?r={name:"PhantomJS",phantom:i,version:o(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(e)||/rim\stablet/i.test(e)?r={name:"BlackBerry",blackberry:i,version:v||o(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(e)?(r={name:"WebOS",webos:i,version:v||o(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(e)&&(r.touchpad=i)):r=/bada/i.test(e)?{name:"Bada",bada:i,version:o(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(e)?{name:"Tizen",tizen:i,version:o(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||v}:/safari/i.test(e)?{name:"Safari",safari:i,version:v}:{name:o(/^(.*)\/(.*) /),version:s(/^(.*)\/(.*) /)},!r.msedge&&/(apple)?webkit/i.test(e)?(r.name=r.name||"Webkit",r.webkit=i,!r.version&&v&&(r.version=v)):!r.opera&&/gecko\//i.test(e)&&(r.name=r.name||"Gecko",r.gecko=i,r.version=r.version||o(/gecko\/(\d+(\.\d+)?)/i)),r.msedge||!a&&!r.silk?n&&(r[n]=i,r.ios=i):r.android=i;var f="";r.windowsphone?f=o(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):n?(f=o(/os (\d+([_\s]\d+)*) like mac os x/i),f=f.replace(/[_\s]/g,".")):a?f=o(/android[ \/-](\d+(\.\d+)*)/i):r.webos?f=o(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):r.blackberry?f=o(/rim\stablet\sos\s(\d+(\.\d+)*)/i):r.bada?f=o(/bada\/(\d+(\.\d+)*)/i):r.tizen&&(f=o(/tizen[\/\s](\d+(\.\d+)*)/i)),f&&(r.osversion=f);var l=f.split(".")[0];return b||"ipad"==n||a&&(3==l||4==l&&!c)||r.silk?r.tablet=i:(c||"iphone"==n||"ipod"==n||a||r.blackberry||r.webos||r.bada)&&(r.mobile=i),r.msedge||r.msie&&r.version>=10||r.yandexbrowser&&r.version>=15||r.chrome&&r.version>=20||r.firefox&&r.version>=20||r.safari&&r.version>=6||r.opera&&r.version>=10||r.ios&&r.osversion&&r.osversion.split(".")[0]>=6||r.blackberry&&r.version>=10.1?r.a=i:r.msie&&r.version<10||r.chrome&&r.version<20||r.firefox&&r.version<20||r.safari&&r.version<6||r.opera&&r.version<10||r.ios&&r.osversion&&r.osversion.split(".")[0]<6?r.c=i:r.x=i,r}var i=!0,o=e("undefined"!=typeof navigator?navigator.userAgent:"");return o.test=function(e){for(var i=0;i<e.length;++i){var s=e[i];if("string"==typeof s&&s in o)return!0}return!1},o._detect=e,o});
//# sourceMappingURL=bowser.js.map