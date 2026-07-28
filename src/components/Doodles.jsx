import React from "react";
import { motion } from "framer-motion";

/**
 * Hand-drawn monoline SVG Doodles for "The Engineer's Field Journal"
 * Adheres to organic ink stroke aesthetics with rounded stroke caps,
 * subtle wobble, and pastel highlight fills.
 */

// Camera Doodle
export const CameraDoodle = ({ className = "w-8 h-8", color = "#1E293B", accent = "#BAE6FD" }) => (
  <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Body */}
    <path
      d="M15 28 C15 24, 20 22, 28 22 L38 22 L42 15 C44 12, 56 12, 58 15 L62 22 L72 22 C80 22, 85 24, 85 28 L87 64 C87 70, 80 73, 72 73 L28 73 C20 73, 13 70, 15 64 Z"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={accent ? accent : "transparent"}
      fillOpacity="0.25"
    />
    {/* Lens Outer */}
    <circle cx="50" cy="48" r="18" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    {/* Lens Inner */}
    <circle cx="50" cy="48" r="10" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.1" />
    {/* Flash / Button */}
    <path d="M25 22 L25 17 C25 15, 30 15, 30 17 L30 22" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <circle cx="73" cy="34" r="3" fill={color} />
  </svg>
);

// Viewfinder Doodle
export const ViewfinderDoodle = ({ className = "w-10 h-10", color = "#1E293B" }) => (
  <svg viewBox="0 0 80 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Top Left Corner */}
    <path d="M12 28 L12 14 C12 12, 14 12, 28 12" stroke={color} strokeWidth="3" strokeLinecap="round" />
    {/* Top Right Corner */}
    <path d="M52 12 L66 12 C68 12, 68 14, 68 28" stroke={color} strokeWidth="3" strokeLinecap="round" />
    {/* Bottom Left Corner */}
    <path d="M12 52 L12 66 C12 68, 14 68, 28 68" stroke={color} strokeWidth="3" strokeLinecap="round" />
    {/* Bottom Right Corner */}
    <path d="M52 68 L66 68 C68 68, 68 66, 68 52" stroke={color} strokeWidth="3" strokeLinecap="round" />
    {/* Center Reticle */}
    <circle cx="40" cy="40" r="12" stroke={color} strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="40" cy="40" r="2.5" fill={color} />
  </svg>
);

// 35mm Film Roll Doodle
export const FilmRollDoodle = ({ className = "w-8 h-8", color = "#1E293B", accent = "#FEF3C7" }) => (
  <svg viewBox="0 0 90 90" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect
      x="20"
      y="25"
      width="40"
      height="50"
      rx="4"
      stroke={color}
      strokeWidth="3.5"
      fill={accent}
      fillOpacity="0.3"
    />
    <path d="M30 15 L50 15 L50 25 L30 25 Z" stroke={color} strokeWidth="3" fill={color} fillOpacity="0.15" />
    {/* Film Leader strip */}
    <path d="M60 35 L78 35 C82 35, 82 42, 85 46 L85 62 L60 62 Z" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <circle cx="68" cy="45" r="3" fill={color} />
    <circle cx="76" cy="45" r="3" fill={color} />
  </svg>
);

// Kubernetes Wheel Doodle
export const KubernetesWheelDoodle = ({ className = "w-8 h-8", color = "#1E293B", accent = "#BAE6FD" }) => (
  <svg viewBox="0 0 90 90" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Outer Wheel */}
    <circle cx="45" cy="45" r="26" stroke={color} strokeWidth="3.5" fill={accent} fillOpacity="0.2" />
    {/* Hub */}
    <circle cx="45" cy="45" r="8" stroke={color} strokeWidth="3" fill={color} fillOpacity="0.2" />
    {/* 7 Spokes / Handles */}
    {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 45 + 8 * Math.cos(rad);
      const y1 = 45 + 8 * Math.sin(rad);
      const x2 = 45 + 36 * Math.cos(rad);
      const y2 = 45 + 36 * Math.sin(rad);
      return (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" strokeLinecap="round" />
          <circle cx={x2} cy={y2} r="3" stroke={color} strokeWidth="2" fill={color} />
        </g>
      );
    })}
  </svg>
);

