import mongoose from "mongoose";

const membershipSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

export default mongoose.model("Membership", membershipSchema);
