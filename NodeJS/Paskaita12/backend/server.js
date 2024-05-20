import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "usersAndMemberships" })
  .then(() => console.log("Connected to Mongo DB"))
  .catch(() => console.log("Failed to connect to Mongo DB"));

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`app listening on PORT ${PORT}`));
