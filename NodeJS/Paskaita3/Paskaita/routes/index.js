import express from "express";
import userRouter from "./userRouter.js";
import helloRouter from "./helloWordRouter.js";

const router = express.Router();

router.use(userRouter);
router.use(helloRouter);

export default router;
