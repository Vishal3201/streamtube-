import axios from "axios";

/* =========================
   BASE URL
========================= */
const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://streamtube-5r3c.onrender.com";

/* =========================
   AXIOS INSTANCE
========================= */
const API = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});

/* =========================
   AUTH INTERCEPTOR
========================= */
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
  try {
    const res = await API.post("/videos/upload", formData);
    return res.data;
  } catch (err) {
    console.error("Upload Error:", err.response?.data || err.message);
    throw err;
  }
};

/* =========================
   COMMENT APIs
========================= */

export const addComment = async (data) => {
  const res = await API.post("/comments", data);
  return res.data;
};

export const getComments = async (videoId) => {
  const res = await API.get(`/comments/${videoId}`);
  return res.data;
};

/* =========================
   AUTH APIs
========================= */

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);

  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }

  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export default API;
