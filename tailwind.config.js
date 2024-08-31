/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      screens: {
        sm: "360px",
        md: "760px",
        lg: "1024px",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
      colors: {
        "dark-gray": "#1f1f1f",
        "gray-800": "#1f1f1f",
        "gray-900": "#111",
        "gray-200": "#e5e5e5",
        "green-600": "#388e3c",
        "green-400": "#66bb6a",
        "light-blue": "#7c3aed",
        "light-purple": "#9d4edd",
        "light-pink": "#ec4899",
      },
      boxShadow: {
        majestic: "0 4px 8px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

