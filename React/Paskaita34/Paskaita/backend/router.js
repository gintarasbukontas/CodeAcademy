import express from "express";
import {
  addItem,
  deleteItemById,
  getItems,
  updateItemById,
} from "./controllers.js";
import { validateItem } from "./itemMiddleWare.js";
import { validateItemPut } from "./itemMiddleWarePut.js";

const router = express.Router();

router.get("/items/:order?", getItems);
router.post("/items", validateItem, addItem);
router.put("/items/:id", validateItemPut, updateItemById);
router.delete("/items/:id", deleteItemById);

export default router;
