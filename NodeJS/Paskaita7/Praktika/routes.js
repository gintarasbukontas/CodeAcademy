import express from "express";
import { addPeople, getPeople } from "./controllers.js";

const router = express.Router();

router.get("/people", getPeople);

router.post("/people", addPeople);

export default router;
