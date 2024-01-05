/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#18181b",
      white: "#ffffff",
      "off-white": "#F8F8F8",
      "dark-card": "#29292B",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      slate: "#f1f5f9",
      gray: "#374151",
      "gray-500": "#6b7280",
    },
    extend: {},
    fontFamily: {
      body: ["Poppins"],
    },
  },

  plugins: [],
};
