(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7194d9dd"],{8169:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("transition-group",{staticClass:"row justify-center",attrs:{name:"list"}},t._l(t.gifs,(function(e,s){return i("div",{key:"gif-"+e.title+"-"+s,staticClass:"col-12 col-sm-6 col-md-3 text-center mt-4"},[t.notfound?i("h2",[t._v("Not Found")]):t._e(),i("v-img",{attrs:{"lazy-src":t.loader,src:e.url}},[i("v-btn",{staticClass:"float-right mr-2 mt-2",attrs:{"x-small":"",depressed:"",dark:"",fab:"",color:"rgba(0,0,0,0.5)"},on:{click:function(i){return i.preventDefault(),t.WebShareInit(e)}}},[i("v-icon",{attrs:{dark:""}},[t._v(" mdi-reply ")])],1)],1)],1)})),0)],1)},n=[],a=i("2b0e"),r=a["a"].extend({name:"Results",data:function(){return{loader:i("a92c")}},props:{gifs:{type:Array,default:function(){return[]}},notfound:{type:Boolean,default:!1}},methods:{WebShareInit:function(t){navigator.share?navigator.share({title:t.title,text:t.title,url:t.url}).then((function(){console.log("Shareing successfull")})).catch((function(){console.log("Sharing failed")})):alert("share not supported in your browser")}}}),o=r,c=(i("ebf2"),i("2877")),l=i("6544"),u=i.n(l),h=(i("4160"),i("caad"),i("a9e3"),i("c7cd"),i("53ca")),d=i("3835"),f=i("5530"),v=(i("86cc"),i("8dd9")),p=v["a"],b=(i("99af"),i("8d4f"),i("a9ad")),g=i("80d2"),m=b["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(g["d"])(this.calculatedSize),width:Object(g["d"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),y=m,x=i("ade3"),C=i("3206");function k(t,e,i){return Object(C["a"])(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(x["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}k("itemGroup");var S=i("f2e7"),B=i("fe6c"),O=(i("ac1f"),i("5319"),i("498a"),i("9911"),i("5607")),j=a["a"].extend({name:"routable",directives:{Ripple:O["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},methods:{click:function(t){this.$emit("click",t)},generateRouteLink:function(){var t,e,i=this.exact,s=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(x["a"])(t,this.to?"nativeOn":"on",Object(f["a"])(Object(f["a"])({},this.$listeners),{},{click:this.click})),Object(x["a"])(t,"ref","link"),t);if("undefined"===typeof this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var n=this.activeClass,a=this.exactActiveClass||n;this.proxyClass&&(n="".concat(n," ").concat(this.proxyClass).trim(),a="".concat(a," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:i,activeClass:n,exactActiveClass:a,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:e,data:s}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass," ").concat(this.proxyClass||"").trim(),i="_vnode.data.class.".concat(e);this.$nextTick((function(){Object(g["i"])(t.$refs.link,i)&&t.toggle()}))}},toggle:function(){}}}),w=i("af2b"),$=i("58df"),z=i("d9bd"),_=Object($["a"])(p,j,B["a"],w["a"],k("btnToggle"),Object(S["b"])("inputValue")),E=_.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(f["a"])(Object(f["a"])(Object(f["a"])(Object(f["a"])(Object(f["a"])({"v-btn":!0},j.options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.isElevated,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":!this.isElevated,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return this.isElevated||this.depressed},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain)||Number(this.elevation)>0},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(f["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(d["a"])(e,2),s=i[0],n=i[1];t.$attrs.hasOwnProperty(s)&&Object(z["a"])(s,n,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(y,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),s=i.tag,n=i.data,a=this.isElevated||this.depressed?this.setBackgroundColor:this.setTextColor;return"button"===s&&(n.attrs.type=this.type,n.attrs.disabled=this.disabled),n.attrs.value=["string","number"].includes(Object(h["a"])(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?n:a(this.color,n),e)}});i("4de4"),i("b64b"),i("2ca0"),i("20f6"),i("4b85"),i("a15b");function A(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var s=i.props,n=i.data,a=i.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var r=n.attrs;if(r){n.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),e(s.tag,n,a)}})}var N=i("d9f7"),R=A("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,s=e.props,n=e.data,a=e.children,r=n.attrs;return r&&(n.attrs={},i=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),t(s.tag,Object(N["a"])(n,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(i||[])}),a)}}),P=i("132d"),V=i("adda"),I=Object(c["a"])(o,s,n,!1,null,null,null);e["default"]=I.exports;u()(I,{VBtn:E,VContainer:R,VIcon:P["a"],VImg:V["a"]})},"86cc":function(t,e,i){},"8d4f":function(t,e,i){},9911:function(t,e,i){"use strict";var s=i("23e7"),n=i("857a"),a=i("af03");s({target:"String",proto:!0,forced:a("link")},{link:function(t){return n(this,"a","href",t)}})},af34:function(t,e,i){},ebf2:function(t,e,i){"use strict";i("af34")}}]);
//# sourceMappingURL=chunk-7194d9dd.b557b385.js.map