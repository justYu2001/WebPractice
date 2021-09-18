// function add(x: number, y: number): number {
//     return x + y;
// }

const add: (x: number, y: number) => number = function (x: number, y: number) :number {
    return x + y;
}

// console.log(add(3, 2));

interface SearchFunction {
    (source: string, subString: string): boolean;
}

const search: SearchFunction = (source: string, subString: string): boolean => {
    return source.search(subString) !== -1;
}

function buildName(lastName: string = 'chen', firstName: string): string {
    return firstName + ' ' + lastName;
}

console.log(buildName('chen', 'yu'));
console.log(buildName(undefined, 'jack'));

function sum(...numbers: number[]): number {
    return numbers.reduce((previousNumber, currentNumber) => {
        return previousNumber + currentNumber;
    });
}

console.log(sum(1, 2, 3));

function reverse(value: number): number;
function reverse(value: string): string;
function reverse(value: number | string): number | string {
    if(typeof value === 'number') {
        return Number(value.toString().split('').reverse().join(''));
    } else {
        return value.split('').reverse().join('');
    }
}

console.log(reverse(123));
console.log(reverse('abcd'));
