const membershipsEndpoint = "http://localhost:3000/memberships/";

const form = document.querySelector("form");
const inputName = document.querySelector("#inputName");
const inputPrice = document.querySelector("#inputPrice");
const inputDescription = document.querySelector("#inputDescription");
const buttonCancel = document.querySelector("#buttonCancel");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = inputName.value;
  const price = inputPrice.value;
  const description = inputDescription.value;

  const response = await fetch(membershipsEndpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  });
  inputName.value = "";
  inputPrice.value = "";
  inputDescription.value = "";

  window.location.href = "memberships.html";
});

buttonCancel.addEventListener("click", () => {
  window.location.href = "memberships.html";
});
