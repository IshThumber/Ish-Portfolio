import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Test = () => {
  // --color-wedgewood-50: #f4f7fb;
  // --color-wedgewood-100: #e8eff6;
  // --color-wedgewood-200: #ccddeb;
  // --color-wedgewood-300: #9fc2da;
  // --color-wedgewood-400: #6ba1c5;
  // --color-wedgewood-500: #4682a9;
  // --color-wedgewood-600: #366b93;
  // --color-wedgewood-700: #2d5777;
  // --color-wedgewood-800: #294a63;
  // --color-wedgewood-900: #263f54;
  // --color-wedgewood-950: #192938;

  // --color-mantle-50: #f6f7f7;
  // --color-mantle-100: #e0e7e4;
  // --color-mantle-200: #c1cec8;
  // --color-mantle-300: #9aaea7;
  // --color-mantle-400: #81968f;
  // --color-mantle-500: #5b716a;
  // --color-mantle-600: #475a54;
  // --color-mantle-700: #3b4a45;
  // --color-mantle-800: #323d3a;
  // --color-mantle-900: #2c3532;
  // --color-mantle-950: #171c1b;

  // --color-hopbush-50: #faf5f9;
  // --color-hopbush-100: #f6edf4;
  // --color-hopbush-200: #eedceb;
  // --color-hopbush-300: #e1c0da;
  // --color-hopbush-400: #cd99c1;
  // --color-hopbush-500: #b874a7;
  // --color-hopbush-600: #a55d8f;
  // --color-hopbush-700: #8c4a76;
  // --color-hopbush-800: #753f63;
  // --color-hopbush-900: #633854;
  // --color-hopbush-950: #3a1d30;

  // --color-kimberly-50: #f3f6fa;
  // --color-kimberly-100: #e9eef6;
  // --color-kimberly-200: #d8deed;
  // --color-kimberly-300: #bfc9e2;
  // --color-kimberly-400: #a5aed4;
  // --color-kimberly-500: #8e95c6;
  // --color-kimberly-600: #6a6eae;
  // --color-kimberly-700: #64669e;
  // --color-kimberly-800: #535580;
  // --color-kimberly-900: #474a68;
  // --color-kimberly-950: #2a2b3c;

  // --color-loblolly-50: #f5f7f9;
  // --color-loblolly-100: #e9ecf0;
  // --color-loblolly-200: #d8dee5;
  // --color-loblolly-300: #c8d1da;
  // --color-loblolly-400: #9dacbd;
  // --color-loblolly-500: #8695ab;
  // --color-loblolly-600: #74819c;
  // --color-loblolly-700: #68728d;
  // --color-loblolly-800: #586075;
  // --color-loblolly-900: #49505f;
  // --color-loblolly-950: #2f323c;

  // --color-careys-pink-50: #fbf5f5;
  // --color-careys-pink-100: #f8ebec;
  // --color-careys-pink-200: #f1dadd;
  // --color-careys-pink-300: #e5bcc1;
  // --color-careys-pink-400: #d89ca4;
  // --color-careys-pink-500: #c3707d;
  // --color-careys-pink-600: #ac5265;
  // --color-careys-pink-700: #904053;
  // --color-careys-pink-800: #793849;
  // --color-careys-pink-900: #683342;
  // --color-careys-pink-950: #391821;

  // --color-gigas-50: #faf7fd;
  // --color-gigas-100: #f2ecfb;
  // --color-gigas-200: #e7dcf8;
  // --color-gigas-300: #d4c0f2;
  // --color-gigas-400: #ba98e8;
  // --color-gigas-500: #9f70dc;
  // --color-gigas-600: #8951cc;
  // --color-gigas-700: #733eb2;
  // --color-gigas-800: #5e358c;
  // --color-gigas-900: #512e75;
  // --color-gigas-950: #341655;

  // --color-kashmir-blue-50: #f5f7fa;
  // --color-kashmir-blue-100: #eaedf4;
  // --color-kashmir-blue-200: #d0d9e7;
  // --color-kashmir-blue-300: #a7b9d2;
  // --color-kashmir-blue-400: #7894b8;
  // --color-kashmir-blue-500: #5777a0;
  // --color-kashmir-blue-600: #445f85;
  // --color-kashmir-blue-700: #384d6c;
  // --color-kashmir-blue-800: #31415b;
  // --color-kashmir-blue-900: #2d394d;
  // --color-kashmir-blue-950: #1e2633;
  const colors = [
    { "wedgewood-50": "#f4f7fb" },
    { "wedgewood-100": "#e8eff6" },
    { "wedgewood-200": "#ccddeb" },
    { "wedgewood-300": "#9fc2da" },
    { "wedgewood-400": "#6ba1c5" },
    { "wedgewood-500": "#4682a9" },
    { "wedgewood-600": "#366b93" },
    { "wedgewood-700": "#2d5777" },
    { "wedgewood-800": "#294a63" },
    { "wedgewood-900": "#263f54" },
    { "wedgewood-950": "#192938" },
    { "mantle-50": "#f6f7f7" },
    { "mantle-100": "#e0e7e4" },
    { "mantle-200": "#c1cec8" },
    { "mantle-300": "#9aaea7" },
    { "mantle-400": "#81968f" },
    { "mantle-500": "#5b716a" },
    { "mantle-600": "#475a54" },
    { "mantle-700": "#3b4a45" },
    { "mantle-800": "#323d3a" },
    { "mantle-900": "#2c3532" },
    { "mantle-950": "#171c1b" },
    { "hopbush-50": "#faf5f9" },
    { "hopbush-100": "#f6edf4" },
    { "hopbush-200": "#eedceb" },
    { "hopbush-300": "#e1c0da" },
    { "hopbush-400": "#cd99c1" },
    { "hopbush-500": "#b874a7" },
    { "hopbush-600": "#a55d8f" },
    { "hopbush-700": "#8c4a76" },
    { "hopbush-800": "#753f63" },
    { "hopbush-900": "#633854" },
    { "hopbush-950": "#3a1d30" },
    { "kimberly-50": "#f3f6fa" },
    { "kimberly-100": "#e9eef6" },
    { "kimberly-200": "#d8deed" },
    { "kimberly-300": "#bfc9e2" },
    { "kimberly-400": "#a5aed4" },
    { "kimberly-500": "#8e95c6" },
    { "kimberly-600": "#6a6eae" },
    { "kimberly-700": "#64669e" },
    { "kimberly-800": "#535580" },
    { "kimberly-900": "#474a68" },
    { "kimberly-950": "#2a2b3c" },
    { "loblolly-50": "#f5f7f9" },
    { "loblolly-100": "#e9ecf0" },
    { "loblolly-200": "#d8dee5" },
    { "loblolly-300": "#c8d1da" },
    { "loblolly-400": "#9dacbd" },
    { "loblolly-500": "#8695ab" },
    { "loblolly-600": "#74819c" },
    { "loblolly-700": "#68728d" },
    { "loblolly-800": "#586075" },
    { "loblolly-900": "#49505f" },
    { "loblolly-950": "#2f323c" },
    { "careys-pink-50": "#fbf5f5" },
    { "careys-pink-100": "#f8ebec" },
    { "careys-pink-200": "#f1dadd" },
    { "careys-pink-300": "#e5bcc1" },
    { "careys-pink-400": "#d89ca4" },
    { "careys-pink-500": "#c3707d" },
    { "careys-pink-600": "#ac5265" },
    { "careys-pink-700": "#904053" },
    { "careys-pink-800": "#793849" },
    { "careys-pink-900": "#683342" },
    { "careys-pink-950": "#391821" },
    { "gigas-50": "#faf7fd" },
    { "gigas-100": "#f2ecfb" },
    { "gigas-200": "#e7dcf8" },
    { "gigas-300": "#d4c0f2" },
    { "gigas-400": "#ba98e8" },
    { "gigas-500": "#9f70dc" },
    { "gigas-600": "#8951cc" },
    { "gigas-700": "#733eb2" },
    { "gigas-800": "#5e358c" },
    { "gigas-900": "#512e75" },
    { "gigas-950": "#341655" },
    { "kashmir-blue-50": "#f5f7fa" },
    { "kashmir-blue-100": "#eaedf4" },
    { "kashmir-blue-200": "#d0d9e7" },
    { "kashmir-blue-300": "#a7b9d2" },
    { "kashmir-blue-400": "#7894b8" },
    { "kashmir-blue-500": "#5777a0" },
    { "kashmir-blue-600": "#445f85" },
    { "kashmir-blue-700": "#384d6c" },
    { "kashmir-blue-800": "#31415b" },
    { "kashmir-blue-900": "#2d394d" },
    { "kashmir-blue-950": "#1e2633" },
  ];

  console.log(colors.map((color) => Object.keys(color)[0]));
  // bg-[#e0e1dd]
  return (
    <>
      {/* <div className="h-screen w-screen grid grid-cols-11 grid-rows-auto gap-5 p-16">
        {colors.map((color, index) => (
          <div
            key={index}
            className="font-bold text-black p-4 border rounded-xl shadow-lg flex items-center justify-center"
            style={{ backgroundColor: color[Object.keys(color)[0]] }}
          >
            {Object.keys(color)[0]}
          </div>
        ))}
      </div> */}

      <Navbar />
      <Footer />
    </>
  );
};

export default Test;
