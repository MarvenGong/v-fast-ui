(function(t){function n(n){for(var i,s,r=n[0],u=n[1],c=n[2],p=0,d=[];p<r.length;p++)s=r[p],a[s]&&d.push(a[s][0]),a[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(n);while(d.length)d.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],i=!0,r=1;r<e.length;r++){var u=e[r];0!==a[u]&&(i=!1)}i&&(o.splice(n--,1),t=s(s.s=e[0]))}return t}var i={},a={index:0},o=[];function s(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=i,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)s.d(e,i,function(n){return t[n]}.bind(null,i));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/v-fast-ui/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=n,r=r.slice();for(var c=0;c<r.length;c++)n(r[c]);var l=u;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("c31f")},2543:function(t,n,e){},3831:function(t,n,e){},"42b1":function(t,n,e){"use strict";var i=e("880c"),a=e.n(i);a.a},"5ede":function(t,n,e){"use strict";var i=e("2543"),a=e.n(i);a.a},"6c6f":function(t,n,e){"use strict";var i=e("3831"),a=e.n(i);a.a},"880c":function(t,n,e){},"9e72":function(t,n,e){"use strict";var i=e("c969"),a=e.n(i);a.a},c31f:function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("a026"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("HelloWorld",{attrs:{msg:"Welcome to Vue Fast UI"}})],1)},o=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),e("p",[e("button",{on:{click:t.hanndleToast}},[t._v("提示Toast信息")]),e("button",{on:{click:t.hanndleIndicator}},[t._v("全局loading提示")])]),e("p",[e("six-number",{attrs:{type:"rect"}})],1)])},r=[],u=e("5118"),c={name:"HelloWorld",props:{msg:String},methods:{hanndleToast:function(){this.$toast("你好呀")},hanndleIndicator:function(){var t=this;this.$indicator.open("loading..."),Object(u["setTimeout"])(function(){t.$indicator.close()},2e3)}},mounted:function(){}},l=c,p=(e("9e72"),e("2877")),d=Object(p["a"])(l,s,r,!1,null,"1c46eb01",null),f=d.exports,m={name:"app",components:{HelloWorld:f}},v=m,h=(e("42b1"),Object(p["a"])(v,a,o,!1,null,null,null)),g=h.exports,b=(e("7f7f"),i["a"].extend({template:'\n  <transition name="mint-toast-pop">\n    <div class="mint-toast" v-show="visible" :class="customClass" :style="{ \'padding\': iconClass === \'\' ? \'10px\' : \'20px\' }">\n      <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== \'\'"></i>\n      <span class="mint-toast-text" :style="{ \'padding-top\': iconClass === \'\' ? \'0\' : \'10px\' }">{{ message }}</span>\n    </div>\n  </transition>\n  ',props:{message:String,className:{type:String,default:""},position:{type:String,default:"middle"},iconClass:{type:String,default:""}},data:function(){return{visible:!1}},computed:{customClass:function(){var t=[];switch(this.position){case"top":t.push("is-placetop");break;case"bottom":t.push("is-placebottom");break;default:t.push("is-placemiddle")}return t.push(this.className),t.join(" ")}}})),y=[],A=function(){if(y.length>0){var t=y[0];return y.splice(0,1),t}return new b({})},w=function(t){t&&y.push(t)},x=function(t){t.target.parentNode&&t.target.parentNode.removeChild(t.target)};b.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",x),this.closed=!0,w(this)};var E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.duration||2e3,e=A();e.closed=!1,clearTimeout(e.timer),e.message="string"===typeof t?t:t.message,e.position=t.position||"middle",e.className=t.className||"",e.iconClass=t.iconClass||"";var a=e.$mount(document.createElement("div"));return document.body.appendChild(a.$el),i["a"].nextTick(function(){e.visible=!0,e.$el.removeEventListener("transitionend",x),~n&&(e.timer=setTimeout(function(){e.closed||e.close()},n))}),e},C=E;C.install=function(t){t.prototype.$toast=C};var D,k=C,S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("img",{staticClass:"spinner-roll",attrs:{width:"32",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAAC\n  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\n  Yxf4DRcbcX1otq98AAAAASUVORK5CYII=",alt:""}})},T=[],K={name:"spiner",data:function(){return{}}},U=K,B=(e("5ede"),Object(p["a"])(U,S,T,!1,null,"049a4216",null)),V=B.exports,Q=i["a"].extend({template:'\n    <transition name="mint-indicator">\n      <div class="mint-indicator" v-show="visible">\n        <div class="mint-indicator-mask" @touchmove.stop.prevent></div>\n        <div class="mint-indicator-wrapper" :style="{ \'padding\': text ? \'20px\' : \'15px\' }">\n          <spinner class="mint-indicator-spin" :type="convertedSpinnerType" :size="32"></spinner>\n          <span class="mint-indicator-text" v-show="text">{{ text }}</span>\n        </div>\n      </div>\n    </transition>\n  ',data:function(){return{visible:!1}},components:{Spinner:V},computed:{convertedSpinnerType:function(){switch(this.spinnerType){case"double-bounce":return 1;case"triple-bounce":return 2;case"fading-circle":return 3;default:return 0}}},props:{text:String,spinnerType:{type:String,default:"snake"}}}),F={open:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D||(D=new Q),D.visible||(D.text="string"===typeof t?t:t.text||"",D.spinnerType=t.spinnerType||"snake",D.$mount(document.createElement("div")),document.body.appendChild(D.$el),i["a"].nextTick(function(){D.visible=!0}))},close:function(){D&&(D.visible=!1)}},j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],ref:"codeinput",staticClass:"code-input",attrs:{type:"tel",pattern:"[0-9]*",maxlength:"6"},domProps:{value:t.inputData},on:{focus:t.handleInputFocus,blur:t.handleInputBlur,keyup:function(n){6===t.inputData.length?t.lastCodeKeyup(n):t.codekeyup(n)},input:function(n){n.target.composing||(t.inputData=n.target.value)}}}),e("div",{staticClass:"code-all",on:{click:function(n){return t.focus()}}},t._l(t.codeData,function(n,i){return e("div",{key:i,staticClass:"code-item",class:{line:"line"===t.type,rect:"rect"===t.type,focus:t.focusIndex===i&&t.inputFoucs||5===i&&6===t.focusIndex&&t.inputFoucs}},[t._v("\n      "+t._s(t._f("number2password")(t.inputData[i],"password"===t.inputType))+"\n    ")])}),0)])},L=[],O={name:"six-number",data:function(){return{codeData:"123456",inputData:"123",inputFoucs:!1}},props:{type:{type:String,default:"line",required:!1},inputType:{type:String,default:"number",required:!1},value:{type:String,default:""}},computed:{focusIndex:function(){return this.$data.inputData.length}},filters:{number2password:function(t,n){return t?n?"•":t:""}},methods:{focus:function(){this.$el.querySelector("input").focus()},clear:function(){this.$data.inputData="",this.$emit("input","")},handleInputFocus:function(){this.$data.inputFoucs=!0},handleInputBlur:function(){this.$data.inputFoucs=!1},codekeyup:function(t){var n=t.currentTarget.value;if(/\D/.test(n)){var e=n.substring(0,n.length-1);return t.currentTarget.value=n.substring(0,n.length-1),this.$data.inputData=e,!1}this.$emit("input",this.$data.inputData)},lastCodeKeyup:function(t){this.codekeyup(t),this.$emit("on-finish",this.$data.inputData)}},watch:{value:function(t){this.$data.inputData=t}},mounted:function(){this.$data.inputData=this.value}},Y=O,q=(e("6c6f"),Object(p["a"])(Y,j,L,!1,null,"69e918f2",null)),M=q.exports;M.install=function(t){t.component("six-number",M)};var I=M,H=(e("db2a"),[I]),P=function t(n){t.installed||(t.installed=!0,console.info("v-fast-ui注册成功"),n.prototype.$toast=k,n.prototype.$indicator=F,H.map(function(t){n.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&P(window.Vue);var X=P;i["a"].config.productionTip=!1,i["a"].use(X),new i["a"]({render:function(t){return t(g)}}).$mount("#app")},c969:function(t,n,e){},db2a:function(t,n,e){}});
//# sourceMappingURL=index.f045bcad.js.map