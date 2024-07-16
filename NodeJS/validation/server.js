import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.js";
import { errMiddleWare } from "./middlewares/errorMiddleWare.js";

dotenv.config();

const { MONGO_URI, PORT } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(router);
app.use(errMiddleWare);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
