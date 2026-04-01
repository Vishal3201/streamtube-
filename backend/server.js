import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

import videoRoutes from "./routes/videoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

// Load env
dotenv.config();

const app = express();

// ✅ CORS (fixed)
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://streamtube-t10.vercel.app"
  ],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ File upload (IMPORTANT - before routes)
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
  limits: { fileSize: 100 * 1024 * 1024 }
}));

// Static
app.use(express.static("public"));

// ✅ MongoDB
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err));

// Root route
app.get("/", (req, res) => {
  res.send("🚀 StreamTube Backend Running");
});

// Routes
app.use("/api/videos", videoRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
