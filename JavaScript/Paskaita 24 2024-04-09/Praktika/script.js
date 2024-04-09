// Uzduotis 1

const formCinema = document.querySelector("#formCinema");
const ageInput = document.querySelector("#ageInput");
const priceText = document.querySelector("#priceText");

formCinema.addEventListener("submit", (event) => {
  event.preventDefault();
  calculatePrice();
});

function calculatePrice() {
  let price = 6;

  if (ageInput.value <= 16) {
    price = price / 2;
    priceText.textContent = `Ticket price is: ${price}€`;
  } else if (ageInput.value >= 60) {
    price = price - price / 3;
    priceText.textContent = `Ticket price is: ${price}€`;
  } else {
    priceText.textContent = `Ticket price is: ${price}€`;
  }
}

// Uzduotis 2

const formArmy = document.querySelector("#formArmy");
const ageInput2 = document.querySelector("#ageInput2");
const criminalRecord = document.querySelector("#criminalRecord");
const armyText = document.querySelector("#armyText");

formArmy.addEventListener("submit", (event) => {
  event.preventDefault();
  checkStatus();
});

function checkStatus() {
  if (
    ageInput2.value >= 18 &&
    ageInput2.value <= 30 &&
    criminalRecord.checked === false
  ) {
    armyText.textContent = "Need to go to army";
  } else {
    armyText.textContent = "Don't need to go to army";
  }
}
