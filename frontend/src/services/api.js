import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: "https://streamtube-5r3c.onrender.com/api",
  withCredentials: true,
});

// Attach token automatically (for future auth)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

/* =========================
   VIDEO APIs
========================= */

// Get all videos
export const getVideos = async () => {
  const res = await API.get("/videos");
  return res.data;
};

// Get single video
export const getVideo = async (id) => {
  const res = await API.get(`/videos/${id}`);
  return res.data;
};

// Upload video
export const uploadVideo = async (formData) => {
  const res = await API.post("/videos", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

/* =========================
   COMMENT APIs
========================= */

// Add comment
export const addComment = async (data) => {
  const res = await API.post("/comments", data);
  return res.data;
};

// Get comments by video
export const getComments = async (videoId) => {
  const res = await API.get(`/comments/${videoId}`);
  return res.data;
};

/* =========================
   AUTH APIs
========================= */

// Login
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);

  // Save token (important)
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }

  return res.data;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};

export default API;