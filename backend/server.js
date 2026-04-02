import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

import videoRoutes from "./routes/videoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

// 🔥 Load env variables FIRST
dotenv.config();

const app = express();

/* ✅ CORS */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://streamtube-t11.vercel.app" // ❗ removed trailing /
  ],
  credentials: true
}));

/* ✅ Middleware */
app.use(express.json());

/* ✅ 🔥 FIX: fileUpload MUST be BEFORE routes */
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/", // 🔥 important for Render
}));

/* Optional static */
app.use(express.static("public"));

/* ✅ MongoDB */
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

/* ✅ Routes */
app.use("/api/videos", videoRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);

/* ✅ Root */
app.get("/", (req, res) => {
  res.send("🚀 StreamTube Backend Running");
});

/* ✅ Start server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:5000`);
});
