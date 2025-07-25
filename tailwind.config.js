/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#06B6D4",
        "dark-bg": "#0F172A",
        "dark-text": "#1E293B",
        "light-bg": "#F8FAFC",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #7C3AED, #A78BFA)",
      },
    },
  },
  plugins: [],
};
