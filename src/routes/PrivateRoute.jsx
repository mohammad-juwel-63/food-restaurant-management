import { use } from "react";
import { AuthContexts } from "../contexts/AuthContexts/AuthContexts";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContexts);

  if (loading) {
    return <span className="flex justify-center items-center">Loading...</span>;
  }

  if (user) {
    return children;
  }

  // Redirect to login page with intended destination as state
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
