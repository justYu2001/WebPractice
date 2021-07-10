var a = 0;
console.log(a);  // 0

var a = 1;
console.log(a); // 1

function f(){
    if(true){
        var a = 1;
    }
    console.log(a); // 1
    let key = 0;
    switch (key) {
        case 1:
            var c = 2;
            break;
        default:
            var c = 5;
            break;
    }
    console.log(c); // 5
    for(var i = 0; i < 3; i++){
        a = 1;
    }
    console.log(i); // 3
    while(a++ < 10){
        var d = 7;
    }
    console.log(d); // 7
}

f();