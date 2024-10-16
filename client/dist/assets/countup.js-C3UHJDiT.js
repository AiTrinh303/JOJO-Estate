var v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function E(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function y(e){if(e.__esModule)return e;var i=e.default;if(typeof i=="function"){var n=function s(){return this instanceof s?Reflect.construct(i,arguments,this.constructor):i.apply(this,arguments)};n.prototype=i.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var t=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,t.get?t:{enumerable:!0,get:function(){return e[s]}})}),n}var p=function(){return p=Object.assign||function(e){for(var i,n=1,s=arguments.length;n<s;n++)for(var t in i=arguments[n])Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e},p.apply(this,arguments)},w=function(){function e(i,n,s){var t=this;this.endVal=n,this.options=s,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(a){t.startTime||(t.startTime=a);var r=a-t.startTime;t.remaining=t.duration-r,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(r,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(r,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(r/t.duration);var o=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=o?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),r<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.options.onCompleteCallback&&t.options.onCompleteCallback()},this.formatNumber=function(a){var r,o,l,u,V=a<0?"-":"";r=Math.abs(a).toFixed(t.options.decimalPlaces);var d=(r+="").split(".");if(o=d[0],l=d.length>1?t.options.decimal+d[1]:"",t.options.useGrouping){u="";for(var m=3,c=0,h=0,g=o.length;h<g;++h)t.options.useIndianSeparators&&h===4&&(m=2,c=1),h!==0&&c%m==0&&(u=t.options.separator+u),c++,u=o[g-h-1]+u;o=u}return t.options.numerals&&t.options.numerals.length&&(o=o.replace(/[0-9]/g,function(f){return t.options.numerals[+f]}),l=l.replace(/[0-9]/g,function(f){return t.options.numerals[+f]})),V+t.options.prefix+o+l+t.options.suffix},this.easeOutExpo=function(a,r,o,l){return o*(1-Math.pow(2,-10*a/l))*1024/1023+r},this.options=p(p({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof i=="string"?document.getElementById(i):i,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,i):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(a){return a()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(i){if(i&&window&&!i.once){var n=window.innerHeight+window.scrollY,s=i.el.getBoundingClientRect(),t=s.top+window.pageYOffset,a=s.top+s.height+window.pageYOffset;a<n&&a>window.scrollY&&i.paused?(i.paused=!1,setTimeout(function(){return i.start()},i.options.scrollSpyDelay),i.options.scrollSpyOnce&&(i.once=!0)):(window.scrollY>a||t>n)&&!i.paused&&i.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var i=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>i;var n=i-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=i;var s=this.countDown?1:-1;this.endVal=i+s*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=i,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(i){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),i&&(this.options.onCompleteCallback=i),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(i){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(i),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(i){var n;if(this.el){var s=this.formattingFn(i);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,s):this.el.tagName==="INPUT"?this.el.value=s:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=s:this.el.innerHTML=s}},e.prototype.ensureNumber=function(i){return typeof i=="number"&&!isNaN(i)},e.prototype.validateValue=function(i){var n=Number(i);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(i),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}();const b=Object.freeze(Object.defineProperty({__proto__:null,CountUp:w},Symbol.toStringTag,{value:"Module"})),F=y(b);export{v as c,E as g,F as r};
