import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ProtectedRoute from "./ProtectedRoute";

// Lazy-loaded pages for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Define public route mapping
const publicRoutes = {
  "/": <Home />,
  "/about": <About />,
  "/services": <Services />,
  "/contact": <Contact />,
  "/login": <Login />,
  "/signup": <Signup />,
};

// Define protected route mapping
const protectedRoutes = {
  "/dashboard": <Dashboard />,
  "/profile": <Profile />,
};

const PageRoutes = () => {
  return (
    <Routes>
      {Object.entries(publicRoutes).map(([path, Component]) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<LoadingSpinner />}>
              {Component}
            </Suspense>
          }
        />
      ))}

      {Object.entries(protectedRoutes).map(([path, Component]) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                {Component}
              </Suspense>
            </ProtectedRoute>
          }
        />
      ))}

      {/* 404 Fallback */}
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default PageRoutes;
