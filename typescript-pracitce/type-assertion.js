function getLength(value) {
    if (value.length) {
        return value.length;
    }
    else {
        return value.toString().length;
    }
}
console.log(getLength(123));
console.log(getLength('1234'));
