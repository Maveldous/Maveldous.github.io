(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,m=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-340eb48a":"298cefe8","chunk-47e8bd7a":"e4782934","chunk-722b2c67":"d1ecded7","chunk-8ec6237c":"9ccd4b6f"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-340eb48a":1,"chunk-47e8bd7a":1,"chunk-722b2c67":1,"chunk-8ec6237c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-340eb48a":"1c28b90d","chunk-47e8bd7a":"f32a1618","chunk-722b2c67":"c45ebf68","chunk-8ec6237c":"26d525c0"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){u=m[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var m=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",m.name="ChunkLoadError",m.type=r,m.request=a,n[1](m)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("headerComponent"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1)],1)},o=[],i=n("5530"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"startWindow"},[n("div",{staticClass:"startWindow__wrapper",class:{header:e.HEADER_STATE}},[n("div",{staticClass:"startWindow__main"},[n("h1",{directives:[{name:"show",rawName:"v-show",value:!e.HEADER_STATE,expression:"!HEADER_STATE"}],staticClass:"startWindow__main-title"},[e._v(" "+e._s(e.MAIN_LANG.header.title)+" "+e._s(e.HEADER_NAME)+"! ")]),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.HEADER_STATE,expression:"!HEADER_STATE"}],staticClass:"startWindow__main-text"},[e._v(" "+e._s(e.MAIN_LANG.header.text)+" ")]),n("form",{staticClass:"startWindow__form"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.HEADER_STATE,expression:"HEADER_STATE"}],staticClass:"startWindow__form-socialmedia"},[e._m(0),e._m(1),e._m(2)]),n("input",{directives:[{name:"show",rawName:"v-show",value:!e.HEADER_STATE,expression:"!HEADER_STATE"}],staticClass:"startWindow__form-input",attrs:{type:"text",placeholder:e.MAIN_LANG.header.placeholder},on:{input:e.updateName}}),n("div",{staticClass:"startWindow__form-btnBlock"},[n("router-link",{staticClass:"router-link",attrs:{to:"/"}},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.HEADER_STATE,expression:"HEADER_STATE"}],staticClass:"startWindow__form-btnHome",on:{click:function(t){return t.preventDefault(),e.headerUpdate(!1)}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-home"})])],1)]),n("button",{staticClass:"startWindow__form-btn",on:{click:function(t){return t.preventDefault(),e.TOGGLE_LANG(!1)}}},[e._v("ENG")]),n("button",{staticClass:"startWindow__form-btn",on:{click:function(t){return t.preventDefault(),e.TOGGLE_LANG(!0)}}},[e._v("RUS")])],1)]),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.HEADER_STATE,expression:"!HEADER_STATE"}],staticClass:"startWindow__main-btn",on:{click:function(t){return t.preventDefault(),e.headerUpdate(!0)}}},[e._v(" "+e._s(e.MAIN_LANG.header.btn)+" ")])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"startWindow__form-item"},[n("a",{attrs:{href:"https://t.me/Maveldous"}},[n("i",{staticClass:"fab fa-telegram-plane"})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"startWindow__form-item"},[n("a",{attrs:{href:"https://www.linkedin.com/in/naumov-artem-progdev/"}},[n("i",{staticClass:"fab fa-linkedin-in"})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"startWindow__form-item"},[n("a",{attrs:{href:"https://github.com/Maveldous"}},[n("i",{staticClass:"fab fa-github"})])])}],u=(n("4160"),n("d3b7"),n("159b"),n("2f62")),l={name:"Header",data:function(){return{}},computed:Object(i["a"])({},Object(u["c"])(["HEADER_NAME","HEADER_STATE","MAIN_LANG"])),methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["TOGGLE_STATE_TRUE","TOGGLE_LANG"])),{},{updateName:function(e){this.$store.commit("UPDATE_NAME",e.target.value)},headerUpdate:function(e){var t,n=2e3;e&&(this.TOGGLE_STATE_TRUE(),t=document.querySelectorAll(".startWindow__form-item, .main__title, .background"),n=1e3),new Promise((function(e){setTimeout((function(){e()}),n)})).then((function(){e||(t=document.querySelectorAll(".main__title, .background")),t.forEach((function(e,t){setTimeout((function(){e.classList.add("animation")}),1e3*t)}))}))}})},m=l,d=(n("7d69"),n("2877")),f=Object(d["a"])(m,s,c,!1,null,"d008154e",null),p=f.exports,h={name:"App",components:{headerComponent:p},computed:Object(i["a"])({},Object(u["c"])(["HEADER_NAME"])),methods:Object(i["a"])({},Object(u["d"])(["CHANGE_LANG","UPDATE_NAME"])),created:function(){var e=this;this.CHANGE_LANG(!0),window.addEventListener("unload",(function(){localStorage.setItem("name",e.HEADER_NAME)})),localStorage.getItem("name")&&"null"!=localStorage.getItem("name")&&this.UPDATE_NAME(localStorage.getItem("name"))}},_=h,E=(n("5c0b"),Object(d["a"])(_,a,o,!1,null,null,null)),b=E.exports,A=n("8c4f");r["a"].use(A["a"]);var v=new A["a"]({routes:[{path:"/",name:"main",component:function(){return n.e("chunk-47e8bd7a").then(n.bind(null,"0bb0"))}},{path:"/About",name:"about",component:function(){return n.e("chunk-8ec6237c").then(n.bind(null,"4112"))},props:!0},{path:"/Skills",name:"skills",component:function(){return n.e("chunk-722b2c67").then(n.bind(null,"09be"))}},{path:"/Works",name:"works",component:function(){return n.e("chunk-340eb48a").then(n.bind(null,"dea9"))}}]}),g=v;n("b0c0");r["a"].use(u["a"]);var w=new u["a"].Store({state:{name:"",state:!1,mapVision:!1,lang:{},engLang:{header:{title:"Hello",text:"Enter your name and select a language",btn:"Confirm",placeholder:"Enter your name"},mainPage:{title:"Portfolio",text1:"About me",text2:"My skills",text3:"My works",text4:"Exit"},aboutMe:{text:'! My name is Naumov Artem. I have been doing front-end development for over a year. Most of this time I worked as a freelancer or creating my own pet-projects.\n                Despite my passion for the web, I have never forgotten about other PLs, so now I can boast of a good experience of working with C ++ and C #. I\'am familiar and have worked with many concepts, principles of programming, such as: Rest API, Solid, OOP, Functional programming and etc. Most of my skills are listed in the "My Skills" section. From soft skills, I can single out: communication skills, teamwork, good time management and a responsible approach to any business. Since this is the section "About Me", I can add a little about my hobbies, namely: love of playing chess, reading foreign or classical literature, as well as playing sports with friends. In general, that\'s all, thank you for your time with this text and hope to work with you soon!'},works:{btn:"Show all",project1:"Animation project",project2:"Videoplayer",project3:"Timers project",project4:"Landing project",project5:"Wether Plugin",project6:"2048 game",project7:"Mindformat project",project8:"Project8",project9:"Project9"}},rusLang:{header:{title:"Здравствуйте",text:"Введите свое имя и выберите язык",btn:"Подтвердить",placeholder:"Введите свое имя"},mainPage:{title:"Портфолио",text1:"Обо мне",text2:"Мои навыки",text3:"Мои работы",text4:"Выход"},aboutMe:{text:'! Меня зовут Наумов Артем. Более года я занимаюсь front-end разработкой. Большую часть этого времени проработал на фрилансе или создавая свои pet-проекты.\n                Не смотря на мою увлеченность вэбом, никогда не забывал про другие ЯПы, поэтому сейчас могу похвастаться хорошим опытом работы с C++ и С#. Знаком и работал с многими концепциями, принципами программирования, такими как: Rest API, Solid, OOP, Functional programming и etc. Большая часть моих навыков указана в разделе "Мои навыки". Из soft skills могу выделить коммуникативные навыки, работа в команде, хороший тайм менеджмент и ответственный подход к любому делу. Так как это раздел "О себе", могу добавить немного про свои увлечения, а именно: любовь к игре в шахматы, чтение зарубежной или классической литературы, а так же занятия спортом с друзьями. В целом, это все, спасибо за уделенное время этому тексту и надеюсь на скорую работу с вами!'},works:{btn:"Показать все",project1:"Animation project",project2:"Videoplayer",project3:"Timers project",project4:"Landing project",project5:"Wether Plugin",project6:"2048 game",project7:"Mindformat project",project8:"Project8",project9:"Project9"}}},getters:{HEADER_NAME:function(e){return e.name},HEADER_STATE:function(e){return e.state},GET_MAP_VISION:function(e){return e.mapVision},MAIN_LANG:function(e){return e.lang}},mutations:{CHANGE_STATE_TRUE:function(e){e.state=!e.state},CHANGE_MAP_VISION:function(e){e.mapVision=!e.mapVision},UPDATE_NAME:function(e,t){e.name=t},CHANGE_LANG:function(e,t){e.lang=t?e.rusLang:e.engLang}},actions:{TOGGLE_STATE_TRUE:function(e){var t=e.commit;t("CHANGE_STATE_TRUE")},TOGGLE_LANG:function(e,t){var n=e.commit;n("CHANGE_LANG",t)},TOGGLE_MAP_VISION:function(e){var t=e.commit;t("CHANGE_MAP_VISION")}}}),T=w;n("f27b");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)},store:T,router:g}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"7d69":function(e,t,n){"use strict";var r=n("e5b5"),a=n.n(r);a.a},"9c0c":function(e,t,n){},e5b5:function(e,t,n){},f27b:function(e,t,n){}});
//# sourceMappingURL=app.c4418f89.js.map