import API from "./api";

// get all videos
export const getVideos = async () => {
  const res = await API.get("/videos");
  return res.data;
};

// get single video
export const getVideo = async (id) => {
  const res = await API.get(`/videos/${id}`);
  return res.data;
};

// upload video
export const uploadVideo = async (formData) => {

  const res = await API.post(
    "/videos/upload",
    formData,
    {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }
  );

  return res.data;
};

// like video
export const likeVideo = async (id) => {
  const res = await API.post(`/videos/${id}/like`);
  return res.data;
};