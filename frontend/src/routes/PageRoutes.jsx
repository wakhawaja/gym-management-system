import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingSpinner from "../components/loadingSpinner";
import ProtectedRoute from "./ProtectedRoute";

// ✅ Lazy-loaded pages for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const NotFound = lazy(() => import("../pages/NotFound"));

const PageRoutes = () => {
  return (
    <Routes>
      {["/", "/about", "/services", "/contact", "/login", "/signup"].map(
        (path, idx) => (
          <Route
            key={idx}
            path={path}
            element={
              <Suspense fallback={<LoadingSpinner />}>
                {path === "/" ? (
                  <Home />
                ) : path === "/about" ? (
                  <About />
                ) : path === "/services" ? (
                  <Services />
                ) : path === "/contact" ? (
                  <Contact />
                ) : path === "/login" ? (
                  <Login />
                ) : (
                  <Signup />
                )}
              </Suspense>
            }
          />
        )
      )}

      {/* ✅ Protected Routes */}
      {["/dashboard", "/profile"].map((path, idx) => (
        <Route
          key={idx}
          path={path}
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                {path === "/dashboard" ? <Dashboard /> : <Profile />}
              </Suspense>
            </ProtectedRoute>
          }
        />
      ))}

      {/* ✅ 404 Fallback */}
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
