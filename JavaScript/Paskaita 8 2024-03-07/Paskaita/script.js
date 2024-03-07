// anonimine self invoke funkcija
(function() {
    console.log("Cia yra anonimine funkcija");
})();

let result = (function (num) {
    return num * num;
})(10)
console.log(result);

// Daznai naudojama (standartine funkcija)
function add(n1, n2){
    return n1 + n2;
}

// Retai naudojama (anonimine funkcija)
const addFunction = function (n1, n2){
    return n1 + n2;
}

// Daznai naudojama (arrow (anonimine) funkcija)
const addFunctionArrow = (n1, n2) => {
    return n1 + n2;
}

const res = addFunctionArrow(2, 6);
console.log(res);

// Galim nerasyt return jeigu vienos eilutes kodas nes automatiskai returnina, tuo paciu ir nereikia {}
const addFunctionArrowShorter = (n1, n2) => n1 + n2;

console.log(addFunctionArrowShorter(10, 10));

// jeigu tik vienas parametras galim neapskliausti, bet nerekomenduojama naudoti
const powerNumber = n1 => n1 * n1;
console.log(powerNumber(5));

// function calculateSquare(num) {
//     return num * num;
// }

const calculateSquareArrow = (n1) => n1 * n1;
console.log(calculateSquareArrow(6));

// Implement a function named removeFalsyValues that takes an array and removes all falsy values (e.g., false, null, 0, "", undefined, and NaN) from it.

const testArray = [5, "asfd", [2], NaN, false, true, 0, null, undefined];
const resArray = [];

const removeFalsyValues = (arr) => {
    for(i = 0; i < arr.length; i++){
        if(arr[i]){
            resArray.push(arr[i]);
        }
    }
    return resArray;
}
console.log(removeFalsyValues(testArray));

const array1 = [1, 2, 3];
const array2 = array1; // nenukopijuoja

const changeFirstArrValue = (someArray) => {
    someArray[0] = 0;
}

changeFirstArrValue(array1);
console.log(array1);

// Implement a function named countVowels that takes a string parameter and returns the number of vowels (a, e, i, o, u) in the string.

const countVowels = (string) => {
const vowels = ["a", "e", "i", "o", "u"];
let count = 0;

for(let i = 0; i < string.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if(string[i] === vowels[j]){
            count++;
        }
    }
} return count;
}
const amountOfVowels = countVowels("labas a i o");
console.log(amountOfVowels);