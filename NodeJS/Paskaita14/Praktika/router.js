import express from "express";
import { addShirt, getShirts } from "./controllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Server is working");
});

router.get("/shirts/:size?", getShirts);

router.post("/shirts", addShirt);

router.get("*", (req, res) => {
  res.status(404).json("Page not found");
});

export default router;
