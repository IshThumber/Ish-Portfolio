import { AnimatePresence } from "motion/react";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router";
import { Analytics } from "@vercel/analytics/react";

// Regular import
import Loading from "./components/Loading";
import About from "./sections/About";
import HeroMain from "./sections/HeroMain";

// Lazy imports
const ProjectWrapper = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Error = lazy(() => import("./components/Error"));
const Experience = lazy(() => import("./sections/Experiences"));
const Resume = lazy(() => import("./sections/ResumePage"));
const Certifications = lazy(() => import("./sections/Certifications"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HeroMain />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<ProjectWrapper />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AnimatedRoutes />
      <Analytics />
    </Suspense>
  );
};

export default App;
