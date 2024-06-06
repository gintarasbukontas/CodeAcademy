import express from "express";
import {
  addAttendeeToEvent,
  addEvent,
  deleteAttendeeFromEvent,
  deleteEventById,
  getEventById,
  getEvents,
  updateEventById,
} from "../controllers/Events.js";

const router = express.Router();

router.get("/events", getEvents);
router.get("/events/:id", getEventById);
router.post("/events", addEvent);
router.put("/events/:id?", updateEventById);
router.post("/events/:event_id/attendees/:attendee_id", addAttendeeToEvent);
router.delete("/events/:event_id/attendees/:attendee_id"),
  deleteAttendeeFromEvent;
router.delete("/events/:id?", deleteEventById);

export default router;
