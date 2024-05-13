const tbody = document.querySelector("tbody");

async function getBooks() {
  const response = await fetch("http://localhost:3000/books");
  const books = await response.json();

  console.log(books);
  return books;
}

function generateTable(books) {
  tbody.innerHTML = "";

  books.forEach((book) => {
    const tr = document.createElement("tr");
    tbody.append(tr);

    const tdTitle = document.createElement("td");
    tr.append(tdTitle);
    tdTitle.textContent = book.title;

    const tdAuthor = document.createElement("td");
    tr.append(tdAuthor);
    tdAuthor.textContent = book.author;

    const tdGenre = document.createElement("td");
    tr.append(tdGenre);
    tdGenre.textContent = book.genre;

    const tdPrice = document.createElement("td");
    tr.append(tdPrice);
    tdPrice.textContent = book.price;

    const tdQuantity = document.createElement("td");
    tr.append(tdQuantity);
    tdQuantity.textContent = book.quantity;

    const tdDelete = document.createElement("td");
    const deleteButton = document.createElement("button");
    tr.append(tdDelete);
    tdDelete.append(deleteButton);
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", async () => {
      const response = await fetch(
        "http://localhost:3000/books" + `/${book._id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const bk = await getBooks();
        generateTable(bk);
      }
    });
  });
}

const books = await getBooks();
generateTable(books);
