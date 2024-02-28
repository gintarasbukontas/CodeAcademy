// Uzduotis 1

let a = 10;
let b = 5;

let c = a + b;

console.log(c);

// Uzduotis 2

let year = 2024-1994;

console.log(year);

let year2 = 2024;

year2 -= 29;

console.log(year2);

// Uzduotis 3

const firstName = "Gintaras";
const lastName = "Bukontas";
const fullName = firstName + " " + lastName;
console.log(fullName);

// Uzduotis 4

let celsius = 30;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);

// Uzduotis 5

let balance = 999.99;

console.log(balance.toFixed(2));

balance = balance + (balance * 9 / 100);

console.log(balance.toFixed(2));

balance = balance * 2;

console.log(balance.toFixed(2));

balance -= 50;

console.log(balance.toFixed(2));

// Palyginimai

// Uzduotis 1

const text1 = "Labas";
const text2 = "Sudie";
console.log(text1===text2);

// Uzduotis 2

const number = 10;
const text = "10";
console.log(number>text);
console.log(number==text);
console.log(number===text);

// Uzduotis 3 - teko paziureti ats

let currentBalance = 50;
let transaction = -50;
let remainingBalance = currentBalance + transaction >= 0;
console.log(remainingBalance);

// Uzduotis 4 - nukopinta is ats

const a1 = 15;
const b1 = 7;
const divisibleWithRemainder = a1 / b1 === 0;
console.log("?", divisibleWithRemainder);

// test

const a2 = 5;
const b2 = 1.13;
const c2 = a2 % b2;
console.log("c2 = ", c2.toFixed(0));