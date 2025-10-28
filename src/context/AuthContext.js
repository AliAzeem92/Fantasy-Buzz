import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);

  // Check if user is authenticated and get user data
  const checkAuth = async () => {
    try {
      const res = await axios.get(
        `${
          process.env.REACT_APP_API_URL || "http://localhost:4000"
        }/api/auth/is-auth`,
        {
          withCredentials: true,
        }
      );
      
      if (res.data.success && res.data.user) {
        setUser(res.data.user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
      setAuthChecked(true);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const logout = async () => {
    try {
      await axios.post(
        `${
          process.env.REACT_APP_API_URL || "http://localhost:4000"
        }/api/auth/logout`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      // Force redirect to home page
      window.location.href = "/";
    }
  };

  const refreshAuth = () => {
    setLoading(true);
    checkAuth();
  };

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        isAuthenticated, 
        setIsAuthenticated, 
        loading, 
        authChecked,
        logout,
        refreshAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
