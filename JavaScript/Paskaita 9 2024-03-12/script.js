console.log("---------- Uzduotis: m/s i km/s ----------");

function convertMStoKMH (number) {
    number = number * 3600 / 1000;
    return number;
}
console.log(convertMStoKMH(10));

console.log("---------- Uzduotis: Paprastas skaiciu palyginimas ----------");

function compareNumber(number1, number2) {
    let highestNumber = 0;
    if(typeof number1 === "number" && typeof number2 === "number"){
    if(number1 > number2){
        highestNumber = number1;
    } else if(number1 < number2){
        highestNumber = number2;
    } else if(number1 === number2){
        highestNumber = "equal";
    }
}else{
    highestNumber = "Error: arguments must be numbers"
}
    return highestNumber;
}
console.log(compareNumber("2", 3));

console.log("---------- Uzduotis: Keliamieji metai ----------");

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2021));

console.log("---------- Uzduotis: Didziausias masyvo elementas ----------");

function findMaxInArray(array){
    let highestInArray = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i]>highestInArray){
            highestInArray = array[i];
        }   
    }
    return highestInArray;
}
console.log(findMaxInArray([-1, -3, -2, -5, -4]));

console.log("---------- Uzduotis: Masyvo elementu suma ----------");

function sumArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));

console.log("---------- Uzduotis: Lygus masyvai? ----------");

function arMasyvaiLygus(array1, array2){
    if(array1.length !== array2.length) return false;
    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            return false;
    }
}
return true;
}
console.log(arMasyvaiLygus([1, 2, 3], [1, 2, 3]));

console.log("---------- Uzduotis: Eilutes apvertimas ----------");

function reverseString(string){
    let reversedString = "";
    for(let i = string.length - 1; i >= 0; i--){
        reversedString += string[i];
    }
    return reversedString;
}
console.log(reverseString("Labas"));

console.log("---------- Uzduotis: Palindromas ----------");

function arPalindromas(string){
    if(typeof string !== "string"){
    return "Error: argument must be a string"
    };
    let word1 = string;
    let word2 = "";

    for(let j = string.length - 1; j >= 0; j--){
        word2 += string[j];
    }
    if(word1 === word2){
        return true;
    } else return false;
}
console.log(arPalindromas("savas sas savas"));

console.log("---------- Uzduotis: Skaiciu piramide ----------");