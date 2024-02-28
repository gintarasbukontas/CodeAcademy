// // const userInput = prompt("Iveskite skaiciu");

// // if (userInput > 10){
// //     console.log('ivestas skaicius yra didesnis nei 10');
// // }

// // else if(userInput == 10){
// //     console.log("ivestas skaicius yra 10");
// // }

// // else {
// //     console.log("ivestas skaicius yra mazesnis nei 10");
// // }

// // const isRaining = true;

// // if (isRaining){
// //     console.log("Pasiimkite sketi");
// // }

// const temperature = +prompt("Iveskite temperatura");

// // switch (temperature){
// //     case 20:
// //         console.log("Lauke silta");
// //         break;
// //     case 30:
// //         console.log("Lauke karsta");
// //         break;
// //     default:
// //         console.log("Neturiu nuomones apie sita ora");
// //         break;
// // }

// // if(temperature >= 30){
// //     console.log("Lauke labai karsta. Temperatura = ", temperature);
// // }
// // else if (temperature >= 20){
// //     console.log("Lauke silta. Temperatura = ", temperature);
// // }
// // else if (temperature >= 10){
// //     console.log("Lauke vesu. Temperatura = ", temperature);
// // }
// // else {
// //     console.log("Lauke salta. Temperatura = ", temperature);
// // }

// // temperature > 20 ? console.log("Galima gyventi") : console.log("Nepatartina gyventi");

// // const message = temperature > 20 ? "Karsta" : "Vesu";

// // alert(message);

// const isRaining = true;

// if (temperature >= 20 && !isRaining){
//     console.log("siandien grazi diena, nes silta IR nelyja");
// }

// if (temperature >= 20 || isRaining && 10 > 5){
//     console.log("siandien grazi diena, nes nelyja ARBA silta")
// }

// const age = prompt("Iveskite amziu");

// if (age >= 18){
//     console.log("Sveiki atvyke");
// }

// else {
//     console.log("Per jaunas");
// }

// // Username and Password Checker:Implement a basic username and password checker. Ask the user for their username and password. If the username is "admin" and the password is "password123", display a message saying "Login successful". Otherwise, display a message saying "Incorrect username or password".

// const username = "admin";
// const password = "password123"

// const enteredUsername = prompt("Iveskite username");
// const enteredPassword = prompt("Iveskite password");

// if(enteredUsername === username && enteredPassword === password){
//     console.log("Login succesful");
// } else{
//     console.log("Incorrect username or password");
// }

// Even or Odd Number Checker:Write a program that asks the user for a number and determines whether it's even or odd. Display a message indicating whether the number is even or odd.

// const number = +prompt("iveskite skaiciu");

// if(number % 2 === 0){
//     console.log("Lyginis skaicius");
// }else {
//     console.log("Nelyginis skaicius");
// }

// Write a program that asks the user for a number and checks if it's divisible by both 3 and 5. Display a message indicating whether the number is divisible by both 3 and 5.

// const userInput = +prompt("Iveskite skaiciu");

// if (userInput % 3 === 0 && userInput % 5 === 0){
//     console.log("dalijasi is 3 ir is 5");
// }else {
//     console.log("nesidalija is 3 ir 5");
// }

// Fizz Buzz
// 3 - Fizz
// 5 - Buzz
// 3 and 5 - FizzBuzz

// const userInput = +prompt("Iveskite skaiciu");

// if(userInput % 15 === 0){
//     console.log("FizzBuzz");
// } else if (userInput % 5 === 0){
//     console.log("Buzz");
// } else if (userInput % 3 === 0){
//     console.log("Fizz");
// }

// Grading System:Create a program that asks the user for their test score. Based on the score, display a letter grade according to the following criteria:
// 90 or above: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

const userInput = prompt("Iveskite pazymi");

let grade;

if (userInput >= 90){
    grade = "A";
}  else if (userInput >= 80 && userInput <= 89) {
    grade = "B"
} else if (userInput >= 70 && userInput <= 79) {
    grade = "C"
} else if (userInput >= 60 && userInput <= 69) {
    grade = "D"
} else {
    grade = "F"
}

console.log(grade);

// if (0) {
//     console.log("true");
// } else {
//     console.log("false");
// }