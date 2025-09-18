const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/portfolioDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// API Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.json({ success: true, message: "Thank you for contacting me! I will reply soon."});
  } catch (err) {
    res.status(500).json({ success: false, message: "Error saving data" });
  }
});

// Start Server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
