const API_BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://api.goldspa.com"
    : "http://localhost:5000";

const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  GET_USER: `${API_BASE_URL}/user/profile`,
  SERVICES: `${API_BASE_URL}/services/list`,
  CONTACT: `${API_BASE_URL}/contact/submit`,
  BOOKINGS: `${API_BASE_URL}/bookings/all`,
  REVIEWS: `${API_BASE_URL}/reviews/list`,
};

export default API_ENDPOINTS;
