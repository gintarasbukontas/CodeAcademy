// Uzduotis Masyvo papildymas

const array1 = [2, 3, 4];
array1.unshift(1);
console.log(array1);

// Uzduotis Unikalus elementai kiekis (teko ziuret - nieko nesugalvojau)

const array2 = [1, 2, 2, 3, 3, 3, 4];

const uniqueElements = [];

// pradzia i = 0; Tada tikrina ar i maziau nei 7 (array length) - jeigu taip vykdo cikla; i++ prideda prie i 1;
for (let i = 0; i < array2.length; i++){
    //sauktukas pakeicia visa salyga i priesinga reiksme. Siuo atveju jeigu uniqueElements masyve nera array2[i] reiksmes, tai tada prideda ta array2[i] i uniqueElements masyva. Jeigu yra nedaro nieko.
    if(!uniqueElements.includes(array2[i])){
        uniqueElements.push(array2[i])
    }
}

console.log(uniqueElements.length);

// Uzduotis Tik teigiami

const array3 = [-3, 1, -2, 4, -5, 6];
const positiveArray = [];

// i = 0; tikrinam ar i yra maziau uz 6 (array elementu kiekis); pridedam prie i 1;
for(let i = 0; i < array3.length; i++){
    //tikrinam ar array3[i] yra daugiau uz 0, tai trumpai tariant einam per visus masyvo elementus ir tikrinam ar jie yra didesni uz 0 (teigiami) ir jeigu taip tada ta elementa prideda i positiveArray masyvo gala
    if(array3[i] > 0){
        positiveArray.push(array3[i])
    }
}
console.log(positiveArray);

// Uzduotis Ar elementas pasikartoja? (nesugalvojau)

const array4 = [1, 2, 3, 4, 3, 5];
const element = 3;

// indexOf patikrina ar kintamasis element jau yra masyve ir jeigu yra tai kelintas, !== patikrina ar pirmiau tikrintas nera ir paskutinis? (nesikartoja)
const elementQuantity = array4.indexOf(element) !== array4.lastIndexOf(element);

console.log(elementQuantity);

// Uzduotis Skaiciu transformacija

const array5 = [1, 2, 3, 4, 5];
const remadeArray = [];

for(let i = 0; i < array5.length; i++){
    if(array5[i] % 2 == 0){
        let extra = array5[i] / 2;
        remadeArray.push(extra);
    } else{
        let extra = array5[i] * 3;
        remadeArray.push(extra);
    }
}
console.log(remadeArray);

const array6 = [2, 7, 4, 11, 12];
const remadeArray2 = [];

for(let i = 0; i < array6.length; i++){
    if(array6[i] % 2 == 0){
        let extra = array6[i] / 2;
        remadeArray2.push(extra);
    } else{
        let extra = array6[i] * 3;
        remadeArray2.push(extra);
    }
}
console.log(remadeArray2);