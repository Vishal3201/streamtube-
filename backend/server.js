import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import videoRoutes from "./routes/videoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

// 🔥 Load env variables FIRST
dotenv.config();

const app = express();

// ✅ CORS (allow local + deployed frontend)
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend.vercel.app" // 🔥 replace with your Vercel URL
  ],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ❌ REMOVE THIS if using Cloudinary (not needed anymore)
// app.use("/uploads", express.static("uploads"));

// Optional static
app.use(express.static("public"));

// ✅ Connect MongoDB
mongoose.connect(process.env.MONGO_URL, {
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err));

// ✅ Root route
app.get("/", (req, res) => {
  res.send("🚀 StreamTube Backend Running");
});

// ✅ API Routes
app.use("/api/videos", videoRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);

// ✅ Start server (important for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:5000`);
});