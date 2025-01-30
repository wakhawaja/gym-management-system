import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../constants";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      }
      return data;
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
