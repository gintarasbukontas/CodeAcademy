import express from "express";
import peopleRouter from "./peopleRouter.js";
import phoneRouter from "./phoneRouter.js";

const router = express.Router();

router.use(peopleRouter);
router.use(phoneRouter);

export default router;
