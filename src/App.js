import { AnimatePresence } from "framer-motion";
import React, { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// Regular import
import Loading from "./components/Loading";

// Lazy imports
const Wrapper = lazy(() => import("./Wrapper"));
const ProjectWrapper = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Error = lazy(() => import("./components/Error"));
const AboutPage = lazy(() => import("./sections/About"));
const Experience = lazy(() => import("./sections/Experiences"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Wrapper />} />
        <Route path="/projects" element={<ProjectWrapper />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <AnimatedRoutes />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
