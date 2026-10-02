import axios from "axios";
import { store } from "./store";
import { error } from "jquery";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
      console.log("Unauthorized");
    }

    if (status === 403) {
      console.log("Forbidden");
    }

    if (!error?.response) {
      console.log("Network or CORS error:", error.message);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
