import cloudinary from "../config/cloudinary.js";
import Video from "../models/Video.js";

export const uploadVideo = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    /* ✅ SAFETY CHECK (VERY IMPORTANT) */
    if (!req.files || !req.files.video) {
      return res.status(400).json({
        error: "Video file is required"
      });
    }

    const { title, description } = req.body;
    const videoFile = req.files.video;

    /* ✅ Upload video to Cloudinary */
    const videoUpload = await cloudinary.uploader.upload(
      videoFile.tempFilePath,
      {
        resource_type: "video",
      }
    );

    /* ✅ Upload thumbnail (optional) */
    let thumbnailUrl = "";

    if (req.files.thumbnail) {
      const thumbUpload = await cloudinary.uploader.upload(
        req.files.thumbnail.tempFilePath
      );
      thumbnailUrl = thumbUpload.secure_url;
    }

    /* ✅ Save in MongoDB */
    const newVideo = await Video.create({
      title,
      description,
      videoUrl: videoUpload.secure_url,
      thumbnailUrl,
    });

    res.status(200).json(newVideo);

  } catch (err) {
    console.error("UPLOAD ERROR:", err);

    res.status(500).json({
      error: err.message || "Upload failed"
    });
  }
};

/* ✅ GET ALL VIDEOS */
export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.status(200).json(videos);
  } catch (err) {
    console.error("GET VIDEOS ERROR:", err);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
};
