(function(t){function e(e){for(var s,o,a=e[0],l=e[1],u=e[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);r&&r(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},c={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/WebPractice/JS%20Practice/hexschool-vue-summer-camp/assignment-3/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var r=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1c44":function(t,e,n){t.exports={edit:"List_edit_1GHKo",delete:"List_delete_1_oPf",clear:"List_clear_1Q-HW",content:"List_content_L5i1z",input:"List_input_KpWgr",function:"List_function_3Anod",title:"List_title_2_8u4",list:"List_list_3yJKC",check:"List_check_13G6-",completed:"List_completed_1LBYY","check-icon":"List_check-icon_2teTV","x-icon":"List_x-icon_3B1zE","pen-icon":"List_pen-icon_1hWxH"}},"34c8":function(t,e,n){"use strict";var s=n("d1b1"),c=n.n(s);n.d(e,"default",(function(){return c.a}))},"3c36":function(t,e,n){"use strict";var s=n("e02b"),c=n.n(s);n.d(e,"default",(function(){return c.a}))},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23");function c(t,e,n,c,i,o){var a=Object(s["i"])("Title"),l=Object(s["i"])("Input"),u=Object(s["i"])("List");return Object(s["g"])(),Object(s["d"])(s["a"],null,[Object(s["f"])(a),Object(s["f"])(l,{tasks:i.tasks,"onUpdate:tasks":e[1]||(e[1]=function(t){return i.tasks=t})},null,8,["tasks"]),Object(s["f"])(u,{tasks:i.tasks,"onUpdate:tasks":e[2]||(e[2]=function(t){return i.tasks=t})},null,8,["tasks"])],64)}function i(t,e,n,c,i,o){return Object(s["g"])(),Object(s["d"])("h2",{class:t.$style.title},Object(s["j"])(i.month)+"/"+Object(s["j"])(i.date)+" 星期"+Object(s["j"])(o.chineseDay),3)}var o={name:"Title",data:function(){return{month:"",date:"",day:""}},computed:{chineseDay:function(){var t=["日","一","二","三","四","五","六"];return t[this.day]}},created:function(){var t=new Date;this.month=t.getMonth()+1,this.date=t.getDate(),this.day=t.getDay()}},a=n("a4b2");const l=o.__cssModules={};l["$style"]=a["default"],o.render=i;var u=o,r=Object(s["f"])("use",{"xlink:href":"#plus"},null,-1),d=Object(s["e"])(" 新增工作 ");function f(t,e,n,c,i,o){return Object(s["g"])(),Object(s["d"])("div",{class:t.$style["task-input"]},[Object(s["n"])(Object(s["f"])("button",{class:t.$style.add,onClick:e[1]||(e[1]=function(){return o.focusInput&&o.focusInput.apply(o,arguments)})},[(Object(s["g"])(),Object(s["d"])("svg",{class:t.$style["plus-icon"]},[r],2)),d],2),[[s["l"],!i.isFocus]]),Object(s["n"])(Object(s["f"])("input",{class:t.$style.input,type:"text",ref:"task-input","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.task=t}),onKeydown:e[3]||(e[3]=Object(s["o"])(Object(s["p"])((function(){return o.addTask&&o.addTask.apply(o,arguments)}),["exact"]),["enter"])),autocomplete:"off"},null,34),[[s["k"],i.task],[s["l"],i.isFocus]]),Object(s["f"])("div",{class:t.$style["btn-group"]},[Object(s["n"])(Object(s["f"])("button",{class:t.$style["add-task"],onClick:e[4]||(e[4]=function(){return o.addTask&&o.addTask.apply(o,arguments)})}," 新增 ",2),[[s["l"],i.isFocus]]),Object(s["n"])(Object(s["f"])("button",{class:t.$style.cancel,onClick:e[5]||(e[5]=function(){return o.cancel&&o.cancel.apply(o,arguments)})}," 取消 ",2),[[s["l"],i.isFocus]])],2)],2)}var b=n("2909"),p=(n("99af"),n("e017")),k=n.n(p),O=n("21a1"),h=n.n(O),j=new k.a({id:"plus",use:"plus-usage",viewBox:"0 0 16 16",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16" id="plus">\n  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />\n</symbol>'}),g=(h.a.add(j),{name:"Input",props:{tasks:Array},emits:["update:tasks"],data:function(){return{isFocus:!1,task:""}},methods:{focusInput:function(){var t=this;this.isFocus=!0,this.$nextTick((function(){t.$refs["task-input"].focus()}))},cancel:function(){this.isFocus=!1,this.task=""},addTask:function(){var t={content:this.task,isCompleted:!1,isEditing:!1,id:"".concat(this.task,"-").concat(this.tasks.length)},e=[].concat(Object(b["a"])(this.tasks),[t]);this.$emit("update:tasks",e),window.localStorage.setItem("tasks",JSON.stringify(e)),this.task="",this.isFocus=!1}}}),y=n("3c36");const m=g.__cssModules={};m["$style"]=y["default"],g.render=f;var _=g,v=n("ade3"),w=Object(s["f"])("use",{"xlink:href":"#check"},null,-1),$=Object(s["f"])("use",{"xlink:href":"#pen"},null,-1),x=Object(s["f"])("use",{"xlink:href":"#x"},null,-1);function C(t,e,n,c,i,o){var a=Object(s["i"])("Dialog"),l=Object(s["i"])("Tabs");return Object(s["g"])(),Object(s["d"])(s["a"],null,[Object(s["n"])(Object(s["f"])(a,{isShow:i.dialogShow,"onUpdate:isShow":e[1]||(e[1]=function(t){return i.dialogShow=t}),onOk:o.clearAllTasks},null,8,["isShow","onOk"]),[[s["l"],i.dialogShow]]),Object(s["f"])("div",{class:t.$style.function},[Object(s["f"])(l,{condition:i.condition,"onUpdate:condition":e[2]||(e[2]=function(t){return i.condition=t})},null,8,["condition"]),Object(s["f"])("button",{class:t.$style.clear,onClick:e[3]||(e[3]=function(t){return i.dialogShow=!0})}," 清除所有任務 ",2)],2),Object(s["f"])("h3",{class:t.$style.title},"有"+Object(s["j"])(o.taskLists.length)+"筆任務",3),Object(s["f"])("ul",null,[(Object(s["g"])(!0),Object(s["d"])(s["a"],null,Object(s["h"])(o.taskLists,(function(e){return Object(s["g"])(),Object(s["d"])("li",{class:t.$style.list,key:e.id},[Object(s["f"])("div",{class:[t.$style.check,Object(v["a"])({},t.$style.completed,e.isCompleted)],onClick:function(t){return o.toggleCheck(e)}},[Object(s["n"])((Object(s["g"])(),Object(s["d"])("svg",{class:t.$style["check-icon"]},[w],2)),[[s["l"],e.isCompleted]])],10,["onClick"]),Object(s["f"])("div",{class:[t.$style.content,Object(v["a"])({},t.$style.completed,e.isCompleted)]},[Object(s["n"])(Object(s["f"])("div",{onClick:function(t){return o.toggleCheck(e)}},Object(s["j"])(e.content),9,["onClick"]),[[s["l"],!e.isEditing]]),Object(s["n"])(Object(s["f"])("input",{class:t.$style.input,"onUpdate:modelValue":function(t){return e.content=t},onBlur:function(t){return o.editTask(e.id)},autocomplete:"off"},null,42,["onUpdate:modelValue","onBlur"]),[[s["k"],e.content],[s["l"],e.isEditing]])],2),Object(s["f"])("button",{class:t.$style.edit,onClick:function(t){return o.focusInput(t,e)}},[(Object(s["g"])(),Object(s["d"])("svg",{class:t.$style["pen-icon"]},[$],2))],10,["onClick"]),Object(s["f"])("button",{class:t.$style.delete,onClick:function(t){return o.deleteTask(e.id)}},[(Object(s["g"])(),Object(s["d"])("svg",{class:t.$style["x-icon"]},[x],2))],10,["onClick"])],2)})),128))])],64)}n("4de4"),n("c740");function S(t,e,n,c,i,o){return Object(s["g"])(),Object(s["d"])("div",{class:t.$style.tabs},[(Object(s["g"])(!0),Object(s["d"])(s["a"],null,Object(s["h"])(i.tabs,(function(e){return Object(s["g"])(),Object(s["d"])("div",{class:[t.$style.tab,Object(v["a"])({},t.$style.active,e===n.condition)],onClick:function(n){return t.$emit("update:condition",e)}},Object(s["j"])(e),11,["onClick"])})),256))],2)}var T={name:"Tab",props:{condition:String},emits:["update:condition"],data:function(){return{tabs:["所有任務","未完成","已完成"]}}},L=n("f379");const I=T.__cssModules={};I["$style"]=L["default"],T.render=S;var D=T,M=Object(s["e"])(" 你確定要刪除所有的任務嗎? ");function B(t,e,n,c,i,o){return Object(s["g"])(),Object(s["d"])(s["b"],{name:"fade"},{default:Object(s["m"])((function(){return[Object(s["f"])("div",{class:t.$style["dialog-container"],onClick:e[3]||(e[3]=Object(s["p"])((function(e){return t.$emit("update:isShow",!1)}),["self"]))},[Object(s["n"])(Object(s["f"])(s["b"],{name:"dialog"},{default:Object(s["m"])((function(){return[Object(s["f"])("div",{class:t.$style["dialog-body"]},[M,Object(s["f"])("div",{class:t.$style["btn-group"]},[Object(s["f"])("button",{class:t.$style.yes,onClick:e[1]||(e[1]=function(){return o.returnOk&&o.returnOk.apply(o,arguments)})}," 確認 ",2),Object(s["f"])("button",{class:t.$style.cancel,onClick:e[2]||(e[2]=function(e){return t.$emit("update:isShow",!1)})}," 取消 ",2)],2)],2)]})),_:1},512),[[s["l"],n.isShow]])],2)]})),_:1})}var J={name:"Dialog",props:{isShow:Boolean},emits:["ok","update:isShow"],methods:{returnOk:function(){this.$emit("update:isShow",!1),this.$emit("ok",!0)}}},P=n("34c8");n("6833");const F=J.__cssModules={};F["$style"]=P["default"],J.render=B;var N=J,U=new k.a({id:"x",use:"x-usage",viewBox:"0 0 16 16",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" id="x">\n  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />\n</symbol>'}),z=(h.a.add(U),new k.a({id:"check",use:"check-usage",viewBox:"0 0 16 16",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16" id="check">\n  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />\n</symbol>'})),A=(h.a.add(z),new k.a({id:"pen",use:"pen-usage",viewBox:"0 0 512 512",content:'<symbol aria-hidden="true" class="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="pen"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" /></symbol>'})),E=(h.a.add(A),{name:"List",components:{Tabs:D,Dialog:N},props:{tasks:Array},emits:["update:tasks"],data:function(){return{condition:"所有任務",dialog:!1,dialogShow:!1}},computed:{taskLists:function(){switch(this.condition){case"未完成":return this.tasks.filter((function(t){return!1===t.isCompleted}));case"已完成":return this.tasks.filter((function(t){return!0===t.isCompleted}));default:return this.tasks}}},methods:{toggleCheck:function(t){t.isCompleted=!t.isCompleted,window.localStorage.setItem("tasks",JSON.stringify(this.tasks))},focusInput:function(t,e){e.isEditing=!0,this.$nextTick((function(){t.currentTarget.parentNode.querySelector("input").focus()}))},editTask:function(t){var e=this.tasks.findIndex((function(e){return e.id===t}));this.tasks[e].isEditing=!1,this.tasks[e].id="".concat(this.tasks[e].content,"-").concat(e),window.localStorage.setItem("tasks",JSON.stringify(this.tasks))},deleteTask:function(t){var e=this.tasks.filter((function(e){return e.id!==t}));this.$emit("update:tasks",e),window.localStorage.setItem("tasks",JSON.stringify(e))},clearAllTasks:function(t){t&&(this.$emit("update:tasks",[]),window.localStorage.setItem("tasks",JSON.stringify([])))}}}),K=n("5da1");const Q=E.__cssModules={};Q["$style"]=K["default"],E.render=C;var V=E,W={name:"App",components:{Title:u,Input:_,List:V},data:function(){return{tasks:[]}},created:function(){var t=window.localStorage.getItem("tasks");t?this.tasks=JSON.parse(t):window.localStorage.setItem("tasks",JSON.stringify([]))}};n("af65");W.render=c;var X=W;Object(s["c"])(X).mount("#app")},"5da1":function(t,e,n){"use strict";var s=n("1c44"),c=n.n(s);n.d(e,"default",(function(){return c.a}))},6833:function(t,e,n){"use strict";n("6f39")},"6f39":function(t,e,n){},8010:function(t,e,n){t.exports={title:"Title_title_DQFOh"}},"8b11":function(t,e,n){},a4b2:function(t,e,n){"use strict";var s=n("8010"),c=n.n(s);n.d(e,"default",(function(){return c.a}))},af65:function(t,e,n){"use strict";n("8b11")},bd60:function(t,e,n){t.exports={tabs:"Tabs_tabs_1QR2X",tab:"Tabs_tab_15Faw",active:"Tabs_active_2-Ir0"}},d1b1:function(t,e,n){t.exports={"btn-group":"Dialog_btn-group_2IPX_","dialog-container":"Dialog_dialog-container_2aQRO","dialog-body":"Dialog_dialog-body_2XYXc",cancel:"Dialog_cancel_B-_Cc",yes:"Dialog_yes_2MavL"}},e02b:function(t,e,n){t.exports={input:"Input_input_1qTm5","btn-group":"Input_btn-group_2_EDK",add:"Input_add_3K65C","task-input":"Input_task-input_3UtKM","plus-icon":"Input_plus-icon_1lDju","add-task":"Input_add-task_2ioZ-",cancel:"Input_cancel_oq_6N"}},f379:function(t,e,n){"use strict";var s=n("bd60"),c=n.n(s);n.d(e,"default",(function(){return c.a}))}});
//# sourceMappingURL=app.f43707cb.js.map