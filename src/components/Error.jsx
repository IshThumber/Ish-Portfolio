import React from "react";
import { Link } from "react-router";
import { FiHome } from "react-icons/fi";
import errorImage from "../assets/error.png"; // Ensure this asset exists, or use a placeholder/icon if preferred
import Navbar from "./Navbar";
import PageTransition from "../components/PageTransition";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-900 selection:bg-purple-500/30 selection:text-purple-200 font-gtReg">
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

        <main className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          {/* Glitchy 404 Text */}
          <h1 className="font-black tracking-tighter text-[8rem] md:text-[12rem] leading-none select-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-green-300 drop-shadow-2xl">404</span>
          </h1>

          <div className="space-y-6 max-w-lg mx-auto relative">
            {/* Decorative Blur Behind Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10" />

            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 font-signature tracking-wider">Lost in the Cloud?</h2>

            <p className="text-lg text-gray-400">The page you're looking for seems to have drifted away. It might have been moved, deleted, or never existed in the first place.</p>

            {/* Optional: Error Image if you want to keep it, styled nicely */}
            <div className="relative mx-auto w-48 h-48 my-8 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
              <img src={errorImage} alt="404" className="w-full h-full object-cover opacity-80" />
            </div>

            <div className="pt-8">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40 active:scale-95"
              >
                <FiHome className="text-lg group-hover:-translate-y-0.5 transition-transform" />
                <span>Return Home</span>
              </Link>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
};

export default Error;
