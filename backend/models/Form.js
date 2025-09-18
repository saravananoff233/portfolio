import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

export default mongoose.model("Form", formSchema);
