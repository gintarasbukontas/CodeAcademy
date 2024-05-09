const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const buttonDog = document.querySelector("#buttonDog");
const buttonCat = document.querySelector("#buttonCat");
const buttonBunny = document.querySelector("#buttonBunny");
const thAge = document.querySelector("#thAge");

async function getPets() {
  const response = await fetch("http://localhost:4000/pets");
  const pets = await response.json();

  console.log(pets);
  return pets;
}

function generateTable(pets) {
  tbody.innerHTML = "";

  pets.forEach((pet) => {
    const tr = document.createElement("tr");
    tbody.append(tr);

    const tdName = document.createElement("td");
    tr.append(tdName);
    tdName.textContent = pet.name;

    const tdType = document.createElement("td");
    tr.append(tdType);
    tdType.textContent = pet.type;

    const tdAge = document.createElement("td");
    tr.append(tdAge);
    tdAge.textContent = pet.age;
  });
}

const pets = await getPets();
generateTable(pets);

async function changeAgeOrder() {
  if (thAge.textContent === "Age (Asc)") {
    thAge.textContent = "Age (Desc)";

    const response = await fetch("http://localhost:4000/pets/desc");
    const pets = await response.json();

    generateTable(pets);
  } else {
    thAge.textContent = "Age (Asc)";

    const response = await fetch("http://localhost:4000/pets/asc");
    const pets = await response.json();

    generateTable(pets);
  }
}

thAge.addEventListener("click", changeAgeOrder);

async function filterPetsByType(e) {
  const type = e.target.value;

  const response = await fetch(`http://localhost:4000/pets/${type}`);
  const pets = await response.json();

  generateTable(pets);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", filterPetsByType);
});
