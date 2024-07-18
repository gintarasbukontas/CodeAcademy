import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";
import cors from "cors";

dotenv.config();

const { MONGO_URI, PORT } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "register" })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
