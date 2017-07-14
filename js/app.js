(function ($, window) {

    var retriesOnError = 5;

    // Sentry.io
    /*! Raven.js 3.12.1 (d84f21c) | github.com/getsentry/raven-js */
    !function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.Raven=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a,b,c,d){return JSON.stringify(a,e(b,d),c)}function e(a,b){var c=[],d=[];return null==b&&(b=function(a,b){return c[0]===b?"[Circular ~]":"[Circular ~."+d.slice(0,c.indexOf(b)).join(".")+"]"}),function(e,f){if(c.length>0){var g=c.indexOf(this);~g?c.splice(g+1):c.push(this),~g?d.splice(g,1/0,e):d.push(e),~c.indexOf(f)&&(f=b.call(this,e,f))}else c.push(f);return null==a?f:a.call(this,e,f)}}c=b.exports=d,c.getSerialize=e},{}],2:[function(a,b,c){"use strict";function d(a){this.name="RavenConfigError",this.message=a}d.prototype=new Error,d.prototype.constructor=d,b.exports=d},{}],3:[function(a,b,c){"use strict";var d=function(a,b,c){var d=a[b],e=a;if(b in a){var f="warn"===b?"warning":b;a[b]=function(){var a=[].slice.call(arguments),b=""+a.join(" "),g={level:f,logger:"console",extra:{arguments:a}};c&&c(b,g),d&&Function.prototype.apply.call(d,e,a)}}};b.exports={wrapMethod:d}},{}],4:[function(a,b,c){(function(c){"use strict";function d(){return+new Date}function e(){this.a=!("object"!=typeof JSON||!JSON.stringify),this.b=!f(H),this.c=!f(I),this.d=null,this.e=null,this.f=null,this.g=null,this.h=null,this.i=null,this.j={},this.k={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],crossOrigin:"anonymous",collectWindowErrors:!0,maxMessageLength:0,stackTraceLimit:50,autoBreadcrumbs:!0},this.l=0,this.m=!1,this.n=Error.stackTraceLimit,this.o=G.console||{},this.p={},this.q=[],this.r=d(),this.s=[],this.t=[],this.u=null,this.v=G.location,this.w=this.v&&this.v.href,this.x();for(var a in this.o)this.p[a]=this.o[a]}function f(a){return void 0===a}function g(a){return"function"==typeof a}function h(a){return"[object String]"===J.toString.call(a)}function i(a){for(var b in a)return!1;return!0}function j(a,b){var c,d;if(f(a.length))for(c in a)m(a,c)&&b.call(null,c,a[c]);else if(d=a.length)for(c=0;c<d;c++)b.call(null,c,a[c])}function k(a,b){return b?(j(b,function(b,c){a[b]=c}),a):a}function l(a,b){return!b||a.length<=b?a:a.substr(0,b)+"…"}function m(a,b){return J.hasOwnProperty.call(a,b)}function n(a){for(var b,c=[],d=0,e=a.length;d<e;d++)b=a[d],h(b)?c.push(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):b&&b.source&&c.push(b.source);return new RegExp(c.join("|"),"i")}function o(a){var b=[];return j(a,function(a,c){b.push(encodeURIComponent(a)+"="+encodeURIComponent(c))}),b.join("&")}function p(a){var b=a.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!b)return{};var c=b[6]||"",d=b[8]||"";return{protocol:b[2],host:b[4],path:b[5],relative:b[5]+c+d}}function q(){var a=G.crypto||G.msCrypto;if(!f(a)&&a.getRandomValues){var b=new Uint16Array(8);a.getRandomValues(b),b[3]=4095&b[3]|16384,b[4]=16383&b[4]|32768;var c=function(a){for(var b=a.toString(16);b.length<4;)b="0"+b;return b};return c(b[0])+c(b[1])+c(b[2])+c(b[3])+c(b[4])+c(b[5])+c(b[6])+c(b[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"===a?b:3&b|8;return c.toString(16)})}function r(a){for(var b,c=5,d=80,e=[],f=0,g=0,h=" > ",i=h.length;a&&f++<c&&(b=s(a),!("html"===b||f>1&&g+e.length*i+b.length>=d));)e.push(b),g+=b.length,a=a.parentNode;return e.reverse().join(h)}function s(a){var b,c,d,e,f,g=[];if(!a||!a.tagName)return"";if(g.push(a.tagName.toLowerCase()),a.id&&g.push("#"+a.id),b=a.className,b&&h(b))for(c=b.split(/\s+/),f=0;f<c.length;f++)g.push("."+c[f]);var i=["type","name","title","alt"];for(f=0;f<i.length;f++)d=i[f],e=a.getAttribute(d),e&&g.push("["+d+'="'+e+'"]');return g.join("")}function t(a,b){return!!(!!a^!!b)}function u(a,b){return!t(a,b)&&(a=a.values[0],b=b.values[0],a.type===b.type&&a.value===b.value&&v(a.stacktrace,b.stacktrace))}function v(a,b){if(t(a,b))return!1;var c=a.frames,d=b.frames;if(c.length!==d.length)return!1;for(var e,f,g=0;g<c.length;g++)if(e=c[g],f=d[g],e.filename!==f.filename||e.lineno!==f.lineno||e.colno!==f.colno||e["function"]!==f["function"])return!1;return!0}function w(a,b,c,d){var e=a[b];a[b]=c(e),d&&d.push([a,b,e])}var x=a(7),y=a(2),z=a(6),A=z.isError,B=z.isObject,C=a(1),D=a(3).wrapMethod,E="source protocol user pass host port path".split(" "),F=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,G="undefined"!=typeof window?window:"undefined"!=typeof c?c:"undefined"!=typeof self?self:{},H=G.document,I=G.navigator;e.prototype={VERSION:"3.12.1",debug:!1,TraceKit:x,config:function(a,b){var c=this;if(c.g)return this.y("error","Error: Raven has already been configured"),c;if(!a)return c;var d=c.k;b&&j(b,function(a,b){"tags"===a||"extra"===a||"user"===a?c.j[a]=b:d[a]=b}),c.setDSN(a),d.ignoreErrors.push(/^Script error\.?$/),d.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),d.ignoreErrors=n(d.ignoreErrors),d.ignoreUrls=!!d.ignoreUrls.length&&n(d.ignoreUrls),d.whitelistUrls=!!d.whitelistUrls.length&&n(d.whitelistUrls),d.includePaths=n(d.includePaths),d.maxBreadcrumbs=Math.max(0,Math.min(d.maxBreadcrumbs||100,100));var e={xhr:!0,console:!0,dom:!0,location:!0},f=d.autoBreadcrumbs;return"[object Object]"==={}.toString.call(f)?f=k(e,f):f!==!1&&(f=e),d.autoBreadcrumbs=f,x.collectWindowErrors=!!d.collectWindowErrors,c},install:function(){var a=this;return a.isSetup()&&!a.m&&(x.report.subscribe(function(){a.z.apply(a,arguments)}),a.A(),a.k.autoBreadcrumbs&&a.B(),a.C(),a.m=!0),Error.stackTraceLimit=a.k.stackTraceLimit,this},setDSN:function(a){var b=this,c=b.D(a),d=c.path.lastIndexOf("/"),e=c.path.substr(1,d);b.E=a,b.h=c.user,b.F=c.pass&&c.pass.substr(1),b.i=c.path.substr(d+1),b.g=b.G(c),b.H=b.g+"/"+e+"api/"+b.i+"/store/",this.x()},context:function(a,b,c){return g(a)&&(c=b||[],b=a,a=void 0),this.wrap(a,b).apply(this,c)},wrap:function(a,b,c){function d(){var d=[],f=arguments.length,h=!a||a&&a.deep!==!1;for(c&&g(c)&&c.apply(this,arguments);f--;)d[f]=h?e.wrap(a,arguments[f]):arguments[f];try{return b.apply(this,d)}catch(i){throw e.I(),e.captureException(i,a),i}}var e=this;if(f(b)&&!g(a))return a;if(g(a)&&(b=a,a=void 0),!g(b))return b;try{if(b.J)return b;if(b.K)return b.K}catch(h){return b}for(var i in b)m(b,i)&&(d[i]=b[i]);return d.prototype=b.prototype,b.K=d,d.J=!0,d.L=b,d},uninstall:function(){return x.report.uninstall(),this.M(),Error.stackTraceLimit=this.n,this.m=!1,this},captureException:function(a,b){if(!A(a))return this.captureMessage(a,k({trimHeadFrames:1,stacktrace:!0},b));this.d=a;try{var c=x.computeStackTrace(a);this.N(c,b)}catch(d){if(a!==d)throw d}return this},captureMessage:function(a,b){if(!this.k.ignoreErrors.test||!this.k.ignoreErrors.test(a)){b=b||{};var c=k({message:a+""},b);if(this.k.stacktrace||b&&b.stacktrace){var d;try{throw new Error(a)}catch(e){d=e}d.name=null,b=k({fingerprint:a,trimHeadFrames:(b.trimHeadFrames||0)+1},b);var f=x.computeStackTrace(d),g=this.O(f,b);c.stacktrace={frames:g.reverse()}}return this.P(c),this}},captureBreadcrumb:function(a){var b=k({timestamp:d()/1e3},a);if(g(this.k.breadcrumbCallback)){var c=this.k.breadcrumbCallback(b);if(B(c)&&!i(c))b=c;else if(c===!1)return this}return this.t.push(b),this.t.length>this.k.maxBreadcrumbs&&this.t.shift(),this},addPlugin:function(a){var b=[].slice.call(arguments,1);return this.q.push([a,b]),this.m&&this.C(),this},setUserContext:function(a){return this.j.user=a,this},setExtraContext:function(a){return this.Q("extra",a),this},setTagsContext:function(a){return this.Q("tags",a),this},clearContext:function(){return this.j={},this},getContext:function(){return JSON.parse(C(this.j))},setEnvironment:function(a){return this.k.environment=a,this},setRelease:function(a){return this.k.release=a,this},setDataCallback:function(a){var b=this.k.dataCallback;return this.k.dataCallback=g(a)?function(c){return a(c,b)}:a,this},setBreadcrumbCallback:function(a){var b=this.k.breadcrumbCallback;return this.k.breadcrumbCallback=g(a)?function(c){return a(c,b)}:a,this},setShouldSendCallback:function(a){var b=this.k.shouldSendCallback;return this.k.shouldSendCallback=g(a)?function(c){return a(c,b)}:a,this},setTransport:function(a){return this.k.transport=a,this},lastException:function(){return this.d},lastEventId:function(){return this.f},isSetup:function(){return!!this.a&&(!!this.g||(this.ravenNotConfiguredError||(this.ravenNotConfiguredError=!0,this.y("error","Error: Raven has not been configured.")),!1))},afterLoad:function(){var a=G.RavenConfig;a&&this.config(a.dsn,a.config).install()},showReportDialog:function(a){if(H){a=a||{};var b=a.eventId||this.lastEventId();if(!b)throw new y("Missing eventId");var c=a.dsn||this.E;if(!c)throw new y("Missing DSN");var d=encodeURIComponent,e="";e+="?eventId="+d(b),e+="&dsn="+d(c);var f=a.user||this.j.user;f&&(f.name&&(e+="&name="+d(f.name)),f.email&&(e+="&email="+d(f.email)));var g=this.G(this.D(c)),h=H.createElement("script");h.async=!0,h.src=g+"/api/embed/error-page/"+e,(H.head||H.body).appendChild(h)}},I:function(){var a=this;this.l+=1,setTimeout(function(){a.l-=1})},R:function(a,b){var c,d;if(this.b){b=b||{},a="raven"+a.substr(0,1).toUpperCase()+a.substr(1),H.createEvent?(c=H.createEvent("HTMLEvents"),c.initEvent(a,!0,!0)):(c=H.createEventObject(),c.eventType=a);for(d in b)m(b,d)&&(c[d]=b[d]);if(H.createEvent)H.dispatchEvent(c);else try{H.fireEvent("on"+c.eventType.toLowerCase(),c)}catch(e){}}},S:function(a){var b=this;return function(c){if(b.T=null,b.u!==c){b.u=c;var d;try{d=r(c.target)}catch(e){d="<unknown>"}b.captureBreadcrumb({category:"ui."+a,message:d})}}},U:function(){var a=this,b=1e3;return function(c){var d;try{d=c.target}catch(e){return}var f=d&&d.tagName;if(f&&("INPUT"===f||"TEXTAREA"===f||d.isContentEditable)){var g=a.T;g||a.S("input")(c),clearTimeout(g),a.T=setTimeout(function(){a.T=null},b)}}},V:function(a,b){var c=p(this.v.href),d=p(b),e=p(a);this.w=b,c.protocol===d.protocol&&c.host===d.host&&(b=d.relative),c.protocol===e.protocol&&c.host===e.host&&(a=e.relative),this.captureBreadcrumb({category:"navigation",data:{to:b,from:a}})},A:function(){function a(a){return function(b,d){for(var e=new Array(arguments.length),f=0;f<e.length;++f)e[f]=arguments[f];var h=e[0];return g(h)&&(e[0]=c.wrap(h)),a.apply?a.apply(this,e):a(e[0],e[1])}}function b(a){var b=G[a]&&G[a].prototype;b&&b.hasOwnProperty&&b.hasOwnProperty("addEventListener")&&(w(b,"addEventListener",function(b){return function(d,f,g,h){try{f&&f.handleEvent&&(f.handleEvent=c.wrap(f.handleEvent))}catch(i){}var j,k,l;return e&&e.dom&&("EventTarget"===a||"Node"===a)&&(k=c.S("click"),l=c.U(),j=function(a){if(a){var b;try{b=a.type}catch(c){return}return"click"===b?k(a):"keypress"===b?l(a):void 0}}),b.call(this,d,c.wrap(f,void 0,j),g,h)}},d),w(b,"removeEventListener",function(a){return function(b,c,d,e){try{c=c&&(c.K?c.K:c)}catch(f){}return a.call(this,b,c,d,e)}},d))}var c=this,d=c.s,e=this.k.autoBreadcrumbs;w(G,"setTimeout",a,d),w(G,"setInterval",a,d),G.requestAnimationFrame&&w(G,"requestAnimationFrame",function(a){return function(b){return a(c.wrap(b))}},d);for(var f=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],h=0;h<f.length;h++)b(f[h])},B:function(){function a(a,c){a in c&&g(c[a])&&w(c,a,function(a){return b.wrap(a)})}var b=this,c=this.k.autoBreadcrumbs,d=b.s;if(c.xhr&&"XMLHttpRequest"in G){var e=XMLHttpRequest.prototype;w(e,"open",function(a){return function(c,d){return h(d)&&d.indexOf(b.h)===-1&&(this.W={method:c,url:d,status_code:null}),a.apply(this,arguments)}},d),w(e,"send",function(c){return function(d){function e(){if(f.W&&(1===f.readyState||4===f.readyState)){try{f.W.status_code=f.status}catch(a){}b.captureBreadcrumb({type:"http",category:"xhr",data:f.W})}}for(var f=this,h=["onload","onerror","onprogress"],i=0;i<h.length;i++)a(h[i],f);return"onreadystatechange"in f&&g(f.onreadystatechange)?w(f,"onreadystatechange",function(a){return b.wrap(a,void 0,e)}):f.onreadystatechange=e,c.apply(this,arguments)}},d)}c.xhr&&"fetch"in G&&w(G,"fetch",function(a){return function(c,d){for(var e=new Array(arguments.length),f=0;f<e.length;++f)e[f]=arguments[f];var g="GET";e[1]&&e[1].method&&(g=e[1].method);var h={method:g,url:e[0],status_code:null};return b.captureBreadcrumb({type:"http",category:"fetch",data:h}),a.apply(this,e).then(function(a){return h.status_code=a.status,a})}},d),c.dom&&this.b&&(H.addEventListener?(H.addEventListener("click",b.S("click"),!1),H.addEventListener("keypress",b.U(),!1)):(H.attachEvent("onclick",b.S("click")),H.attachEvent("onkeypress",b.U())));var f=G.chrome,i=f&&f.app&&f.app.runtime,k=!i&&G.history&&history.pushState;if(c.location&&k){var l=G.onpopstate;G.onpopstate=function(){var a=b.v.href;if(b.V(b.w,a),l)return l.apply(this,arguments)},w(history,"pushState",function(a){return function(){var c=arguments.length>2?arguments[2]:void 0;return c&&b.V(b.w,c+""),a.apply(this,arguments)}},d)}if(c.console&&"console"in G&&console.log){var m=function(a,c){b.captureBreadcrumb({message:a,level:c.level,category:"console"})};j(["debug","info","warn","error","log"],function(a,b){D(console,b,m)})}},M:function(){for(var a;this.s.length;){a=this.s.shift();var b=a[0],c=a[1],d=a[2];b[c]=d}},C:function(){var a=this;j(this.q,function(b,c){var d=c[0],e=c[1];d.apply(a,[a].concat(e))})},D:function(a){var b=F.exec(a),c={},d=7;try{for(;d--;)c[E[d]]=b[d]||""}catch(e){throw new y("Invalid DSN: "+a)}if(c.pass&&!this.k.allowSecretKey)throw new y("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");return c},G:function(a){var b="//"+a.host+(a.port?":"+a.port:"");return a.protocol&&(b=a.protocol+":"+b),b},z:function(){this.l||this.N.apply(this,arguments)},N:function(a,b){var c=this.O(a,b);this.R("handle",{stackInfo:a,options:b}),this.X(a.name,a.message,a.url,a.lineno,c,b)},O:function(a,b){var c=this,d=[];if(a.stack&&a.stack.length&&(j(a.stack,function(a,b){var e=c.Y(b);e&&d.push(e)}),b&&b.trimHeadFrames))for(var e=0;e<b.trimHeadFrames&&e<d.length;e++)d[e].in_app=!1;return d=d.slice(0,this.k.stackTraceLimit)},Y:function(a){if(a.url){var b={filename:a.url,lineno:a.line,colno:a.column,"function":a.func||"?"};return b.in_app=!(this.k.includePaths.test&&!this.k.includePaths.test(b.filename)||/(Raven|TraceKit)\./.test(b["function"])||/raven\.(min\.)?js$/.test(b.filename)),b}},X:function(a,b,c,d,e,f){var g;if((!this.k.ignoreErrors.test||!this.k.ignoreErrors.test(b))&&(b+="",e&&e.length?(c=e[0].filename||c,e.reverse(),g={frames:e}):c&&(g={frames:[{filename:c,lineno:d,in_app:!0}]}),(!this.k.ignoreUrls.test||!this.k.ignoreUrls.test(c))&&(!this.k.whitelistUrls.test||this.k.whitelistUrls.test(c)))){var h=k({exception:{values:[{type:a,value:b,stacktrace:g}]},culprit:c},f);this.P(h)}},Z:function(a){var b=this.k.maxMessageLength;if(a.message&&(a.message=l(a.message,b)),a.exception){var c=a.exception.values[0];c.value=l(c.value,b)}return a},$:function(){if(this.c||this.b){var a={};return this.c&&I.userAgent&&(a.headers={"User-Agent":navigator.userAgent}),this.b&&(H.location&&H.location.href&&(a.url=H.location.href),H.referrer&&(a.headers||(a.headers={}),a.headers.Referer=H.referrer)),a}},x:function(){this._=0,this.aa=null},ba:function(){return this._&&d()-this.aa<this._},ca:function(a){var b=this.e;return!(!b||a.message!==b.message||a.culprit!==b.culprit)&&(a.stacktrace||b.stacktrace?v(a.stacktrace,b.stacktrace):!a.exception&&!b.exception||u(a.exception,b.exception))},da:function(a){if(!this.ba()){var b=a.status;if(400===b||401===b||429===b){var c;try{c=a.getResponseHeader("Retry-After"),c=1e3*parseInt(c,10)}catch(e){}this._=c?c:2*this._||1e3,this.aa=d()}}},P:function(a){var b=this.k,c={project:this.i,logger:b.logger,platform:"javascript"},e=this.$();if(e&&(c.request=e),a.trimHeadFrames&&delete a.trimHeadFrames,a=k(c,a),a.tags=k(k({},this.j.tags),a.tags),a.extra=k(k({},this.j.extra),a.extra),a.extra["session:duration"]=d()-this.r,this.t&&this.t.length>0&&(a.breadcrumbs={values:[].slice.call(this.t,0)}),i(a.tags)&&delete a.tags,this.j.user&&(a.user=this.j.user),b.environment&&(a.environment=b.environment),b.release&&(a.release=b.release),b.serverName&&(a.server_name=b.serverName),g(b.dataCallback)&&(a=b.dataCallback(a)||a),a&&!i(a)&&(!g(b.shouldSendCallback)||b.shouldSendCallback(a)))return this.ba()?void this.y("warn","Raven dropped error due to backoff: ",a):void this.ea(a)},fa:function(){return q()},ea:function(a,b){var c=this,d=this.k;if(this.isSetup()){if(this.f=a.event_id||(a.event_id=this.fa()),a=this.Z(a),!this.k.allowDuplicates&&this.ca(a))return void this.y("warn","Raven dropped repeat event: ",a);this.e=a,this.y("debug","Raven about to send:",a);var e={sentry_version:"7",sentry_client:"raven-js/"+this.VERSION,sentry_key:this.h};this.F&&(e.sentry_secret=this.F);var f=a.exception&&a.exception.values[0];this.captureBreadcrumb({category:"sentry",message:f?(f.type?f.type+": ":"")+f.value:a.message,event_id:a.event_id,level:a.level||"error"});var g=this.H;(d.transport||this.ga).call(this,{url:g,auth:e,data:a,options:d,onSuccess:function(){c.x(),c.R("success",{data:a,src:g}),b&&b()},onError:function(d){c.y("error","Raven transport failed to send: ",d),d.request&&c.da(d.request),c.R("failure",{data:a,src:g}),d=d||new Error("Raven send failed (no additional details provided)"),b&&b(d)}})}},ga:function(a){function b(){if(200===c.status)a.onSuccess&&a.onSuccess();else if(a.onError){var b=new Error("Sentry error code: "+c.status);b.request=c,a.onError(b)}}var c=new XMLHttpRequest,d="withCredentials"in c||"undefined"!=typeof XDomainRequest;if(d){var e=a.url;"withCredentials"in c?c.onreadystatechange=function(){4===c.readyState&&b()}:(c=new XDomainRequest,e=e.replace(/^https?:/,""),c.onload=b),c.open("POST",e+"?"+o(a.auth)),c.send(C(a.data))}},y:function(a){this.p[a]&&this.debug&&Function.prototype.apply.call(this.p[a],this.o,[].slice.call(arguments,1))},Q:function(a,b){f(b)?delete this.j[a]:this.j[a]=k(this.j[a]||{},b)}};var J=Object.prototype;e.prototype.setUser=e.prototype.setUserContext,e.prototype.setReleaseContext=e.prototype.setRelease,b.exports=e}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1,2:2,3:3,6:6,7:7}],5:[function(a,b,c){(function(c){"use strict";var d=a(4),e="undefined"!=typeof window?window:"undefined"!=typeof c?c:"undefined"!=typeof self?self:{},f=e.Raven,g=new d;g.noConflict=function(){return e.Raven=f,g},g.afterLoad(),b.exports=g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{4:4}],6:[function(a,b,c){"use strict";function d(a){return"object"==typeof a&&null!==a}function e(a){var b={}.toString.call(a);return d(a)&&"[object Error]"===b||"[object Exception]"===b||a instanceof Error}b.exports={isObject:d,isError:e}},{}],7:[function(a,b,c){(function(c){"use strict";function d(){return"undefined"==typeof document||"undefined"==typeof document.location?"":document.location.href}var e=a(6),f={collectWindowErrors:!0,debug:!1},g="undefined"!=typeof window?window:"undefined"!=typeof c?c:"undefined"!=typeof self?self:{},h=[].slice,i="?",j=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;f.report=function(){function a(a){m(),s.push(a)}function b(a){for(var b=s.length-1;b>=0;--b)s[b]===a&&s.splice(b,1)}function c(){n(),s=[]}function k(a,b){var c=null;if(!b||f.collectWindowErrors){for(var d in s)if(s.hasOwnProperty(d))try{s[d].apply(null,[a].concat(h.call(arguments,2)))}catch(e){c=e}if(c)throw c}}function l(a,b,c,g,h){var l=null;if(v)f.computeStackTrace.augmentStackTraceWithInitialElement(v,b,c,a),o();else if(h&&e.isError(h))l=f.computeStackTrace(h),k(l,!0);else{var m,n={url:b,line:c,column:g},p=void 0,r=a;if("[object String]"==={}.toString.call(a)){var m=a.match(j);m&&(p=m[1],r=m[2])}n.func=i,l={name:p,message:r,url:d(),stack:[n]},k(l,!0)}return!!q&&q.apply(this,arguments)}function m(){r||(q=g.onerror,g.onerror=l,r=!0)}function n(){r&&(g.onerror=q,r=!1,q=void 0)}function o(){var a=v,b=t;t=null,v=null,u=null,k.apply(null,[a,!1].concat(b))}function p(a,b){var c=h.call(arguments,1);if(v){if(u===a)return;o()}var d=f.computeStackTrace(a);if(v=d,u=a,t=c,setTimeout(function(){u===a&&o()},d.incomplete?2e3:0),b!==!1)throw a}var q,r,s=[],t=null,u=null,v=null;return p.subscribe=a,p.unsubscribe=b,p.uninstall=c,p}(),f.computeStackTrace=function(){function a(a){if("undefined"!=typeof a.stack&&a.stack){for(var b,c,e=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,f=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,g=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,h=a.stack.split("\n"),j=[],k=(/^(.*) is undefined$/.exec(a.message),0),l=h.length;k<l;++k){if(b=e.exec(h[k])){var m=b[2]&&b[2].indexOf("native")!==-1;c={url:m?null:b[2],func:b[1]||i,args:m?[b[2]]:[],line:b[3]?+b[3]:null,column:b[4]?+b[4]:null}}else if(b=g.exec(h[k]))c={url:b[2],func:b[1]||i,args:[],line:+b[3],column:b[4]?+b[4]:null};else{if(!(b=f.exec(h[k])))continue;c={url:b[3],func:b[1]||i,args:b[2]?b[2].split(","):[],line:b[4]?+b[4]:null,column:b[5]?+b[5]:null}}!c.func&&c.line&&(c.func=i),j.push(c)}return j.length?(j[0].column||"undefined"==typeof a.columnNumber||(j[0].column=a.columnNumber+1),{name:a.name,message:a.message,url:d(),stack:j}):null}}function b(a,b,c,d){var e={url:b,line:c};if(e.url&&e.line){if(a.incomplete=!1,e.func||(e.func=i),a.stack.length>0&&a.stack[0].url===e.url){if(a.stack[0].line===e.line)return!1;if(!a.stack[0].line&&a.stack[0].func===e.func)return a.stack[0].line=e.line,!1}return a.stack.unshift(e),a.partial=!0,!0}return a.incomplete=!0,!1}function c(a,g){for(var h,j,k=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,l=[],m={},n=!1,o=c.caller;o&&!n;o=o.caller)if(o!==e&&o!==f.report){if(j={url:null,func:i,line:null,column:null},o.name?j.func=o.name:(h=k.exec(o.toString()))&&(j.func=h[1]),"undefined"==typeof j.func)try{j.func=h.input.substring(0,h.input.indexOf("{"))}catch(p){}m[""+o]?n=!0:m[""+o]=!0,l.push(j)}g&&l.splice(0,g);var q={name:a.name,message:a.message,url:d(),stack:l};return b(q,a.sourceURL||a.fileName,a.line||a.lineNumber,a.message||a.description),q}function e(b,e){var g=null;e=null==e?0:+e;try{if(g=a(b))return g}catch(h){if(f.debug)throw h}try{if(g=c(b,e+1))return g}catch(h){if(f.debug)throw h}return{name:b.name,message:b.message,url:d()}}return e.augmentStackTraceWithInitialElement=b,e.computeStackTraceFromStackProp=a,e}(),b.exports=f}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{6:6}]},{},[5])(5)});
    //# sourceMappingURL=raven.min.js.map
    Raven.config('https://47d85a9f12ad447c94108c02854afc83@sentry.io/149669', {
        includePaths: [/.*\/wp\-content\/plugins\/darwin\-backup\//],
        release: '1.2.25'
    }).install();
    // End Sentry.io

    // Mixpanel
    (function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);
    mixpanel.init("e4e3978f2e84b15eb65168b3f75a9476");
    // /Mixpanel

    var tracker = {
        trackingAllowed: false,
        stack: [],
        setTracking: function (allowed) {
            this.trackingAllowed = allowed;
            this.flush();
        },
        flush: function flush() {
            if (!window.mixpanel)
                return;
            if (!this.trackingAllowed)
                return;
            while (this.stack.length) {
                var args = this.stack.shift();
                mixpanel.track.apply(mixpanel, args);
            }

        },
        track: function track() {
            this.stack.push(Array.prototype.slice.apply(arguments));
            this.flush();
        }
    };

    window.app = {
        page: null,
        retries: retriesOnError,
        load_settings_request: function start_request() {
            throw "settings_request should be redefined";
        },
        start_request: function start_request() {
            throw "start_request should be redefined";
        },
        next_request: function next_request() {
            throw "next_request should be redefined";
        },
        stop_request: function stop_request() {
            throw "stop_request should be redefined";
        },
        init: function init(ajaxurl) {
            var self = this,
                request = this.load_settings_request();

            self.ajaxurl = ajaxurl;
            $.post(ajaxurl, request, function (response) {
                if (response && response.success) {
                    self.setTracking(response.data['send-stats']);
                    $(self).trigger('settings', response.data);
                    $.each(response.data, function (index, e) {
                        $(self).trigger('settings:' + index, e);
                    });
                }
            });

            $(self).trigger("app:init");
            self.reset();
        },
        reset: function reset() {
            var self = this;
            self.sid = false;
            self.xhr = null;
            $(self).trigger("app:reset");
        },
        start: function start() {
            var self = this,
                request = this.start_request();

            $(self).trigger("app:start");
            $.post(self.ajaxurl, request).success(function (response) {
                if (response && response.success) {
                    $.each(response.data, function (index, e) {
                        $(self).trigger.apply($(self), e);
                    });
                    self.retries = retriesOnError;
                    self.next();
                } else if (response && response.data) {
                    self.maybeError(response.data.message, self.start.bind(self));
                } else {
                    self.maybeError(response, self.start.bind(self));
                }
            }).fail(function (response, error, message) {
                var json;
                if (response && response.responseText) {
                    try {
                        json = JSON.parse(response.responseText);
                        self.maybeError(json.data.message, self.start.bind(self));
                    } catch (e) {
                        Raven.captureException(e);
                        self.maybeError(response.responseText, self.start.bind(self));
                    }
                } else if (error !== 'abort') {
                    self.maybeError(message, self.start.bind(self));
                }
            });
        },
        next: function () {
            var self = this,
                request = this.next_request();

            if (self.sid) {
                $(self).trigger("app:next");
                self.xhr = $.post(self.ajaxurl, request).success(function (response) {
                    self.xhr = null;
                    if (response && response.success) {
                        $.each(response.data, function (index, e) {
                            $(self).trigger.apply($(self), e);
                        });
                        self.retries = retriesOnError;
                        self.next();
                    } else if (response && response.data) {
                        self.maybeError(response.data.message, self.next.bind(self));
                    } else {
                        self.maybeError(response, self.next.bind(self));
                    }
                }).fail(function (response, error, message) {
                    var json;
                    if (response && response.responseText) {
                        try {
                            json = JSON.parse(response.responseText);
                            self.maybeError(json.data.message, self.next.bind(self));
                        } catch (e) {
                            Raven.captureException(e);
                            self.maybeError(response.responseText, self.next.bind(self));
                        }
                    } else if (error !== 'abort') {
                        self.maybeError(message, self.next.bind(self));
                    }
                });
            }
        },
        stop: function stop() {
            var self = this;
            if (self.xhr) {
                self.xhr.abort();
            }
            self.xhr = null;
            var request = this.stop_request();
            $.post(self.ajaxurl, request); // no need for response
            $(self).trigger("app:stop");
            self.reset();
        },
        maybeError: function error(message, retry) {
            var self = this;
            message = message || "Uncaught error or error produced outside of plugin";
            if (--self.retries >= 0) {
                $(self).trigger("app:retry", message);
                setTimeout(retry, 100);
            } else {
                $(self).trigger("error", message);
                if (window.Raven)
                    window.Raven.captureMessage(message.substr(0, 8192), {extra: {iteration: self.retries}});
            }
        },
        setTracking: function () {
            tracker.setTracking.apply(tracker, Array.prototype.slice.apply(arguments))
        },
        track: function () {
            var args = Array.prototype.slice.apply(arguments);
            tracker.track.apply(tracker, args);
            if (this.page)
                args[0] = this.page + ': ' + args[0];
            tracker.track.apply(tracker, args);
        }
    };

    $(app).bind("sid", function sid(e, sid) {
        this.sid = sid;
    });

    $(app).bind("app:init", function () {
        this.track("App Loaded");
    });

    $(app).bind("app:start", function () {
        this.track("App Started");
    });

    $(app).bind("app:stop", function () {
        this.track("App Stopped");
    });

    $(app).bind("app:retry", function warning(e, message) {
        this.track("App Retry", message);
    });

    $(app).bind("error", function error(e, message) {
        this.track("App Error", message);
    });

    $(app).bind("stats", function (e, data) {
        this.track("App Stats", data);
    });

    $(app).bind("done", function done() {
        this.track("App Done");
    });

}(jQuery, window));


