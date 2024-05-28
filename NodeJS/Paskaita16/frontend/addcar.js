const endpoint = "http://127.0.0.1:3000/cars";

const form = document.querySelector("form");
const inputTitle = document.querySelector("#inputTitle");
const inputImage = document.querySelector("#inputImage");
const inputPrice = document.querySelector("#inputPrice");
const inputNumberplates = document.querySelector("#inputNumberplates");
const submitButton = document.querySelector("#buttonSubmit");
const cancelButton = document.querySelector("#buttonCancel");
const main = document.querySelector("main");
const statusText = document.querySelector(".statusText");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = inputTitle.value;
  const image = inputImage.value;
  const price = inputPrice.value;
  const numberplates = inputNumberplates.value;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      image,
      price,
      numberplates,
    }),
  });

  if (response.ok) {
    statusText.classList.remove("statusTextFail");
    statusText.classList.add("statusTextSuccess");
    statusText.textContent = "Car added successfully!";
    main.append(statusText);

    inputTitle.value = "";
    inputImage.value = "";
    inputPrice.value = "";
    inputNumberplates.value = "";
  } else {
    statusText.classList.remove("statusTextSuccess");
    statusText.classList.add("statusTextFail");
    statusText.textContent = "Unable to add car!";
    main.append(statusText);
  }
});

cancelButton.addEventListener("click", () => {
  window.location.href = "cars.html";
});
