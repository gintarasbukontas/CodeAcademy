console.log("Uzduotis Spausdink skaicius");

for(let i = 1; i <= 5; i++){
    console.log(i);
}

console.log("Uzduotis Susumuok skaicius");

let i2 = 0;
let sum2 = 0;
while(i2 < 5){
    i2++;
    sum2 = sum2 + i2;
}
console.log(sum2);

console.log("Uzduotis Lyginiai skaiciai");

for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

console.log("Uzduotis Atvirkstinis skaiciavimas");

for(let i = 10; i >= 1; i--){
    console.log(i);
}

console.log("Kiekis cikle");

let i5 = 0;
let q = 0;
while(i5 < 20){
    i5++;
    if(i5 % 3 === 0){
        q++;
    }
}
console.log(q);

console.log("Didziausias skaicius");

const array = [1, 2, 3, 4, 5, 69, 5, 3, 80];
let currentNumber = 0;
let highestNumber = 0;

for(let i = array.length-1; array[i] >= 0; i--){
    currentNumber = array[i];
    if(currentNumber >= highestNumber){
        highestNumber = currentNumber;
    }
}
console.log(highestNumber);

console.log("Dalikliai");

for(let i = 1; i <= 15; i++){
    if(15 % i == 0){
        console.log(i);
    }
}

console.log("Skaiciu filtravimas");

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = [];

for (i = 0; i < array2.length; i++){
    // reikejo deti !== 0 ir tada nebutu reikeje else
    if(array2[i] % 2 == 0){
    } else {
        oddNumbers.push(array2[i]);
    }
}
console.log(oddNumbers);

console.log("Pirminiai skaiciai"); // Pats nesugalvojau - su draugo pagalba parasytas kodas ir tada jau pats skaidziau ir aiskinausi kas kodel ir kaip veikia, tai kaip ir aisku, bet pats nebuciau sugalvojes

for (let i = 1; i <= 20; i++){
    // eina ciklas skaiciu nuo 1 iki 20

    let primary = true;
    // kintamasis primary su default reiksme true

    for (let j = 1; j <= i; j++){
        // eina antras ciklas nuo 1 iki pirmo ciklo skaiciaus (i)... pvz kai i = 5, tada j ciklas prasukamas visas ir tik tada i = 6, tai kai i = 5 -> j = 1; j = 2; j = 3; j = 4; j = 5 ir tik tada i = 6

        if((j > 1 && j < i) && i % j == 0){
            // tikriname ar j daugiau uz 1 ir maziau uz i (nes visi skaiciai dalinasi is saves ir vieneto), bei i dalinant is j su mod ar gaunasi be liekanos (nes jeigu dalinasi ne tik is 1 ar is saves bet ir dar is kazko be liekanos tai vadinasi ne pirminis)

            primary = false;
            // jeigu if salyga atitinka visus kriterijus primary palieka false, jeigu ne tada palieka true ir zemiau spausdina i reiksme

            break;
        }
    }
    if(primary){
        console.log(i);
    }
}

console.log("Fibonacio seka");

let firstNumber = 0;
let secondNumber = 1;
let thirdNumber = 0;

for (let i = 0; i < 10; i++){
    console.log(firstNumber);
    thirdNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
}