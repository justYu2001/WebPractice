function p(name:string,age:number)
{
    this.Name=name;
    this.Age=age;
}

p.prototype.show_name=function (){
    console.log(this.Name);
};

let p1 = new p('Yu',18);
p1.show_name();