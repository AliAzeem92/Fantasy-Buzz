import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        navigate("/");
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
