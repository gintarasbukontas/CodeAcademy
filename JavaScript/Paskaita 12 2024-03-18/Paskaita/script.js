const numbers = [1, 8, -9, 0, 15, 0];
// a - 12, b - 8 = 4
// a - 8, b - -92 = -84
// paima du skaicius ir juos palygina jei reikia sukeicia vietoms ir daug kartu vis lygina skaicius ir stumdo i reikiama vieta
console.log(numbers.sort((a, b) => {
    return a - b;
}));
// apkeitus i return b - a = sortintu mazejancia tvarka
console.log(numbers.sort((a, b) => b - a));

const words = ["labas", "adata", "zebras", "abc", "zebrr"];
console.log(words.sort((a, b) => a.localeCompare(b))); // surykiuoja abeceles tvarka
console.log(words.sort((a, b) => -a.localeCompare(b))); // surykiuoja atvirkstine tvarka
console.log(words.sort((a, b) => b.localeCompare(a))); // surykiuoja atvirkstine tvarka
// localeCompare - stringo metodas kuris palygina kiekvieno character UNICODE

const arrayOfArrays = [
    [1, 6],
    [2, 9],
    [-8, 7],
];
// sortinam array didejimo ar mazejimo tvarka pagal array 2 elementa
console.log(arrayOfArrays.sort((a, b) => a[1] - b[1]));
console.log(arrayOfArrays.sort((a, b) => b[1] - a[1]));

const numbers2 = [12, 8, -92, 0, 0, 8, 2];
let sum = 0;

for(let i = 0; i < numbers2.length; i++){
    sum += numbers2[i]
}
console.log(sum);

// 1. accumulated - 12, current 8
// 2. accumulated - 20, current -92
const sum1 = numbers2.reduce((accumulated, current) => {
    console.log(`accumulated - ${accumulated}, current - ${current}`);
    return accumulated + current;
}, 20)
console.log(sum1);

const wordsCombined = words.reduce((acc, cur) => {
    return acc + cur;
}, "labas, ")
console.log(wordsCombined);

