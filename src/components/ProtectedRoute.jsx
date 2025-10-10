import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  // if no user, redirect to login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // if user exists, allow access
  return children;
};

export default ProtectedRoute;
