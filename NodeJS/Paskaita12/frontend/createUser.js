const usersEndpoint = "http://localhost:3000/users/";
const membershipsEndpoint = "http://localhost:3000/memberships/";

const form = document.querySelector(".formUsers");
const inputFirstName = document.querySelector("#inputFirstName");
const inputLastName = document.querySelector("#inputLastName");
const inputEmail = document.querySelector("#inputEmail");
const selectMembership = document.querySelector("#selectMembership");
const buttonCancel = document.querySelector("#buttonCancel");

async function generateSelect() {
  const response = await fetch(membershipsEndpoint);
  const options = await response.json();
  console.log(options);

  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option._id;
    opt.textContent = option.name;
    selectMembership.append(opt);
  });
}

generateSelect();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = inputFirstName.value;
  const surname = inputLastName.value;
  const email = inputEmail.value;
  const membership = selectMembership.value;

  const response = await fetch(usersEndpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      surname,
      email,
      service_id: "12.23.34.45",
      membership,
    }),
  });
  inputFirstName.value = "";
  inputLastName.value = "";
  inputEmail.value = "";

  window.location.href = "users.html";
});

buttonCancel.addEventListener("click", () => {
  window.location.href = "users.html";
});
