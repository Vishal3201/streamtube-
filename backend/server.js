import express from "express";
import cors from "cors";

import videoRoutes from "./routes/videoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// ✅ Static folders
app.use("/uploads", express.static("uploads"));
app.use(express.static("public")); // ⭐ THIS LINE ADDED

// ✅ Root route (with favicon support)
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>StreamTube Backend</title>
        <link rel="icon" href="https://i.ibb.co/HDpPZf42/streamtube-logo.png" />
      </head>
      <body>
        <h1>🚀 StreamTube Backend Running</h1>
      </body>
    </html>
  `);
});

// ✅ API Routes
app.use("/api/videos", videoRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);

// ✅ Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});