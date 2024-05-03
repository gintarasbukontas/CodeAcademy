import express from "express";
import {
  addBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "./controllers.js";

const router = express.Router();

router.get("/books", getBooks);

router.get("/books/:id", getBookById);

router.post("/books", addBook);

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);

export default router;
