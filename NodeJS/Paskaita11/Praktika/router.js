import express from "express";
import {
  addComment,
  addUser,
  deleteCommentById,
  getComments,
  getUsers,
} from "./controllers.js";

const router = express.Router();

router.get("/users", getUsers);

router.get("/comments", getComments);

router.post("/users", addUser);

router.post("/comments", addComment);

router.delete("/comments/:id", deleteCommentById);

export default router;
