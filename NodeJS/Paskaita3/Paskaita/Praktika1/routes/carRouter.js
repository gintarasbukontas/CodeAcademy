import express from "express";
import { getCarsController, addNewCar } from "../controllers/carControllers.js";

const router = express.Router();

router.get("/car", getCarsController);

router.post("/car", addNewCar);

export default router;
