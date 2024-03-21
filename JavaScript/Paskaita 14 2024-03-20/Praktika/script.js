console.log("---------- Uzduotis: Asmuo ----------");

function createPerson(name, lastName, age){
    return {
        name: name,
        lastName: lastName,
        age: age
    }
}
console.log(createPerson("Jonas", "Jonaitis", 30));

console.log("---------- Uzduotis: Masinos informacija ----------");

function printCarInfo(obj){
    return `Brand: ${obj.brand}, Model: ${obj.model}, Year: ${obj.year}`
}
console.log(printCarInfo({ brand: "Toyota", model: "Corolla", year: 2020 }));

console.log("---------- Uzduotis: Darbuotoju ataskaita ----------");

// function printEmployeeInfo(obj){
//     const keys = Object.keys(obj);
//     keys.forEach((x) => console.log(`Name: ${x}, Position: ${obj[x]}`))
// }
// printEmployeeInfo({ "Jonas": "Engineer", "Petras": "Manager" })

const employee = { "Jonas": "Engineer", "Petras": "Manager" };

function printEmployeeInfo(obj){
    const entries = Object.entries(obj);
    entries.forEach((e) => {
        console.log(`Name: ${e[0]}, Position: ${e[1]}`);
    })
}

printEmployeeInfo(employee);

console.log("---------- Uzduotis: Knygu paieska ----------");

// function surastiKnygasPagalPavadinima(arr, searchWord){
//     const foundBooks = arr.filter((x) => x.title.includes(searchWord));
//     return foundBooks;
// }
// console.log(surastiKnygasPagalPavadinima([{ title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" }, { title: "Hobitas", author: "J.R.R. Tolkien" }], "Poteris"));

const books = [
    { title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" }, 
    { title: "Hobitas", author: "J.R.R. Tolkien" }
]

function findBook(booksArray, search){
    return booksArray.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
}
console.log(findBook(books, "Poteris"));

console.log("---------- Uzduotis: Studentu grupiu balai ----------");

// function countAverages(obj){
//     const averagesA = Object.values(obj)[0].reduce((acc, cur) => acc + cur) / 3;
//     const averagesB = Object.values(obj)[1].reduce((acc, cur) => acc + cur) / 3;
//     console.log(averagesA, averagesB);
//     return {
//         "Group A": averagesA,
//         "Group B": averagesB
//     }
// }
// console.log(countAverages({ "Group A": [80, 90, 100], "Group B": [70, 80, 90] }));

const groups = { "Group A": [80, 90, 100], "Group B": [70, 80, 90] };

function countAverages(group){
    const groupsCopy = {...group};
    const keys = Object.keys(groupsCopy);
    
    keys.forEach((key) => {
        groupsCopy[key] = groupsCopy[key].reduce((acc, cur) => acc + cur) / groupsCopy[key].length;
    })
    return groupsCopy;
}

console.log(countAverages(groups));

console.log("---------- Uzduotis: Inventoriaus valdymas ----------");

// function updateInventory(obj, arr){
//     arr.forEach((x) => {
//         if(x.item === "apples"){
//             if(x.action === "add"){
//                 obj.apples = obj.apples + x.change;
//             } else if (x.action === "remove") {
//                 obj.apples = obj.apples - x.change;
//             }
//         }
//         if(x.item === "bananas"){
//             if(x.action === "add"){
//                 obj.bananas = obj.bananas + x.change;
//             } else if (x.action === "remove") {
//                 obj.bananas = obj.bananas - x.change;
//             }
//         }
//     })
//     return obj;
//     };

// console.log(updateInventory({ "apples": 5, "bananas": 8 }, [{ item: "apples", change: 3, action: "add" }, { item: "bananas", change: 2, action: "remove" }]));

const inventory = { "apples": 5, "bananas": 8 };
const changes = [
    { item: "apples", change: 3, action: "add" }, 
    { item: "bananas", change: 2, action: "remove" }
];

function updateInventory(inventory, changes){
    const inventoryCopy = {...inventory};

    changes.forEach((ch) => {
        if(ch.action === "add"){
            inventoryCopy[ch.item] += ch.change;
        }
        if(ch.action === "remove"){
            inventoryCopy[ch.item] -= ch.change;
        }
    })
    return inventoryCopy;
}

const updated = updateInventory(inventory, changes);

console.log(updated);