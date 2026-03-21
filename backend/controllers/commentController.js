let comments = [];

export const addComment = (req, res) => {
  const { videoId, text } = req.body;

  const newComment = {
    id: Date.now().toString(),
    videoId,
    text,
  };

  comments.push(newComment);
  res.json(newComment);
};

export const getCommentsByVideo = (req, res) => {
  const filtered = comments.filter(
    c => c.videoId === req.params.videoId
  );
  res.json(filtered);
};