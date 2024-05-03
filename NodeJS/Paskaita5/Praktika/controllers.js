import { v4 as uuidv4 } from "uuid";

const books = [
  {
    title: "Book1",
    author: "Author1",
    genre: "Fantasy",
    isbn: 1,
  },
  {
    title: "Book2",
    author: "Author2",
    genre: "Romance",
    isbn: 2,
  },
  {
    title: "Book3",
    author: "Author3",
    genre: "Comedy",
    isbn: 3,
  },
];

export function getBooks(req, res) {
  res.json(books);
}

export function getBookById(req, res) {
  const params = req.params;

  const foundBook = books.find((book) => book.isbn === +params.id);
  res.json(foundBook);
}

export function addBook(req, res) {
  const body = req.body;

  books.push(body);

  res.status(201).json({ success: true });
}

export function updateBook(req, res) {
  const body = req.body;

  const params = req.params;

  const foundBook = books.find((book) => book.isbn === +params.id);

  foundBook.title = body.title;
  foundBook.author = body.author;
  foundBook.genre = body.genre;

  res.status(202).json({ success: true });
}

export function deleteBook(req, res) {
  const params = req.params;

  const foundBook = books.find((book) => book.isbn === +params.id);
  const foundIndex = books.indexOf(foundBook);

  if (foundBook) {
    books.splice(foundIndex, 1);
    res.status(202).json({ success: true });
  } else {
    res.status(404).json({ success: false });
  }
}
