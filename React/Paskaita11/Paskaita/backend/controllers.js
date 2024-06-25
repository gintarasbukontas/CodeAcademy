import Book from "./Book.js";

export async function getBooks(req, res) {
  try {
    const books = await Book.find();

    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getBookById(req, res) {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);

    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addBook(req, res) {
  const { title, author, genre, publishedYear, summary } = req.body;

  if (!title || !author || !genre || !publishedYear || !summary) {
    res.status(400).json({ error: "All fields required" });
    return;
  }

  try {
    const newBook = new Book({
      title,
      author,
      genre,
      publishedYear,
      summary,
    });

    await newBook.save();

    res.json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
