import express from "express";
import {
  createBook,
  deleteBookById,
  getBookById,
  getBooks,
  updateBookById,
} from "../controllers/booksControllers.js";
import { validateBook } from "../middlewares/bookMiddleware.js";

const router = express.Router();

router.get("/books", getBooks);

router.get("/books/:id", getBookById);

router.post("/books", validateBook, createBook);

router.put("/books/:id", validateBook, updateBookById);

router.delete("/books/:id", deleteBookById);

export default router;
