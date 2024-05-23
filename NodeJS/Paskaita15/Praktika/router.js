import express from "express";
import { addItem, deleteItemById, getItems } from "./controllers.js";

const router = express.Router();

router.get("/items", getItems);

router.post("/items", addItem);

router.delete("/items/:id", deleteItemById);

router.all("*", (req, res) => {
  res.status(404).json("Route doesn't exist");
});

export default router;
