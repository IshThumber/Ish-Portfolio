import React from "react";
import Wrapper from "./Wrapper";
import Resume from "./sections/Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import AboutWrapper from "./sections/About";
import Projects from "./sections/Projects";
import Contact from './sections/Contact';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/rs" element={<Resume />} />
          <Route path="/about" element={<AboutWrapper />} />
          <Route path="/projects" element={<Error />} />
          <Route path="/contact" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
