/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  dark: "class",
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "3/4": "3 / 4"
      },
      boxShadow: {
        normal: "2px 2px 0px rgba(0, 0, 0, 1)",
        bg: "4px 4px 0px rgba(0, 0, 0, 1)",
        md: "3px 3px 0px rgba(0, 0, 0, 1)",
        "neg-normal": "2px 2px 0px rgba(255,255,255)",
        "neg-bg": "4px 4px 0px rgba(255,255,255)",
        "neg-md": "3px 3px 0px rgba(255,255,255)"
      }
    },
    fontFamily: {
      sans: ["Brandon Text Medium", "sans-serif"],
      brandonMedium: ["Brandon Text Medium", "sans-serif"],
      brandonLight: ["BrandonText-Light", "sans-serif"],
      avertaStdThin: ["AvertaStd-Thin", "sans-serif"],
      avertaStdBold: ["AvertaStd-Bold", "sans-serif"],
      honeyLight: ["Honey Script Light", "sans-serif"],
      ikaros: ["Ikaros", "sans-serif"],
      penna: ["Penna", "sans-serif"],
      gtThin: ["GT Walsheim Pro Thin", "sans-serif"]
    },
    colors: {
      cascade: {
        50: "#f4f7f7",
        100: "#e2ebeb",
        200: "#c8d9d8",
        300: "#a1bfbf",
        400: "#89acac",
        500: "#588282",
        600: "#4c6d6e",
        700: "#425a5c",
        800: "#3b4d4f",
        900: "#354244",
        950: "#202b2c"
      },
      "desert-storm": {
        50: "#f8f6f4",
        100: "#efeae5",
        200: "#ddd4cb",
        300: "#c8b7a9",
        400: "#b19786",
        500: "#a1806e",
        600: "#947062",
        700: "#7b5d53",
        800: "#654c47",
        900: "#53403b",
        950: "#2c201e"
      },
      genoa: {
        50: "#f3faf8",
        100: "#d6f1ec",
        200: "#ade2d9",
        300: "#7dcbc3",
        400: "#52afa8",
        500: "#38948e",
        600: "#286f6c",
        700: "#265f5e",
        800: "#224d4c",
        900: "#204141",
        950: "#0d2626"
      },
      "mountain-meadow": {
        50: "#ecfdf5",
        100: "#d0fbe4",
        200: "#a5f5cf",
        300: "#6beab6",
        400: "#30d797",
        500: "#0cbf81",
        600: "#019a68",
        700: "#017b56",
        800: "#046146",
        900: "#04503b",
        950: "#012d22"
      },
      shamrock: {
        50: "#effef7",
        100: "#dafeee",
        200: "#b7fbde",
        300: "#7ff6c4",
        400: "#2be597",
        500: "#17d083",
        600: "#0dac6a",
        700: "#0e8755",
        800: "#116a46",
        900: "#10573b",
        950: "#023120"
      },
      bunker: {
        50: "#eff6ff",
        100: "#deecff",
        200: "#b6daff",
        300: "#75bdff",
        400: "#2c9cff",
        500: "#007ef7",
        600: "#0062d4",
        700: "#004dab",
        800: "#00428d",
        900: "#063874",
        950: "#010914"
      },
      "wild-sand": {
        50: "#f3f4f6",
        100: "#edeef1",
        200: "#d7dbe0",
        300: "#b3bbc6",
        400: "#8a96a6",
        500: "#6c798b",
        600: "#566173",
        700: "#474f5d",
        800: "#3d444f",
        900: "#363b44",
        950: "#24272d"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
});
