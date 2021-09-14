let number: string | number | boolean;
number = 'seven';
number = 7;
number = false;

console.log(number);


function getString(something: number | string): string {
    return something.toString();
}