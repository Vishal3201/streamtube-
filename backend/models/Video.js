import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
title: String,
channel: String,
views: { type: Number, default: 0 },
likes: { type: Number, default: 0 },
dislikes: { type: Number, default: 0 },
videoUrl: String,
type: { type: String, enum: ["video", "short"], default: "video" }
},{ timestamps:true });

export default mongoose.model("Video", videoSchema);