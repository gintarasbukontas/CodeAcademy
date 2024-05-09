import express from "express";
import { addTablet, getTablets } from "../controllers/tabletControllers.js";

const router = express.Router();

router.get("/", getTablets);

router.post("/", addTablet);

export default router;
