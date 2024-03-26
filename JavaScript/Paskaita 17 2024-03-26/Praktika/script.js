// Uzduotis: Teksto elemento kurimas

function createTextElement(text){
    const textElement = document.createElement("p");
    textElement.textContent = text;
    return textElement;
}
document.body.appendChild(createTextElement("Uzduotis 1"));

// Uzduotis: Elemento atnaujinimas

const h1 = document.getElementById("name");
h1.textContent = "Gintaras";

// Uzduotis: Klaida DOM'e

const p = document.querySelector(".bluetext > span");
p.textContent = "blue";

// Uzduotis: Automobiliu gamintoju sarasas

const li1 = document.querySelector("ol > li:first-child");

const li2 = document.querySelector("ol > li:nth-child(2)");

const bmw = li1.textContent;

const vw = li2.textContent;

li1.textContent = vw;

li2.textContent = bmw;

// Uzduotis: Prekiu sarasas

function createList(arr){
    const ul = document.createElement("ul");

    arr.forEach((i) => {
        const item = document.createElement("li");
        item.textContent = i;
        ul.append(item);
    })
    return ul;
}
document.body.appendChild(createList(["Pienas", "Duona", "Kiaušiniai"]));

// Uzduotis: Tic-Tac-Toe laimetojo nustatymas
