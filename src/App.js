// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// // Pages
// import Auth from "./pages/Auth";
// import UserManagement from "./pages/UserManagement";
// import MarketingCampaigns from "./pages/MarketingCampaigns";
// import Leadenboard from "./pages/Leadenboard";
// import Analytics from "./pages/Analytics";
// import Notifications from "./pages/Notifications";
// import Security from "./pages/Security";
// import FeedbackSupport from "./pages/FeedbackSupport";
// import Contests from "./pages/Contests";

// // Layout
// import DashboardLayout from "./pages/DashboardLayout";
// import ProtectedRoute from "./components/ProtectedRoute";
// import CreateContest from "./pages/CreateContest";
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//     <Router>
//       <Toaster position="top-right" />
//       <Routes>
//         {/* Public route */}
//         <Route path="/" element={<Auth />} />

//         {/* Dashboard Layout with nested routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Navigate to="contests" replace />} />

//           {/* Dashboard sub-routes */}
//           <Route path="create" element={<CreateContest />} />
//           <Route path="contests" element={<Contests />} />
//           <Route path="user-management" element={<UserManagement />} />
//           <Route path="marketing-campaigns" element={<MarketingCampaigns />} />
//           <Route path="leadenboard" element={<Leadenboard />} />
//           <Route path="analytics" element={<Analytics />} />
//           <Route path="notifications" element={<Notifications />} />
//           <Route path="security" element={<Security />} />
//           <Route path="feedback-support" element={<FeedbackSupport />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
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
import CreateContest from "./pages/CreateContest";

// Layout
import DashboardLayout from "./pages/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

// Route configuration for better maintainability
const routes = [
  { path: "create", element: <CreateContest />, label: "Create Contest" },
  { path: "contests", element: <Contests />, label: "Contests" },
  {
    path: "user-management",
    element: <UserManagement />,
    label: "User Management",
  },
  {
    path: "marketing-campaigns",
    element: <MarketingCampaigns />,
    label: "Marketing Campaigns",
  },
  { path: "leadenboard", element: <Leadenboard />, label: "Leaderboard" },
  { path: "analytics", element: <Analytics />, label: "Analytics" },
  { path: "notifications", element: <Notifications />, label: "Notifications" },
  { path: "security", element: <Security />, label: "Security" },
  {
    path: "feedback-support",
    element: <FeedbackSupport />,
    label: "Feedback & Support",
  },
];

function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#10B981",
              secondary: "#fff",
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: "#EF4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Auth />} />

        {/* Redirect from /login to root */}
        <Route path="/login" element={<Navigate to="/" replace />} />

        {/* Dashboard Layout with nested routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* Default dashboard route */}
          <Route index element={<Navigate to="contests" replace />} />

          {/* Map through routes configuration */}
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {/* Catch all route for dashboard - redirect to contests */}
          <Route path="*" element={<Navigate to="contests" replace />} />
        </Route>

        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
