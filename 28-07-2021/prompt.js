const ip = require('prompt-sync');
const prompt = ip();
let num1 = Number(prompt("enter no 1 "));
let num2 = Number(prompt("enter no 2 "));
let sum = (num1 + num2);
console.log(`the sum is ${sum}`);