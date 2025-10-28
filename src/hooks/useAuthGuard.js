import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const useAuthGuard = () => {
  const { isAuthenticated, user, loading, authChecked } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Don't redirect while still loading
    if (loading || !authChecked) return;

    const currentPath = location.pathname;
    const isPublicRoute = ['/', '/login', '/signup'].includes(currentPath);
    const isDashboardRoute = currentPath.startsWith('/dashboard');
    const isVerifyRoute = currentPath === '/verify-email';

    // If not authenticated and trying to access protected routes
    if (!isAuthenticated && (isDashboardRoute || isVerifyRoute)) {
      navigate('/', { replace: true });
      return;
    }

    // If authenticated but trying to access public routes
    if (isAuthenticated && isPublicRoute) {
      // Check if user needs verification
      if (user?.provider === 'local' && !user?.isVerified) {
        navigate('/verify-email', { replace: true });
      } else {
        navigate('/dashboard/contests', { replace: true });
      }
      return;
    }

    // If authenticated but unverified trying to access dashboard
    if (isAuthenticated && user?.provider === 'local' && !user?.isVerified && isDashboardRoute) {
      navigate('/verify-email', { replace: true });
      return;
    }

    // If verified user trying to access verify page
    if (isAuthenticated && user?.isVerified && isVerifyRoute) {
      navigate('/dashboard/contests', { replace: true });
      return;
    }

  }, [isAuthenticated, user, loading, authChecked, location.pathname, navigate]);

  return { isAuthenticated, user, loading, authChecked };
};

export default useAuthGuard;