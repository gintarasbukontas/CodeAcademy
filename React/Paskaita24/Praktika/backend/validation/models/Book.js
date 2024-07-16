import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
  genre: String,
  rating: Number,
});

export default mongoose.model("Book", bookSchema);