// Cloud Doodle
export const CloudDoodle = ({ className = "w-8 h-8", color = "#1E293B", accent = "#BAE6FD" }) => (
  <svg viewBox="0 0 100 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M20 52 C12 52, 10 40, 18 34 C16 22, 28 14, 40 18 C46 10, 62 10, 70 18 C80 14, 90 24, 86 36 C94 42, 90 54, 80 54 Z"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={accent}
      fillOpacity="0.25"
    />
  </svg>
);

// Server Rack Doodle
export const ServerRackDoodle = ({ className = "w-8 h-8", color = "#1E293B", accent = "#BBF7D0" }) => (
  <svg viewBox="0 0 80 90" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Frame */}
    <rect
      x="15"
      y="12"
      width="50"
      height="66"
      rx="5"
      stroke={color}
      strokeWidth="3.5"
      fill={accent}
      fillOpacity="0.15"
    />
    {/* Unit 1 */}
    <rect x="22" y="20" width="36" height="14" rx="3" stroke={color} strokeWidth="2.5" />
    <circle cx="28" cy="27" r="2" fill="#22C55E" />
    <circle cx="34" cy="27" r="2" fill={color} />
    {/* Unit 2 */}
    <rect x="22" y="38" width="36" height="14" rx="3" stroke={color} strokeWidth="2.5" />
    <circle cx="28" cy="45" r="2" fill="#22C55E" />
    <circle cx="34" cy="45" r="2" fill="#22C55E" />
    {/* Unit 3 */}
    <rect x="22" y="56" width="36" height="14" rx="3" stroke={color} strokeWidth="2.5" />
    <circle cx="28" cy="63" r="2" fill="#22C55E" />
    <circle cx="34" cy="63" r="2" fill={color} />
  </svg>
);

// Code Brackets Doodle
export const CodeBracketsDoodle = ({ className = "w-8 h-8", color = "#1E293B", accent = "#FDBA9A" }) => (
  <svg viewBox="0 0 90 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M28 18 L12 35 L28 52" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 56 L52 14" stroke={accent ? accent : color} strokeWidth="4" strokeLinecap="round" />
    <path d="M62 18 L78 35 L62 52" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Car Doodle — hand-drawn side-profile car, matches the sibling icon style (viewBox-fit, color/accent props)
export const CarDoodle = ({ className = "w-10 h-8", color = "#1E293B", accent = "#FDBA9A" }) => (
  <svg
    viewBox="0 0 100 70"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Car doodle illustration"
  >
    {/* Body */}
    <path
      d="M6 46 C6 40, 12 38, 18 37 L26 24 C29 19, 36 17, 44 17 L58 17 C64 17, 69 20, 71 25 L76 37 C84 38, 92 41, 92 47 C92 51, 88 53, 82 53 L16 53 C9 53, 6 50, 6 46 Z"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={accent}
      fillOpacity="0.3"
    />
    {/* Window line */}
    <path d="M27 37 L74 37" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Windshield & rear pillar */}
    <path d="M30 37 L34 24" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M56 37 L58 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Door handle */}
    <path d="M46 42 L52 42" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Wheels */}
    <circle cx="24" cy="54" r="9" stroke={color} strokeWidth="3" fill={accent} fillOpacity="0.15" />
    <circle cx="24" cy="54" r="3.2" stroke={color} strokeWidth="1.8" />
    <circle cx="74" cy="54" r="9" stroke={color} strokeWidth="3" fill={accent} fillOpacity="0.15" />
    <circle cx="74" cy="54" r="3.2" stroke={color} strokeWidth="1.8" />
  </svg>
);

