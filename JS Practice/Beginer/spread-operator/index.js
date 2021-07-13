let arr1 = [1, 2, 3], arr2 = [4, 5];
let num = [...arr1]; //[1, 2, 3]
console.log(num);
num = [...arr1, ...arr2];
console.log(num); //[1, 2, 3, 4, 5]

let o = { x: 1 };
let p = { x: 0, ...o};
console.log(p.x); // 1
let q = {...o, x: 2};
console.log(q.x); // 2

let str = "hello";
let letters = [...str];
console.log(letters); //['h', 'e', 'l', 'l', 'o']

function sum(x, y) {
    return x + y;
}

console.log(sum(...arr2)); //9

console.log(Math.min(...num)); //1