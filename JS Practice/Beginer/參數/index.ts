(function () {
  function plus(a = 0, b = 0) {
    for (let index = 0; index < arguments.length; index++) {
      console.log(arguments[index]);
    }
    console.log('');
    return a + b;
  }

  console.log(plus(1, 2, 3, 4, 5));
  console.log('');
  console.log(plus(10));
})();