// Notebook Sketch Tachometer Doodle — organic hand-drawn geometry with complete 1-7 RPM scale, tapered needle, and x1000 label
export const TachometerDoodle = ({ className = "w-8 h-8", color = "#1E293B", accent = "#FB7868", rpm = 4200 }) => {
  const MIN_RPM = 1200;
  const MAX_RPM = 7200;
  // Matches the hand-drawn tick marks' actual sweep (~140°, not a full 240°) —
  // measured from the "1" and "7" tick positions relative to the needle pivot.
  const MIN_ANGLE = -83;
  const MAX_ANGLE = 56;

  const normalizedRpm = Math.min(MAX_RPM, Math.max(MIN_RPM, rpm));
  const progress = (normalizedRpm - MIN_RPM) / (MAX_RPM - MIN_RPM);
  const needleAngle = MIN_ANGLE + progress * (MAX_ANGLE - MIN_ANGLE);

  return (
    <svg viewBox="0 0 100 90" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Primary organic pen stroke */}
      <path
        d="M18 61
           C11 48, 13 31, 24 19
           C34 8, 50 6, 64 11
           C78 16, 87 29, 88 44
           C89 51, 87 57, 84 62"
        stroke={color}
        strokeWidth="2.7"
        strokeLinecap="round"
      />

      {/* Imperfect second pen pass */}
      <path
        d="M19 62
           C13 48, 14 32, 25 20
           C35 10, 49 8, 63 12"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.18"
      />

      {/* Thinned coral redline marker stroke (~3.2px) */}
      <path
        d="M72 18
           C82 25 87 35 88 45
           C89 51, 87 57, 84 62"
        stroke={accent}
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Hand-drawn ticks — 7 tick positions for 1-7 RPM */}
      <path d="M22 58 L27 54" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 44 L26 44" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M27 30 L32 34" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M40 20 L42 27" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M57 20 L54 27" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M71 27 L66 33" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M80 40 L74 42" stroke={color} strokeWidth="2.2" strokeLinecap="round" />

      {/* Complete RPM scale 1–7 with visual hierarchy */}
      <g fill={color} fontFamily="var(--font-handwriting)">
        {/* Major RPM Labels */}
        <text x="14" y="61" fontSize="5.5" opacity="0.8">
          1
        </text>
        <text x="36" y="15" fontSize="5.5" opacity="0.8">
          4
        </text>
        <text x="82" y="38" fontSize="5.5" opacity="0.8">
          7
        </text>

        {/* Hierarchical Minor RPM Labels */}
        <text x="12" y="44" fontSize="4.5" opacity="0.45">
          2
        </text>
        <text x="21" y="26" fontSize="4.5" opacity="0.45">
          3
        </text>
        <text x="56" y="16" fontSize="4.5" opacity="0.45">
          5
        </text>
        <text x="73" y="24" fontSize="4.5" opacity="0.45">
          6
        </text>
      </g>

      {/* Analog Dial Label */}
      <text
        x="50"
        y="46"
        textAnchor="middle"
        fill={color}
        opacity="0.4"
        fontSize="4"
        fontFamily="var(--font-mono)"
        letterSpacing="0.05em"
      >
        x1000
      </text>

      {/* Animated tapered needle bounded cleanly inside dial */}
      <g
        transform={`rotate(${needleAngle} 50 59)`}
        style={{
          transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Tapered needle path (thick at pivot 50,59 -> thin at tip 50,25) */}
        <path
          d="M48.5 59 L49.6 25 L50.4 25 L51.5 59 Z"
          fill="#FB7868"
          stroke="#FB7868"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />

        {/* Duplicate sketch echo */}
        <path d="M51 58 L51.6 27" stroke="#FB7868" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />
      </g>

      {/* Center pin */}
      <circle cx="50" cy="59" r="4.5" fill={color} />
      <circle cx="49" cy="58" r="1.2" fill="#FAF8F5" opacity="0.3" />
    </svg>
  );
};

// Saturn Planet Doodle
export const SaturnDoodle = ({ className = "w-8 h-8", color = "#1E293B", accent = "#E9D5FF" }) => (
  <svg viewBox="0 0 90 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Ring Back */}
    <ellipse
      cx="45"
      cy="42"
      rx="36"
      ry="12"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      transform="rotate(-15 45 42)"
    />
    {/* Planet Sphere */}
    <circle cx="45" cy="42" r="20" stroke={color} strokeWidth="3.5" fill={accent} fillOpacity="0.4" />
    {/* Ring Front (occludes bottom sphere) */}
    <path d="M10 48 C16 56, 68 56, 80 38" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    {/* Little Star nearby */}
    <path d="M72 18 L74 24 L80 26 L74 28 L72 34 L70 28 L64 26 L70 24 Z" fill={color} />
  </svg>
);

