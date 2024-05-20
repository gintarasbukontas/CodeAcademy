import express from "express";
import {
  createMembership,
  deleteMembershipById,
  getMemberships,
} from "../controllers/membershipControllers.js";

const router = express.Router();

router.get("/memberships", getMemberships);

router.post("/memberships", createMembership);

router.delete("/memberships/:id", deleteMembershipById);

export default router;
