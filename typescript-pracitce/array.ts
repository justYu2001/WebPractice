// let numbers: number[] = [1, 2, 3, 4];

// let numbers: Array<number> = [1, 2, 3, 4, 5];

interface NumberArray {
    [index: number]: number;
}

let numbers: NumberArray = [1, 2, 3, 4, 5];

function sum(a: number, b: number, c: number): number {
    let args: IArguments = arguments;
    let sum: number = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sum(1, 2, 3));


