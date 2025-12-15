import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// Regular import
import Loading from "./components/Loading";
import Test from "./components/Test";

// Lazy imports
const Wrapper = lazy(() => import("./Wrapper"));
const ProjectWrapper = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Error = lazy(() => import("./components/Error"));
const About = lazy(() => import("./sections/About"));
const Experience = lazy(() => import("./sections/Experiences"));
const Resume = lazy(() => import("./sections/ResumePage"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Wrapper />} />
        <Route path="/projects" element={<ProjectWrapper />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
