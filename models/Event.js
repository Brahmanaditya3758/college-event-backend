const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: String },
  location: { type: String },
  category: { type: String, default: "General" }, // new
}, { timestamps: true });

module.exports = mongoose.model("Event", EventSchema);
