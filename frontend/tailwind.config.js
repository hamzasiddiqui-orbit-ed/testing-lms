const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      brand: '#304079',
      core: '#FFFFFF',
      utility: '#7C7878',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("daisyui")
  ],
};
