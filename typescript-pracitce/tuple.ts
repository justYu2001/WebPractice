type Tom = [string, number];

let tom: Tom = ['Tom', 20];


tom.push(1000);
console.log(tom);

type Point = [number, number];

function logInfo(...info: Tom) {
    console.log(`name: ${info[0]}`);
    console.log(`age: ${info[1]}`);
}

let tuple: [string, number, boolean];

tuple = ['yu', 20, true];

let [a, b, c] = tuple;