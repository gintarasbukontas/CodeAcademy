import express from "express";
import { addProduct, getProducts } from "../controllers/product.js";

const router = express.Router();

router.post("/product/", addProduct);

router.get("/product", getProducts);

export default router;
