const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);


const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);


// Routes
const eventRoutes = require("./routes/eventRoutes");
app.use("/api/events", eventRoutes);

// Start server
const PORT = process.env.PORT || 5500;;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
