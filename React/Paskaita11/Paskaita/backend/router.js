import express from "express";
import { addBook, getBookById, getBooks } from "./controllers.js";

const router = express.Router();

router.get("/api/books", getBooks);
router.get("/api/books/:id", getBookById);
router.post("/api/books", addBook);

export default router;
