import API from "./api";

// login user
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

// register user
export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

// get logged user
export const getProfile = async () => {
  const res = await API.get("/auth/profile");
  return res.data;
};

// logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};