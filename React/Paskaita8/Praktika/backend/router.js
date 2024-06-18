import express from "express";
import { getUsers, addUser } from "./controllers.js";

const router = express.Router();

router.get("/user", getUsers);
router.post("/user", addUser);

export default router;
