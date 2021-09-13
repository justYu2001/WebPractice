let isDone: boolean = Boolean(0);

console.log(isDone);

let decLiteral: number = 4;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

let myName: string = 'yu';

function greet(name: string): void{
    console.log(`Hi! My name is ${name}`);
}

greet(myName);

let unusable: void = null;

let n: null = null;
let u: undefined = undefined;

let num: number = null;

// 會報錯
// let v: void;
// let number: number = v;