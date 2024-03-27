const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", (event) => {
    console.log(event.target);
    console.log("Mygtukas paspaustas");
})

button.addEventListener("mouseover", () => {
    console.log("Hovered");
})

button.addEventListener("mouseleave", () => {
    console.log("Left");
})

const h1 = document.querySelector("h1");

input.addEventListener("input", (event) => {
    console.log(event.target.value);
    h1.textContent = event.target.value;
})

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submit happened");
})

function showTooltip(event, text) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = text;
    tooltip.style.top = event.pageY + 10 + "px";
    tooltip.style.left = event.pageX + 10 + "px";
    document.body.appendChild(tooltip);
}
  function hideTooltip() {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
}

const a2 = document.querySelector("#aHover");

a2.addEventListener("mouseover", (e) => {
    const tooltip = document.createElement("div");
    tooltip.textContent = "Cia yra tooltipas";
    tooltip.style.position = "absolute";
    tooltip.style.top = `${e.pageY}px`;
    tooltip.style.left = `${e.pagX}px`;
    document.body.append(tooltip);
    tooltip.classList.add("tooltip");
})

a2.addEventListener("mouseleave", (e) => {
    const tooltip = document.querySelector(".tooltip");
    tooltip.remove();
})

const counterP = document.querySelector("#counter");
const incrementButton = document.querySelector("#incrementButton");
const decrementButton = document.querySelector("#decrementButton");

decrementButton.addEventListener("click", () => {
    counterP.textContent = +counterP.textContent - 1;
})

incrementButton.addEventListener("click", () => {
    counterP.textContent = +counterP.textContent + 1;
})

const imageSources = [
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg",
    "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
];

const previousImageButton = document.querySelector("#previous")

const nextImageButton = document.querySelector("#next")

const image = document.querySelector("img")

let currentImageIndex = 0;

nextImageButton.addEventListener("click", () => {
    currentImageIndex++;

    if(currentImageIndex > (imageSources.length - 1)){
        currentImageIndex = 0;
    }

    image.src = imageSources[currentImageIndex];
})

previousImageButton.addEventListener("click", () => {
    currentImageIndex--;

    if(currentImageIndex < 0){
        currentImageIndex = imageSources.length - 1;
    }

    image.src = imageSources[currentImageIndex];
})