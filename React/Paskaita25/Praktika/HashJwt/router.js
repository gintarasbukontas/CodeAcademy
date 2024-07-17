import express from "express";
import {
  getUsers,
  loginUser,
  registerUser,
} from "./controllers/userController.js";
import { validateJwt } from "./middlewares/validateJwtMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/protected", validateJwt, getUsers);

export default router;
