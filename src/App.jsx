import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

// Components
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

// Sections
import HeroViewfinder from "./sections/HeroViewfinder";
import JourneyOdyssey from "./sections/JourneyOdyssey";
import GarageObservatory from "./sections/GarageObservatory";
import ArtifactsProjects from "./sections/ArtifactsProjects";
import TechnicalToolbox from "./sections/TechnicalToolbox";
import PitStopContact from "./sections/PitStopContact";

const App = () => {
  const [activeSection, setActiveSection] = useState("viewfinder");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "viewfinder",
        "odyssey",
        "garage",
        "artifacts",
        "pitstop",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E293B] font-primary relative selection:bg-[#FDBA9A]/30 selection:text-[#1E293B]">
      {/* Custom Viewfinder Cursor for Desktop */}
      <CustomCursor />

      {/* Field Journal Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Journal Flow */}
      <main>
        {/* 01 / THE VIEWFINDER */}
        <HeroViewfinder />

        {/* 02 / THE ODYSSEY */}
        <JourneyOdyssey />

        {/* 03 / THE GARAGE & OBSERVATORY */}
        <GarageObservatory />

        {/* 04 / THE ARTIFACTS (Visual Centerpiece) */}
        <ArtifactsProjects />

        {/* TECHNICAL TOOLBOX */}
        <TechnicalToolbox />

        {/* 05 / THE PIT STOP */}
        <PitStopContact />
      </main>

      <Analytics />
    </div>
  );
};

export default App;
