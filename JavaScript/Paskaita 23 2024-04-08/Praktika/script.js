async function generateTable() {
  const data = await getData();
  console.log(data);

  const vip = [];
  data.forEach((person) => {
    if (person.vip === true) {
      vip.push(person);
    }
  });

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  document.body.append(checkBox);
  checkBox.checked = false;

  const table = document.createElement("table");
  document.body.append(table);

  const thead = document.createElement("thead");
  table.append(thead);

  const thId = document.createElement("th");
  thId.textContent = "id";
  thead.append(thId);

  const thPhoto = document.createElement("th");
  thPhoto.textContent = "photo";
  thead.append(thPhoto);

  const thFirstName = document.createElement("th");
  thFirstName.textContent = "first_name";
  thead.append(thFirstName);

  const thLastName = document.createElement("th");
  thLastName.textContent = "last_name";
  thead.append(thLastName);

  const thCity = document.createElement("th");
  thCity.textContent = "city";
  thead.append(thCity);

  const thFavColor = document.createElement("th");
  thFavColor.textContent = "fav_color";
  thead.append(thFavColor);

  const tbody = document.createElement("tbody");
  table.append(tbody);

  if (checkBox.checked === true) {
    tbody.innerHTML = "";

    vip.forEach((entry) => {
      const tr = document.createElement("tr");
      tbody.append(tr);

      const tdId = document.createElement("td");
      tr.append(tdId);
      tdId.textContent = entry.id;

      const tdPhoto = document.createElement("td");
      tr.append(tdPhoto);
      const photoInTd = document.createElement("img");
      tdPhoto.append(photoInTd);
      photoInTd.src = entry.image;

      let name = entry.name;
      const namesArray = name.split(" ");

      const tdFirstName = document.createElement("td");
      tr.append(tdFirstName);
      tdFirstName.textContent = namesArray[0];

      const tdLastName = document.createElement("td");
      tr.append(tdLastName);
      tdLastName.textContent = namesArray[1];

      const tdCity = document.createElement("td");
      tr.append(tdCity);
      tdCity.textContent = entry.city;

      const tdFavColor = document.createElement("td");
      tr.append(tdFavColor);
      tdFavColor.textContent = entry.fav_color;
    });
  } else {
    tbody.innerHTML = "";
    data.forEach((entry) => {
      const tr = document.createElement("tr");
      tbody.append(tr);

      const tdId = document.createElement("td");
      tr.append(tdId);
      tdId.textContent = entry.id;

      const tdPhoto = document.createElement("td");
      tr.append(tdPhoto);
      const photoInTd = document.createElement("img");
      tdPhoto.append(photoInTd);
      photoInTd.src = entry.image;

      let name = entry.name;
      const namesArray = name.split(" ");

      const tdFirstName = document.createElement("td");
      tr.append(tdFirstName);
      tdFirstName.textContent = namesArray[0];

      const tdLastName = document.createElement("td");
      tr.append(tdLastName);
      tdLastName.textContent = namesArray[1];

      const tdCity = document.createElement("td");
      tr.append(tdCity);
      tdCity.textContent = entry.city;

      const tdFavColor = document.createElement("td");
      tr.append(tdFavColor);
      tdFavColor.textContent = entry.fav_color;
    });
    checkBox.addEventListener("change", () => {
      document.querySelector("body").innerHTML = "";
      if ((checkBox.checked = false)) {
        checkBox.checked = true;
        console.log(checkBox.checked);
        generateTable();
      } else {
        checkBox.checked = false;
        generateTable();
        console.log(checkBox.checked);
      }
    });
  }
}

async function getData() {
  const response = await fetch("https://polar-chartreuse-silverfish.glitch.me");

  const data = await response.json();

  return data;
}
generateTable();
