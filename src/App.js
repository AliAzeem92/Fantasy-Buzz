import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Auth from "./pages/Auth";
import Dashboard from "./pages/DashboardLayout";
import UserManagement from "./pages/UserManagement";
import MarketingCampaigns from "./pages/MarketingCampaigns";
import Leadenboard from "./pages/Leadenboard";
import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";
import Security from "./pages/Security";
import FeedbackSupport from "./pages/FeedbackSupport";
import Contests from "./pages/Contests";
import DashboardLayout from "./pages/DashboardLayout";

// Layout

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Auth />} />

        {/* Dashboard Routes with Layout */}
        <Route
          path="/dashboard/*"
          element={
            <DashboardLayout>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="contests" element={<Contests />} />
                <Route path="user-management" element={<UserManagement />} />
                <Route
                  path="marketing-campaigns"
                  element={<MarketingCampaigns />}
                />
                <Route path="leadenboard" element={<Leadenboard />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="security" element={<Security />} />
                <Route path="feedback-support" element={<FeedbackSupport />} />
              </Routes>
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
