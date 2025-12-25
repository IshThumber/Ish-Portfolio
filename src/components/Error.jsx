import React from "react";
import { Link } from "react-router";
import { FiHome, FiArrowLeft, FiCompass } from "react-icons/fi";
import Navbar from "./Navbar";
import PageTransition from "../components/PageTransition";
import CustomHeadings from "../components/CustomHeadings";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-gtReg">
      <title>404 | Page Not Found</title>
      <meta name="description" content="The page you are looking for does not exist." />

      <Navbar />

      <PageTransition>
        {/* Background Texture */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-20"
          style={{ backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        ></div>

        <div className="h-24 lg:h-32" />

        <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 mt-4">
          {/* Error Content - More impactful design */}
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Decorative Glow Blobs */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-30 -z-10"
              style={{ backgroundImage: "linear-gradient(to bottom right, var(--color-careys-pink-500), var(--color-hopbush-600))" }}
            />
            <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-20 -z-10" style={{ backgroundColor: "var(--color-gigas-500)" }} />

            {/* Massive 404 */}
            <h1 className="font-black tracking-tighter text-[10rem] md:text-[16rem] lg:text-[20rem] leading-none select-none relative">
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, var(--color-careys-pink-400), var(--color-hopbush-500), var(--color-gigas-500))" }}
              >
                404
              </span>

              {/* Floating decorative elements */}
              <span className="absolute -top-8 -right-8 text-6xl animate-bounce" style={{ animationDuration: "3s" }}>
                ✨
              </span>
              <span className="absolute bottom-0 -left-4 text-4xl animate-pulse">🌙</span>
            </h1>

            {/* Content Card */}
            <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-10 shadow-2xl mt-8 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20"
                style={{ backgroundImage: "linear-gradient(to bottom left, var(--color-careys-pink-400), transparent)" }}
              />

              {/* Icon */}
              <div
                className="mx-auto w-16 h-16 mb-6 rounded-full flex items-center justify-center"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--color-careys-pink-500), var(--color-hopbush-500))",
                  boxShadow: "0 8px 24px -4px color-mix(in srgb, var(--color-careys-pink-500) 40%, transparent)",
                }}
              >
                <FiCompass size={28} className="text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 font-signature tracking-wider mb-4">Lost in the Cloud?</h2>

              <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
                Don't worry, even the best explorers take wrong turns. This page might have been moved or deleted.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    backgroundImage: "linear-gradient(to right, var(--color-careys-pink-500), var(--color-hopbush-500))",
                    boxShadow: "0 10px 25px -5px color-mix(in srgb, var(--color-careys-pink-500) 35%, transparent)",
                  }}
                >
                  <FiHome className="text-lg group-hover:-translate-y-0.5 transition-transform" />
                  <span>Take Me Home</span>
                </Link>

                <button
                  onClick={() => window.history.back()}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gray-800/80 text-gray-200 font-bold border border-gray-600 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-gray-700/80"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-careys-pink-400)";
                    e.currentTarget.style.color = "var(--color-careys-pink-300)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  <FiArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
                  <span>Go Back</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
};

export default Error;
