let [x, y] = [1, 2];
[x, y] = [x + 1, y + 1];
console.log(x);
console.log(y);
[x, y] = [y, x];
console.log(x);
console.log(y);

function swap(a, b){
    return [b, a];
}

[x, y] = swap(x, y);
console.log(x); // 2
console.log(y); // 3

[x, y] = [1];
console.log(x); // 1
console.log(y); // undefined
[x, y] = [1, 2, 3];
console.log(x); // 1
console.log(y); // 2
[,x, , y] = [1, 2, 3, 4];
console.log(x); // 2
console.log(y); // 4

let [n1, [n2, n3]] = [1, [2, 2.5], 3];
console.log(n1); // 1
console.log(n2); // 2
console.log(n3); // 2.5

let str = "abcde";
let [a, b, c, d, e] = str;
console.log(a); // a
console.log(b); // b
console.log(c); // c
console.log(d); // d
console.log(e); // e
[a, , b, c,] = str;
console.log(a); // a
console.log(b); // c
console.log(c); // d
let [first, ...rest] = str;
console.log(first); // a
console.log(rest); // [b, c, d, e]

let obj = {
    value: 1,
    name: "Yu",
};

let {value, name} = obj;
console.log(value); // 1
console.log(name); // Yu

let {value: val, name: myName} = obj;
console.log(val); // 1
console.log(myName); // Yu

const {sin, cos, tan} = Math;
// 等於 const sin = Math.sin, cos = Math.cos, tan = Math.tan;

const {cos: cosine, tan: tangent} = Math;
// 等於 const cosine = Math.cos, tangent = Math. tan;

let {v} = obj;
console.log(v); // undefined

obj.value = 2;
name = "";
({value} = obj);

console.log(value); // 2
console.log(name); //

const { v1 ='hello' } = 'hello'
const [ v2 ='hello' ] = 'hello'

console.log(v1); // hello
console.log(v2); // h

obj = {
    value: 1,
    name: "Yu",
};

({value = 2, v = 3, name} = obj);
console.log(value); // 1
console.log(v); // 3
console.log(name); // Yu

[x, y = 3] = [6];

console.log(x); // 6
console.log(y); // 3

let points = [{x: 1, y: 2}, {x: 3, y: 4}];
let [{x: x1, y: y1}, {x: x2, y: y2}] = points;
console.log(x1); // 1
console.log(y1); // 2
console.log(x2); // 3
console.log(y2); // 4

function vectorAdd([x1, y1], [x2, y2]){
    return [x1 + x2, y1 + y2];
}

let vectorP = [1, 2];
let vectorQ = [3, 4];
[x, y] = vectorAdd(vectorP, vectorQ);
console.log(x); // 4
console.log(y); // 6

function vectorMultiply({x, y}, scalar){
    return {x: scalar * x, y: scalar * y};
}

let vectorA = {x: 1, y: 2};
({x, y} = vectorMultiply(vectorA, 2));
console.log(x); // 2
console.log(y); // 4


function add({a = 3, b}){
    return a + b;
}

console.log(add({b: 1})); // 4
console.log(add({a: 2, b: 1})); // 3

function mul({a, b} = {a: 3, b: 6}){
    return a * b;
}

console.log(mul()); // 18
console.log(mul({a: 2})); // NaN
console.log(mul({a: 4, b: 5})); // 20