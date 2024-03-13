const someString = "Labas";
const arr = ["asd", "asdf"]

arr[0] = "saodksa"
console.log(arr);
console.log(someString[1]);

console.log(someString.charAt(1));
console.log(someString.at(-1));

const part1 = "Labas,";

const fullString = part1.concat(" Gintarai", ", ka tu?");
console.log(fullString);

const fullString2 = part1.concat(...arr);
console.log(fullString2);

let someString2 = "Kazkas";
someString2 += " Sup";
const darVienasStringas = someString2 + " Dar kazkas"
console.log(darVienasStringas);
console.log(someString2);

function getString(){
    return "string from a function"
}

const someString3 = `slsaflsadms ${someString2} ${2 + 3} ${getString()} ${arr}`;
console.log(someString3);

const someNumber = 23.84654;
console.log(someNumber.toFixed(3));

const someNumber2 = 5435.654564;
console.log(someNumber2.toPrecision(1));

const someNumber3 = 32.25;
console.log(someNumber3.toString());

const isTrue = true;
console.log(isTrue.toString());
console.log(isTrue.valueOf());

const someString4 = "    sadsad    ";
console.log(someString4);
console.log(someString4.trim());
console.log(someString4.trimStart());
console.log(someString4.trimEnd());

const someString5 = "gintaras@bababa.lt gintaras";
console.log(someString5.replace("gintaras", "xen"));

const someString6 = "gintaras@bababa.lt gintaras";
console.log(someString6.replaceAll("gintaras", "xen"));

console.log(Math.round(20.58)); // tiesiog apvalina
console.log(Math.floor(20.58)); // numeta liekana = 20
console.log(Math.abs(-25)); // absoliutus skaicius -25 = 25 ; 25 = 25
console.log(Math.ceil(20.18)); // apvalina i virsu visad
console.log(Math.max(1, 5, 3, 8)); // suranda didziausia skaiciu1