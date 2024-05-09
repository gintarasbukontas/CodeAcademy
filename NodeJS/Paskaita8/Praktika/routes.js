import express from "express";
import {
  addPet,
  getPets,
  getPetsByAgeAsc,
  getPetsByAgeDesc,
  getPetsByAgeFromOldest,
  getPetsByType,
} from "./controllers.js";

const router = express.Router();

router.get("/pets", getPets);

router.post("/pets", addPet);

router.get("/pets/byoldest", getPetsByAgeFromOldest);

router.get("/pets/asc", getPetsByAgeAsc);

router.get("/pets/desc", getPetsByAgeDesc);

router.get("/pets/:type", getPetsByType);

export default router;
