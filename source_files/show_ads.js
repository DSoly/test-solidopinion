(function(){var m=this,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},n=function(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return n.apply(null,arguments)},ca=Date.now||
function(){return+new Date},da=function(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ua=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var r=(new Date).getTime();var ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,ga=function(){},ia=function(a,b,c){switch(typeof b){case "string":ha(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=
b.length&&b.splice){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),ia(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],"function"!=typeof f&&(c.push(d),ha(e,c),c.push(":"),ia(a,f,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},ha=function(a,b){b.push('"');b.push(a.replace(fa,function(a){if(a in ea)return ea[a];var b=a.charCodeAt(0),c="\\u";16>b?c+="000":256>b?c+="00":4096>b&&(c+="0");return ea[a]=
c+b.toString(16)}));b.push('"')};var t=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},qa=function(a){if(!ja.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ka,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(la,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ma,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(na,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(oa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(pa,"&#0;"));return a},ka=/&/g,la=/</g,ma=/>/g,na=/"/g,oa=/'/g,pa=/\x00/g,ja=/[\x00&<>"']/,
ra={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},u={"'":"\\'"},sa=function(a,b){return a<b?-1:a>b?1:0};var x=function(a){x[" "](a);return a};x[" "]=function(){};var ua=function(a,b){var c=ta;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var z=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{x(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},va=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},wa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},xa=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},ya=/^([0-9.]+)px$/,za=function(a){return(a=
ya.exec(a))?+a[1]:null};var Aa=function(a,b){this.j=a;this.l=b},Ba=function(a,b,c){this.url=a;this.j=b;this.M=!!c;this.depth=null};var Ca=function(a,b){a.addEventListener?a.addEventListener("load",b,!1):a.attachEvent&&a.attachEvent("onload",b)};var Da=function(a,b,c,d,e){this.w=c||4E3;this.s=a||"&";this.A=b||",$";this.u=void 0!==d?d:"trn";this.C=e||null;this.v=!1;this.l={};this.B=0;this.j=[]},Ea=function(a,b){var c={};c[a]=b;return[c]},A=function(a,b,c,d){a.j.push(b);a.l[b]=Ea(c,d)},Ha=function(a,b,c,d){b=b+"//"+c+d;var e=Fa(a)-d.length-0;if(0>e)return"";a.j.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.j.length;f++)for(var g=a.j[f],h=a.l[g],k=0;k<h.length;k++){if(!e){d=null==d?g:d;break}var l=Ga(h[k],a.s,a.A);if(l){l=c+l;
if(e>=l.length){e-=l.length;b+=l;c=a.s;break}else a.v&&(c=e,l[c-1]==a.s&&--c,b+=l.substr(0,c),c=a.s,e=0);d=null==d?g:d}}f="";a.u&&null!=d&&(f=c+a.u+"="+(a.C||d));return b+f+""},Fa=function(a){if(!a.u)return a.w;var b=1,c;for(c in a.l)b=c.length>b?c.length:b;return a.w-a.u.length-b-a.s.length-1},Ga=function(a,b,c,d,e){var f=[];wa(a,function(a,h){(a=Ia(a,b,c,d,e))&&f.push(h+"="+a)});return f.join(b)},Ia=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof
Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Ia(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Ga(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};var Ka=function(a,b,c,d,e){if((d?a.v:Math.random())<(e||a.j))try{var f;c instanceof Da?f=c:(f=new Da,wa(c,function(a,b){var c=f,d=c.B++;a=Ea(b,a);c.j.push(d);c.l[d]=a}));var g=Ha(f,a.u,a.l,a.s+b+"&");g&&Ja(g)}catch(h){}},Ja=function(a){m.google_image_requests||(m.google_image_requests=[]);var b=m.document.createElement("img");b.src=a;m.google_image_requests.push(b)};var La=function(a,b,c){this.u=a;this.w=b;this.s=c;this.l=null;this.v=this.j},Ma=function(a,b,c){this.s=a;this.j=b||"";this.l=c||-1},Oa=function(a,b,c,d){var e;try{e=c()}catch(h){var f=a.s;try{var g=Na(h),f=(d||a.v).call(a,b,g,void 0,void 0)}catch(k){a.j("pAR",k)}if(!f)throw h;}finally{}return e},Pa=function(a,b,c,d){return function(){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return Oa(a,b,function(){return c.apply(void 0,e)},d)}};
La.prototype.j=function(a,b,c,d,e){try{var f=e||this.w,g=new Da;g.v=!0;A(g,1,"context",a);b instanceof Ma||(b=Na(b));A(g,2,"msg",b.s.substring(0,512));b.j&&A(g,3,"file",b.j);0<b.l&&A(g,4,"line",b.l.toString());b={};if(this.l)try{this.l(b)}catch(y){}if(d)try{d(b)}catch(y){}d=[b];g.j.push(5);g.l[5]=d;var h;e=m;d=[];var k,l=null;do{b=e;z(b)?(k=b.location.href,l=b.document&&b.document.referrer||null):(k=l,l=null);d.push(new Ba(k||"",b));try{e=b.parent}catch(y){e=null}}while(e&&b!=e);k=0;for(var q=d.length-
1;k<=q;++k)d[k].depth=q-k;b=m;if(b.location&&b.location.ancestorOrigins&&b.location.ancestorOrigins.length==d.length-1)for(k=1;k<d.length;++k){var p=d[k];p.url||(p.url=b.location.ancestorOrigins[k-1]||"",p.M=!0)}for(var v=new Ba(m.location.href,m,!1),B=d.length-1,q=B;0<=q;--q){var w=d[q];if(w.url&&!w.M){v=w;break}}var w=null,C=d.length&&d[B].url;0!=v.depth&&C&&(w=d[B]);h=new Aa(v,w);h.l&&A(g,6,"top",h.l.url||"");A(g,7,"url",h.j.url||"");Ka(this.u,f,g,!1,c)}catch(y){try{Ka(this.u,f,{context:"ecmserr",
rctx:a,msg:Qa(y),url:h.j.url},!1,c)}catch(Zb){}}return this.s};var Na=function(a){return new Ma(Qa(a),a.fileName,a.lineNumber)},Qa=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};var Ra=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"==typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};var D=function(a){this.B=Sa();this.s=Math.random()<a;this.events=[];this.v={}},Sa=m.performance&&m.performance.now?n(m.performance.now,m.performance):ca,Ta=function(a,b,c,d,e){if(a.s){var f=a.v[b]||0;e=e||f+1;e>f&&(a.v[b]=e);a.events.push({label:b,type:c,va:e,timestamp:d});return e}return 0};D.prototype.A=function(a,b,c,d){b=Ta(this,a,2,b,d);Ta(this,a,3,c,b)};D.prototype.u=function(a,b,c){var d=Sa();b=b();var e=Sa();this.A(a,d-this.B,e-this.B,c);return b};
var Va=function(a,b){return n(function(){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return this.u(a,function(){return b.apply(void 0,c)})},Ua)};var Ua,Wa,E,F=function(a,b,c){D.call(this,a);this.j=this.l=0;this.w=c||Infinity;this.C=b};da(F,D);F.prototype.G=function(){if(this.s&&this.events.length&&this.j<this.w){var a=[];Ra(this.events,function(b){4==b.type&&a.push([b.label,Math.round(b.timestamp)].join("."))});a.length&&(Ka(this.C,"execution_time",{data:a,nav_api:m.performance&&m.performance.now?1:0},!0,1),this.j++)}this.events=[];window.clearTimeout(this.l);this.l=0};F.prototype.A=function(a,b,c,d){Ta(this,a,4,c-b,d)};
F.prototype.u=function(a,b,c){a=F.W.u.call(this,a,b,c);!this.l&&this.s&&this.events.length&&this.j<this.w&&(b=5<this.j?1E4:300<<this.j,this.l=window.setTimeout(n(this.G,this),b));return a};var G=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},Xa=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,Ya=function(a,b){return a?(a=a.match(Xa))?a[0]:b:b};var Za=G("0.0"),$a=G("0.10"),ab=G("0.05"),bb=G("0.05"),cb=G("0.001"),db=G("0.015"),eb=G(""),fb=G("0.001"),gb=G("0.01");var hb=function(){return"r20161109"},H=/^true$/.test("false")?!0:!1,ib=/^true$/.test("false")?!0:!1,jb=/^true$/.test("false")?!0:!1,kb=jb||!ib;var I;a:{var lb=m.navigator;if(lb){var mb=lb.userAgent;if(mb){I=mb;break a}}I=""}var J=function(a){return-1!=I.indexOf(a)};var nb=J("Opera"),K=J("Trident")||J("MSIE"),ob=J("Edge"),L=J("Gecko")&&!(-1!=I.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),pb=-1!=I.toLowerCase().indexOf("webkit")&&!J("Edge"),qb=function(){var a=m.document;return a?a.documentMode:void 0},rb;
a:{var sb="",tb=function(){var a=I;if(L)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ob)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pb)return/WebKit\/(\S+)/.exec(a);if(nb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();tb&&(sb=tb?tb[1]:"");if(K){var ub=qb();if(null!=ub&&ub>parseFloat(sb)){rb=String(ub);break a}}rb=sb}
var vb=rb,ta={},wb=function(a){ua(a,function(){for(var b=0,c=t(String(vb)).split("."),d=t(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=sa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||sa(0==g[2].length,0==h[2].length)||sa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})},xb;var yb=m.document;
xb=yb&&K?qb()||("CSS1Compat"==yb.compatMode?parseInt(vb,10):5):void 0;var zb;if(!(zb=!L&&!K)){var Ab;if(Ab=K)Ab=9<=Number(xb);zb=Ab}zb||L&&wb("1.9.1");K&&wb("9");var Bb=document,M=window,Cb=null,N=Bb.getElementsByTagName("script");N&&N.length&&(Cb=N[N.length-1]);var Db=Cb;var Eb=Object.prototype.hasOwnProperty,Fb=function(a,b){for(var c in a)Eb.call(a,c)&&b.call(void 0,a[c],c,a)},O=function(a){return!(!a||!a.call)&&"function"===typeof a},Gb=function(a,b){for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},P=function(a,b){if(a.indexOf)return a=a.indexOf(b),0<a||0===a;for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Hb=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,Ca(a,function(){a.google_onload_fired=!0}))},Ib=function(a){a=a.google_unique_id;
return"number"===typeof a?a:0},Jb=!!window.google_async_iframe_id;Wa=new function(){this.u="http:"===M.location.protocol?"http:":"https:";this.l="pagead2.googlesyndication.com";this.s="/pagead/gen_204?id=";this.j=.01;this.v=Math.random()};E=new La(Wa,"jserror",!0);Ua=new F(1E-4,Wa,10);var Lb=function(a,b){var c=Kb;Pa(E,a,Va(a,b),c)()},Kb=E.j,Mb=function(a,b){return Pa(E,a,b)};var Nb=J("Safari")&&!((J("Chrome")||J("CriOS"))&&!J("Edge")||J("Coast")||J("Opera")||J("Edge")||J("Silk")||J("Android"))&&!(J("iPhone")&&!J("iPod")&&!J("iPad")||J("iPad")||J("iPod"));var Q=null,Ob=null,Pb=L||pb&&!Nb||nb||"function"==typeof m.btoa,Qb=function(a,b){var c;if(Pb&&!b)c=m.btoa(a);else{c=[];for(var d=0,e=0;e<a.length;e++){for(var f=a.charCodeAt(e);255<f;)c[d++]=f&255,f>>=8;c[d++]=f}if(!Q)for(Q={},Ob={},a=0;65>a;a++)Q[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Ob[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a);b=b?Ob:Q;a=[];for(d=0;d<c.length;d+=3){var g=c[d],h=(e=d+1<c.length)?c[d+1]:0,k=(f=d+2<c.length)?
c[d+2]:0,l=g>>2,g=(g&3)<<4|h>>4,h=(h&15)<<2|k>>6,k=k&63;f||(k=64,e||(h=64));a.push(b[l],b[g],b[h],b[k])}c=a.join("")}return c};var R="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_auto_format google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_content_recommendation_columns_num google_content_recommendation_rows_num google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_delay_requests_count google_delay_requests_delay google_ed google_eids google_enable_content_recommendations google_enable_ose google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_native_settings_key google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Rb={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Sb=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},Tb=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];
return null},Wb=function(a){var b;try{a:{var c=a.document.getElementsByTagName("script"),d=a.navigator&&a.navigator.userAgent||"",e;if(!(e=/appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(d))){var f;if(f=/i(phone|pad|pod)/i.test(d)){var g;if(g=/applewebkit/i.test(d)&&!/version|safari/i.test(d)){var h;try{h=!(!M.navigator.j&&!(H&&M.google_top_window||M.top).navigator.j)}catch(v){h=!1}g=!h}f=
g}e=f}for(var d=e?Sb:Tb,k=c.length-1;0<=k;k--){var l=c[k];if(!l.google_parsed_script){l.google_parsed_script=!0;var q=d(l);if(q){b=q;break a}}}b=null}}catch(v){return!1}if(!b)return!1;try{for(var c=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,k={},p;p=c.exec(b);)k[p[1]]=Ub(p[2]);Vb(k,a)}catch(v){return!1}return!!a.google_ad_client},Xb=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];Fb(a,function(a,d){if(null!=a){var c;try{var f=[];ia(new ga,a,f);c=f.join("")}catch(g){}c&&
(c=c.replace(/\//g,"\\$&"),Gb(b,d,"=",c,";"))}});return b.join("")},Yb=function(a){for(var b=0,c=R.length;b<c;b++){var d=R[b];Rb[d]||(a[d]=null)}},Ub=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}},Vb=function(a,b){for(var c=0;c<R.length;c++){var d=R[c];null==b[d]&&null!=
a[d]&&(b[d]=a[d])}};var $b=function(a){return(a=a.google_ad_modifications)?a.eids||[]:[]},S=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},ac=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var bc={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",pse:"google_pstate_expt"};E.s=!H;var cc=!1;var dc=null,ec=function(){if(!dc){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,z(a))b=a;else break;dc=b}return dc};var fc={m:"10573511",o:"10573512"},gc={m:"388900710",F:"388900711",D:"388900712"},hc={m:"10583695",o:"10583696"},ic={m:"10573695",o:"10573696"},jc={m:"4089030",o:"4089031"},kc={m:"4089035",o:"4089036"},T={ba:{},sa:{m:"453848102",o:"453848103"},la:{m:"24819308",o:"24819309",Z:"24819320",ea:"24819321"},ka:{m:"24819330",o:"24819331"},ha:{m:"86724438",o:"86724439"},R:{m:"388900700",F:"388900701",D:"388900702"},J:{m:"10573581",o:"10573582"},ca:{m:"26835105",o:"26835106"},T:{m:"20040000",o:"20040001"},
$:{m:"20040016",o:"20040017"},aa:{X:"314159230",ja:"314159231"},ia:{pa:"27285692",ra:"27285712",qa:"27285713"},na:{m:"27415010",o:"27415011"},fa:{m:"90091300",o:"90091301"},I:{m:"62710000",o:"62710001"},oa:{m:"20040060",ma:"20040061",ga:"20040062"},Y:{m:"20040063",o:"20040064"},K:{m:"62710010",VIEWPORT:"62710011",H:"62710012"},da:{m:"29222124",ta:"29222125"}},cc=!1;var U=function(a,b){b&&a.push(b)},V=function(a,b,c){for(var d=0;d<c.length;d++)if(a.location&&a.location.hash=="#google_plle_"+c[d])return c[d];var e;a:{try{var f=window.top.location.hash;if(f){var g=f.match(/\bdeid=([\d,]+)/);e=g&&g[1]||"";break a}}catch(k){}e=""}if(a=(a=e.match(new RegExp("\\b("+c.join("|")+")\\b")))&&a[0]||null)c=a;else if(cc)c=null;else a:{if(!(1E-4>Math.random())&&(a=Math.random(),a<b)){b=window;try{var h=new Uint32Array(1);b.crypto.getRandomValues(h);a=h[0]/65536/65536}catch(k){a=
Math.random()}c=c[Math.floor(a*c.length)];break a}c=null}return c};var lc=function(a,b,c){Lb("files::getSrc",function(){if("https:"==M.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},mc=function(a,b,c){c||(c=kb?"https":"http");return lc(a,b,c)};var nc=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}};var oc=function(a){this.name="TagError";this.message=a?"adsbygoogle.push() error: "+a:"";Error.captureStackTrace?Error.captureStackTrace(this,oc):this.stack=Error().stack||""};da(oc,Error);var pc=function(a,b){this.l=a;this.j=b};pc.prototype.minWidth=function(){return this.l};pc.prototype.height=function(){return this.j};var W=function(a,b,c){pc.call(this,a,b);this.U=c};da(W,pc);var qc=function(a){return function(b){return!!(b.U&a)}},X=[new W(970,90,2),new W(728,90,2),new W(468,60,2),new W(336,280,1),new W(320,100,2),new W(320,50,2),new W(300,600,4),new W(300,250,1),new W(250,250,1),new W(234,60,2),new W(200,200,1),new W(180,150,1),new W(160,600,4),new W(125,125,1),new W(120,600,4),new W(120,240,4)],rc=[X[6],X[12],X[3],X[0],X[7],X[14],X[1],X[8],X[10],X[4],X[15],X[2],X[11],X[5],X[13],X[9]];var sc=function(a,b){do{var c=va(a,b);if(c&&"fixed"==c.position)return!1}while(a=a.parentElement);return!0};var tc=function(a,b,c){if(a.style){var d=za(a.style[c]);if(d)return d}if(a=va(a,b))if(d=za(a[c]))return d;return null},uc=function(a){return function(b){return b.minWidth()<=a}},wc=function(a,b,c){var d=a&&vc(c,b);return function(a){return!(d&&250<=a.height())}},vc=function(a,b){var c;try{var d=b.document.documentElement.getBoundingClientRect(),e=a.getBoundingClientRect();c={x:e.left-d.left,y:e.top-d.top}}catch(f){c=null}return(c?c.y:0)<nc(b).clientHeight-100},xc=function(a,b){var c=Infinity;do{var d=
tc(b,a,"height");d&&(c=Math.min(c,d));(d=tc(b,a,"maxHeight"))&&(c=Math.min(c,d))}while((b=b.parentElement)&&"HTML"!=b.tagName);return c};var yc=function(a){return function(b){for(var c=a.length-1;0<=c;--c)if(!a[c](b))return!1;return!0}},zc=function(a,b,c){for(var d=a.length,e=null,f=0;f<d;++f){var g=a[f];if(b(g)){if(!c||c(g))return g;null===e&&(e=g)}}return e};var Cc=function(a,b,c){var d,e=.25>=a/Math.min(1200,nc(b).clientWidth)?4:3;d=d||{};d.google_responsive_formats=e;d=!(J("iPad")||J("Android")&&!J("Mobile")||J("Silk"))&&(J("iPod")||J("iPhone")||J("Android")||J("IEMobile"))&&!vc(c,b)&&(d.google_safe_for_responsive_override=sc(c,b));var f=300>a||450<a?!1:P($b(b),gc.F)||P($b(b),gc.D),g=(d?rc:X).slice(0);P(S(b),T.J.o)&&Ac(g);f&&g.unshift(new W(a,Math.floor(.8334*a+20),1));f=488>nc(b).clientWidth;e=[uc(a),Bc(f),wc(f,b,c),qc(e)];f=[];if(d){var h=xc(b,c);
f.push(function(a){return a.height()<=h})}b=zc(g,yc(e),yc(f));if(!b)throw new oc("No slot size for availableWidth="+a);return b},Ac=function(a){for(var b=a.length-1;0<b;b--){var c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c];a[c]=d}},Bc=function(a){return function(b){return!(320==b.minWidth()&&(a&&50==b.height()||!a&&100==b.height()))}};var Dc=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:n(this.u,this)});this.s=a.google_iframe_oncopy},Ec=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};Dc.prototype.set=function(a,b){this.s.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",n(this.l,this,a),!1)};
Dc.prototype.l=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};Dc.prototype.u=function(a,b){var c=Ec("rx",a);a:{if(a&&(a=a.match("dt=([^&]+)"))&&2==a.length){a=a[1];break a}a=""}a=(new Date).getTime()-a;c=c.replace(/&dtd=(\d+|-?M)/,"&dtd="+(1E5<=a?"M":0<=a?a:"-M"));this.set(b,c);return c};var Fc=qa("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");var Gc=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};L||pb||K&&wb(11);var Hc=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i;var Ic=null;var Jc={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Y=function(a){this.u=[];this.l=a||window;this.j=0;this.s=null;this.B=0},Z,Kc=function(a){try{return a.sz()}catch(b){return!1}},Lc=function(a){return!!a&&("object"===typeof a||"function"===typeof a)&&Kc(a)&&O(a.nq)&&O(a.nqa)&&O(a.al)&&O(a.rl)},Mc=function(){if(Z&&Kc(Z))return Z;var a=ec(),b=a.google_jobrunner;return Lc(b)?Z=b:a.google_jobrunner=Z=new Y(a)},Nc=function(a,b){Mc().nq(a,b)},Oc=function(a,b){Mc().nqa(a,b)};
Y.prototype.C=function(a,b){0!=this.j||0!=this.u.length||b&&b!=window?this.v(a,b):(this.j=2,this.A(new Pc(a,window)))};Y.prototype.v=function(a,b){this.u.push(new Pc(a,b||this.l));Qc(this)};Y.prototype.N=function(a){this.j=1;if(a){var b=Mb("sjr::timeout",n(this.w,this,!0));this.s=this.l.setTimeout(b,a)}};Y.prototype.w=function(a){a&&++this.B;1==this.j&&(null!=this.s&&(this.l.clearTimeout(this.s),this.s=null),this.j=0);Qc(this)};Y.prototype.O=function(){return!(!window||!Array)};Y.prototype.G=function(){return this.B};
var Qc=function(a){var b=Mb("sjr::tryrun",n(a.P,a));a.l.setTimeout(b,0)};Y.prototype.P=function(){if(0==this.j&&this.u.length){var a=this.u.shift();this.j=2;var b=Mb("sjr::run",n(this.A,this,a));a.j.setTimeout(b,0);Qc(this)}};Y.prototype.A=function(a){this.j=0;a.l()};Y.prototype.nq=Y.prototype.C;Y.prototype.nqa=Y.prototype.v;Y.prototype.al=Y.prototype.N;Y.prototype.rl=Y.prototype.w;Y.prototype.sz=Y.prototype.O;Y.prototype.tc=Y.prototype.G;var Pc=function(a,b){this.l=a;this.j=b};var Rc=Jb?1==Ib(M):!Ib(M),Sc=function(){var a=jb?"https":"http",b=x("script"),c;a:{if(H)try{var d=M.google_cafe_host||M.top.google_cafe_host;if(d){c=d;break a}}catch(e){}c=Ya("","pagead2.googlesyndication.com")}return["<",b,' src="',mc(c,["/pagead/js/",hb(),"/r20161117/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},Tc=function(a,b,
c,d){return function(){var e=!1;d&&Mc().al(3E4);try{var f=a.document.getElementById(b).contentWindow;if(z(f)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(/Firefox/.test(navigator.userAgent)?h.open("text/html","replace"):h.open(),g.google_async_iframe_close=!0,h.write(c))}else{for(var k=a.document.getElementById(b).contentWindow,f=c,f=String(f),g=['"'],h=0;h<f.length;h++){var l=f.charAt(h),q=l.charCodeAt(0),p=h+1,v;if(!(v=ra[l])){var B;if(31<q&&127>q)B=
l;else{var w=l;if(w in u)B=u[w];else if(w in ra)B=u[w]=ra[w];else{var C=void 0,y=w.charCodeAt(0);if(31<y&&127>y)C=w;else{if(256>y){if(C="\\x",16>y||256<y)C+="0"}else C="\\u",4096>y&&(C+="0");C+=y.toString(16).toUpperCase()}B=u[w]=C}}v=B}g[p]=v}g.push('"');k.location.replace("javascript:"+g.join(""))}e=!0}catch(Zb){k=ec().google_jobrunner,Lc(k)&&k.rl()}e&&(e=Ec("google_async_rrc",c),(new Dc(a)).set(b,Tc(a,b,e,!1)))}},Uc=function(a){var b=["<iframe"];Fb(a,function(a,d){null!=a&&b.push(" "+d+'="'+qa(a)+
'"')});b.push("></iframe>");return b.join("")},Vc=function(a){if(!Ic)a:{for(var b=[m.top],c=[],d=0,e;e=b[d++];){c.push(e);try{if(e.frames)for(var f=e.frames.length,g=0;g<f&&1024>b.length;++g)b.push(e.frames[g])}catch(k){}}for(b=0;b<c.length;b++)try{var h=c[b].frames.google_esf;if(h){Ic=h;break a}}catch(k){}Ic=null}if(!Ic){c={style:"display:none"};if(/[^a-z0-9-]/.test(a))return"";c["data-ad-client"]=Gc(a);c.id="google_esf";c.name="google_esf";a=mc(Ya("","googleads.g.doubleclick.net"),
["/pagead/html/",hb(),"/r20161117/zrt_lookup.html"].join(""));c.src=a;return Uc(c)}return""},Wc=function(a,b){var c=b.google_ad_output,d=b.google_ad_format;d||"html"!=c&&null!=c||(d=b.google_ad_width+"x"+b.google_ad_height);c=!b.google_ad_slot||b.google_override_format||!Jc[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;d&&c?d=d.toLowerCase():d="";b.google_ad_format=d;if("number"!=typeof b.google_reactive_sra_index||
!b.google_ad_unit_key){for(var d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],c=[],e=0,f=Db.parentElement;f&&25>e;f=f.parentNode,++e)c.push(9!==f.nodeType&&f.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=xa(d.join(":")).toString();d=Db;c=[];for(e=0;d&&25>e;++e){var f=(f=9!==d.nodeType&&d.id)?"/"+f:"",g;a:{if(d&&d.nodeName&&d.parentElement){g=d.nodeName.toString().toLowerCase();for(var h=d.parentElement.childNodes,k=0,l=0;l<h.length;++l){var q=
h[l];if(q.nodeName&&q.nodeName.toString().toLowerCase()===g){if(d===q){g="."+k;break a}++k}}}g=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+f+g);d=d.parentElement}d=c.join()+":";c=[];if(a)try{for(var p=a.parent,e=0;p&&p!==a&&25>e;++e){for(var v=p.frames,f=0;f<v.length;++f)if(a===v[f]){c.push(f);break}a=p;p=a.parent}}catch(B){}b.google_ad_dom_fingerprint=xa(d+c.join()).toString()}};(function(a){E.l=function(b){Ra(a,function(a){a(b)})}})([function(a){a.shv=hb()},function(a){wa(bc,function(b,c){try{null!=m[b]&&(a[c]=m[b])}catch(d){}})}]);
Lb("sa::main",function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var c=b.eids=b.eids||[],b=b.loeids=b.loeids||[],d,e,f,g;d=hc;U(c,V(a,ab,[d.m,d.o]));d=ic;U(c,V(a,bb,[d.m,d.o]));d=jc;U(c,V(a,Za,[d.m,d.o]));d=kc;U(c,V(a,$a,[d.m,d.o]));d=T.J;f=V(a,cb,[d.m,d.o]);U(b,f);e=fc;f==d.m?g=e.m:f==d.o?g=e.o:g="";U(c,g);d=T.R;f=V(a,db,[d.m,d.F,d.D]);U(b,f);e=gc;f==d.m?g=e.m:f==d.F?g=e.F:f==d.D?g=e.D:g="";U(c,g);Bb.body||(d=T.T,U(b,V(a,eb,[d.m,d.o])));d=T.I;
f=V(a,fb,[d.m,d.o]);U(b,f);t("")&&U(b,"");d=T.K;f=V(a,gb,[d.m,d.VIEWPORT,d.H]);U(b,f)}b=a.google_ad_slot;c=a.google_ad_modifications;!c||ac(c.ad_whitelist,b,void 0)?c=null:(g=c.space_collapsing||"none",c=(b=ac(c.ad_blacklist,b))?{L:!0,V:b.space_collapsing||g}:c.remove_ads_by_default?{L:!0,V:g}:null);if(c&&c.L)Yb(a);else if(Hb(a),P(S(M),T.I.o)&&(c={4205305285:!0,1042763955:!0,3202442099:!0,1772659378:!0,3117125756:!0,3960366076:!0},
"js"==M.google_ad_output&&M.google_ad_client&&c[xa(M.google_ad_client)]&&(M.google_enable_async=!0)),!1===window.google_enable_async||Hc.test(navigator.userAgent)||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output&&("js"!=window.google_ad_output||!0!==window.google_enable_async))a.google_loader_used="sb",a.google_start_time=r,Wc(a,a),document.write(Vc(a.google_ad_client)+Sc());else{Rc&&(g=a.google_ad_client,c=navigator,a&&g&&c&&(c=a.document,g=Gc(g),/[^a-z0-9-]/.test(g)||
((b=t("r20160913"))&&(b+="/"),b=mc("pagead2.googlesyndication.com","/pub-config/"+b+g+".js"),g=c.createElement("script"),g.src=b,(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(g,c))));a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;c={};null==a.google_ad_client&&Wb(a)&&(c.google_loader_features_used=2048);Vb(a,c);c.google_loader_used="sa";Yb(a);g=T.K;if(P(S(a),g.VIEWPORT)||P(S(a),g.H)&&a.document&&a.document.body){b=a.document;if(b.currentScript)b=
b.currentScript.parentElement;else if(b=b.getElementsByTagName("script"),b=b[b.length-1].parentElement,!b)throw new oc("show_ads.js script not included in document.body");d=c.google_ad_width;a:{e=b;f=H&&a.google_top_window||a.top;if(f=z(f)?f:null){f=nc(f).clientWidth;var h=a.document.body.currentStyle?a.document.body.currentStyle.direction:a.getComputedStyle?a.getComputedStyle(a.document.body).getPropertyValue("direction"):"";if("ltr"===h){e=Math.min(1200,f-e.getBoundingClientRect().left);break a}if("rtl"===
h){e=a.document.body.getBoundingClientRect().right-e.getBoundingClientRect().right;e=Math.min(1200,f-e-Math.floor((f-a.document.body.clientWidth)/2));break a}}e=-1}0<=e&&d>e&&(P(S(a),g.VIEWPORT)?c.google_ad_width=e:P(S(a),g.H)&&(g=Cc(e,a,b),c.google_ad_width=300<e&&300<g.j?g.l:Math.min(1200,Math.round(e)),c.google_ad_height=g.height(),c.google_ad_format=(300<e&&300<g.j?g.l:Math.min(1200,Math.round(e)))+"x"+g.height()))}g=x("script");b={};d=c.google_ad_height;b.width='"'+c.google_ad_width+'"';b.height=
'"'+d+'"';b.frameborder='"0"';b.marginwidth='"0"';b.marginheight='"0"';b.vspace='"0"';b.hspace='"0"';b.allowtransparency='"true"';b.scrolling='"no"';b.allowfullscreen='"true"';b.onload='"'+Fc+'"';var k;d=a.document;e=b.id;for(f=0;!e||d.getElementById(e);)e="aswift_"+f++;b.id=e;b.name=e;f=c.google_ad_width;h=c.google_ad_height;e=["<iframe"];for(k in b)b.hasOwnProperty(k)&&Gb(e,k+"="+b[k]);e.push('style="left:0;position:absolute;top:0;"');e.push("></iframe>");k=b.id;f="border:none;height:"+h+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+
f+"px;background-color:transparent";d.write(['<ins id="',k+"_expand",'" style="display:inline-table;',f,'"><ins id="',k+"_anchor",'" style="display:block;',f,'">',e.join(" "),"</ins></ins>"].join(""));k=b.id;Wc(a,c);var b=Xb(c),l;a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var q=window.encodeURIComponent(window.JSON.stringify(c)),p;try{p=Qb(q)}catch(v){p="#"+Qb(q,!0)}l=p;break a}}catch(v){E.j("sblob",v,void 0,void 0)}l=""}q=Vc(c.google_ad_client);p=(new Date).getTime();
l=["<!doctype html><html><body>",q,"<",g,">",b,"google_show_ads_impl=true;google_unique_id=",Ib(a),';google_async_iframe_id="',k,'";google_start_time=',r,";",l?'google_pub_vars = "'+l+'";':"","google_bpp=",p>r?p-r:1,";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",g,">",Sc(),"</body></html>"].join("");(a.document.getElementById(k)?Nc:Oc)(Tc(a,k,l,!0))}});}).call(this);
