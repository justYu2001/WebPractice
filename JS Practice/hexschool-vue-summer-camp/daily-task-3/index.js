const array = [100, 1500, 2000, 99, 499, 555, 1200]
const newArray = []

array.forEach((item) => {
    if(item > 500){
        newArray.push(item);
    }
});

console.log(newArray);