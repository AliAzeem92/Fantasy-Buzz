import useAuthGuard from "../hooks/useAuthGuard";

const RouteGuard = ({ children }) => {
  useAuthGuard(); // This handles all route protection logic

  return children;
};

export default RouteGuard;
