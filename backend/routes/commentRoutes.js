import express from "express";
import {
  addComment,
  getCommentsByVideo,
} from "../controllers/commentController.js";

const router = express.Router();

router.post("/", addComment);
router.get("/:videoId", getCommentsByVideo);

export default router;