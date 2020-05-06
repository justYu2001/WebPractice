function p(name, age) {
    this.Name = name;
    this.Age = age;
}
p.prototype.show_name = function () {
    console.log(this.Name);
};
var p1 = new p('Yu', 18);
p1.show_name();
