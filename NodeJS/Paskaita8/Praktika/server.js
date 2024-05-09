import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "pets" })
  .then(() => console.log("Connected to Mongo DB"))
  .catch(() => console.log("Failed to Connect"));

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => console.log(`app listening on PORT ${PORT}`));
