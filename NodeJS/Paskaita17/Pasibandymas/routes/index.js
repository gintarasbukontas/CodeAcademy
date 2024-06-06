import express from "express";
import eventsRouter from "./eventsRouter.js";
import attendeesRouter from "./attendeesRouter.js";

const router = express.Router();

router.use(eventsRouter);
router.use(attendeesRouter);

// router.all("*", (req, res) => {
//   res.status(404).json("Route doesn't exist");
// });

export default router;
