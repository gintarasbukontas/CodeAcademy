const fruits = ["Apple", "Orange", "Pear", "Banana"];

const amountOfFruit = fruits.length;

fruits[1] = "Kiwi";

// Splice koreguoja originala
fruits.splice(2, 2, "Lime", "Lemon", "Pineapple");

console.log(fruits);

console.log(amountOfFruit);

console.log(fruits[amountOfFruit - 1]);

const cars = ["Audi", "BMW", "Volvo", "Citroen"];

// Slice padaro elementu kopija (nekeicia originalo)
const smallerArray = cars.slice(1, 3);

// Concat prideda  papildomu dalyku i masyva (retai naudojamas). Concat nekeicia originalo.
const additionalCars = smallerArray.concat("Dodge", 6, true, cars.slice(0));

console.log(smallerArray);
console.log(additionalCars);
console.log(cars);

const array1 = [1, 2, 5, 9, 69, 444, 6];

// Push prie originalo galo prideda reiksme
array1.push(88);

// Unshift prideda reiksme pradzioje originalo
array1.unshift("Reiksme pradzioje");

console.log(array1);

const array2 = [1, 5, 7, 6, 8, 99, 60];

// Pop isima paskutine reiksme is originalo
const lastNumberOfArray = array2.pop();

// Is originalo paima pirma elementa
const firstNumberOfArray = array2.shift();
console.log(firstNumberOfArray);

console.log(lastNumberOfArray);
console.log(array2);

console.log("_______________________________");
console.log("_______________________________");
console.log("_______________________________");

const myArray = [1, 2, 3, 4, 5, 6]


// ne kopijuoja, o issaugo adresa (pointer)
const myArray2 = myArray;

myArray2[0] = "Kazkas kito"

// ... parodo kaip atskiras reiksmes o nebe array (spread operator)
console.log(...myArray);

// sitoje vietoje su ... nukopijuojame kita array
const myArrayCopy = [...myArray];

// senesnis budas kopijuoti array - pavercia array i stringa paprasta pirma ir paskui konvertuoja atgal
const myArrayCopy2 = JSON.parse(JSON.stringify(myArray));
console.log(myArrayCopy2);

myArrayCopy[2] = "Vel kazkoks pakeitimas";
console.log(myArrayCopy);
console.log(myArray);

// iskonsolinti kiekviena reiksme atskirai is array

const testArray1 = [true, "String", 55, [1, 5]];

for(let index = 0; index < testArray1.length; index++){
    console.log(testArray1[index]);
}

// suraskime visu array elementu suma

const testArray2 = [1, 5, -5, 22];

let sum = 0;

for(let index = 0; index < testArray2.length; index++){
sum += testArray2[index];
}

console.log(sum);

// Isfiltruoja neigiamas reiksmes (nekeiciant originalo)

const testArray3 = [5, -5, 7, 0];
const positiveArray = [];
for(let index = 0; index < testArray3.length; index++){
    // testArray3[index] - paima atskira reiksme kiekviena karta vykdant for cikla is testArray3
    // if(testArray3[index] >= 0) - patikrina ar 5 >= 0, tada ar -5 >= 0 ir t.t.
    if(testArray3[index] >= 0){
        // positiveArray.push prie rezultato array galo prideda ife patikrinta reiksme jeigu ji atitinka salyga
        positiveArray.push(testArray3[index])
    }
    }

console.log(positiveArray);

// array parasyti is kitos puses

const testArray4 = [1, 2, 3];

const reversed = [];

for (let i = testArray4.length - 1; i >= 0; i--){
    console.log(i);
    reversed.push(testArray4[i])
}
console.log(reversed);

const reversed2 = testArray4.reverse();

console.log(reversed2);