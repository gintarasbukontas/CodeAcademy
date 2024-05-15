import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user_id: String,
  date: String,
  comment: String,
});

export default mongoose.model("Comment", commentSchema);
