import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Polaroid } from "../components/Polaroid";
import { StickyNote } from "../components/StickyNote";
import { CameraDoodle, CarDoodle, SaturnDoodle, TachometerDoodle, FilmRollDoodle } from "../components/Doodles";

// Interactive Constellation Star Canvas Component for Astronomy Tab
const StarConstellationCanvas = () => {
  const canvasRef = useRef(null);
  const mousePosRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const rect = canvas.getBoundingClientRect();
    // Generate static ambient background stars
    const stars = Array.from({ length: 70 }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      radius: Math.random() * 1.5 + 0.8,
      opacity: Math.random() * 0.7 + 0.3,
    }));

    // Draw 5-pointed star helper
    const draw5PointStar = (cx, cy, outerRadius, innerRadius, fillStyle) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / 5;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < 5; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = fillStyle;
      ctx.fill();
    };

    const render = () => {
      const width = canvas.getBoundingClientRect().width;
      const height = canvas.getBoundingClientRect().height;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw static ambient background stars
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw starburst constellation lines to nearby stars on mouse hover
      const mouse = mousePosRef.current;
      if (mouse) {
        // Find nearby stars within 180px radius
        const nearbyStars = stars
          .map((star) => ({
            ...star,
            dist: Math.hypot(star.x - mouse.x, star.y - mouse.y),
          }))
          .filter((star) => star.dist < 190)
          .sort((a, b) => a.dist - b.dist)
          .slice(0, 7);

        // Draw rays connecting mouse position to nearby stars
        nearbyStars.forEach((star) => {
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(star.x, star.y);
          ctx.strokeStyle = "rgba(168, 133, 238, 0.65)";
          ctx.lineWidth = 1.4;
          ctx.stroke();

          // Highlight star endpoint
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "#B497F8";
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius + 1.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        // 3. Draw central 5-pointed purple star cursor at mouse position
        ctx.shadowColor = "#B497F8";
        ctx.shadowBlur = 14;
        draw5PointStar(mouse.x, mouse.y, 9.5, 4.2, "#A885EE");
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mousePosRef.current = null;
  };

  return (
    <div className="relative w-full">
      <div
        className="sky-box relative w-full h-[280px] rounded-[24px] overflow-hidden cursor-crosshair border border-slate-800 shadow-xl"
        style={{ background: "linear-gradient(160deg, #25284B, #1B1E36)" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <p className="sky-note font-handwriting text-[17px] text-[#A885EE] mt-3.5 flex items-center gap-1.5">
        hover the sky to draw your own constellation ✨
      </p>
    </div>
  );
};

// Art-directed Adaptive Polaroid Gallery component for 1-8+ photos
const AdaptivePolaroidGallery = ({ photos, onSelectPhoto }) => {
  const count = photos.length;

  if (!count) return null;

  // 1 Photo: Centered Hero Spotlight
  if (count === 1) {
    return (
      <div className="max-w-md mx-auto pt-2">
        <Polaroid {...photos[0]} onClick={() => onSelectPhoto(photos[0])} />
      </div>
    );
  }

  // 2 Photos: Centered Balanced Duo
  if (count === 2) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto pt-2">
        {photos.map((photo) => (
          <Polaroid key={photo.id} {...photo} onClick={() => onSelectPhoto(photo)} />
        ))}
      </div>
    );
  }

  // 3 Photos: 3-Column Centered Triptych
  if (count === 3) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto pt-2">
        {photos.map((photo) => (
          <Polaroid key={photo.id} {...photo} onClick={() => onSelectPhoto(photo)} />
        ))}
      </div>
    );
  }

  // 4 Photos: Balanced 2x2 Quad Grid
  if (count === 4) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto pt-2">
        {photos.map((photo) => (
          <Polaroid key={photo.id} {...photo} onClick={() => onSelectPhoto(photo)} />
        ))}
      </div>
    );
  }

  // 5 Photos: 3 Top (2 cols each) + 2 Bottom (3 cols each) in 6-col grid (Zero empty gaps)
  if (count === 5) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 pt-2">
        {photos.map((photo, idx) => (
          <div key={photo.id} className={idx < 3 ? "sm:col-span-2" : "sm:col-span-3"}>
            <Polaroid {...photo} onClick={() => onSelectPhoto(photo)} />
          </div>
        ))}
      </div>
    );
  }

  // 6 Photos: Balanced 3x2 Grid
  if (count === 6) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {photos.map((photo) => (
          <Polaroid key={photo.id} {...photo} onClick={() => onSelectPhoto(photo)} />
        ))}
      </div>
    );
  }

  // 7 Photos: 3 Top (span 4/12) + 4 Bottom (span 3/12) in 12-col grid (Zero trailing holes)
  if (count === 7) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 pt-2">
        {photos.map((photo, idx) => (
          <div key={photo.id} className={idx < 3 ? "lg:col-span-4" : "lg:col-span-3"}>
            <Polaroid {...photo} onClick={() => onSelectPhoto(photo)} />
          </div>
        ))}
      </div>
    );
  }

  // 8 Photos: Balanced 4x2 Grid
  if (count === 8) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {photos.map((photo) => (
          <Polaroid key={photo.id} {...photo} onClick={() => onSelectPhoto(photo)} />
        ))}
      </div>
    );
  }

  // >8 Photos: Horizontal Scrollable Filmstrip
  return (
    <div className="relative">
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
        <span>SWIPE / SCROLL HORIZONTALLY ({count} FRAMES ARCHIVED)</span>
        <span>HOLD SHIFT + SCROLL ➔</span>
      </div>
      <div className="flex overflow-x-auto gap-6 pt-2 pb-8 scrollbar-thin scrollbar-thumb-slate-400 snap-x cursor-grab active:cursor-grabbing">
        {photos.map((photo) => (
          <div key={photo.id} className="min-w-[270px] sm:min-w-[290px] max-w-[320px] shrink-0 snap-start">
            <Polaroid {...photo} onClick={() => onSelectPhoto(photo)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const GarageObservatory = () => {
  const [activeTab, setActiveTab] = useState("photography"); // 'photography' | 'automotive' | 'astronomy'
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Automotive RPM state
  const [rpm, setRpm] = useState(4200);
  const isRedline = rpm >= 6400;

  // Multi-tier handwritten message based on RPM
  const rpmMessage =
    rpm >= 6400
      ? "okay okay, that's enough ↗"
      : rpm >= 4800
        ? "now we're talking ↗"
        : rpm <= 2000
          ? "it's barely awake ↑"
          : "go on, rev it a little ↑";

  // Photography Contact Sheet Data
  const photoCollection = [
    {
      id: 1,
      imageSrc: "/gallery/mysore-palace.jpg",
      title: "Palace of Light & Shadows",
      caption: "Indo-Saracenic grandeur under dramatic storm clouds.",
      location: "Mysuru, Karnataka",
      exif: {
        camera: "Samsung Galaxy S25 5G",
        lens: "5.4mm (Main 50MP)",
        shutter: "1/1000s",
        iso: "ISO 50",
      },
      rotate: "-1.8deg",
    },
    {
      id: 2,
      imageSrc: "/gallery/himalayan-peaks.jpg",
      title: "Highland Solitude",
      caption: "Snow peaks cutting through crisp high-altitude air.",
      location: "Himalayas, India",
      exif: {
        camera: "Samsung Galaxy S25 5G",
        lens: "6.7mm (3x Telephoto)",
        shutter: "1/1600s",
        iso: "ISO 50",
      },
      rotate: "2.2deg",
    },
    {
      id: 3,
      imageSrc: "/gallery/tea-gardens.jpg",
      title: "Emerald Contours",
      caption: "Rolling mist over organic tea estate slopes.",
      location: "Nilgiris, South India",
      exif: {
        camera: "Samsung Galaxy S25 5G",
        lens: "5.4mm (Main 50MP)",
        shutter: "1/500s",
        iso: "ISO 80",
      },
      rotate: "-1.2deg",
    },
    {
      id: 4,
      imageSrc: "/gallery/flight-winglet.jpg",
      title: "Aerodynamic Geometry",
      caption: "Split winglet slicing through 35,000 ft clear sky.",
      location: "Cruising Altitude",
      exif: {
        camera: "Samsung Galaxy S25 5G",
        lens: "5.4mm (Main 50MP)",
        shutter: "1/4000s",
        iso: "ISO 50",
      },
      rotate: "1.6deg",
    },
    {
      id: 5,
      imageSrc: "/gallery/vijay-stambha.jpg",
      title: "Tower of Victory",
      caption: "15th-century stone carving details against soft sky.",
      location: "Chittorgarh, Rajasthan",
      exif: {
        camera: "Samsung Galaxy S25 5G",
        lens: "2.2mm (Ultrawide 12MP)",
        shutter: "1/800s",
        iso: "ISO 50",
      },
      rotate: "-2.5deg",
    },
    {
      id: 6,
      imageSrc: "/gallery/tea-estate-cat.jpg",
      title: "Guardian of the Hills",
      caption: "A curious calico taking in the mountain breeze.",
      location: "Nilgiri Estate",
      exif: {
        camera: "Samsung Galaxy S25 5G",
        lens: "6.7mm (3x Telephoto)",
        shutter: "1/1250s",
        iso: "ISO 100",
      },
      rotate: "1.8deg",
    },
    {
      id: 7,
      imageSrc: "/gallery/city-sunset-skyline.jpg",
      title: "Golden Hour Horizon",
      caption: "Fiery clouds over coastal metropolis skyline.",
      location: "Mumbai Coast, India",
      exif: {
        camera: "Samsung Galaxy S25 5G",
        lens: "5.4mm (Main 50MP)",
        shutter: "1/250s",
        iso: "ISO 125",
      },
      rotate: "-1.5deg",
    },
  ];

  return (
    <section id="garage" className="relative py-20 md:py-28 bg-paper-grid border-t border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="section-marker px-2.5 py-1 rounded bg-[#1E293B] text-[#FAF8F5]">
                CHAPTER 03 — THE GARAGE & OBSERVATORY
              </span>
              <span className="font-handwriting text-slate-500 text-base self-end">pick a hobby, any hobby ➔</span>
            </div>
            <h2 className="section-heading">What I do for fun</h2>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-white p-1.5 rounded-xl border border-slate-300 shadow-2xs font-mono text-xs">
            <button
              onClick={() => setActiveTab("photography")}
              className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all ${
                activeTab === "photography"
                  ? "bg-[#1E293B] text-white shadow-xs font-semibold"
                  : "text-slate-600 hover:text-[#1E293B]"
              }`}
            >
              <CameraDoodle className="w-4 h-4" color={activeTab === "photography" ? "#BAE6FD" : "#1E293B"} />
              <span>PHOTOGRAPHY</span>
            </button>

            <button
              onClick={() => setActiveTab("automotive")}
              className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all ${
                activeTab === "automotive"
                  ? "bg-[#1E293B] text-white shadow-xs font-semibold"
                  : "text-slate-600 hover:text-[#1E293B]"
              }`}
            >
              <CarDoodle className="w-6 h-5 sm:w-7 sm:h-5" color={activeTab === "automotive" ? "#FDBA9A" : "#1E293B"} />
              <span>AUTOMOTIVE</span>
            </button>

            <button
              onClick={() => setActiveTab("astronomy")}
              className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all ${
                activeTab === "astronomy"
                  ? "bg-[#1E293B] text-white shadow-xs font-semibold"
                  : "text-slate-600 hover:text-[#1E293B]"
              }`}
            >
              <SaturnDoodle className="w-4 h-4" color={activeTab === "astronomy" ? "#E9D5FF" : "#1E293B"} />
              <span>ASTRONOMY</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Photography / Cinematography Contact Sheet */}
        {activeTab === "photography" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Film Strip Header Banner */}
            <div className="bg-[#1E293B] text-white p-4 rounded-xl shadow-md flex items-center justify-between border border-slate-700">
              <div className="flex items-center gap-3">
                <FilmRollDoodle className="w-8 h-8 text-[#FEF3C7]" color="#FEF3C7" accent="#FDBA9A" />
                <div>
                  <h3 className="font-mono text-sm font-bold tracking-wider text-[#BAE6FD]">
                    35MM CONTACT SHEET // FRAME ARCHIVE
                  </h3>
                  <p className="font-handwriting text-slate-300 text-xs">
                    "Observation & visual storytelling through prime lenses. Click any photo to enlarge frame."
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>EXP: {String(photoCollection.length).padStart(2, "0")}/36</span>
                <span>F/1.4 - F/2.8</span>
              </div>
            </div>

            {/* Art-Directed Adaptive Polaroid Composition */}
            <AdaptivePolaroidGallery photos={photoCollection} onSelectPhoto={setSelectedPhoto} />

            {/* Lightbox Modal */}
            {selectedPhoto && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 select-none"
                onClick={() => setSelectedPhoto(null)}
                onContextMenu={(e) => e.preventDefault()}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-[#1E293B] text-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-700 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800/80 text-slate-300 hover:text-white flex items-center justify-center font-mono text-lg transition-colors border border-slate-600 cursor-pointer"
                  >
                    ✕
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh]">
                    <div
                      className="md:col-span-8 bg-black flex items-center justify-center overflow-hidden min-h-[300px] select-none"
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <img
                        src={selectedPhoto.imageSrc}
                        alt={selectedPhoto.title}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        className="w-full h-full object-contain max-h-[75vh] select-none pointer-events-none"
                      />
                    </div>
                    <div className="md:col-span-4 p-6 flex flex-col justify-between space-y-6 bg-[#1E293B] overflow-y-auto">
                      <div>
                        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#BAE6FD]">
                          <span>📍 {selectedPhoto.location}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
                        <p className="font-handwriting text-slate-300 text-lg leading-relaxed">
                          <span className="inline-block mr-1.5">"</span>
                          {selectedPhoto.caption}
                          <span className="inline-block ml-1">"</span>
                        </p>
                      </div>

                      <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/80 space-y-2 font-mono text-xs text-slate-300">
                        <div className="text-[#FDBA9A] font-semibold tracking-wider text-[11px] uppercase mb-2 border-b border-slate-700 pb-1">
                          📷 EXIF DATA
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">CAMERA:</span>
                          <span className="text-white font-medium">{selectedPhoto.exif.camera}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">LENS:</span>
                          <span className="text-white font-medium">{selectedPhoto.exif.lens}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">SHUTTER:</span>
                          <span className="text-white font-medium">{selectedPhoto.exif.shutter}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">ISO:</span>
                          <span className="text-white font-medium">{selectedPhoto.exif.iso}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Handwritten Commentary */}
            <div className="flex justify-end pt-2">
              <StickyNote color="blue" title="Optics Note" rotate="1deg" className="max-w-md">
                "Framing light is an exercise in composition — just like structuring clean decoupled software
                functions."
              </StickyNote>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Automotive Engineering & Notebook Tachometer Sketch */}
        {activeTab === "automotive" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="journal-card p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left 55%: Notebook Sketch Interactive Tachometer */}
              <div className="lg:col-span-7 bg-[#FAF8F5] p-6 rounded-xl border border-slate-300 flex flex-col items-center justify-center text-center relative">
                {/* Hand-Drawn Tachometer Sketch */}
                <div className="relative w-56 h-48 flex items-center justify-center">
                  <TachometerDoodle className="w-52 h-44" color="#1E293B" accent="#FB7868" rpm={rpm} />
                </div>

                {/* Instrument Digital Readout formatted as 7,200 */}
                <div className="mt-1 font-mono text-center">
                  <motion.span
                    animate={{ scale: isRedline ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 0.25 }}
                    className={`font-mono text-3xl sm:text-4xl font-semibold tracking-[-0.06em] block leading-none ${
                      isRedline ? "text-[#FB7868]" : "text-[#1E293B]"
                    }`}
                  >
                    {rpm.toLocaleString()}
                  </motion.span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1 font-mono">
                    RPM
                  </span>
                </div>

                {/* Control Buttons: − EASE OFF / + REV UP */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => setRpm((r) => Math.max(1200, r - 800))}
                    className="px-4 py-2 rounded bg-white border border-slate-300 text-xs font-mono font-semibold text-[#1E293B] hover:bg-slate-100 transition-colors shadow-2xs"
                  >
                    − EASE OFF
                  </button>
                  <button
                    onClick={() => setRpm((r) => Math.min(7200, r + 800))}
                    className="px-4 py-2 rounded bg-[#1E293B] text-white text-xs font-mono font-semibold hover:bg-slate-800 transition-colors shadow-2xs"
                  >
                    + REV UP
                  </button>
                </div>

                {/* Handwritten Annotation Hint */}
                <p className="font-handwriting text-slate-600 text-base mt-3">{rpmMessage}</p>
              </div>

              {/* Right 45%: Authentic Personal Story */}
              <div className="lg:col-span-5 space-y-5">
                <span className="system-label bg-[#1E293B] text-[#FDBA9A] px-3 py-1 rounded w-fit">
                  AUTOMOTIVE CULTURE
                </span>

                <h3 className="project-title">Machines built around precision.</h3>

                <p className="body-text">
                  I've always been fascinated by machines built around precision. From aerodynamics and weight
                  distribution to the tiny engineering decisions that change how a car behaves, automotive design
                  scratches the same curiosity that drew me toward systems engineering.
                </p>

                <StickyNote color="coral" title="Field Note" rotate="-1deg">
                  "Different machines. Same obsession with understanding what happens under load."
                </StickyNote>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Astronomy Interactive Constellation Sky Box */}
        {activeTab === "astronomy" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="journal-card p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left 55%: Sky Box Interactive Canvas */}
              <div className="lg:col-span-7">
                <StarConstellationCanvas />
              </div>

              {/* Right 45%: Astronomy Personal Copy */}
              <div className="lg:col-span-5 space-y-4">
                <span className="system-label bg-[#1E293B] text-[#E9D5FF] px-3 py-1 rounded w-fit">
                  DEEP SPACE & ASTRONOMY
                </span>

                <h3 className="project-title text-[#1E293B]">Small in a good way</h3>

                <p className="body-text">
                  Astronomy keeps my ego in check. A weekend telescope session reminds me that most of my "urgent"
                  problems are wonderfully small against a sky full of light that's millions of years old.
                </p>

                <span className="font-handwriting text-[19px] text-[#A855F7] block mt-2">
                  favorite: Saturn's rings, obviously 🪐
                </span>

                <StickyNote color="purple" title="Observatory Note" rotate="-1deg" className="mt-4">
                  "Patience under dark skies — the universe doesn't hurry, and neither should good code."
                </StickyNote>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GarageObservatory;
