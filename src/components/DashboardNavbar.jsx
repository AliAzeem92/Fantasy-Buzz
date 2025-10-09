import React from "react";
import { BellDot } from "lucide-react";

const DashboardNavbar = () => {
  return (
    <nav className="bg-white px-10 pt-10 flex justify-end items-center gap-4">
      <BellDot className="text-teal-500 cursor-pointer" />

      {/* User Profile */}
      <div className="pl-4 mt-auto border-l border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-blue-600">A</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Admin </p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
