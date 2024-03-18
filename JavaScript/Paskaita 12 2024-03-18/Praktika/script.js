console.log("---------- Uzduotis: Vardai ----------");

const names = ["Jonas", "Juozas", "Antanas", "Petras"];

console.log(names.sort());

console.log("---------- Uzduotis: Z-A ----------");

console.log(names.sort((a, b) => -a.localeCompare(b)));

console.log("---------- Uzduotis: Mazejimo tvarka ----------");

const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];

console.log(numbers.sort((a, b) => b - a));

console.log("---------- Uzduotis: Didziausias ----------");

const numbers2 = [10, 5, 20, 4];

console.log(numbers2.sort((a, b) => b - a)[0]);

console.log("---------- Uzduotis is Mariaus 1 ----------");

// naudojant reduce:
// Count the number of even numbers in an array.

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 10];

const evenNumbers = numbers3.reduce((acc, cur) => {
    if(cur %2 === 0){
        return acc +1;
    } else {
        return acc
    };
}, 0)
console.log(evenNumbers);

console.log("---------- Uzduotis is Mariaus 2 ----------");

// naudojant reduce:
// Find the maximum value in an array of numbers.

const maximumValue = numbers3.reduce((acc, cur) => {
    if(cur > acc){
        return cur;
    } else {
        return acc;
    }
})
console.log(maximumValue);

console.log("---------- Uzduotis is Mariaus 3 ----------");

// naudojant reduce:
// Calculate the average of all numbers in an array.

const averageOfSum = numbers3.reduce((acc, cur) => acc + cur, 0) / 2;
console.log(averageOfSum);