(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be9e2eb0"],{"152e":function(t,e,n){},"45f1":function(t,e,n){"use strict";var s=n("152e"),r=n.n(s);r.a},a016:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"symbol-type"},[t._v("Symbol = "+t._s(t.currentSymbol))]),n("div",{staticClass:"wrapper"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentSymbol,expression:"currentSymbol"}],staticClass:"select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.currentSymbol=e.target.multiple?n:n[0]}}},t._l(t.options,function(e,s){return n("option",{key:s,staticClass:"select__option"},[t._v(t._s(e))])}),0),t._m(0)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list"},[n("li",{staticClass:"list__content"})])}],a={name:"DiffList",data:function(){return{options:["BTCUSDT","BNBBTC","ETHBTC"],currentSymbol:"BTCUSDT"}},watch:{currentSymbol:function(t){this.$bus.$emit("symbol",t)}}},i=a,l=(n("45f1"),n("2877")),c=Object(l["a"])(i,s,r,!1,null,"426ffe7d",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-be9e2eb0.ef8d906c.js.map