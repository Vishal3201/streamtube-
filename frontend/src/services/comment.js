import API from "./api";

// get comments for video
export const getComments = async (videoId) => {
  const res = await API.get(`/comments/${videoId}`);
  return res.data;
};

// add comment
export const addComment = async (videoId, text) => {

  const res = await API.post(`/comments/${videoId}`,{
    text
  });

  return res.data;
};

// delete comment
export const deleteComment = async (commentId) => {

  const res = await API.delete(`/comments/${commentId}`);

  return res.data;
};