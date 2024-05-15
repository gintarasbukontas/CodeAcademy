import express from "express";
import categoryRouter from "./categoryRouter.js";
import productRouter from "./productRouter.js";

const router = express.Router();

router.use(categoryRouter);
router.use(productRouter);

export default router;
