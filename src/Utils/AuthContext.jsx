import React, { createContext, useContext, useState, useEffect } from "react";
import api from "./ApiEndpoint";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");

    if (storedToken && storedUserId) {
      setToken(storedToken);
      fetchUserDetails(storedToken, storedUserId);
    }
  }, []);

  const fetchUserDetails = async (storedToken, userId) => {
    try {
      const response = await api.get(`User/detail/${userId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setCurrentUser(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
      // Clear invalid token if fetching user fails
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      setToken(null);
      setCurrentUser(null);
    }
  };

  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", user.id);

    setToken(token);
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setToken();
    setCurrentUser();
  };

  const register = async (userInformation) => {
    try {
      const response = await api.post("User/signup", userInformation);
      return { success: true, message: "Registrasi berhasil!" };
    } catch (error) {
      console.error("Error during registration:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    }
  };

  const value = {
    token,
    currentUser,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
