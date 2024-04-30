import express from "express";
import { getCarsByBrand } from "./controllers.js";

const router = express.Router();

router.get("/cars/:brand", getCarsByBrand);

export default router;
