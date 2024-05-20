const usersEndpointAsc = "http://localhost:3000/users/asc";
const usersEndpointDesc = "http://localhost:3000/users/desc";

const usersGrid = document.querySelector(".usersGrid");
const sortText = document.querySelector("#sortText");

async function getUsers() {
  if (sortText.textContent.includes("ASC")) {
    sortText.textContent = sortText.textContent.replace("ASC", "DESC");

    const response = await fetch(usersEndpointDesc);
    const data = await response.json();
    return data;
  } else {
    sortText.textContent = sortText.textContent.replace("DESC", "ASC");

    const response = await fetch(usersEndpointAsc);
    const data = await response.json();
    return data;
  }
}

sortText.addEventListener("click", async () => {
  const users = await getUsers();
  generateUsersGrid(users);
});

function generateUsersGrid(users) {
  usersGrid.innerHTML = "";

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("userCard");

    const userName = document.createElement("p");
    userName.classList.add("userName");
    userName.textContent = `${user.name} ${user.surname}`;

    const br = document.createElement("br");

    const userEmail = document.createElement("p");
    userEmail.classList.add("userEmail");
    userEmail.textContent = "Email address: ";
    const userEmailSpan = document.createElement("span");
    userEmailSpan.textContent = user.email;
    userEmailSpan.classList.add("userSpan");
    userEmail.append(userEmailSpan);

    const userMembership = document.createElement("p");
    userMembership.classList.add("userMembership");
    userMembership.textContent = "Membership: ";
    const userMembershipSpan = document.createElement("span");
    userMembershipSpan.textContent = user.membership.name;
    userMembershipSpan.classList.add("userSpan");
    userMembership.append(userMembershipSpan);

    const userServiceId = document.createElement("p");
    userServiceId.classList.add("userServiceId");
    userServiceId.textContent = `ip: ${user.service_id}`;

    userCard.append(userName, br, userEmail, userMembership, userServiceId);

    usersGrid.append(userCard);
  });
}

const users = await getUsers();
generateUsersGrid(users);
