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

let index = people.findIndex((person) => person.order === "滷味切盤");
console.log(people[index]);