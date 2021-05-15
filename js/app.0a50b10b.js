(function(t){function e(e){for(var o,c,u=e[0],a=e[1],l=e[2],s=0,d=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},i=[];function c(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3717a802"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.src=c(t);var l=new Error;i=function(e){a.onerror=a.onload=null,clearTimeout(s);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[t]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/todo-vue/",u.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"387b":function(t,e,n){"use strict";n("b53c")},"458f":function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("458f")},7891:function(t,e,n){},"7d88":function(t,e,n){"use strict";n("7891")},8919:function(t,e,n){},b17a:function(t,e,n){"use strict";n("ead1")},b53c:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},i=[],c=(n("5c0b"),n("2877")),u={},a=Object(c["a"])(u,r,i,!1,null,null,null),l=a.exports,s=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("todo-filter"),n("todo-list"),n("create-todo")],1)},d=[],p=(n("2397"),n("d225")),b=n("4e2b"),v=n("308d"),y=n("6bb5"),h=n("9ab4"),O=n("1b40"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-form"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmitCreateForm(e)}}},[n("ui-input",{attrs:{type:"text",placeholder:"New Todo",name:"title-todo"},model:{value:t.newTodoTitle,callback:function(e){t.newTodoTitle="string"===typeof e?e.trim():e},expression:"newTodoTitle"}}),n("ui-button",{attrs:{label:"Cancel",type:"reset"}}),n("ui-button",{attrs:{label:"Save",type:"submit",disabled:""===t.newTodoTitle}})],1)])},j=[],g=(n("96cf"),n("3b8d")),T=n("b0b4"),_=n("2f62"),w=n("9e80"),x=function(){return{todoList:[],filter:{statusDone:null,todoTitleFilter:null}}},R=Object(w["c"])(x,{addTodo:function(t,e){t.todoList.push(e)},toggleTodo:function(t,e){e.toggle()},deleteTodo:function(t,e){t.todoList.splice(t.todoList.indexOf(e),1)},editTodo:function(t,e){Object.assign(e.todo,e.newTodo)},filterTodos:function(t,e){t.filter=e}}),P=(n("6762"),n("2fdb"),n("7514"),n("13ea")),E=n.n(P),k=n("2768"),B=n.n(k),D=Object(w["b"])(x,{todoList:function(t){return $(t.todoList,t.filter)},getTodoByTitleExact:function(t){return function(e){return t.todoList.find((function(t){return t.title===e}))}}});function $(t,e){return E()(e.todoTitleFilter)||(t=t.filter((function(t){return t.title.toLowerCase().includes(e.todoTitleFilter||"")}))),B()(e.statusDone)||(t=t.filter((function(t){return t.done===e.statusDone}))),t}var S=Object(w["a"])({state:x,mutations:R,getters:D},{createTodo:function(t,e){var n=t.commit,o=L(e);return o&&n("addTodo",e),Promise.resolve(o)},toggleTodo:function(t,e){var n=t.commit;n("toggleTodo",e)},deleteTodo:function(t,e){var n=t.commit,o=confirm("Are you sure you want to delete todo:".concat(e.title,"?"));o&&n("deleteTodo",e)},editTodo:function(t,e){var n=t.commit,o=L(e.newTodo);return o&&n("editTodo",e),Promise.resolve(o)},filterTodos:function(t,e){var n=t.commit;n("filterTodos",e)}});function L(t){var e=U.getTodoByTitleExact(t.title);return!!B()(e)||(alert("🤔 Oops! Todo with title ".concat(t.title," already exist. Please try with another title.")),!1)}o["a"].use(_["a"]);var C={state:x,actions:S,getters:D,mutations:R},F=new _["a"].Store(C),U=Object(w["d"])(F,C);o["a"].prototype.$todoStore=U;var I=F,A=n("ec26"),M=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(p["a"])(this,t),this.id=Object(A["a"])(),this.title="",this.done=!1,this.title=e,this.done=n}return Object(T["a"])(t,[{key:"toggle",value:function(){this.done=!this.done}}]),t}(),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",t._g(t._b({domProps:{value:t.value},on:{input:function(e){return t.$emit("update",e.target.value)}}},"input",t.$attrs,!1),t.$listeners))},J=[];function V(t){var e=H();return function(){var n,o=Object(y["a"])(t);if(e){var r=Object(y["a"])(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(v["a"])(this,n)}}function H(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var N=function(t){Object(b["a"])(n,t);var e=V(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return n}(O["d"]);h["a"]([Object(O["b"])("update")],N.prototype,"value",void 0),N=h["a"]([O["a"]],N);var z=N,G=z,K=Object(c["a"])(G,q,J,!1,null,null,null),Q=K.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._g(t._b({class:{icon:"icon"===t.displayType}},"button",t.$attrs,!1),t.$listeners),[t._v(t._s(t.label))])},X=[];function Y(t){var e=Z();return function(){var n,o=Object(y["a"])(t);if(e){var r=Object(y["a"])(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(v["a"])(this,n)}}function Z(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var tt=function(t){Object(b["a"])(n,t);var e=Y(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return n}(O["d"]);h["a"]([Object(O["c"])({type:String,default:""})],tt.prototype,"label",void 0),h["a"]([Object(O["c"])({type:String,default:"normal"})],tt.prototype,"displayType",void 0),tt=h["a"]([O["a"]],tt);var et=tt,nt=et,ot=(n("7d88"),Object(c["a"])(nt,W,X,!1,null,"4d95d902",null)),rt=ot.exports;function it(t){var e=ct();return function(){var n,o=Object(y["a"])(t);if(e){var r=Object(y["a"])(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(v["a"])(this,n)}}function ct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var ut=function(t){Object(b["a"])(n,t);var e=it(n);function n(){var t;return Object(p["a"])(this,n),t=e.apply(this,arguments),t.newTodoTitle="",t}return Object(T["a"])(n,[{key:"onSubmitCreateForm",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(E()(this.newTodoTitle)){t.next=5;break}return t.next=3,U.createTodo(new M(this.newTodoTitle));case 3:e=t.sent,e&&(this.newTodoTitle="");case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(O["d"]);ut=h["a"]([Object(O["a"])({components:{UiInput:Q,UiButton:rt}})],ut);var at=ut,lt=at,st=(n("e440"),Object(c["a"])(lt,m,j,!1,null,"7aca0ea9",null)),ft=st.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ui-input",{attrs:{type:"text",placeholder:"Filter elements by title",name:"title-filter-todo"},on:{input:t.filterTodos},model:{value:t.todoFilterText,callback:function(e){t.todoFilterText=e},expression:"todoFilterText"}}),n("ui-select",{attrs:{name:"status-filter-todo",items:t.items},on:{change:t.filterTodos},model:{value:t.statusDone,callback:function(e){t.statusDone=e},expression:"statusDone"}})],1)},pt=[],bt=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",t._g(t._b({domProps:{value:t.value},on:{change:function(e){return t.$emit("update",t.items[e.target.selectedIndex].value)}}},"select",t.$attrs,!1),t.$listeners),t._l(t.items,(function(e){return n("option",{key:e.label,domProps:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),0)},yt=[];function ht(t){var e=Ot();return function(){var n,o=Object(y["a"])(t);if(e){var r=Object(y["a"])(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(v["a"])(this,n)}}function Ot(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var mt=function(t){Object(b["a"])(n,t);var e=ht(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return n}(O["d"]);h["a"]([Object(O["c"])({type:Array,required:!0})],mt.prototype,"items",void 0),h["a"]([Object(O["b"])("update")],mt.prototype,"value",void 0),mt=h["a"]([O["a"]],mt);var jt=mt,gt=jt,Tt=Object(c["a"])(gt,vt,yt,!1,null,null,null),_t=Tt.exports;function wt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function xt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?wt(Object(n),!0).forEach((function(e){Object(bt["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Rt(t){var e=Pt();return function(){var n,o=Object(y["a"])(t);if(e){var r=Object(y["a"])(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(v["a"])(this,n)}}function Pt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var Et=function(t){Object(b["a"])(n,t);var e=Rt(n);function n(){var t;return Object(p["a"])(this,n),t=e.apply(this,arguments),t.todoFilterText=null,t.statusDone=null,t.items=[{label:"All",value:null},{label:"Done",value:!0},{label:"Undone",value:!1}],t}return Object(T["a"])(n,[{key:"filterTodos",value:function(){U.filterTodos({todoTitleFilter:this.todoFilterText,statusDone:this.statusDone})}}]),n}(O["d"]);Et=h["a"]([Object(O["a"])({components:{UiInput:Q,UiSelect:_t},computed:xt({},Object(_["b"])(["todoList"]))})],Et);var kt=Et,Bt=kt,Dt=(n("387b"),Object(c["a"])(Bt,dt,pt,!1,null,"26f450b2",null)),$t=Dt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("transition-group",{attrs:{"enter-active-class":"animate__animated animate__bounceInLeft","leave-active-class":"animate__animated animate__bounceOutRight"}},t._l(t.todoList,(function(t){return n("todo-item",{key:t.id,attrs:{todo:t}})})),1)],1)},Lt=[],Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"item-wrapper"},[n("ui-input",{attrs:{type:"checkbox",checked:t.todo.done},on:{click:function(e){return t.toggleValue(t.todo)}}}),n("div",{staticClass:"content-todo"},[t.todoEditing&&t.todoEditing.id===t.todo.id?n("form",{on:{submit:function(e){return e.preventDefault(),t.saveEdit(e)}}},[n("ui-input",{attrs:{type:"text",name:"title-editing"},model:{value:t.todoEditing.title,callback:function(e){t.$set(t.todoEditing,"title",e)},expression:"todoEditing.title"}}),n("ui-button",{attrs:{label:"Cancel",type:"reset"},on:{click:function(e){t.todoEditing=null}}}),n("ui-button",{attrs:{label:"Save",type:"submit",disabled:!t.todoEditing.title},on:{click:t.saveEdit}})],1):t._e(),t.todoEditing?t._e():n("span",[t._v(t._s(t.todo.title))]),t.todoEditing?t._e():n("ui-button",{staticClass:"todo-button-edit",attrs:{displayType:"icon",label:"✏️"},on:{click:function(e){return t.editTodo(t.todo)}}})],1),n("ui-button",{staticClass:"todo-button-delete",attrs:{displayType:"icon",label:"🗑️"},on:{click:function(e){return t.deleteTodo(t.todo)}}})],1)},Ft=[];function Ut(t){var e=It();return function(){var n,o=Object(y["a"])(t);if(e){var r=Object(y["a"])(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(v["a"])(this,n)}}function It(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var At=function(t){Object(b["a"])(n,t);var e=Ut(n);function n(){var t;return Object(p["a"])(this,n),t=e.apply(this,arguments),t.todoEditing=null,t}return Object(T["a"])(n,[{key:"toggleValue",value:function(){U.toggleTodo(this.todo)}},{key:"deleteTodo",value:function(){U.deleteTodo(this.todo)}},{key:"editTodo",value:function(){this.todoEditing=Object.assign({},this.todo)}},{key:"saveEdit",value:function(){B()(this.todoEditing)||U.editTodo({newTodo:this.todoEditing,todo:this.todo}),this.todoEditing=null}}]),n}(O["d"]);h["a"]([Object(O["c"])({type:Object,required:!0})],At.prototype,"todo",void 0),At=h["a"]([Object(O["a"])({components:{UiInput:Q,UiButton:rt}})],At);var Mt=At,qt=Mt,Jt=(n("b17a"),Object(c["a"])(qt,Ct,Ft,!1,null,"5f054d0e",null)),Vt=Jt.exports;function Ht(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function Nt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ht(Object(n),!0).forEach((function(e){Object(bt["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ht(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function zt(t){var e=Gt();return function(){var n,o=Object(y["a"])(t);if(e){var r=Object(y["a"])(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(v["a"])(this,n)}}function Gt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var Kt=function(t){Object(b["a"])(n,t);var e=zt(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return n}(O["d"]);Kt=h["a"]([Object(O["a"])({components:{UiInput:Q,TodoItem:Vt},computed:Nt({},Object(_["b"])(["todoList"]))})],Kt);var Qt=Kt,Wt=Qt,Xt=(n("f865"),Object(c["a"])(Wt,St,Lt,!1,null,"5416b30e",null)),Yt=Xt.exports;function Zt(t){var e=te();return function(){var n,o=Object(y["a"])(t);if(e){var r=Object(y["a"])(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(v["a"])(this,n)}}function te(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var ee=function(t){Object(b["a"])(n,t);var e=Zt(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return n}(O["d"]);ee=h["a"]([Object(O["a"])({components:{CreateTodo:ft,TodoList:Yt,TodoFilter:$t}})],ee);var ne=ee,oe=ne,re=Object(c["a"])(oe,f,d,!1,null,null,null),ie=re.exports;o["a"].use(s["a"]);var ce=new s["a"]({mode:"history",base:"/todo-vue/",routes:[{path:"/",name:"home",component:ie},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});o["a"].config.productionTip=!1,new o["a"]({router:ce,store:I,render:function(t){return t(l)}}).$mount("#app")},d1f5:function(t,e,n){},e440:function(t,e,n){"use strict";n("d1f5")},ead1:function(t,e,n){},f865:function(t,e,n){"use strict";n("8919")}});
//# sourceMappingURL=app.0a50b10b.js.map