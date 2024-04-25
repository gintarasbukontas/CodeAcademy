async function getCars() {
  const response = await fetch("http://127.0.0.1:3000");
  const cars = await response.json();

  const ul = document.createElement("ul");
  document.body.append(ul);

  cars.forEach((car) => {
    const li = document.createElement("li");
    ul.append(li);
    li.textContent = car;
  });
}
getCars();
