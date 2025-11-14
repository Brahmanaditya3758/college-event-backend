import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import eventRoutes from "./routes/eventRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

// --- CORS FIX FOR NETLIFY + RENDER ----
app.use(
  cors({
    origin: [
      process.env.FRONTEND_ORIGIN,
      "http://localhost:3000"
    ],
    credentials: true,
  })
);

// --- CONNECT DB ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("DB Error:", err));

// --- ROUTES ---
app.use("/api/events", eventRoutes);
app.use("/api/auth", authRoutes);

// --- START ---
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
