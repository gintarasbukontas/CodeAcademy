import mongoose from "mongoose";

const tabletSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
  year: Number,
  screenSize: Number,
});

export default mongoose.model("tablets", tabletSchema);
