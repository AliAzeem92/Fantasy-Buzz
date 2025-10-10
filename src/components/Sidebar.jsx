import React, { useState } from "react";
import { Plus, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
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

  const handleNavigate = (path) => {
    setActiveItem(path);
    navigate(path);
    setIsOpen(false); // Close sidebar when a menu item is clicked (on mobile)
  };

  return (
    <>
      {/* ====== Mobile Toggle Button (☰) ====== */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#12bab0] text-white p-2 rounded-md shadow-md hover:bg-[#149e94] transition-colors"
      >
        <Menu size={24} />
      </button>

      {/* ====== Sidebar ====== */}
      <div
        className={`fixed md:static top-0 left-0 h-full bg-[#020b2d] text-white shadow-lg p-6 flex flex-col transition-transform duration-300 ease-in-out z-40 
        w-4/5 sm:w-2/5 md:w-[20%]
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        {/* Close button (only on mobile) */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 text-white"
        >
          <X size={24} />
        </button>

        {/* Logo/Header */}
        <div className="flex flex-col -rotate-12 mt-2 ">
          <a href="/" className="text-center">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide ">
              Fantasy Buzz
            </h1>
            <p className="text-sm text-gray-400">© The Tech Buzz</p>
          </a>
        </div>

        {/* Create Contest Button */}
        <button
          onClick={() => handleNavigate("/dashboard/contests")}
          className="flex gap-1 items-center w-fit mt-16 bg-[#12bab0] text-white py-2 px-4 rounded-full font-medium mb-8 hover:bg-[#149e94] transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <Plus className="w-5" />
          <span>Create New Contest</span>
        </button>

        {/* Navigation Menu */}
        <nav className="flex-1 border-t border-gray-300 mt-4 pt-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigate(item.path)}
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
                  onClick={() => handleNavigate(item.path)}
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

      {/* ====== Background Overlay (for mobile) ====== */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
