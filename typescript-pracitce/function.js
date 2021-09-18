// function add(x: number, y: number): number {
//     return x + y;
// }
var add = function (x, y) {
    return x + y;
};
var search = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(lastName, firstName) {
    if (lastName === void 0) { lastName = 'chen'; }
    return firstName + ' ' + lastName;
}
console.log(buildName('chen', 'yu'));
console.log(buildName(undefined, 'jack'));
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (previousNumber, currentNumber) {
        return previousNumber + currentNumber;
    });
}
console.log(sum(1, 2, 3));
function reverse(value) {
    if (typeof value === 'number') {
        return Number(value.toString().split('').reverse().join(''));
    }
    else {
        return value.split('').reverse().join('');
    }
}
console.log(reverse(123));
console.log(reverse('abcd'));
