document.cookie =
  "name=gintaras; expires=" + new Date(2024, 5, 10).toUTCString();

console.log(new Date(2024, 5, 10).toUTCString());

document.cookie = "lastName=test";

console.log(document.cookie);

function getCookie(key) {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const keyValue = cookies[i].trim().split("=");
    console.log(keyValue);

    if (keyValue[0] === key) {
      return keyValue[1];
    }
  }

  console.log(cookies);
}

console.log(getCookie("lastName"));

localStorage.setItem("name", "gintaras");

console.log(localStorage.getItem("name"));

localStorage.removeItem("name");

sessionStorage.setItem("sessionStorageName", "kazkoks vardas");
