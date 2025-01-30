import { API_ENDPOINTS } from "../constants";

const authService = {
  login: async (credentials) => {
    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      return await response.json();
    } catch (error) {
      console.error("Login error:", error);
    }
  },

  signup: async (userData) => {
    try {
      const response = await fetch(API_ENDPOINTS.REGISTER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      console.error("Signup error:", error);
    }
  },

  logout: () => {
    localStorage.removeItem("user");
  },
};

export default authService;
