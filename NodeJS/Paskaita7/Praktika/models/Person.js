import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

export default mongoose.model("person", personSchema);
