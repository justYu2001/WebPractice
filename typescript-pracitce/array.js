// let numbers: number[] = [1, 2, 3, 4];
var numbers = [1, 2, 3, 4, 5];
function sum(a, b, c) {
    var args = arguments;
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sum(1, 2, 3));
