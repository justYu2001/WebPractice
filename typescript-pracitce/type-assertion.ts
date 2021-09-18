function getLength(value: number | string): number {
    if((<string>value).length) {
        return (<string>value).length;
    } else {
        return value.toString().length;
    }
}

console.log(getLength(123));
console.log(getLength('1234'));

