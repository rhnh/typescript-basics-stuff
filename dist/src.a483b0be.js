parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qRFi":[function(require,module,exports) {
"use strict";function r(r){for(var e=0,t=1;t<2*r;t++)f(t)&&(e*=-1,e+=1/t);return e<0&&(e*=-1),4*e}function e(r,e){for(var t=1,n=1,o=1;o<=e;o++)n+=t*=r/o;return n}function t(r){for(var e=0,t=0;t<=r;t++)f(t)&&(e+=t);return e}function n(r){if(r<=1)return!1;if(r<=3)return!0;if(r%2==0||r%3==0)return!1;for(var e=5;e*e<=r;e+=6)if(r%e==0||r%(e+2)==0)return!1;return!0}function o(r){for(var e=0,t=1;t<=r;t++)e+=1/t;return e}function i(r){if(n(r))return r+" is a prime number";for(var e=r,t="";r%2==0;)t+=" * 2",r/=2;for(var o=3;o*o<=r;o+=2)for(;r%o==0;)t+=" * "+o,r/=o;return""!==(t=(1!==r?r+"":"")+t+" = "+e).charAt(0)&&" "!==t.charAt(0)&&"*"!==t.charAt(0)||(t=t.substr(2)),t}function u(r){for(var e=0,t=0;t<r;t++)e+=t;return e}function f(r){return!a(r)}function a(r){return r%2==0}function s(r){var e=document.createElement("input");return e.className="form-name",e.setAttribute("id","formName"),e.placeholder=r,e}function c(r,e){var t=document.getElementById(r);return t.innerText=e,t}function m(r){for(;r.firstChild;)r.removeChild(r.firstChild)}exports.__esModule=!0,exports.LeibnizSeries=r,exports.exponentialSeries=e,exports.sumOfOddNumbers=t,exports.isPrime=n,exports.harmonicSeries=o,exports.primeFactors=i,exports.numberOfHandShake=u,exports.addInputBox=s,exports.addParagraph=c,exports.removeAllChildren=m;
},{}],"7QCb":[function(require,module,exports) {
"use strict";var e=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};exports.__esModule=!0;var t=e(require("./app/utils")),n=document.getElementById("harmonic-series"),i=document.getElementById("leibniz-series"),d=document.getElementById("sum-of-odds"),r=document.getElementById("is-prime"),c=document.getElementById("modal"),l=document.getElementById("close"),o=document.getElementById("cancel"),a=document.getElementById("prime-factor"),s=document.getElementById("input-form");function m(e){c.style.display="block";var n=document.getElementById("calculate"),i=t.addInputBox("This is an inputBox");s.appendChild(i),t.addParagraph("description"," Harmonic Series ");var d=document.getElementById("formName").parentNode;c.style.display="block";var r=document.createElement("p");n.addEventListener("click",function(){r.innerText=e(+i.value).toString()}),d.insertBefore(r,i)}n.addEventListener("click",function(){m(t.harmonicSeries)}),i.addEventListener("click",function(){m(t.LeibnizSeries)}),r.addEventListener("click",function(){m(t.isPrime)}),a.addEventListener("click",function(){m(t.primeFactors)}),d.addEventListener("click",function(){m(t.sumOfOddNumbers)}),l.addEventListener("click",function(){c.style.display="none",t.removeAllChildren(s)}),o.addEventListener("click",function(){c.style.display="none",t.removeAllChildren(s)});
},{"./app/utils":"qRFi"}]},{},["7QCb"], null)
//# sourceMappingURL=/src.a483b0be.js.map