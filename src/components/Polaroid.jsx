import React, { useState } from "react";
import { CameraDoodle } from "./Doodles";

export const Polaroid = ({
  imageSrc,
  title,
  caption,
  location,
  exif = {
    camera: "Samsung Galaxy S25 5G",
    lens: "5.4mm f/1.8",
    shutter: "1/500s",
    iso: "ISO 50",
  },
  rotate = "1.5deg",
  className = "",
  onClick,
}) => {
  const [showExif, setShowExif] = useState(false);

  return (
    <div
      onClick={onClick}
      onContextMenu={(e) => e.preventDefault()}
      className={`group relative bg-white p-3.5 pb-6 border border-slate-200 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${showExif ? "z-30" : "z-10"} ${className}`}
      style={{ transform: `rotate(${rotate})`, zIndex: showExif ? 30 : 1 }}
      onMouseEnter={() => setShowExif(true)}
      onMouseLeave={() => setShowExif(false)}
    >
      {/* Image container */}
      <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden rounded-xs border border-slate-100 select-none">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title || caption}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#FAF8F5] p-4 text-center">
            <CameraDoodle className="w-10 h-10 mb-2 opacity-60" />
            <span className="font-handwriting text-slate-500 text-sm">{title || "Field Snap"}</span>
          </div>
        )}

        {/* Viewfinder overlay frame on hover */}
        <div className="absolute inset-2 border border-white/60 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-2">
          <div className="flex justify-between text-[10px] font-mono text-white drop-shadow-xs">
            <span>[+] REC</span>
            <span>{location || "OBSERVATION"}</span>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-white drop-shadow-xs">
            <span>{exif.lens}</span>
            <span>{exif.shutter}</span>
          </div>
        </div>
      </div>

      {/* Polaroid Caption bottom area */}
      <div className="mt-3.5 px-1 flex items-baseline justify-between">
        <p className="font-handwriting text-slate-800 text-lg leading-tight">{caption || title}</p>
        {location && (
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider shrink-0 ml-2">
            📍 {location}
          </span>
        )}
      </div>

      {/* EXIF details drawer */}
      {showExif && (
        <div className="absolute left-2 right-2 -bottom-12 bg-[#1E293B] text-white p-2.5 rounded-md text-xs font-mono shadow-lg z-20 transition-all duration-200 border border-slate-700">
          <div className="flex justify-between items-center text-slate-300 pb-1 border-b border-slate-700 text-[11px]">
            <span>📷 {exif.camera}</span>
            <span>{exif.iso}</span>
          </div>
          <div className="mt-1 text-slate-400 text-[10px] flex justify-between">
            <span>Focal: {exif.lens}</span>
            <span>Exp: {exif.shutter}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Polaroid;
