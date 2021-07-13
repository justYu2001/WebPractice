function sum(...num) {
    return num.reduce((acc, cur) => acc + cur);
}

console.log(sum(1)); // 1
console.log(sum(1, 2, 3)); // 6

function log(x, y, ...z) {
    console.log("x:", x);
    console.log("y:", y);
    console.log("z:", z);
}

log("a", "b", "c", "d", "e");
// x: a
// y: b
// z: ['c', 'd', 'e']

log("x", "y", "z")
// x: x
// y: y
// z: ['z']

log("1", "2");
// x: 1
// y: 2
// z: []

// let [a, b, ...c] = [1, 2, 3, 4, 5];
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // [3, 4, 5]

// let [x, y, ...z] = [1, 2];
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // []

let {a, b, ...c} = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};

console.log(a); // 1
console.log(b); // 2
console.log(c); // {c:3, d:4, e: 5}

let {x, y, ...z} = {x: 1, y: 2};
console.log(x); // 1
console.log(y); // 2
console.log(z); // {}