console.log("---------- Uzduotis: Elementu pridejimas ----------");

const array = [1, 2, 3];

function addElement(element){
    array.push(element);
    return array;
}

console.log(addElement(4));

console.log("---------- Uzduotis: Sujunkite du masyvus i viena ----------");

function mergeArrays(array1, array2){
    return array1.concat(array2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

console.log("---------- Uzduotis: Keliu elementu pridejimas ----------");

function addMultipleElements(array, ...elements){
    return [...array, ...elements];
}
console.log(addMultipleElements([1, 2, 3], 4, 5, 6));

console.log("---------- Uzduotis: Masyvo elementu modifikavimas ----------");

function doubleNumbers(array) {
    const doubled = array.map(num => num * 2)
    return doubled;
}
console.log(doubleNumbers([1, 2, 3]));

console.log("---------- Uzduotis: Unikalus elementai ----------");

function findUnique(array) {
    const unique = [];
    array.forEach(i => {
        if(unique.includes(i)){
        } else {
            unique.push(i)
        }
    })
    return unique;
}
console.log(findUnique([1, 2, 2, 3, 4, 4, 5]));

console.log("---------- Uzduotis: Keliones marsruto planavimas ----------");

function planTrip(array){
    let sum = 0;
    array.forEach(i => {
        sum += i
    })
    if(sum <= 200){
        return true;
    } else {
        return false;
    }
}
console.log(planTrip([30, 70, 90]));
console.log(planTrip([100, 85, 60]));

console.log("---------- Uzduotis: Dazniausiai pasikartojantis ----------");
// Chat GPT kodas
function findMostFrequent(arr) {
    let mostFrequentElement;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) { // paima elementa tarkim pirma trejeta
        let currentElement = arr[i]; // sukuria kintamaji ir nurodo kad dabartinis parinktas elementas yra trejetas
        let currentCount = 1; // sukuria dar viena kintamaji ir nurodo jog rado jau viena trejeta 

        // Count occurrences of the current element in the array
        for (let j = i + 1; j < arr.length; j++) { // daro antra cikla ir tikrina visus kitus elementus
            if (arr[j] === currentElement) { // jeigu naujai paimtas elementas yra toks pat kaip kaip currentElement tada padidina rasta to pacio elemento kieki
                currentCount++;
            }
        }

        // Update most frequent element and its count if necessary
        if (currentCount > maxCount) {  // jeigu dabartinis elementas pasikartoja daugiau kartu nei maxCount tada maxCount palieka toks kiek kartu buvo pasikartojes tas elementas
            mostFrequentElement = currentElement;
            maxCount = currentCount;
        }
    }

    return mostFrequentElement;
}
console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3]));

console.log("---------- Uzduotis: Rasti trukstama skaiciu ----------");
// Chat GPT kodas
function findMissingNumber(array){
    for(let i = 0; i < array.length; i++){ // paima pirma array elementa tai tarkim vieneta
        if(array[i] !== i + 1){ // tikrina jeigu pirmas array elementas (vienetas) nera lygus 0 + 1
            return i + 1; // grazina 0 + 1 - grazina vieneta kaip trukstama skaiciu
        }
    }
    return array.length + 1; // jeigu neranda trukstamu skaiciu grazina paskutinis elementas + 1, nes traktuoja ji kaip trukstama skaiciu
}
console.log(findMissingNumber([1, 2, 4, 5, 6]));
console.log(findMissingNumber([1, 2, 3, 4, 5, 6]));

console.log("---------- Uzduotis: Sachmatu lentos generatorius ----------");

function generateChessBoard(number){
    let firstRow = [];
    let secondRow = [];
    let board = [];
    for(let i = 1; i <= number; i++){
        if(i % 2 == 0){
        firstRow.push("W");
        secondRow.push("B");
        board.push(firstRow)
    } else {
        firstRow.push("B");
        secondRow.push("W");
        board.push(secondRow)
    }
    }
    return board;
}
console.log(generateChessBoard(3));