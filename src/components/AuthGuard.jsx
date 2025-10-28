import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthGuard = ({ children, requireVerification = true }) => {
  const { user, isAuthenticated, loading, authChecked } = useContext(AuthContext);
  const location = useLocation();

  // Show loading while checking authentication
  if (loading || !authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // Not authenticated - redirect to login
  if (!isAuthenticated || !user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Check email verification if required
  if (requireVerification && user.provider === 'local' && !user.isVerified) {
    return <Navigate to="/verify-email" state={{ from: location }} replace />;
  }

  // All checks passed - render protected content
  return children;
};

export default AuthGuard;