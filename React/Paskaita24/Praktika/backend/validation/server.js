import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/index.js";

dotenv.config();

const { MONGO_URI, PORT } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "booksJoi" })
  .then(() => console.log("Connected to Mongo DB"))
  .catch((err) => console.log(err.message));

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
