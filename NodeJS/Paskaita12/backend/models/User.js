import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  service_id: String,
  membership: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Membership",
  },
});

export default mongoose.model("User", userSchema);
