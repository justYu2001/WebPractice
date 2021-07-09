let arr = [1, 2, 3];

for(const i of arr){
    console.log(i);
}

// for(let i = 0; i < 3; i++){
//     console.log(arr[i]);
//     return;
// }

Object.prototype.objCustom = function(){};

let obj = {
    a: 1,
    b: 2,
    c: 3,
};

for(let i in obj){
    console.log(i);
}
