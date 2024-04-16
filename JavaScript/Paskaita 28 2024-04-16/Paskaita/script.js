import defaultStuff, {
  divideNumbers as pervadintaFunkcija,
  PI,
} from "./utility/mathFunctions.js";

// import * as mathStuff from "./utility/mathFunctions.js";

console.log(defaultStuff());

console.log(pervadintaFunkcija(2, 4));
console.log(PI);

function sayName(name = "Vardas") {
  console.log(`My name is: ${name}`);
}
sayName("Augustina");
sayName();
sayName(null);
sayName(undefined);

function addTwoNumbers(a, b) {
  return a + b;
}

const someString = `dvieju skaiciu suma yra: ${addTwoNumbers(1, 2)} ${1 + 3}`;

console.log(someString);

const longString = `teosadksoadk
saodksaodskd
sadkasodksaodkasdosa
ksoadkasodkasda`;

console.log(longString);

// const longString2 = "saodksakodaskdasd
// sadsadasdas" - Su paprastom kabutem neveikia persokimai stringu i kitas eilutes

const someArray = [1, 3, 8];
const arrCopy = [...someArray];

const array2 = [8, 7, ...someArray];

console.log(array2);

function addAllNumbers(x, ...args) {
  console.log(args);
  console.log(x);
  return args.reduce((prev, current) => prev + current);
}
console.log(addAllNumbers(200, 9, 7));

const obj1 = {
  name: "Vardas",
  age: 23,
};

const obj2 = {
  address: "Adresas",
  name: "Vardas antrame",
  ...obj1,
};

console.log(obj2);

console.log(someArray, arrCopy);

const person = {
  name: "Antanas",
  lastName: "Pavardenis",
  age: 52,
};

// Senoviniai metodai
const name = "person.name";
const age = "person.age";

console.log(name, age);
// Senoviniai metodai

const { name: personsName, age: personsAge } = person;

console.log(name, age);
console.log(personsName, personsAge);

const arr3 = ["Labas", "ate", "asdsadas", 8];

const value1 = arr3[0];
const value2 = arr3[1];

console.log(value1, value2);

const [x1, x2] = arr3;

console.log(x1, x2);

function multiplyTwoNumbers(x, y) {
  return x * y;
}

const multiplyTwoNumbersArrow = (x, y) => x * y;

console.log(multiplyTwoNumbersArrow(2, 3));

const someObj = {
  fn1: () => console.log(this),
  fn2: function () {
    console.log(this);
  },
};

someObj.fn1();
someObj.fn2();
