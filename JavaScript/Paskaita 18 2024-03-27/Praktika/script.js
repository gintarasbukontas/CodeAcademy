// Uzduotis: Jusu vardas

// sukurtas mygtukas html 10 eiluteje

// Uzduotis: Papildymas

const coolButton = document.querySelector("#coolButton");
coolButton.addEventListener("click", () => alert("Gintaras"));

// Uzduotis: Apie mane

const aboutMeButton = document.querySelector("#aboutMeButton");
aboutMeButton.addEventListener("click", () => {
    document.querySelector("#aboutMeText").textContent = "Sup"
})

// Uzduotis: +1

const h1 = document.querySelector("h1");
const plusButton = document.querySelector("#add");

plusButton.addEventListener("click", () => {
    h1.textContent = +h1.textContent + 1;
})

// Uzduotis: Kopijuoti negalima

document.querySelector("#secret").addEventListener("copy", () => alert("Don't copy its super secret"))

// Uzduotis: Random

const h1Random = document.querySelector("#randomNumber");
const rng = document.querySelector("#rng");

let rngValue = 0;

rng.addEventListener("click", () => {
    rngValue = Math.floor(Math.random() * 100) + 1;

    h1Random.textContent = rngValue;
})

// Uzduotis: N-18

document.querySelector("#adult").addEventListener("click", () => {
    document.querySelector("#adultH1").textContent = "Alus";
})

document.querySelector("#nonAdult").addEventListener("click", () => {
    document.querySelector("#adultH1").textContent = "";
    alert("Nepilnametis - nieko neturim");
})

// Uzduotis: Yay or Nay

let generated = 0;

function rngOnLoad() {
    generated = Math.floor(Math.random() * 3) + 1;
    console.log(generated);
    return generated;
}

rngOnLoad();

document.querySelector("#button1").addEventListener("click", () => {
    if(generated === 1){
        alert("Yay");
    } else {
        alert("Nay");
    }
})

document.querySelector("#button2").addEventListener("click", () => {
    if(generated === 2){
        alert("Yay");
    } else {
        alert("Nay");
    }
})

document.querySelector("#button3").addEventListener("click", () => {
    if(generated === 3){
        alert("Yay");
    } else {
        alert("Nay");
    }
})

// Uzduotis: Blogas vartotojas

document.querySelector("#dontPress").addEventListener("click", () => {
    document.querySelector("h3").textContent = "Neklausote manes";
})

// Uzduotis: Labai blogas vartotojas

document.querySelector(".h1").addEventListener("mousemove", () => {
    document.querySelector(".h1").textContent = "Kiek galima neklausyti?!"
})