import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/error.png";
import Navbar from "./Navbar";

const Error = () => {
  return (
    <div className="min-h-screen transition-all duration-500">
      <header className="fixed z-50 w-full">
        <Navbar />
      </header>
      <div className="h-32" />
      <main className="relative w-[97%] md:w-5/6 p-2 lg:p-6 font-gtReg text-wild-sand-200 mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <h1 className="font-black tracking-tight font-urbanist text-7xl lg:text-9xl bg-gradient-to-r from-purple-300 to-genoa-300 inline-block text-transparent bg-clip-text">
            404
          </h1>
          <p className="text-2xl font-semibold text-wild-sand-300">
            Oops! The page you're looking for doesn't exist.
          </p>
          <img
            src={errorImage}
            alt="Error"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
          <Link
            to="/"
            className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-gradient-to-r from-purple-500 to-purple-700 text-wild-sand-100 font-bold transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Error;
