(function(e){function t(t){for(var n,u,i=t[0],a=t[1],c=t[2],p=0,d=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(s,u)&&s[u]&&d.push(s[u][0]),s[u]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var a=r[i];0!==s[a]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},s={app:0},o=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=a;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1334:function(e,t,r){"use strict";var n=r("2f6c"),s=r.n(n);r.d(t,"default",(function(){return s.a}))},2634:function(e,t,r){e.exports={history:"History_history_2PtWS",title:"History_title_3l-ft",list:"History_list_3rPFw"}},"2e8a":function(e,t,r){e.exports={container:"Caculator_container_Q1jP9",caculator:"Caculator_caculator_1ddOk",result:"Caculator_result_3xCQe",expression:"Caculator_expression_32WOO",number:"Caculator_number_15Ln8","button-group":"Caculator_button-group_2yr3s"}},"2f6c":function(e,t,r){e.exports={"clear-button":"ClearButton_clear-button_3d0vZ"}},4261:function(e,t,r){"use strict";var n=r("fe6f"),s=r.n(n);r.d(t,"default",(function(){return s.a}))},"4f36":function(e,t,r){"use strict";r("f607")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cfa"),r("cca6"),r("a79d");var n=r("7a23");function s(e,t,r,s,o,u){var i=Object(n["h"])("Caculator"),a=Object(n["h"])("History");return Object(n["f"])(),Object(n["d"])(n["a"],null,[Object(n["e"])(i),Object(n["e"])(a)],64)}r("ac1f"),r("1276");function o(e,t,r,s,o,u){var i=Object(n["h"])("ClearButton"),a=Object(n["h"])("DeleteButton"),c=Object(n["h"])("NumberButton"),l=Object(n["h"])("EqualButton"),p=Object(n["h"])("OperatorButton");return Object(n["f"])(),Object(n["d"])("div",{class:e.$style.container},[Object(n["e"])("div",{class:e.$style.caculator},[Object(n["e"])("div",{class:e.$style.result},[Object(n["e"])("p",{class:e.$style.expression},Object(n["i"])(u.expression),3),Object(n["e"])("p",{class:e.$style.number},Object(n["i"])(o.result),3)],2),Object(n["e"])("div",{class:e.$style["button-group"]},[Object(n["e"])(i,{expression:o.expressionArray,"onUpdate:expression":t[1]||(t[1]=function(e){return o.expressionArray=e}),result:o.result,"onUpdate:result":t[2]||(t[2]=function(e){return o.result=e})},null,8,["expression","result"]),Object(n["e"])(a,{expression:o.expressionArray,"onUpdate:expression":t[3]||(t[3]=function(e){return o.expressionArray=e}),result:o.result,"onUpdate:result":t[4]||(t[4]=function(e){return o.result=e})},null,8,["expression","result"]),(Object(n["f"])(),Object(n["d"])(n["a"],null,Object(n["g"])(9,(function(e){return Object(n["e"])(c,{number:e,expression:o.expressionArray,"onUpdate:expression":t[5]||(t[5]=function(e){return o.expressionArray=e}),result:o.result,"onUpdate:result":t[6]||(t[6]=function(e){return o.result=e})},null,8,["number","expression","result"])})),64)),Object(n["e"])(c,{number:0,expression:o.expressionArray,"onUpdate:expression":t[7]||(t[7]=function(e){return o.expressionArray=e}),result:o.result,"onUpdate:result":t[8]||(t[8]=function(e){return o.result=e})},null,8,["expression","result"]),Object(n["e"])(c,{number:".",expression:o.expressionArray,"onUpdate:expression":t[9]||(t[9]=function(e){return o.expressionArray=e})},null,8,["expression"]),Object(n["e"])(l,{expression:o.expressionArray,"onUpdate:expression":t[10]||(t[10]=function(e){return o.expressionArray=e}),result:o.result,"onUpdate:result":t[11]||(t[11]=function(e){return o.result=e}),displayExpression:u.expression},null,8,["expression","result","displayExpression"]),(Object(n["f"])(!0),Object(n["d"])(n["a"],null,Object(n["g"])(o.operators,(function(e){return Object(n["f"])(),Object(n["d"])(p,{operator:e,key:e,expression:o.expressionArray,"onUpdate:expression":t[12]||(t[12]=function(e){return o.expressionArray=e}),result:o.result,"onUpdate:result":t[13]||(t[13]=function(e){return o.result=e})},null,8,["operator","expression","result"])})),128))],2)],2)],2)}r("a15b");function u(e,t,r,s,o,u){return Object(n["f"])(),Object(n["d"])("button",{style:u.order,class:e.$style["number-button"],onClick:t[1]||(t[1]=function(){return u.addNumber&&u.addNumber.apply(u,arguments)})},Object(n["i"])(r.number),7)}var i=r("2909"),a=r("b85c"),c=(r("a9e3"),r("fb6a"),r("caad"),r("2532"),r("99af"),{name:"NumberButton",props:{number:[Number,String],expression:Array,result:String},emits:["update:expression","update:result"],computed:{order:function(){return 0===this.number||"."===this.number?"order: 3":this.number<4?"order: 2":this.number<7?"order: 1;":void 0}},methods:{isNumber:function(e){return!isNaN(e)},canAddPoint:function(){var e,t,r=this.expression.slice(-1)[0],n=Object(a["a"])(this.expression);try{for(n.s();!(t=n.n()).done;){var s=t.value;s===r||this.isNumber(s)||(e=s)}}catch(o){n.e(o)}finally{n.f()}return this.isNumber(r)&&"."!==e},addNumber:function(){"."===this.number&&!1===this.canAddPoint()||(this.expression.includes("=")&&"."!==this.number?(this.$emit("update:expression",[this.number]),this.$emit("update:result","")):this.$emit("update:expression",[].concat(Object(i["a"])(this.expression),[this.number])))}}}),l=r("4261");const p=c.__cssModules={};p["$style"]=l["default"],c.render=u;var d=c;function f(e,t,r,s,o,u){return Object(n["f"])(),Object(n["d"])("button",{style:u.order,class:e.$style["operator-button"],onClick:t[1]||(t[1]=function(){return u.addOpreator&&u.addOpreator.apply(u,arguments)})},Object(n["i"])(u.displayOperator),7)}var h={name:"OpreatorButton",props:{operator:String,expression:Array,result:String},emits:["update:expression","update:result"],computed:{displayOperator:function(){switch(this.operator){case"*":return"×";case"/":return"÷";default:return this.operator}},order:function(){switch(this.operator){case"+":return"order: 3;";case"−":return"order: 2;";case"*":return"order: 1;";default:return"order: 0;"}}},methods:{isOpreater:function(e){var t=["+","−","*","/"];return t.includes(e)},addOpreator:function(){var e,t=this.expression.slice(-1)[0];0!==this.expression.length&&"."!==t&&(this.expression.includes("=")?(this.$emit("update:result",""),e=[this.result,this.operator]):e=this.isOpreater(t)?[].concat(Object(i["a"])(this.expression.slice(0,-1)),[this.operator]):[].concat(Object(i["a"])(this.expression),[this.operator]),this.$emit("update:expression",e))}}},b=r("5974");const y=h.__cssModules={};y["$style"]=b["default"],h.render=f;var x=h;function O(e,t,r,s,o,u){return Object(n["f"])(),Object(n["d"])("button",{class:e.$style["equal-button"],onClick:t[1]||(t[1]=function(){return u.displayResult&&u.displayResult.apply(u,arguments)})},"=",2)}var m=r("901e"),j=r.n(m),v={name:"EqualButton",props:{expression:Array,result:[String,Number],displayExpression:String},emits:["update:expression","update:result"],inject:["history"],methods:{getPriority:function(e){return"*"===e||"/"===e?2:"+"===e||"−"===e?1:0},top:function(e){return e.slice(-1)[0]},caculate:function(e,t,r){switch(r){case"+":return e.plus(t);case"−":return e.minus(t);case"*":return e.times(t);default:return e.div(t)}},rpn:function(){for(var e=[],t=[],r=this.expression.length,n=0;n<r;n++){var s="",o=this.expression[n];while(n<r&&0===this.getPriority(o))s+=o,o=this.expression[++n];t.push(new j.a(s));var u=this.getPriority(o),a=this.getPriority(this.top(e));while(e.length>0&&u<=a){var c=e.pop();t.push(c),a=this.getPriority(this.top(e))}o&&e.push(o)}return e.reverse(),t=[].concat(Object(i["a"])(t),e),t},rpnEval:function(){var e=this.rpn(),t=[];t.push(e.shift()),t.push(e.shift());while(e.length>0){var r=e.shift();if(this.getPriority(r)>0){var n=t.pop(),s=t.pop(),o=this.caculate(s,n,r);t.push(o)}else t.push(r)}return t[0]},displayResult:function(){this.$emit("update:expression",[].concat(Object(i["a"])(this.expression),["="]));var e=this.rpnEval();e.isFinite()?e.isNaN()?this.$emit("update:result","錯誤"):this.$emit("update:result",e.toFormat()):this.$emit("update:result","∞"),10===this.history.value.length&&this.history.value.shift(),this.history.value.push("".concat(this.displayExpression," = ").concat(e.toFormat())),window.localStorage.setItem("history",this.history.value)}}},_=r("ad24");const g=v.__cssModules={};g["$style"]=_["default"],v.render=O;var $=v;function w(e,t,r,s,o,u){return Object(n["f"])(),Object(n["d"])("button",{class:e.$style["clear-button"],onClick:t[1]||(t[1]=function(){return u.clear&&u.clear.apply(u,arguments)})}," C ",2)}var A={name:"ClearButton",props:{expression:Array},emits:["update:expression","update:result"],methods:{clear:function(){this.$emit("update:expression",[]),this.$emit("update:result","")}}},C=r("1334");const B=A.__cssModules={};B["$style"]=C["default"],A.render=w;var P=A;function N(e,t,r,s,o,u){return Object(n["f"])(),Object(n["d"])("button",{class:e.$style["delete-button"],onClick:t[1]||(t[1]=function(){return u.deleteLastCharacter&&u.deleteLastCharacter.apply(u,arguments)})}," ⌫ ",2)}var S={name:"DeleteButton",props:{expression:Array},emits:["update:expression","update:result"],methods:{deleteLastCharacter:function(){this.expression.includes("=")||(this.expression.length>0?this.$emit("update:expression",this.expression.slice(0,-1)):"="===this.expression.slice(-1)[0]&&(this.$emit("update:expression",[]),this.$emit("update:result","")))}}},U=r("f6dc");const k=S.__cssModules={};k["$style"]=U["default"],S.render=N;var E=S,M={name:"Cauculator",data:function(){return{result:"",operators:["/","*","−","+"],expressionArray:[],num1:0,num2:0}},components:{NumberButton:d,OperatorButton:x,EqualButton:$,ClearButton:P,DeleteButton:E},computed:{expression:function(){for(var e=[],t=this.expressionArray.length,r=0;r<t;r++){var n=this.expressionArray[r],s="";while(r<t&&(!isNaN(n)||"."===n))s+=n,n=this.expressionArray[++r];switch(e.push(s),n){case"*":n="×";break;case"/":n="÷";break}e.push(n)}return e.join(" ")}}},q=r("d5d4");const H=M.__cssModules={};H["$style"]=q["default"],M.render=o;var L=M;function D(e,t,r,s,o,u){return Object(n["f"])(),Object(n["d"])("div",{class:e.$style.history},[Object(n["e"])("h2",{class:e.$style.title},"歷史紀錄",2),Object(n["e"])("ul",null,[(Object(n["f"])(!0),Object(n["d"])(n["a"],null,Object(n["g"])(u.history.value,(function(t,r){return Object(n["f"])(),Object(n["d"])("li",{class:e.$style.list,key:"".concat(t,"-").concat(r)},Object(n["i"])(t),3)})),128))])],2)}var F={name:"History",inject:["history"]},I=r("ba05");const R=F.__cssModules={};R["$style"]=I["default"],F.render=D;var J=F,Q={name:"App",components:{Caculator:L,History:J},data:function(){return{history:[]}},provide:function(){var e=this;return{history:Object(n["b"])((function(){return e.history}))}},mounted:function(){var e=window.localStorage.getItem("history");e?this.history=e.split(","):window.localStorage.setItem("history",[])}};r("4f36");Q.render=s;var T=Q;Object(n["c"])(T).mount("#app")},5748:function(e,t,r){e.exports={"equal-button":"EqualButton_equal-button_3h2GL"}},"57e1":function(e,t,r){e.exports={"operator-button":"OperatorButton_operator-button_3P_f7"}},5974:function(e,t,r){"use strict";var n=r("57e1"),s=r.n(n);r.d(t,"default",(function(){return s.a}))},ad24:function(e,t,r){"use strict";var n=r("5748"),s=r.n(n);r.d(t,"default",(function(){return s.a}))},ba05:function(e,t,r){"use strict";var n=r("2634"),s=r.n(n);r.d(t,"default",(function(){return s.a}))},d5d4:function(e,t,r){"use strict";var n=r("2e8a"),s=r.n(n);r.d(t,"default",(function(){return s.a}))},e6cf:function(e,t,r){e.exports={"delete-button":"DeleteButton_delete-button_3dKUE"}},f607:function(e,t,r){},f6dc:function(e,t,r){"use strict";var n=r("e6cf"),s=r.n(n);r.d(t,"default",(function(){return s.a}))},fe6f:function(e,t,r){e.exports={"number-button":"NumberButton_number-button_27eO1"}}});
//# sourceMappingURL=app.d8f664dc.js.map