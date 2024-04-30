import express from "express";
import {
  getAllEmails,
  getData,
  getFemales,
  getOwnersByCar,
  getUserById,
} from "./controllers.js";

const router = express.Router();

router.get("/", getData);

router.get("/user/:id", getUserById);

router.get("/emails", getAllEmails);

router.get("/female", getFemales);

router.get("/:car", getOwnersByCar);

export default router;
