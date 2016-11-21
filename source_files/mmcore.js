/*! Copyright ? 2015, 2016, Oracle and/or its affiliates. All rights reserved. */
/*! mmapi v1.9 */
/*v1.9.20.8757*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(c,E){function J(a){this.enableUtility=function(c){var d=a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+c+"($|,)")).test(d)||(d=d.split(","),d.push(c),a.setParam("un",d.join(",").replace(/(^,)|(,$)/g,""),a.baseStorage.storeStrategy.persistent));return this};this.disableUtility=function(c){var d=a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+c+"($|,)")).test(d)&&(d=d.replace(new RegExp("(^|,)"+c+"($|,)","gi"),",").replace(/(^,)|(,$)/g,
""),a.setParam("un",d,a.baseStorage.storeStrategy.persistent));return this};this.enable=function(){a.enable();return this};this.disable=function(){a.disable();return this};this.getConfig=function(){return{storageType:a.storageType,cprefix:a.cprefix,domain:a.domain,baseContentUrl:a.baseContentUrl,cookie_domain:a.cookie_domain,srv:a.srv,async:a.async,beforeInit:a.beforeInit,beforeRequest:a.beforeRequest,afterResponse:a.afterResponse,afterResponseExecution:a.afterResponseExecution}}}function R(a){var c=
this,d=a.domain,x=a.secure,q=encodeURIComponent,v=decodeURIComponent;c.set=function(a,k,l,v){v||(k=q(k));a=q(a)+"="+k+";domain="+d+";path=/";l?(k=new Date,k.setTime(k.getTime()+864E5*l),l=";expires="+k.toGMTString()):l="";document.cookie=a+l+(x?";secure":"");return c};c.remove=function(a){c.set(a,"",-1);return c};c.get=function(a,c){var d=new RegExp("(?:^|; )"+q(a).replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")+"=([^;]+)"),d=(document.cookie.match(d)||[,""])[1];return c?d:v(d)}}function W(a){function c(a){for(var B=
{},d="",m=0,f;f=w.get(a+m++,!0);)d+=f;d=decodeURIComponent(d);try{B=JSON.parse(d)}catch(k){}return B}function d(){t=c(G);k=c(H);var a=(new Date).getTime(),d=t[p],z;for(z in d)d.hasOwnProperty(z)&&v(d[z]).e<=a&&delete d[z];q();t[p]=t[p]||{};k[p]=k[p]||{}}function x(a,c,d){c=JSON.stringify(c);var k="{}"===c,f=0;for(c=encodeURIComponent(c);w.get(a+f,!0);)w.remove(a+f++);if(!k)for(f=0;k=c.substr(3E3*f,3E3);)w.set(a+f++,k,d==E?365:d,!0)}function q(){x(G,t);x(H,k,0)}function v(a){var c=a.indexOf("|");return{v:JSON.parse(a.substring(c+
1,a.length)),e:a.substring(0,c)}}if(!/^((cookie)|(cookie-secure))$/.test(a.type))throw"(mm module: storage) Invalid storage type: "+a.type;var t,k,l=a.cprefix+".",G=l+"store.p.",H=l+"store.s.",w=new R({domain:a.domain,secure:"cookie-secure"===a.type}),p=a.namespace||"def";this.get=function(a){d();var c=t[p],l=k[p],m={},f;for(f in c)c.hasOwnProperty(f)&&(m[f]=c[f]);for(f in l)l.hasOwnProperty(f)&&(m[f]=l[f]);if(!a){a={};for(var q in m)m.hasOwnProperty(q)&&(a[q]=v(m[q]).v);return a}return(m[a]?v(m[a]):
0).v};this.set=function(a,c,l){d();var m=t[p],f=k[p];delete m[a];delete f[a];null!==c&&c!==E&&(l?(f=new Date,f.setTime(f.getTime()+864E5*l),c=f.getTime()+"|"+JSON.stringify(c),m[a]=c):f[a]="0|"+JSON.stringify(c));q();return this};this.removeAll=function(){d();t[p]={};k[p]={};q();return this};this.testStorage=function(){var a=(""+Math.random()).substring(0,5);w.set(l+"tst",a,10);a=w.get(l+"tst",!0)===a?1:0;w.remove(l+"tst");return a};d()}function L(a){function F(b,e){return b.hasOwnProperty(e)&&"string"===
typeof b[e]}function d(b,e,g){try{"function"===typeof b&&b.apply(e,g)}catch(a){M&&M.log(a)}}function x(b,e){if(y[b])for(var g=y[b].length-1;0<=g;g--)y[b][g].call({},e)}function q(b){C="boolean"===typeof b?b:!1}function v(b){if(C){var e=document.getElementsByTagName("head")[0];e.insertBefore(b,e.lastChild)}else document.write(b.outerHTML||(new XMLSerializer).serializeToString(b))}function t(b,e){var g=document.createElement("script");g.type="text/javascript";g.id=e;g.src=b;return g}function k(b){if("object"!==
typeof b)return b;if(b.constructor===Array)return b.join(";");var e=[],g;for(g in b)if(b.hasOwnProperty(g))if(b[g].constructor===Array)for(var a in b[g])b[g].hasOwnProperty(a)&&e.push(g+"="+b[g][a]);else e.push(g+"="+encodeURIComponent(b[g]));return e.join(";")}function l(b){b=b?z(b):{};var e={};"string"===typeof b["mm-dlp-api"]&&(e.fv={ref:b["original-ref"].substring(0,256),url:b["original-url"].substring(0,1024)},e.origin=/http(s)?:\/\/.*?([^/]|$)+/.exec(e.fv.url)[0]);for(var a in b){var u=b[a];
b.hasOwnProperty(a)&&"mmcore."===a.substring(0,7)&&(e[a.substring(7)]=u)}return e}function G(){var b="mmRequestCallbacks["+D+"]",e={},g=c.screen;e.fv={dmn:a.domain,ref:document.referrer.substring(0,256),url:location.href.substring(0,1024),scrw:g.width,scrh:g.height,clrd:g.colorDepth,cok:r[n.persistent].testStorage()};e.lver="1.9";e.jsncl=b;e.ri=D;e.lto=-(new Date).getTimezoneOffset();return e}function H(b,e){var g=b&&b.Packages||[],u=g.length;if(0<u){c.mmInitCallback=function(a){a(h,b,{skipResponseProcessing:!0,
skipPersistentData:!0,useLoaderStorage:!0,debug:X});0===--u&&(e(),c.mmInitCallback=E)};for(var d=0;d<g.length;d++){var Y=t(0===g[d].indexOf("//")?g[d]:a.baseContentUrl+g[d],"mmpack."+d);v(Y)}}else e()}function w(b){b=document.getElementById(b);b.parentNode?b.parentNode.removeChild(b):b&&b.removeAttribute("src")}function p(b,e,a){b=(S[b-1]=e)&&e.PersistData||[];for(var u=b.length;u--;)h.setParam(b[u].Name,b[u].Value,n.persistent,b[u].Expiration);if(F(e,"mmcoreResponse")&&c.hasOwnProperty("mmcore"))try{Function(e.mmcoreResponse).call(c)}catch(d){M.log(d)}x("response",
e);a(!!e);x("responseExecuted",e)}function J(b,e){var a=t(b,"mmrequest."+D);(function(b,e){c.mmRequestCallbacks[b]=function(d){w(a.id);1===b?H(d,function(){p(b,d,e);C=!0;var a=l(document.location.search).origin;a&&c.parent&&c.parent.postMessage&&c.parent.postMessage(JSON.stringify({hash:"unhide",command:"unhide",data:{}}),a)}):p(b,d,e);delete c.mmRequestCallbacks[b]}})(D,e);a.setAttribute("onerror","window['mmRequestCallbacks']["+D+"](false);");v(a);D++}function B(){var b={};return{get:function(e){return e?
b[e]:b},set:function(e,a){b[e]=a},removeAll:function(){b={}}}}function z(b){b=b.split(/\?|&/);for(var e={},a,c,d=0;d<b.length;d++)if(b[d]){a=b[d].split("=");try{c=decodeURIComponent(a[1]||"")}catch(h){c=a[1]||""}e[a[0]]=c}return e}function m(b){function a(b,e,h){var f,l;if(f=d[b]){c[b]=e;f=f.split(/;/);for(var k=0;k<f.length;k++)l=f[k].split("="),(b=l[0].replace(/^\s+|\s+$/gm,""))&&h(e,b,l[1]||"")}}var c={},d=z(b);I||(c.pageid=d.pageid);c.jsver=d.jsver;a("uv",{},function(b,a,e){b.hasOwnProperty(a)||
(b[a]=[]);b[a].push(e)});a("uat",{},function(b,a,e){b[a]=decodeURIComponent(e)});a("ids",{},function(b,a,e){e&&(b[a]=decodeURIComponent(e))});a("rul",[],function(b,a,e){b.push(a)});return c}function f(){if(c.hasOwnProperty("mmcore")){var b=c.mmcore;b.server=a.srv;h.CGRequestInternal=h.CGRequest;h.CGRequest=function(a,e){I=!0;N=a;O=e;b.CGRequest()};var e=b._Tag;b._Tag=function(c){if(-1==c.indexOf(a.srv))e.apply(b,arguments);else{b._Clear.call(b);var d=h.mergeParams(O,m(c));T=C;I||(C=b._async);h.CGRequestInternal(N,
d);C=T;O=N=E;I=!1}};var d=b.SetCookie;b.SetCookie=function(a){/^(mmid|pd|srv)$/.test(a)||d.apply(b,arguments)}}}function K(b){return b||c.location.hostname.replace(/^www\./i,"")}function P(b,a,c){var d="";0<a.length&&"."!=a.substring(a.length-1)&&(d=".");a=a+d+c;d=b.get(a);"string"===typeof d&&d&&(h.setParam(c,d,n.persistent,365),b.remove(a))}function U(b){var a;a=c.hasOwnProperty("mmcore")&&c.mmcore.cookie_domain?c.mmcore.cookie_domain:F(b,"mmcoreCookieDomain")?b.mmcoreCookieDomain:b.cookie_domain;
b=c.hasOwnProperty("mmcore")&&c.mmcore.cprefix?c.mmcore.cprefix:F(b,"mmcoreCprefix")?b.mmcoreCprefix:b.cprefix+".";a=new R({domain:K(a)});P(a,b,"pd");P(a,b,"srv");P(a,"","mmid")}function L(b){var a=h.getParam,c=function(b,a,e,c){h.setParam(b,a,"undefined"===typeof e?1:e,c)};d(b.beforeInit,{},[a,c,{getParam:a,setParam:c,disable:function(){A[n.page].set("disabled",1)},setAsync:q}]);V()||(h.on("request",function(){d(b.beforeRequest,{},[a,c])}),h.on("response",function(u){d(b.afterResponse,{},[a,c,u])}),
h.on("responseExecuted",function(u){d(b.afterResponseExecution,{},[a,c,u])}))}function Q(b){c.mmcoreInitCallback=function(a){U(b);f();h.CGRequest(function(){"function"===typeof a&&a.apply(c.mmcore,arguments)},{});delete c.mmcoreInitCallback};"local"!==b.mmcoreUrl&&v(t(b.mmcoreUrl,"mmcoreIntegration"))}function V(){return 1==A[n.persistent].get("disabled")||1==A[n.page].get("disabled")}this.version="1.9";var h=this,S=[],D=1,C=!1,y={},X={},r=[],A=[],n={persistent:0,deferredRequest:1,request:2,page:3},
N,O,T,I=!1;this.baseStorage=function(b){return new W({type:a.storageType,namespace:b,domain:K(a.cookie_domain),cprefix:a.cprefix})};this.baseStorage.storeStrategy=n;this.baseStorage.isSecure="cookie-secure"===a.storageType;this.mergeParams=function(b,a){b="undefined"===typeof b?{}:b;a="undefined"===typeof a?{}:a;if("object"!==typeof a)return a;var c={},d;if("object"===typeof b)for(d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);for(d in a)a.hasOwnProperty(d)&&(c[d]=c[d]?c[d].constructor===Array&&a[d].constructor===
Array?c[d].concat(a[d]):h.mergeParams(c[d],a[d]):a[d]);return c};this.CGRequest=function(b,d){b=b||function(){};d=d||{};c.mmRequestCallbacks=c.mmRequestCallbacks||{};x("request");var g=h.mergeParams(G(),h.mergeParams(h.mergeParams(r[n.persistent].get(),h.mergeParams(r[n.deferredRequest].get(),h.mergeParams(r[n.page].get(),r[n.request].get()))),l(location.search))),f=[],q=a.srv,g=h.mergeParams(g,d),m;for(m in g)g.hasOwnProperty(m)&&f.push(encodeURIComponent(m)+"="+encodeURIComponent(k(g[m])));r[n.deferredRequest].removeAll();
r[n.request].removeAll();J(q+f.join("&"),b);return this};this.getResponses=function(){return S};this.setParam=function(a,c,d,f){r[d].set(a,c,f);return this};this.getParam=function(a,c){return r[c].get(a)};this.removeParam=function(a,c){r[c].set(a,null,-1);return this};this.on=function(a,c){y[a]&&y[a].push(c);return h};this.disable=function(){A[n.persistent].set("disabled",1,0);return this};this.enable=function(){A[n.persistent].set("disabled",null,-1);return this};(function(a){function d(){L(a);V()||
(F(a,"mmcoreUrl")&&a.mmcoreUrl?Q(a):(U(a),h.CGRequest(E,{})))}for(var g in a)a.hasOwnProperty(g)&&(h[g]=a[g]);var f=l(document.location.search);if(1!=f.disabled){h.calcCookieDomain=K(h.cookie_domain);q(a.async);A[n.persistent]=h.baseStorage("ls");A[n.page]=B();r[n.persistent]=h.baseStorage("mmparams.p");r[n.deferredRequest]=h.baseStorage("mmparams.d");r[n.request]=B();r[n.page]=B();y.request=[];y.response=[];y.responseExecuted=[];g=l(document.referrer).pruh;var f=f.pruh,k=c.mmpruh,m=h.getParam("pruh",
0),p=(g?g+",":"")+(f?f+",":"")+(k?k+",":"")+(m?m:"");p?(c.mmInitCallback=function(a){a(h,p,d)},v(t(a.baseContentUrl+"utils/pruh.js","MM.PRUH"))):d()}})(a);return this}if(!c.mmsystem){var M=c.console||{log:function(){},error:function(){}},Q=new L({
  storageType:'cookie',
  cprefix:'mm_',
  domain:'m.bbc.co.uk',
  baseContentUrl:'//service.maxymiser.net/platform/eu/api/',
  cookie_domain:location.hostname.match(/^[\d.]+$|/)[0]||('.'+(location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0]),
  srv:'//service.maxymiser.net/cg/v5/?',
  async:false,
  mmcoreUrl:'local',
  mmcoreCookieDomain:location.hostname.match(/^[\d.]+$|/)[0]||('.'+(location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0]),
  mmcoreCprefix:'mmcore.',
  beforeInit:function( getParam, setParam, loader ){ 
    var cookie_domain = location.hostname.match(/^[\d.]+$|/)[0]||('.'+(location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0]);
    var sample_rate1 = 1;
    var sample_rate2 = 5;
    var sample_rate3 = 50;
    var sample_rate4 = 100;
    var whitelist1 = {is: [],  contains: ['//www.bbc.co.uk/news'], regex: []};
    var whitelist2 = {is: [], contains: ['//www.bbc.co.uk/sport/live', '//m.bbc.co.uk/sport/live', '//www.bbc.co.uk/iplayer'], regex: []};
    var whitelist3 = {is: [],  contains: ['//www.bbc.co.uk/bbcthree', '//www.bbc.co.uk/guides', '//www.bbc.co.uk/education', '//www.bbc.co.uk/music'], regex: []};
    var whitelist4 = {is: ['https://ssl.bbc.co.uk/iplayer/watching', 'http://pal.sandbox.dev.bbc.co.uk/news'], contains: ['//www.bbc.co.uk/radio', '//www.bbc.co.uk/programmes', 'https://ssl.bbc.co.uk/iplayer/watching?', 'www.test.bbc.co.uk/home/five/testing/', 'www.test.bbc.co.uk/music', '//www.bbc.co.uk/news/uk-england-birmingham', '//www.bbc.co.uk/news/uk-england-shropshire', 'www.bbc.co.uk/guides/zxghycw'], regex: ['bbc\\.co\\.uk(\\/?(\\?.*)?(#.*)?)?$']};
    var actWhitelist = {is: [],  contains: [], regex: []};
    var getCookie = function(name) { var value = "; " + document.cookie; var parts = value.split("; " + name + "="); if (parts.length == 2) return parts.pop().split(";").shift();};
    var createCookie = function(name, value, days, domain) { var expires; if (days) { var date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); expires = "; expires=" + date.toGMTString();} else { expires = "";} document.cookie = name + "=" + value + expires + "; domain=" + domain +";path=/";};
    var getGeneratedRandom = function () {var number = getCookie('mm_random'); return (number || Math.ceil(Math.random() * 100));};
    var isInRate = function(rate) {return !(getGeneratedRandom() > rate);};
    var saveRandom = function () {createCookie('mm_random', getGeneratedRandom(), 365, cookie_domain);};
    var isInWhitelist = function(wl) { var url = window.location.href.replace(/(?:test|stage)\.bbc\.co\.uk/, 'bbc.co.uk'); for (var i = 0; i < wl.is.length; i++) { if (wl.is[i] === url) return true;} for (var i = 0; i < wl.contains.length; i++) { if (url.indexOf(wl.contains[i]) > -1) return true;} for (var i = 0; i < wl.regex.length; i++) { var thisRegex = new RegExp(wl.regex[i]); if (thisRegex.test(url)) return true;} return false;};
    var shouldCall = function() { if ( !isInWhitelist(whitelist1) && !isInWhitelist(whitelist2)  && !isInWhitelist(whitelist3) && !isInWhitelist(whitelist4) ) { return false; } else if (isInWhitelist(whitelist4) && isInRate(sample_rate4)) { return true; } else if (isInWhitelist(whitelist3) && isInRate(sample_rate3)) { return true; } else if (isInWhitelist(whitelist2) && isInRate(sample_rate2)) { return true; } else if (isInWhitelist(whitelist1) && isInRate(sample_rate1)) { return true; }};
    var populateActWhiteList = function() { var a=decodeURIComponent(getCookie("mm_whitelist"))||"{}", b={}; try{ if ( a !== {} ) { b=JSON.parse(a); for(var c in b) for(var d in b[c])[].push.apply(actWhitelist[d],b[c][d])}}catch(e){}};
    var shouldSendAct = function() {if (!isInWhitelist(actWhitelist)) {return false; } return true;};
    var createActPageID = function() { if (document.location.protocol === 'http:') { var mmActProtocol = 'action';}else {var mmActProtocol = 'actions';}return mmActProtocol + '://' + document.location.host + document.location.pathname + document.location.search + document.location.hash; };
    var migrateCookies = function() { for (i = 0; i < 4; i++) { var p_cookie_name = 'mmapi.store.p.' + i; var permData = getCookie(p_cookie_name); if (permData) { var new_cookie_name = 'mm_.store.p.' + i; createCookie(new_cookie_name, permData, 365, cookie_domain); createCookie(p_cookie_name, permData, -1, cookie_domain);}var s_cookie_name = 'mmapi.store.s.' + i;var sessData = getCookie(s_cookie_name);if (sessData) {var new_s_cookie_name = 'mm_.store.s.' + i;createCookie(new_s_cookie_name, sessData, 365, cookie_domain);createCookie(s_cookie_name, sessData, -1, cookie_domain);}}};
    migrateCookies();
    populateActWhiteList();
    saveRandom();
    if (!shouldCall() && !shouldSendAct()) { loader.disable();} else if (!shouldCall() && shouldSendAct()) { setParam('pageid', createActPageID(), 2);}
 },
  beforeRequest:function( getParam, setParam ){ /* custom code placeholder */ },
  afterResponse:function( getParam, setParam, genInfo ){ /* custom code placeholder */ },
  afterResponseExecution:function( getParam, setParam, genInfo ){ /* custom code placeholder */ }
});c.mmsystem=new J(Q)}})(window);
//$Rev: 64630afx2 $
// Extensions (plug-ins): persistent criteria, _Host,throttling, whitelist.
// Custom Sampling Logic
// Custom Triple Whitelist Logic for Campaigns
// Custom Whitelist logic for actions
//<![CDATA[
if (!window.mmcore) {
  window.mmcore = {
    domain:'m.bbc.co.uk',
    server:'service.maxymiser.net/cg/v5/',
    cookie_domain: location.hostname.match(/^[\d.]+$|/)[0]||('.'+(location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0]),
    tpixel:false,
    cprefix:'mmcore.',
    inline_state:true,
    sample_rate1: 1,
    sample_rate2: 5,
    sample_rate3: 50,
    sample_rate4: 100,
    whitelist1: {is: [],  contains: ['//www.bbc.co.uk/news'], regex: []},
    whitelist2: {is: [], contains: ['//www.bbc.co.uk/sport/live', '//m.bbc.co.uk/sport/live', '//www.bbc.co.uk/iplayer'], regex: []},
    whitelist3: {is: [],  contains: ['//www.bbc.co.uk/bbcthree', '//www.bbc.co.uk/guides', '//www.bbc.co.uk/education', '//www.bbc.co.uk/music'], regex: []},
    whitelist4: {is: ['https://ssl.bbc.co.uk/iplayer/watching', 'http://pal.sandbox.dev.bbc.co.uk/news'], contains: ['//www.bbc.co.uk/radio', '//www.bbc.co.uk/programmes', 'https://ssl.bbc.co.uk/iplayer/watching?', 'www.test.bbc.co.uk/home/five/testing/', 'www.test.bbc.co.uk/music', '//www.bbc.co.uk/news/uk-england-birmingham', '//www.bbc.co.uk/news/uk-england-shropshire', 'www.bbc.co.uk/guides/zxghycw'], regex: ['bbc\\.co\\.uk(\\/?(\\?.*)?(#.*)?)?$']},
    getGeneratedRandom: function () {var number = this.GetCookie('mm_random', 1); return (number || Math.ceil(Math.random() * 100));},
    actWhitelist: {is: [],  contains: [], regex: []},
    isInRate: function(rate) {return !(this.getGeneratedRandom() > rate);},
    saveRandom: function () {mmcore.SetCookie('mm_random', this.getGeneratedRandom(), 365, 1);},
    isInWhitelist: function(wl) { var url = window.location.href.replace(/(?:test|stage)\.bbc\.co\.uk/, 'bbc.co.uk'); for (var i = 0; i < wl.is.length; i++) { if (wl.is[i] === url) return true;} for (var i = 0; i < wl.contains.length; i++) { if (url.indexOf(wl.contains[i]) > -1) return true;} for (var i = 0; i < wl.regex.length; i++) { var thisRegex = new RegExp(wl.regex[i]); if (thisRegex.test(url)) return true;} return false;},
    shouldCall: function() { if ( !mmcore.isInWhitelist(mmcore.whitelist1) && !mmcore.isInWhitelist(mmcore.whitelist2) && !mmcore.isInWhitelist(mmcore.whitelist3) && !mmcore.isInWhitelist(mmcore.whitelist4) ) { return false; } else if (mmcore.isInWhitelist(mmcore.whitelist4) && mmcore.isInRate(this.sample_rate4)) { return true; } else if (mmcore.isInWhitelist(mmcore.whitelist3) && mmcore.isInRate(this.sample_rate3)) { return true; } else if (mmcore.isInWhitelist(mmcore.whitelist2) && mmcore.isInRate(this.sample_rate2)) { return true; } else if (mmcore.isInWhitelist(mmcore.whitelist1) && mmcore.isInRate(this.sample_rate1)) { return true; }},
    populateActWhiteList:function(){var a=mmcore.GetCookie("mm_whitelist", 1)||"{}",b={};try{b=JSON.parse(a);for(var c in b)for(var d in b[c])[].push.apply(mmcore.actWhitelist[d],b[c][d])}catch(e){}},
    shouldSendAct: function() {if (!mmcore.isInWhitelist(mmcore.actWhitelist)) {return false; } return true;},
    createActPageID: function() { if (document.location.protocol === 'http:') { var mmActProtocol = 'action';}else {var mmActProtocol = 'actions';}return mmActProtocol + '://' + document.location.host + document.location.pathname + document.location.search + document.location.hash; },
    OPC_install:function(){var t=this;t.SetParam('OPC.install','1');t._async=1;t.tpixel=false;t.CGRequest()},
    SetCookie:function(n,v,d,g){var _t=this,_h=_t._Host(_t._TL(location.hostname)),exp=_t._FutureDate(d);
      _t._d.cookie=escape(eval(g)?n:_t._PN(n))+'='+escape(v)+(_h.length?';domain='+_h:'')
      +';path=/'+(typeof d!='undefined'&&d!=0?(';expires='+exp.toGMTString()):'');_t.SetParam(n,v)},
    GetCookie:function(n,g){var _t=this;return unescape(_t._ValByKey(_t._d.cookie,escape(g?n:_t._PN(n)),'=',';'))},
    HideMaxyboxes:function(names){this._MbStyle('{visibility:hidden;}',this._Args2Arr(arguments))},
    ShowMaxyboxes:function(names){var i,obj,nn=this._Args2Arr(arguments);for(i=0;i<nn.length;i++){obj=this.GetMaxyboxNode(nn[i]);if(obj)obj.style.visibility='visible'}},
    GetMaxyboxNode:function(m){return document.getElementById(m)},
    IsDefaultArrived:function(m){var _t=this,b,x=_t.GetMaxyboxNode(m);if(!x)return false;b=document.body,p='parentNode';while(!x.nextSibling&&x!=b&&x[p])x=x[p];if(x==b||!x[p])return false;return true},
    SetAction:function(name,val,attr){var _t=this;_t._vars.act['a'+(_t._act_id++)+'_'+_t._T(name)]=''+_t._ToNum(0,val)+','+(encodeURIComponent(attr||''))},
    $Action:function(){var _t=this,a=_t.GetCookie("mmact",1)+_t._S(arguments);_t.SetCookie("mmact",a,1,1)},
    SetPersCriterion:function(name,val){this._vars.uat[this._T(name)]=(encodeURIComponent(val||''))},
    SetParam:function(name,val){var t=this;t._vars[t._TL(name)]=(val||'');if(t[name]&&val)t[name]=val},
    GetParam:function(name){var t=this;return t._vars[t._TL(name)]||t[name]},
    SetPageID:function(id){this.SetParam('PageID',encodeURIComponent(id))},
    SetVisitorID:function(id,idtype){var t=this,_i=idtype;if(!_i)_i=1;t._vars.ids[_i]=encodeURIComponent(id)},
    SetPAFilter:function(category_id,category_name,is_inclusion){this._filters.push({category_id:category_id,category_name:category_name,is_inclusion:is_inclusion?1:0});},
    SetProductFilter:function(category_id,product_id,is_inclusion){this._filters.push({category_id:category_id,product_id:product_id,is_inclusion:is_inclusion?1:0,is_product:1});},
    CGRequest:function(callback){if(!this._ShouldRunVcb()&&this.GetParam("gm")!=2){var _t=this,o=_t._DS(_t.GetCookie("mmact",1),function(){_t.SetAction.apply(_t,this)});
      _t.SetCookie("mmact","",-1,1);
      callback = (function(c,id){
      return function(){var r=c(),tag=_t._d.getElementById(_t.cprefix+id);if(tag){if(tag.parentNode)tag.parentNode.removeChild(tag);else tag.removeAttribute('src');}return r;};
      })(callback||function(){},++_t._request_id);
      _t._callback[_t._request_id]=callback;return _t._sid=_t._Tag(_t._TagUri());}},
    RenderMaxyboxes:function(names){var t=this,i=0,_tr=t._renderers,nn,a=t._Args2Arr(arguments);if(a.length<=0)for(nn in _tr)a.push(nn);
      for(;i<a.length;i++){nn=a[i];if(_tr[nn]&&!t._r_mbs[nn])try{_tr[nn]()}catch(e){};t._r_mbs[nn]=1;t.ShowMaxyboxes(nn)}},
    AddDocLoadHandler:function(handler){var t=this,d=t._d,f,tm1,u=t._L(navigator.userAgent);
      if(t._docEnd&&handler)return handler();else t._docEndF.push(handler);if(t._docEndF.length>1)return;
      mmcore.evnt=function(){var i=0;if(!t._docEnd){t._docEnd=true;for(;i<t._docEndF.length;i++)try{t._docEndF[i]()}catch(e){};}t._docEndF=[]};
      if(/webkit/.test(u))f=function(){return d.readyState=="loaded"||d.readyState=="complete"};
      else if(/msie/.test(u)&&window==top)f=function(){try{d.documentElement.doScroll("left");return true}catch(e){return false}};
      if(f)tm1=setInterval(function(){if(f())mmcore.evnt();if(t._docEnd&&tm1){clearInterval(tm1);tm1=null;f=null}},500);
      if((/mozilla/.test(u)&&!/(compatible)/.test(u))||(/opera/.test(u))){t._d.addEventListener("DOMContentLoaded",mmcore.evnt,false);return;}
      window._mm_owl1=t._w.onload;t._w.onload=function(event){mmcore.evnt();if(window._mm_owl1)return window._mm_owl1(event);}},
    AppendScript:function(src,callback){var doc=this._d,script=doc.createElement('script');script.type='text/javascript';script.charset='utf-8';script.src=src;
      doc.getElementsByTagName('head')[0].appendChild(script);if(typeof callback==="function"){script.onload=script.onerror=function(){if(!this.executed){this.executed=true;callback();}};
      /*IE8*/script.onreadystatechange=function(){var self=this;if(this.readyState=="complete"||this.readyState=="loaded"){window.setTimeout(function(){self.onload();},0);}};}},
//transport
    Request:function(callback){var _t=mmcore;_t._rd=(new Date()).getTime();_t._async=true;return (_t._sid[_t._request_id-1]=_t.CGRequest(callback||function(){}))},
    IsFinished:function(){var _t=mmcore,r=true,i,tc=_t._callback;if(_t.tpixel)r=((new Date()).getTime()-_t._rd)>=_t._rt;for(i=0;i<tc.length;i++)r=r&&(tc[i]==null);return r},
    StopRequest:function(){var _d=document,_t=mmcore,_n,i,s=_t._sid;for(i in s){_n=_d.getElementById(s[i]);if(_n){(_n.parentNode||_d).removeChild(_n);_n.src='about:blank';delete _n}}},
    _rt:1000,
//private
    jsver:'5.17',_vars:{fv:{},act:{},uat:{},ids:{}},_act_id:0,_vars_alias:{act:'uv'},_renderers:{},_extensions:{},_r_mbs:{},
    _async:false,_w:window,_d:document,_undef:undefined,_callback:[],_request_id:0,
    _filters:[],
    _sid:[],_rd:null,_docEnd:false,_docEndF:[],_incrRender:true,
    _FutureDate:function(days){var d=new Date();d.setTime(d.getTime()+days*86400000);return d},
    _AddRenderer:function(mb,func){this._renderers[mb]=func},
    _ValByKey:function(str,key,f,r){
      var k=key.replace(/\./g,'\\.'),sre1='\\s*('+k+')\\s*'+f+'([^'+r+']*)',r2='',m,_t=this,re=new RegExp(r+sre1,'gm'),re1=new RegExp('^'+sre1,'gm');
      while((m=re.exec(str))!=null)r2=_t._T(m[2]);if(r2===''&&(m=re1.exec(str))!=null)r2=_t._T(m[2]);
      return r2;},
    _ReadParams:function(str,f,r){
      var _t=this,p=_t.cprefix,rs=[str],rs1,i,i1,kv;if(p.length==0)return;r=[].concat(r);
      for(i=0;i<r.length;i++){rs1=[];for(i1=0;i1<rs.length;i1++)rs1=rs1.concat(rs[i1].split(r[i]));rs=rs1}
      for(i=0;i<rs.length;i++){kv=rs[i].split(f);if(kv.length!=2)continue;
        kv[0]=_t._TL(kv[0]);if(kv[0].indexOf(p)==0&&/^[.\w]+$/.test(kv[0]))_t.SetParam(kv[0].substr(p.length),_t._T(kv[1]))}},
    _Args2Arr:function(){var r=[],i=0,a=arguments[0],l=a.length;
      if(l>0){if(a[0] instanceof Array)r=a[0];else if(!(a[0]instanceof Object))for(;i<l;i++)r[i]=a[i]}return r},
    _S:function(a){
      var i = 0, l = a.length;
      for (; i < l; i += 1)a[i] = escape(a[i]);
      return "<" + escape([].join.call(a, ',')) + ">";
    },
    _DS:function(s,f){
      s.replace(/<(.+?)>/g, function () {
        var a = unescape(arguments[1]).split(","), i = 0, l = a.length;
        for (; i < l; i += 1)a[i] = unescape(a[i]);
        f.call(a);
      })
    },
    _ToNum:function(def_val,str){return (typeof str==undefined||isNaN(str))?def_val:Number(str)},
    _T:function(str){return str.replace(/^\s+/g, '').replace(/\s+$/g, '')},
    _L:function(str){return str.toLowerCase()},
    _TL:function(str){return this._L(this._T(str))},
    _PN:function(str){return this._T(this.cprefix+str)},
    _SerializeArray:function(arr){
      var row,el,res='',col='',rec;
      for(row=0;row<arr.length;row++){col='';
      for(el in arr[row]){rec=arr[row][el];if(typeof rec=='undefined') rec='';col+=encodeURIComponent(rec)+',';}
      if (col.length>0) col=col.slice(0,-1);res+=col+';';}
      return encodeURIComponent(res);},
    _Host:function(h){
      function n(t){return '.' + t.replace(/^www\./i, '')}
      function m(t){return (new RegExp(t.replace(/\./g, '\\.') + '$'))}
      function c(s1,s2){return s1.match(m(s2))}var _t=this,_h=n(h),_d=n(_t.domain),_cd=_t.cookie_domain;return (c(_cd,_h)||c(_h,'.'+_cd.replace(/^\./,'')))?_cd:(c(_h,_d)?_d:_h)},
    _TagUri:function(){
      this._InitRef();var _t=this,_a,_vv=_t._vars,_p=location.protocol,s='',s1,i,_v,_k;
      _t.SetParam('jsver',_t.jsver);_t.SetParam('tp',_t.tpixel?'1':'');
      for(i in _vv){_v=_vv[i];s1='';
        if(typeof _v=='object'){_a=(_v==_vv.act);for(_k in _v)s1+=(_a?_k.replace(/^a\d+?_/,''):_k)+'='+_v[_k]+';';s1.slice(0,-1)}else s1=_v;
        if(s1.length)s+=(_t._vars_alias[i]||i)+'='+encodeURIComponent(s1)+'&'
      };
      s =_t.server+'?'+s.slice(0,-1)+'&ri='+_t._request_id+'&rul='+_t._SerializeArray(_t._filters);
      return s.indexOf('://')>0?s:_p+'//'+s},
    _Tag:function(uri){
      var _t=this,_n,px=_t.tpixel,tp='text/javascript',d=_t._d,_a,id=_t.cprefix+_t._request_id;
      if(_t._async){
        _n=d.createElement(px?'img':'script');_n.id=id;_n.src=uri;if(!px){_n.type=tp;_n.charset='utf-8'};
        _a=d.getElementsByTagName(px?'body':'head');if(_a&&_a.length)_a[0].appendChild(_n)
      }else{
        try{_t._d.write(px?'<img id="'+id+'" src="'+uri+'"\/>':'<scr'+'ipt id="'+id+'" type="'+tp+'" charset="utf-8" src="'+uri+'"><\/scr'+'ipt>')}
        catch(e){_t._async=true;_t._Tag(uri)}
      }_t._Clear();return id},
    _RenderOnLoad:function(){var t=this,tm,f1,f2;
    f1=function(){t.RenderMaxyboxes()};t.AddDocLoadHandler(f1);
    f2=function(){var m,ok=true,ma=t._r_mbs;
      for(m in t._renderers){if(t._docEnd||(!ma[m]&&t.IsDefaultArrived(m)))t.RenderMaxyboxes(m);if(!ma[m])ok=false}if(ok)clearInterval(tm)
    };if(t._incrRender){tm=setInterval(f2,100);f2();}},
    _MbStyle:function(vis,arg){var s='<style type="text/css">',i=0;for(;i<arg.length;i++)s+=(i>0?',#':'#')+arg[i];s+=vis+'</style>';this._d.write(s)},
    _DestroyVcb:function(){window.sessionStorage&&window.sessionStorage.removeItem('mmVcbInitScriptUrl');
      this.SetCookie('mmVcbInitScriptUrl','',-1,1);this.SetCookie('mmVcbOrigins','',-1,1);},
    _InitRef:function(){var _t=this;_t._d=document;_t._w=window;},
    _Init:function(first){
      var _t=this,_fv=_t._vars.fv,_w=_t._w.screen,_u=location.href,_r=_t._d.referrer,_rnd=(''+Math.random()).substring(0,5),_id,vcb_url,cid='0',
        origin=window.location.protocol+'//'+window.location.hostname+(window.location.port?':'+window.location.port:''),
        rx=/^https?:\/\/[\w-]*vcb[\w-]*\.maxymiser\.(com|org)\//i;
      _t._Clear();if(first){_id=_t._ValByKey(_u,_t._PN('pd'),'=','&');if(_id.length)_t.SetCookie('pd',_id,7);}
      try{_t._ReadParams(_t._d.cookie,'=',';');_t._ReadParams(_u,'=',['&','?','#'])}catch(e){}
      _fv.dmn=_t.domain;if(_r.length>256)_r=_r.substring(0,256);if(_u.length>1024)_u=_u.substring(0,1024);
      _fv.ref=escape(_r);_fv.url=encodeURIComponent(_u);_fv.scrw=_w.width;_fv.scrh=_w.height;_fv.clrd=_w.colorDepth;
      _t.SetCookie('tst',_rnd,10);_fv.cok=(_t.GetCookie('tst')==_rnd?1:0);
      _id=_t.GetCookie('mmid',1);if(_id.length)_t.SetParam('mmid',_id);
      if (typeof _r!='undefined'&&_r!=''){
      if(_t._ValByKey(_r.split('?')[1],'pt.enabled','=','&')=='1')    
        {_t.SetCookie('pt.enabled','1',0.5,false);_t.SetCookie('mmauthid',unescape(_t._ValByKey(_r.split('?')[1],'pt.mmauthid','=','&')),4,false);}
      cid=_t._ValByKey(_r.split('?')[1],'mode','=','&');
        if (!vcb_url&&window.sessionStorage){vcb_url=_t._ValByKey(_r.split('?')[1],'VcbInitScriptUrl','=','&');
          if (rx.test(vcb_url)){window.sessionStorage.setItem('mmVcbInitScriptUrl',vcb_url);
          _t.SetCookie('mmVcbInitScriptUrl',vcb_url,0,1);_t.SetCookie('mmVcbOrigins',origin,0,1);}}}
      if(window.sessionStorage&&_t._ShouldRunVcb()){vcb_url=_t.GetCookie('mmVcbInitScriptUrl',1);if(rx.test(vcb_url)){
        _t.AppendScript(unescape(vcb_url+'?cid='+cid));if(!_t.GetParam('cfgid')){_t.SetCookie('cfgid',1,0);}
        var origins=_t.GetCookie('mmVcbOrigins',1);_t._prevVcbOrigins=origins;if(origins.indexOf(origin)==-1){_t.SetCookie('mmVcbOrigins',origins+origin,0,1);}
        window.sessionStorage.setItem('mmVcbInitScriptUrl', vcb_url);}}},
    _Clear:function(){var v=this._vars;v.mb={};v.act={};v.uat={}},
    _ShouldRunVcb:function(){var storageItem=window.sessionStorage&&window.sessionStorage.getItem('mmVcbInitScriptUrl'),storageFlag=!!storageItem,disabledFlag=storageItem=='disabled',
      cookieFlag=!!this.GetCookie('mmVcbInitScriptUrl',1),origin=window.location.protocol+'//'+window.location.hostname+(window.location.port?':'+window.location.port:''),
      origins =this.GetCookie('mmVcbOrigins',1),existingOrigin=origins.indexOf(origin)>-1;
        return !disabledFlag&&(cookieFlag&&storageFlag&&existingOrigin||cookieFlag&&!existingOrigin);},
    _DisableVcb:function(){window.sessionStorage&&window.sessionStorage.setItem('mmVcbInitScriptUrl','disabled');},
    _RestoreVcbOrigins:function(){this._prevVcbOrigins&&this.SetCookie('mmVcbOrigins',this._prevVcbOrigins,0,1);}
  };

  (function() {  // Extentions (plug-ins).
      'use strict';
      // Persistent criteria.
      (function(b){function f(a){var c=[],d,e;for(e in a)a.hasOwnProperty(e)&&(d=a[e],c.push([escape(e),escape(d)].join("=")));a=c.join("&");b.SetCookie(g,a,h,!0)}var g="mm_pc",h=365,j=b._Clear;b._Clear=function(){j.apply(b,arguments);var a=b.GetPersistentCriteria(),c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],b.SetPersCriterion(d,c))};b.SetPersistentCriterion=function(a,c){var d=b.GetPersistentCriteria();d[a]=c;f(d);b.SetPersCriterion(a,c)};b.UnsetPersistentCriterion=function(a){var c=b.GetPersistentCriteria(); if(c.hasOwnProperty(a)){delete c[a];f(c);try{delete b._vars.uat[a]}catch(d){}}};b.GetPersistentCriteria=function(){var a={};b.GetCookie(g,!0).replace(/([^&]*)=([^&]*)/g,function(b,d,e){a[unescape(d)]=unescape(e)});return a};b.GetPersistentCriterion=function(a){var c=b.GetPersistentCriteria();return c.hasOwnProperty(a)?c[a]:null}})(mmcore);
      // _Host function.
      mmcore._Host = (function(getCookieDomainForHostname) {
        return function(hostname) {
        return !/^\d{1,3}(?:\.\d{1,3}){3}$|^\[[^\]]+\]$/.test(hostname) ? getCookieDomainForHostname.apply(this, arguments) : hostname;
        };
      }(mmcore._Host));
  }());

  (function () { // Traffic throttle
    if (~navigator.userAgent.toLowerCase().indexOf("opera")) return;
    mmcore._Init(true);
    mmcore.populateActWhiteList();
    mmcore.saveRandom();
    if (mmcore.shouldCall()) {
      mmcore.utilityHub = {};
      if (window.hasOwnProperty('mmcoreInitCallback') && typeof window['mmcoreInitCallback'] === 'function' );
      window['mmcoreInitCallback']( function(){mmcore.inline_state=false } );
    } else if (mmcore.shouldSendAct()) {
      mmcore.SetPageID(mmcore.createActPageID());
      mmcore.utilityHub = {};
      if (window.hasOwnProperty('mmcoreInitCallback') && typeof window['mmcoreInitCallback'] === 'function' );
      window['mmcoreInitCallback']( function(){mmcore.inline_state=false } );
    }
    mmcore.AddDocLoadHandler(function(){});
  }());
}
//]]>