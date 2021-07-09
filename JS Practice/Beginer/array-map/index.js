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

let newOrders = people.map(function(person){
    console.log(person.order);
    return {
        ...person,
        salePrice: person.price * 0.8,
    };
});

console.log(newOrders);

newOrders = people.map((person) => ({
    ...person,
    salePrice: person.price * 0.8,
}));

console.log(newOrders);

const arr = people.map((person) => {});

console.log(arr);