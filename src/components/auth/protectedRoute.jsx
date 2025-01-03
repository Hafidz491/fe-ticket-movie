import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Utils/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { currentUser } = useAuth();

  return currentUser ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
