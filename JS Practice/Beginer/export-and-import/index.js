import objs from "./default_module.js";
// import {a, b, c} from "./named_module.js";
// import {two, obj, objNewName} from "./named_module.js";
// import {fn as newFn} from "./named_module.js";
import num,  * as mod from "./named_module.js";

// console.log(objs.obj.name); // obj
// console.log(a); // 1;
// console.log(b); // 2;
// console.log(c); // 3;

// console.log(two); // 2
// console.log(obj); // { name: 'obj' }
// console.log(objNewName); // { name: 'obj3' }

// newFn();

console.log(mod.default);