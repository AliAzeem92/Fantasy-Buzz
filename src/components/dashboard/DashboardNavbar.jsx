import React, { useEffect, useState } from "react";
import { BellDot, ChevronDown } from "lucide-react";
import LogoutButton from "../auth/LogoutButton";

const DashboardNavbar = () => {
  const [user, setUser] = useState(null);

  // ✅ Fetch user info on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/user/user-info`,
          {
            method: "GET",
            credentials: "include", // Send cookies (important!)
          }
        );

        const data = await response.json();

        if (data.success) {
          setUser(data.user);
          console.log("User Info:", data.user);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <nav className="bg-white px-6 sm:px-16 pt-5 sm:pt-10 flex justify-end items-center gap-4">
      <BellDot className="text-teal-500 cursor-pointer" />

      <div className="pl-4 mt-auto border-l border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-blue-600">
              {user?.name?.[0]?.toUpperCase() || "?"}
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500">
              {user?.isVerified ? "Verified User" : "Unverified"}
            </p>
            <span className="flex items-center gap-6 cursor-pointer">
              <p className="text-sm font-bold">{user?.name}</p>
              <ChevronDown />
            </span>
          </div>
        </div>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
