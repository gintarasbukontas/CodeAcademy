const membershipsEndpoint = "http://localhost:3000/memberships/";

const membershipGrid = document.querySelector(".membershipGrid");

async function getMemberships() {
  const response = await fetch(membershipsEndpoint);
  const data = await response.json();

  console.log(data);
  return data;
}

function generateMembershipsGrid(memberships) {
  membershipGrid.innerHTML = "";

  memberships.forEach((membership) => {
    const membershipCard = document.createElement("div");
    membershipCard.classList.add("membershipCard");

    const membershipCardTop = document.createElement("div");
    membershipCardTop.classList.add("membershipCardTop");

    const membershipCardPrice = document.createElement("h2");
    membershipCardPrice.classList.add("membershipCardPrice");
    membershipCardPrice.textContent = `$${membership.price.toFixed(2)} ${
      membership.name
    }`;

    const membershipCardDescription = document.createElement("p");
    membershipCardDescription.classList.add("membershipCardDescription");
    membershipCardDescription.textContent = membership.description;

    membershipCardTop.append(membershipCardPrice, membershipCardDescription);

    const membershipCardBottom = document.createElement("div");
    membershipCardBottom.classList.add("membershipCardBottom");

    const membershipCardButton = document.createElement("button");
    membershipCardButton.classList.add("membershipCardButton");

    const membershipCardButtonIcon = document.createElement("i");
    membershipCardButtonIcon.classList.add("fa-solid");
    membershipCardButtonIcon.classList.add("fa-trash");

    membershipCardButton.append(membershipCardButtonIcon);

    membershipCardButton.addEventListener("click", async () => {
      const response = await fetch(membershipsEndpoint + `${membership._id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const memberships = await getMemberships();
        generateMembershipsGrid(memberships);
      }
    });

    membershipCardBottom.append(membershipCardButton);

    membershipCard.append(membershipCardTop, membershipCardBottom);

    membershipGrid.append(membershipCard);
  });
}

const memberships = await getMemberships();
generateMembershipsGrid(memberships);
