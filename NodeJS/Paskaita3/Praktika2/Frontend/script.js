const form = document.querySelector("form");
const nameInput = document.querySelector("#nameInput");
const lastNameInput = document.querySelector("#lastNameInput");
const submitButton = document.querySelector("#submitButton");
const getUsersButton = document.querySelector("#getUsersButton");

const url = "http://127.0.0.1:3000/user";

form.addEventListener("submit", addUser);

async function getUsers() {
  const response = await fetch(url);
  const users = await response.json();
  console.log(users);

  const ul = document.createElement("ul");
  document.body.append(ul);

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} ${user.lastName}`;
    ul.append(li);
  });
}

getUsersButton.addEventListener("click", getUsers);

async function addUser(e) {
  e.preventDefault();
  const name = nameInput.value;
  const lastName = lastNameInput.value;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      lastName: lastName,
    }),
  });
}
