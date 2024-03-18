console.log("---------- Uzduotis: Vardas ----------");

function alertName(name){
    alert(name);
}

function consoleName(name){
    console.log(name);
}

function coreFunction(name, callback){
    const firstLetter = name[0].toUpperCase();
    const remainingLetters = name.slice(1, name.length)
    const fullName = firstLetter + remainingLetters;
    callback(fullName);
}
coreFunction("gintaras", consoleName);

console.log("---------- Uzduotis: Automobiliai ----------");

const cars = ["BMW", "VW", "Audi"];

cars.forEach((i) => console.log(i));

console.log("---------- Uzduotis: Automobiliai (papildymas) ----------");

cars.forEach((i, j) => console.log(j + ": " + i));

console.log("---------- Uzduotis: Friends ----------");

const names = ["peTras", "jOnAS", "AlGis", "GiNtArAs"];

const newNames = names.map((i) => {
    const fullName = i[0].toUpperCase() + i.slice(1, i.length).toLowerCase();
    return fullName;
})
console.log(newNames);

console.log("---------- Uzduotis: Pilnameciai ----------");

const ages = [1, 3, 5, 19, 6, 80, 7, 18, 20];

const legalAges = ages.filter((x) => x >= 18);
console.log(legalAges);

console.log("---------- Uzduotis: Prasideda is K ----------");

const cities = ["Vilnius", "Kaunas", "Klaipeda", "Mazeikiai", "siauliai"];

const foundCities = cities.find((x) => x[0] === "K");
console.log(foundCities);

console.log("---------- Uzduotis: Miestai is mazosios ----------");

const foundCities2 = cities.some((x) => x[0] === x[0].toLowerCase());
console.log(foundCities2);

console.log("---------- Uzduotis: Visi is didziosios ----------");

const foundCities3 = cities.every((x) => x[0] === x[0].toUpperCase());
console.log(foundCities3);