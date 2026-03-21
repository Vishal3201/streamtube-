import express from "express";
import multer from "multer";
import {
  getVideos,
  getVideoById,
  uploadVideo
} from "../controllers/videoController.js";

const router = express.Router();

// ✅ multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ✅ routes
router.get("/", getVideos);
router.get("/:id", getVideoById);

// 🔥 upload route
router.post("/", upload.single("video"), uploadVideo);

export default router;