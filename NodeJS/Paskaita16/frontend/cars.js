const endpoint = "http://127.0.0.1:3000/cars";

const cardsContainer = document.querySelector("#cardsContainer");
const main = document.querySelector("main");

async function getCars() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (!response.ok) {
      alert("There was an error");
    }

    return data;
  } catch (error) {
    alert("There was an error");
  }
}

const cars = await getCars();

function generateCarsTable(cars) {
  cardsContainer.innerHTML = "";

  if (cars[0] === undefined) {
    const h1 = document.createElement("h1");
    h1.textContent = "There are no cars in the Database right now!";
    main.append(h1);
  }

  cars.forEach((car) => {
    const card = document.createElement("div");
    card.classList.add("card");
    cardsContainer.append(card);

    const cardTop = document.createElement("div");
    cardTop.classList.add("cardTop");

    const carNumberplates = document.createElement("h2");
    carNumberplates.textContent = car.numberplates;

    const carTitle = document.createElement("p");
    carTitle.classList.add("carTitle");
    carTitle.textContent = car.title;

    const carPrice = document.createElement("p");
    carPrice.textContent = `${car.price} €`;

    cardTop.append(carNumberplates, carTitle, carPrice);

    const cardMiddle = document.createElement("div");
    cardMiddle.classList.add("cardMiddle");

    const carImage = document.createElement("img");
    carImage.src = car.image;

    cardMiddle.append(carImage);

    const cardBottom = document.createElement("div");
    cardBottom.classList.add("cardBottom");

    const deleteCarButton = document.createElement("button");
    deleteCarButton.textContent = "Delete";
    deleteCarButton.value = car.id;

    deleteCarButton.addEventListener("click", async () => {
      try {
        const response = await fetch(endpoint + `/${car.id}`, {
          method: "DELETE",
        });
        const cars = await getCars();
        generateCarsTable(cars);

        if (!response.ok) {
          alert("There was an error");
        }
      } catch (error) {
        alert("There was an error");
      }
    });

    cardBottom.append(deleteCarButton);

    card.append(cardTop, cardMiddle, cardBottom);
  });
}
generateCarsTable(cars);
