import express from "express";
import {
  getUserController,
  addNewUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/user", getUserController);

router.post("/user", addNewUser);

export default router;
