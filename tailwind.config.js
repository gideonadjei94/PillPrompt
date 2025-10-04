/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        lato: "LatoRegular",
        latoBold: "LatoBold",
      },
      colors: {
        primary: "#4A154B",
        secondary: "#16a34a",
        light: "#F7E6F8",
      },
    },
  },
  plugins: [],
};
