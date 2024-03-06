// // Uzduotis Vardo funkcija

// function alertName(name){
//     alert(name);
// }

// alertName("Gintaras");

// Uzduotis Random

// function randomNumber() {
//     // sugeneruoja random skaiciu su kableliu tarp 0 ir 1, tai pvz.: 0.15434
//     const randomDecimal = Math.random();

//     // padauginant randomDecimal is 5 gaunam kazkoki skaiciu nuo 0 iki 5. Math.floor suapvalina iki mazesnio pilno skaiciaus ir tada pridedam 1, kad generuotu nebe nuo 0 iki 5, o nuo 1 iki 5 ir tik sveikus skaicius (del math.floor).
//     const randomNumber = Math.floor(randomDecimal * 5) + 1;

//     return randomNumber;
// }
// randomNumber();
// console.log(randomNumber());

// Uzduotis Raidziu skaicius

// function amountOfLetters(firstName, lastName){
//     return firstName.length + lastName.length;
// }
// console.log(amountOfLetters("Gintaras", "Bukontas"));
// console.log(amountOfLetters("A", "B"));

// Uzduotis Abecele

// function countAlphabet(number){
//     const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     return alphabet[number];
// }
// console.log(countAlphabet(0));

// Uzduotis Matematika

// function math(num1, num2, operator){
//     if(operator==="sum"){
//         return num1 + num2;
//     } else if (operator==="sub"){
//         return num1 - num2;
//     } else if (operator==="div"){
//         return num1 / num2;
//     } else if (operator==="multi"){
//         return num1 * num2;
//     }
// }
// console.log(math(1, 2, "multi"));

// Uzduotis Kvadratas

// // su viena funkcija
// let generatedNumber = 0;
// function randomOneToTen(){
//     const randomDecimal = Math.random();
//     const randomNumber = Math.floor(randomDecimal * 10) + 1;
//     generatedNumber = randomNumber * randomNumber;
//     return randomNumber;
// }
// console.log(randomOneToTen(), "...", generatedNumber);