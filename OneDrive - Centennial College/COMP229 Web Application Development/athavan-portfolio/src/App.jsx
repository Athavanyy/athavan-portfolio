import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./NavBar";
import Home from "./Home";
import ProtectedRoute from "./components/ProtectedRoute";

const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const ProjectDetail = lazy(() => import("./ProjectDetail"));
const Education = lazy(() => import("./Education"));
const Services = lazy(() => import("./Services"));
const Contact = lazy(() => import("./Contact"));
const SignIn = lazy(() => import("./components/SignIn"));
const SignUp = lazy(() => import("./components/SignUp"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const ProjectForm = lazy(() => import("./components/ProjectForm"));
const EducationForm = lazy(() => import("./components/EducationForm"));

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <NavBar />
        <Suspense
          fallback={
            <div className="page-loading" role="status" aria-live="polite">
              Loading content…
            </div>
          }
        >
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/education" element={<Education />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/project-form"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <ProjectForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/education-form"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <EducationForm />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </AuthProvider>
  );
}

export default App;
