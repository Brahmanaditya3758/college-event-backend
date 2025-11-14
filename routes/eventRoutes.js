const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Get all events (public)
router.get("/", async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.json(events);
});

// Add a new event (public)
router.post("/", async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json({ message: "Event added!", event });
});

// Update (public)
router.put("/:id", async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!event) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Event updated", event });
});

// Delete (public)
router.delete("/:id", async (req, res) => {
  const ev = await Event.findByIdAndDelete(req.params.id);
  if (!ev) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Event deleted" });
});

module.exports = router;
