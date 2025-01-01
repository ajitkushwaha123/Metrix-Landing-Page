const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#5570F1",
        secondary: "#EEF0FA",
        txtPrimary: "#BEC0CA",
        txtGreen: "#519C66",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        mainBg: "url('./src/assets/bg.png')",
        pattern1:
          "url('https://shuffle.dev/saturn-assets/images/testimonials/orange-light.png')",
        pattern2:
          "url('https://shuffle.dev/saturn-assets/images/testimonials/blue-light.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [ nextui() , require("@tailwindcss/line-clamp")],
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
