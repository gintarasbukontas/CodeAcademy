import express from "express";
import { createUser, getUsers } from "../controllers/usersControllers.js";

const router = express.Router();

router.get("/users/:order?", getUsers);

router.post("/users/", createUser);

export default router;
