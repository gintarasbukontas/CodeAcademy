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

function printEmployeeInfo(obj){
    const keys = Object.keys(obj);
    keys.forEach((x) => console.log(`Name: ${x}, Position: ${obj[x]}`))
}
printEmployeeInfo({ "Jonas": "Engineer", "Petras": "Manager" })

console.log("---------- Uzduotis: Knygu paieska ----------");

function surastiKnygasPagalPavadinima(arr, searchWord){
    const foundBooks = arr.filter((x) => x.title.includes(searchWord));
    return foundBooks;
}
console.log(surastiKnygasPagalPavadinima([{ title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" }, { title: "Hobitas", author: "J.R.R. Tolkien" }], "Poteris"));

console.log("---------- Uzduotis: Studentu grupiu balai ----------");

function countAverages(obj){
    const averagesA = Object.values(obj)[0].reduce((acc, cur) => acc + cur) / 3;
    const averagesB = Object.values(obj)[1].reduce((acc, cur) => acc + cur) / 3;
    console.log(averagesA, averagesB);
    return {
        "Group A": averagesA,
        "Group B": averagesB
    }
}
console.log(countAverages({ "Group A": [80, 90, 100], "Group B": [70, 80, 90] }));

console.log("---------- Uzduotis: Inventoriaus valdymas ----------");

function updateInventory(obj, arr){
    arr.forEach((x) => {
        if(x.item === "apples"){
            if(x.action === "add"){
                obj.apples = obj.apples + x.change;
            } else if (x.action === "remove") {
                obj.apples = obj.apples - x.change;
            }
        }
        if(x.item === "bananas"){
            if(x.action === "add"){
                obj.bananas = obj.bananas + x.change;
            } else if (x.action === "remove") {
                obj.bananas = obj.bananas - x.change;
            }
        }
    })
    return obj;
    };

console.log(updateInventory({ "apples": 5, "bananas": 8 }, [{ item: "apples", change: 3, action: "add" }, { item: "bananas", change: 2, action: "remove" }]));