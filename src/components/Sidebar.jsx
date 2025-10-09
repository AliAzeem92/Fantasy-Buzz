import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Contests", path: "/dashboard/contests" },
    { label: "User Management", path: "/dashboard/user-management" },
    { label: "Marketing Campaigns", path: "/dashboard/marketing-campaigns" },
    { label: "Leadenboard Control", path: "/dashboard/leadenboard" },
    { label: "Analytics", path: "/dashboard/analytics" },
  ];

  const settingsItems = [
    { label: "Notifications", path: "/dashboard/notifications" },
    { label: "Security", path: "/dashboard/security" },
    { label: "Feedback & Support", path: "/dashboard/feedback-support" },
  ];

  return (
    <div className="w-64 h-screen shadow-lg fixed left-0 top-0 p-6 flex flex-col bg-[#020b2d]">
      {/* Logo/Header */}
      <div className="flex flex-col -rotate-12 ">
        <h1 className="text-2xl font-extrabold tracking-wide text-white ">
          Fantasy Buzz
        </h1>
        <p className="text-sm text-gray-400">© The Tech Buzz</p>
      </div>

      {/* Create Contest Button */}
      <button
        onClick={() => navigate("/dashboard/contests")}
        className="flex gap-1 items-center w-full mt-28 bg-[#12bab0] text-white py-2 px-4 rounded-full font-medium mb-8 hover:bg-[#149e94] transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        <Plus className="w-5" />
        <span>Create New Contest</span>
      </button>

      {/* Navigation Menu */}
      <nav className="flex-1 border-t border-gray-300 mt-4 pt-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setActiveItem(item.path);
                  navigate(item.path);
                }}
                className={`w-full text-left py-1 rounded-lg transition-all duration-200 font-medium ${
                  activeItem === item.path
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <hr className="my-6 border-gray-600" />

        <ul className="space-y-2">
          {settingsItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setActiveItem(item.path);
                  navigate(item.path);
                }}
                className={`w-full text-left py-1 rounded-lg transition-all duration-200 font-medium ${
                  activeItem === item.path
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
