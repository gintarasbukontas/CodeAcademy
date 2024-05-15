import express from "express";
import { addCategory, getCategories } from "../controllers/category.js";

const router = express.Router();

router.post("/category", addCategory);

router.get("/category", getCategories);

export default router;
