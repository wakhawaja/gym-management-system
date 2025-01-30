import { API_ENDPOINTS } from "../constants";

const userService = {
  getUserProfile: async (token) => {
    try {
      const response = await fetch(API_ENDPOINTS.GET_USER, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  },
};

export default userService;
