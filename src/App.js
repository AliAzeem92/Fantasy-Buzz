import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import Auth from "./pages/Auth";
import UserManagement from "./pages/UserManagement";
import MarketingCampaigns from "./pages/MarketingCampaigns";
import Leadenboard from "./pages/Leadenboard";
import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";
import Security from "./pages/Security";
import FeedbackSupport from "./pages/FeedbackSupport";
import Contests from "./pages/Contests";

// Layout
import DashboardLayout from "./pages/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Auth />} />

        {/* Dashboard Layout with nested routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="contests" replace />} />

          {/* Dashboard sub-routes */}
          <Route path="contests" element={<Contests />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="marketing-campaigns" element={<MarketingCampaigns />} />
          <Route path="leadenboard" element={<Leadenboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="security" element={<Security />} />
          <Route path="feedback-support" element={<FeedbackSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
