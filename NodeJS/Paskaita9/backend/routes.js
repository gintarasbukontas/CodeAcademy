import express from "express";
import { addBook, deleteBookById, getBooks } from "./controllers.js";

const router = express.Router();

router.get("/books", getBooks);

router.post("/books", addBook);

router.delete("/books/:id", deleteBookById);

export default router;
