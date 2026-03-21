// Temporary in-memory storage
let videos = [];

/**
 * ✅ Get All Videos
 */
export const getVideos = (req, res) => {
  res.json(videos);
};

/**
 * ✅ Get Single Video by ID
 */
export const getVideoById = (req, res) => {
  const video = videos.find(v => v._id === req.params.id);

  if (!video) {
    return res.status(404).json({ message: "Video not found" });
  }

  res.json(video);
};

/**
 * ✅ Upload Video
 */
export const uploadVideo = (req, res) => {
  try {
    // ❗ check file
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // ❗ check title
    if (!req.body.title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const video = {
      _id: Date.now().toString(),
      title: req.body.title,
      url: `http://localhost:5000/uploads/${req.file.filename}`,
      views: 0,
      createdAt: new Date(),
    };

    videos.push(video);

    res.status(201).json(video);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
};