// Telescope Doodle
export const TelescopeDoodle = ({ className = "w-8 h-8", color = "#1E293B", accent = "#E9D5FF" }) => (
  <svg viewBox="0 0 80 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Tube */}
    <path
      d="M20 54 L58 22 C62 18, 68 22, 65 26 L27 58 Z"
      stroke={color}
      strokeWidth="3.5"
      fill={accent}
      fillOpacity="0.3"
      strokeLinejoin="round"
    />
    {/* Lens front */}
    <ellipse
      cx="61"
      cy="24"
      rx="4"
      ry="7"
      stroke={color}
      strokeWidth="3"
      fill={color}
      fillOpacity="0.2"
      transform="rotate(40 61 24)"
    />
    {/* Tripod Stand */}
    <path d="M38 42 L22 72" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M38 42 L42 74" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M38 42 L56 70" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Star Doodle
export const StarDoodle = ({ className = "w-6 h-6", color = "#1E293B", fill = "#FEF3C7" }) => (
  <svg viewBox="0 0 50 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M25 4 L30 18 L44 20 L33 29 L37 43 L25 34 L13 43 L17 29 L6 20 L20 18 Z"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fill}
    />
  </svg>
);

// Hand Arrow Doodle
export const HandArrowDoodle = ({ className = "w-12 h-6", color = "#1E293B" }) => (
  <svg viewBox="0 0 80 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 20 C24 10, 48 30, 68 18" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M56 12 L70 18 L62 28" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Hand-Drawn Underline Doodle
export const UnderlineDoodle = ({ className = "w-full h-4", color = "currentColor" }) => (
  <svg
    viewBox="0 0 1418 125"
    preserveAspectRatio="none"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
      fill={color}
    />
  </svg>
);

// Sparkle Doodle Cluster
export const SparkleDoodle = ({ className = "w-8 h-8", color = "#FEF3C7" }) => (
  <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M30 6 L33 24 L51 27 L33 30 L30 48 L27 30 L9 27 L27 24 Z"
      fill={color}
      stroke="#1E293B"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <circle cx="48" cy="12" r="3" fill="#FDBA9A" />
    <circle cx="12" cy="46" r="3" fill="#BAE6FD" />
  </svg>
);

// Tape Strip Decorator
export const TapeStripDoodle = ({ className = "w-24 h-6", rotate = "-2deg" }) => (
  <div
    className={`bg-[#FEF3C7]/70 backdrop-blur-xs border-y border-dashed border-[#1E293B]/20 shadow-xs pointer-events-none ${className}`}
    style={{ transform: `rotate(${rotate})` }}
    aria-hidden="true"
  />
);

// Coffee Mug Doodle
export const CoffeeMugDoodle = ({ className = "w-8 h-8", color = "#1E293B", accent = "#FEF3C7" }) => (
  <svg viewBox="0 0 80 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Steam / Vapour (Animated) */}
    <motion.path
      d="M26 14 C24 20, 30 22, 28 28"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      animate={{
        y: [0, -5, -9, 0],
        x: [0, 1.5, -1.5, 0],
        opacity: [0.3, 0.9, 0.2, 0.3],
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.path
      d="M35 10 C33 16, 38 18, 36 24"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      animate={{
        y: [0, -6, -11, 0],
        x: [0, -2, 1, 0],
        opacity: [0.2, 0.8, 0.15, 0.2],
      }}
      transition={{
        duration: 3.4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.9,
      }}
    />
    <motion.path
      d="M44 12 C42 18, 48 20, 46 26"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      animate={{
        y: [0, -6, -10, 0],
        x: [0, -1.5, 2, 0],
        opacity: [0.4, 1, 0.25, 0.4],
      }}
      transition={{
        duration: 3.1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.4,
      }}
    />
    {/* Mug Body */}
    <rect
      x="20"
      y="30"
      width="36"
      height="38"
      rx="6"
      stroke={color}
      strokeWidth="3.5"
      fill={accent}
      fillOpacity="0.5"
    />
    {/* Handle */}
    <path d="M56 36 C66 36, 66 56, 56 60" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

// Wildflowers Doodle — Minimalist, whimsical continuous-line botanical sketch
export const WildflowersDoodle = ({ className = "w-32 h-36", color = "#F8C3AF" }) => (
  <svg
    viewBox="0 0 160 180"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Wildflowers botanical doodle illustration"
  >
    <g stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Tall Main Wildflower (Top Center) — Loose cloud-like petals */}
      <path
        d="M78 40
           C72 32, 62 36, 66 44
           C60 48, 62 58, 70 58
           C72 66, 84 66, 86 58
           C94 58, 98 48, 90 42
           C94 34, 84 30, 78 40 Z"
      />
      {/* Main Flower Center Stamen Lines */}
      <path d="M78 48 C76 45, 80 44, 79 49" strokeWidth="1.6" opacity="0.8" />
      <path d="M80 47 C82 43, 85 46, 81 50" strokeWidth="1.6" opacity="0.8" />

      {/* Main Curving Stem */}
      <path d="M79 62 C77 85, 82 120, 74 165" />

      {/* Main Stem Leaves */}
      <path d="M78 95 C66 90, 56 94, 62 102 C70 102, 76 98, 77 96" />
      <path d="M79 125 C92 120, 102 126, 94 134 C86 133, 80 128, 79 126" />

      {/* Secondary Wildflower (Left) — Asymmetrical cluster */}
      <path
        d="M44 68
           C38 60, 30 64, 34 72
           C28 76, 30 84, 38 84
           C40 92, 50 92, 52 84
           C60 84, 62 76, 56 70
           C58 62, 48 60, 44 68 Z"
      />
      {/* Secondary Stem connecting to main stem */}
      <path d="M45 88 C48 108, 62 125, 75 140" />
      {/* Secondary Stem Leaf */}
      <path d="M50 106 C38 108, 34 116, 44 118 C50 114, 49 110, 48 108" />

      {/* Third Wildflower Bud (Right) */}
      <path
        d="M112 78
           C108 72, 100 75, 104 82
           C98 86, 100 94, 108 94
           C110 100, 118 100, 120 94
           C126 93, 128 86, 122 81
           C124 74, 116 72, 112 78 Z"
      />
      {/* Third Stem */}
      <path d="M112 96 C110 115, 96 138, 76 155" />
      <path d="M106 118 C116 114, 124 120, 116 126 C110 124, 107 121, 106 119" />

      {/* Separate Falling / Curling Leaf Motif (Right Floating) */}
      <path d="M136 122 C146 116, 154 126, 144 136 C136 138, 130 130, 136 122 Z" />
      <path d="M136 122 C139 128, 142 132, 144 136" strokeWidth="1.5" opacity="0.7" />
    </g>
  </svg>
);

// Ship's Helm Doodle — Minimalist, chalk-style continuous botanical/nautical helm sketch
export const ShipHelmDoodle = ({ className = "w-32 h-32", color = "#F8C3AF" }) => {
  // 7 spokes angles (360 / 7 = ~51.43 deg)
  const spokes = [0, 51.43, 102.86, 154.29, 205.71, 257.14, 308.57];

  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ship helm chalk doodle illustration"
    >
      <g stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Central Hub */}
        <circle cx="80" cy="80" r="14" strokeWidth="2.8" />
        <circle cx="80" cy="80" r="5" fill={color} fillOpacity="0.15" strokeWidth="2" />

        {/* Outer Circular Rim */}
        <circle cx="80" cy="80" r="46" strokeWidth="3.2" />
        <circle cx="80" cy="80" r="38" strokeWidth="1.8" opacity="0.4" />

        {/* 7 Spokes & Rounded Knobs/Handles */}
        {spokes.map((deg, idx) => {
          const rad = (deg * Math.PI) / 180;
          const cos = Math.cos(rad);
          const sin = Math.sin(rad);

          // Spoke line from hub (14px) to rim (46px)
          const x1 = 80 + 14 * cos;
          const y1 = 80 + 14 * sin;
          const x2 = 80 + 46 * cos;
          const y2 = 80 + 46 * sin;

          // Handle extending from rim (46px) to (62px)
          const hx1 = 80 + 46 * cos;
          const hy1 = 80 + 46 * sin;
          const hx2 = 80 + 60 * cos;
          const hy2 = 80 + 60 * sin;

          return (
            <g key={idx}>
              {/* Spoke Line */}
              <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2.5" />
              {/* Handle Knob */}
              <line x1={hx1} y1={hy1} x2={hx2} y2={hy2} strokeWidth="3.5" />
              <circle cx={hx2} cy={hy2} r="3.5" fill={color} fillOpacity="0.2" strokeWidth="2" />
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default {
  CameraDoodle,
  ViewfinderDoodle,
  FilmRollDoodle,
  KubernetesWheelDoodle,
  CloudDoodle,
  ServerRackDoodle,
  CodeBracketsDoodle,
  CarDoodle,
  TachometerDoodle,
  SaturnDoodle,
  TelescopeDoodle,
  StarDoodle,
  HandArrowDoodle,
  UnderlineDoodle,
  SparkleDoodle,
  TapeStripDoodle,
  CoffeeMugDoodle,
  WildflowersDoodle,
  ShipHelmDoodle,
};
