var tom = ['Tom', 20];
tom.push(1000);
console.log(tom);
function logInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log("name: " + info[0]);
    console.log("age: " + info[1]);
}
var tuple;
tuple = ['yu', 20, true];
var a = tuple[0], b = tuple[1], c = tuple[2];
