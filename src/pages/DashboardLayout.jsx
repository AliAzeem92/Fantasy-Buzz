import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex  bg-white">
      {/* Sidebar - 20% */}
      <Sidebar />

      {/* Main content - 80% */}
      <div className="flex flex-col w-full ">
        <DashboardNavbar />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
