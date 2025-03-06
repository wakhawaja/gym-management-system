import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <LoadingSpinner />;

  return user ? <Outlet /> : <Navigate to="/login" replace state={{ from: window.location.pathname }} />;
};

export default ProtectedRoute;
