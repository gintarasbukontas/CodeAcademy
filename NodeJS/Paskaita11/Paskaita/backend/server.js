import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "shopInventory" })
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Failed to Connect to DB"));

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`app listening to PORT ${PORT}`));
