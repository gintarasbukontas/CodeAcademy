import express from "express";
import membershipsRouter from "./membershipsRouter.js";
import usersRouter from "./usersRouter.js";

const router = express.Router();

router.use(membershipsRouter);
router.use(usersRouter);

export default router;
