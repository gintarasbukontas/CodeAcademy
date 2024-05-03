import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.port;

const app = express();

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

var car = "test";
