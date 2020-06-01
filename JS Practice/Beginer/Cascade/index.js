(function () {
    function calNum(num) {
        this.num = num;
        this.addNum = function (newNum) {
            this.num += newNum;
            return this;
        };
        this.sub = function (newNum) {
            this.num -= newNum;
            return this;
        };
    }
    var a = new calNum(100);
    a.addNum(200).sub(100);
    console.log(a.num);
})();
