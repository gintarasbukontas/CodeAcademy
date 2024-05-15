import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "multi" })
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Failed to Connect to DB"));

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`app listening to PORT ${PORT}`));
