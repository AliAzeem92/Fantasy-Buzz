import React from "react";
import { toast } from "react-hot-toast";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const res = await fetch(
        `${
          process.env.REACT_APP_API_URL || "http://localhost:4000"
        }/api/auth/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        // Force complete page reload and redirect to home
        window.location.href = "/";
      } else {
        toast.error(data.message || "Logout failed!");
      }
    } catch (error) {
      toast.error("Something went wrong during logout!");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
