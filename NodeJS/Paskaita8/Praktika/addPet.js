const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const typeInput = document.querySelector("#type");
const ageInput = document.querySelector("#age");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const type = typeInput.value;
  const age = ageInput.value;

  const response = await fetch("http://localhost:4000/pets", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      type,
      age,
    }),
  });
});
