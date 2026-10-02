import axiosInstance from "../../../services/axioInstance";

export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("/api/auth/login", credentials);
    console.log("FULL RESPONSE:", response);
    console.log("response.success:", response.success);
    console.log("response.data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/api/categories");

    console.log("All Categories response:", response);
    console.log("All Categories response data:", response?.data);

    return response?.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
