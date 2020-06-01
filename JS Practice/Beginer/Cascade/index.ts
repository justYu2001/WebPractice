(function () {
  function calNum(num: number) {
    this.num = num;

    this.addNum = function (newNum: number) {
      this.num += newNum;
      return this;
    };

    this.sub = function (newNum: number) {
      this.num -= newNum;
      return this;
    };
  }

  let a = new calNum(100);
  a.addNum(200).sub(100);
  console.log(a.num);
})();
