/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            aspectRatio: {
                "4/3": "4 / 3",
                "3/4": "3 / 4"
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
        }
    },
    plugins: [require("flowbite/plugin")]
});
