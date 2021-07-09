const people = [
    {
      name: '卡斯伯',
      order: '鍋燒意麵',
      price: 80
    },
    {
      name: '小明',
      order: '牛肉麵',
      price: 120
    },
    {
      name: '漂亮阿姨',
      order: '滷味切盤',
      price: 40
    },
    {
      name: 'Ray',
      order: '大麻醬乾麵',
      price: 60
    },
];

let sum = 0;
let newOrders = [];

people.forEach((person, index) => {
    console.log(person.order);
    newOrders[index] = {
        ...person,
        salePrice: person.price * 0.8,
    };
    if(person.order === "牛肉麵"){
        newOrders[index].order = "牛肉湯麵";
    }
    sum += person.price;
});

people.forEach((person) => {
    if(person.price >= 80){
        console.log(`${person.name}有滷蛋`);
    }
});

console.log(newOrders);

console.log(sum);

let html = "";
let ul = document.querySelector("ul");

newOrders.forEach((person) => {
    html += `<li>${person.order}, ${person.salePrice}</li>`;
});

ul.innerHTML = html;

let arr = [1, 2, 3, 4, 5];

arr.forEach(function(ele, index){
    console.log(ele);
    if(ele > 3){
        throw Error("small");
    }
    arr[index]++;
});

console.log(arr);