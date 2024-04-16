export function cars(app) {
  const carsArray = ["BMW", "VW", "AUDI", "MB"];

  app.innerHTML += `
    <ul></ul>
    `;

  const ul = document.body.querySelector("ul");

  carsArray.forEach((car) => {
    const li = document.createElement("li");
    ul.append(li);
    li.textContent = car;
  });
}
