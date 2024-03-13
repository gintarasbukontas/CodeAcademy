console.log("---------- Uzduotis: Didziosios raides ----------");

function convertToUpperCase(string){
    const upperCase = string.toUpperCase();
    return upperCase;
}
console.log(convertToUpperCase("labas"));

console.log("---------- Uzduotis: Teksto iskarpa ----------");

function extractSubstring(string){
    const splitString = string.slice(2, 7);
    return splitString;
}
console.log(extractSubstring("Sveikas pasauli"));

console.log("---------- Uzduotis: Is didziosios raides ----------");

function capitalizeFirstLetter(string){
    let capitalizedString = "";
    const array = string.split(" ");
    for(let i = 0; i < array.length; i++){
        const word = array[i];
        const firstLetter = word.slice(0, 1);
        const remaining = word.slice(1, word.length);
        const capitalize = firstLetter.toUpperCase();
        const capitalized = capitalize + remaining;
        capitalizedString += capitalized + " ";
}
return capitalizedString;
}
console.log(capitalizeFirstLetter("labas rytas, pasauli!"));

console.log("---------- Uzduotis: Nepadoriu zodziu cenzura ----------");

function censorCurseWords(string, badword){
    const text = string;
    const censored = text.replaceAll(badword, "*****");
    return censored;
}
console.log(censorCurseWords("testas shit ar cia shit", "shit"));

console.log("---------- Uzduotis: Milk price ----------");

const milkPrice = 3;

if(Number.isInteger(milkPrice)){
    console.log("Smulkiu centu nereikes");
} else {
    console.log("Smulkiu centu reikes");
}

console.log("---------- Uzduotis: Skaiciai po kablelio ----------");

const decimal = milkPrice.toFixed(2);
if(Number.isInteger(milkPrice)){
    console.log("Smulkiu centu nereikes", decimal);
} else {
    console.log("Smulkiu centu reikes", decimal);
}

console.log("---------- Uzduotis: Maksimalus skaicius ----------");

function findMax (number1, number2, number3){
    return Math.max(number1, number2, number3);
}
console.log(findMax(1, 5, 7));

console.log("---------- Uzduotis: Legal age ----------");

let isLegalAge = false;
console.log(isLegalAge);
console.log(isLegalAge.toString());