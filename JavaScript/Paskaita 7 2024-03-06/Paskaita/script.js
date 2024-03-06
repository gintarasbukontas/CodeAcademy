const person = "Petras";

function sayHello(name){
    console.log("Hello from a function, " + name);
}

sayHello("Gintaras");

sayHello(person);

function sum(number1, number2){
    if(typeof number1 === "number" && typeof number2 === "number"){
    const result = number1 + number2;
    console.log(result);
} else {
    console.log("Pateikti argumentai negeri");
}
}

sum(2, 5);
sum(6, 10);
sum(5);

const myFunction = function () {
    console.log("Hello from anonymous function");
}

myFunction();

function doStuff(arg1){
    arg1();
}

function sayBye() {
    console.log("Goodbye");
}

doStuff(sayBye);

function divide(num1, num2){
    return num1 / num2;
    console.log("Kazkas kas vyksta uz return"); // neconsolina nes po return nieko nebevykdo
}

const divideResult = divide(6, 2) + divide(1, 1);
console.log(divideResult);

function returnLargerNumber(num1, num2){
    if(num1 > num2){
        return num1;
    }
    if(num2 > num1){
        return num2;
    }
    if(num1 === num2){
        return "Skaiciai yra lygus"
    }
}

console.log(returnLargerNumber(1, 8));
console.log(returnLargerNumber(8, 8));

function isEven(number){
    // number - 5
    // number % 2 - grazina likuti
    // if(1) - true
    if(number % 2){
        return false;
    } else {
        return true;
    }
}
console.log(isEven(5));
console.log(isEven(2));

//Write a function named truncateString that takes a string and a number as parameters. If the length of the string exceeds the specified number, truncate the string and append "..." to the end. Otherwise, return the original string.

function truncateString(string, maxLength){
    if(string.length > maxLength){
        let result = string.slice(0, maxLength);
        // result = "Labas"
        result += "...";
        // result = "Labas ..."
        return result;
        // return string.slice(0, maxLength) + "..."; - Galima sitaip optimizuoti vietoj viso kodo ife
    } else {
        return string;
    }
}
console.log(truncateString("Labas labas", 5));
console.log(truncateString("Labas labas", 50));

// Create a function called findLongestWord that takes a string parameter consisting of words separated by spaces and returns the length of the longest word.

function findLongestWord(string){
    const words = string.split(" ");
    let longestWord = words[0];
    for(let i = 1; i < words.length; i++){
        if(longestWord.length < words[i].length){
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord("testas testuotojas testatasdfsaokdsaok yo"));