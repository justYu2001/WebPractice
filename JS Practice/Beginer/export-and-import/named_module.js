export var a = 1;
export let b = 2;
export const c = 3;

const two = 2;
const obj = { name: 'obj' };
const obj2 = { name: 'obj2' };

export { two, obj, obj2 };

const obj3 = { name: 'obj3' };
export { obj3 as objNewName };

export function fn() {
  console.log("function");
}

export default 1;