import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner"; // Moved to components
import ProtectedRoute from "./ProtectedRoute"; // NEW: Protects auth routes

// Lazy-loaded pages for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Dashboard = lazy(() => import("../pages/Dashboard")); // NEW: Auth Required
const Profile = lazy(() => import("../pages/Profile")); // NEW: Auth Required
const NotFound = lazy(() => import("../pages/NotFound"));

const PageRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes (Require Authentication) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default PageRoutes;
