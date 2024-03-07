console.log("----- Vardo funkcija -----");

// const alertName = (name) => alert(name);
const alertName = (name) => console.log(name); // pakeista i console log, nes alert annoying
alertName("Gintaras");

console.log("----- Random -----");

const randomNumber = () => Math.floor((Math.random() * 5) + 1);
console.log(randomNumber());

console.log("----- Raidziu skaicius -----");

const nameLetters = (firstName, lastName) => firstName.length + lastName.length;
console.log(nameLetters("Gintaras", "Bukontas"));

console.log("----- Abecele -----");

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const whichLetter = (number) => alphabet[number];
console.log(whichLetter(0));

console.log("----- Matematika -----");

const math = (number1, number2, operator) => {
    switch (operator) {
        case "sum":
            return number1 + number2;
            break;
        
        case "sub":
            return number1 - number2;
            break;

        case "div":
            return number1 / number2;
            break;

        case "multi":
            return number1 * number2;
            break;
    }
}
console.log(math(1, 2, "sum"));

console.log("----- Kvadratas -----");

const randomNumber2 = () => Math.floor((Math.random() * 10) + 1);

const squareNumber = (number) => number * number;

console.log(randomNumber2());
console.log(squareNumber(3));