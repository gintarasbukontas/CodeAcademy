import Book from "../models/Book.js";

export async function createBook(req, res) {
  const { title, author, publishedYear, genre, rating } = req.body;

  const newBook = new Book({
    title,
    author,
    publishedYear,
    genre,
    rating,
  });

  await newBook.save();

  res.json(newBook);
}

export async function getBooks(req, res) {
  const books = await Book.find();

  res.json(books);
}

export async function getBookById(req, res) {
  const { id } = req.params;

  const book = await Book.findById(id);

  res.json(book);
}

export async function updateBookById(req, res) {
  const { id } = req.params;
  const { title, author, publishedYear, genre, rating } = req.body;

  const book = await Book.findById(id);

  if (title) {
    book.title = title;
  }

  if (author) {
    book.author = author;
  }

  if (publishedYear) {
    book.publishedYear = publishedYear;
  }

  if (genre) {
    book.genre = genre;
  }

  if (rating) {
    book.rating = rating;
  }

  await book.save();

  res.json(book);
}

export async function deleteBookById(req, res) {
  const { id } = req.params;

  const book = await Book.findByIdAndDelete(id);

  res.json(book);
}
