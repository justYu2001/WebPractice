// "use strict";

console.log(globalThis);

function f(){
    console.log(this);
}

f();

// let fn = function() {
//     console.log(this);
// };

// fn();

let person = {
    name: "Yu",
    log(){
        console.log(this);
        function setName(){
            console.log(this);
        }
        setName();
    },
}

person.log();

// var foo = 'foo';
// var obj = {
//   foo: 'foo in Object'
// };

// var sayFoo = function() {
//   console.log( this.foo );
// };

// obj.sayFoo = sayFoo;

// obj.sayFoo();   // foo in Object
// sayFoo();    // foo

// function func() {
//     console.log( this.a );
// }
  
// var obj = {
//     a: 2,
//     foo: func,
// };

// obj.foo();  // 2

// let func2 = obj.foo;
// func2();    // undefined

function foo(a) {
    this.a = a;
    document.querySelector("h1").addEventListener("click", () => {
        console.log("in foo:", this); //{ a: 123 }
    })
}
  
let obj = new foo( 123 );

let person2 = {
    name: "Jack",
    log: () => {
        console.log(this.name);
    },
}

person2.log() //""(window 的 name)

let fn = function(){
    console.log(this);  // Object(data)
    setTimeout(function(){
      console.log(this) // Window
    },100);
  }
  

let fn_arr = function(){
    console.log(this);  // Object(data)
    setTimeout(() => {
        console.log(this) // Object(data)
    },100);
}

let id = 21;
let data = {
    id: 21,
}

fn.call(data);     
fn_arr.call(data); 

document.querySelector("h1").addEventListener("click", () => {
    console.log("global:", this); //window
});