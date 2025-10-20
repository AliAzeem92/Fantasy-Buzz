import React from "react";
import { BellDot, ChevronDown } from "lucide-react";
import { useUser } from "../../context/UserContext";

const DashboardNavbar = () => {
  const { user } = useUser();

  return (
    <nav className="bg-white px-6 sm:px-16 pt-5 sm:pt-10 flex justify-end items-center gap-4">
      <BellDot className="text-teal-500 cursor-pointer" />

      <div className="pl-4 mt-auto border-l border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-blue-600">
              {user?.username?.[0]?.toUpperCase() || "?"}
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500">
              {user?.role || "User"}
            </p>
            <span className="flex items-center gap-6 cursor-pointer">
              <p className="text-sm font-bold">{user?.username || "Guest"}</p>
              <ChevronDown />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
