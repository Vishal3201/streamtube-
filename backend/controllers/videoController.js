import cloudinary from "../config/cloudinary.js";
import Video from "../models/Video.js";

export const uploadVideo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // upload video
    const videoUpload = await cloudinary.uploader.upload(req.files.video.tempFilePath, {
      resource_type: "video",
    });

    // upload thumbnail (optional)
    let thumbnailUrl = "";
    if (req.files.thumbnail) {
      const thumbUpload = await cloudinary.uploader.upload(req.files.thumbnail.tempFilePath);
      thumbnailUrl = thumbUpload.secure_url;
    }

    const newVideo = await Video.create({
      title,
      description,
      videoUrl: videoUpload.secure_url,
      thumbnailUrl,
    });

    res.json(newVideo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
};

// GET ALL VIDEOS
export const getVideos = async (req, res) => {
  const videos = await Video.find().sort({ createdAt: -1 });
  res.json(videos);
};
