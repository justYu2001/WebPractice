const words = ["AA", "aaa", "A", "e"];
words.sort();
console.log(words);  // A, AA, aaa, e

const numbers = [10000, 2, 3, 80, 1];
numbers.sort();
console.log(numbers);  // 1, 10000, 2, 3, 80


numbers.sort((a, b) => b - a);
console.log(numbers);  // 1, 2, 3, 80, 10000