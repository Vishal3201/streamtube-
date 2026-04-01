import express from "express";
import { uploadVideo, getVideos } from "../controllers/videoController.js";

const router = express.Router();


router.post("/upload", uploadVideo);
router.get("/", getVideos);

export default router;
