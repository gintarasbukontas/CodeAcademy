

const h1 = document.getElementById("tekstas");

console.log(h1);

const elementsWithTestClass = document.getElementsByClassName("testas")

console.log(elementsWithTestClass);

const firstPar = document.querySelector(".testas");
const par = document.querySelector("p");
const allPar = document.querySelectorAll("p")

console.log(par);
console.log(firstPar);
console.log(allPar);
console.log(allPar[0]);

const allParArr = [...allPar]; // konvertuojam i normalu Array
console.log(allParArr);
console.log(Array.isArray(allParArr)); // patikrina ar tikrai Array

const div = document.querySelector("div");
console.log(div);

const prevSibl = div.previousElementSibling;
console.log(prevSibl);

const nextSibl = div.nextElementSibling;
console.log(nextSibl);

const firstChild = div.firstElementChild;
console.log(firstChild);

console.log(div.parentNode);

const h3 = document.querySelector(".text")
console.log(h3.style.color);

h3.style.color = "green";

console.log(h3.classList);

h3.classList.add("bigText");
h3.classList.remove("text");
console.log(h3.classList.contains("text"));

const a = document.createElement("a"); // sukuria a (linka) elementa
a.classList.add("bigText");
a.textContent = "sitas elementas sukurtas js'e";
a.id = "manoSukurtasId"
console.log(a);

// div.appendChild(a) // imeta a elementa i diva kaip paskutini elementa

div.prepend(a); // imeta a elementa i diva kaip pirma

// kur nors i viduri nelabai galim imest

const p = document.createElement("p");
p.textContent = "paragrafas sukurtas js'e";

div.append(p) // appendChild leidzia prideti tik HTML elementus // append leidzia prideti bet ka

// div.append("pepega", "p", "div") append tuo paciu leidzia prideti daugiau nei viena elementa

// div.removeChild(p) // pasalina elementa - retai naudojamas - reikia nurodyti pati elementa

// kitu atveju reikia nurodyt per querySelector 

// div.removeChild(document.querySelector("#manoSukurtasId"));

p.remove() // susinaikina p elementas

// document.querySelector("#tekstas").remove() susinaikina pagal selektoriu

const products = ["pienas", "alus", "bulka"];

const productsListElement = document.querySelector("ul");

products.forEach((pr) => {
    const li = document.createElement("li");
    li.textContent = pr;
    productsListElement.append(li);
}) 