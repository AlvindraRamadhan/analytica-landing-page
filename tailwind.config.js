/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED", // Ungu
        secondary: "#06B6D4", // Cyan
        "dark-bg": "#0F172A", // Latar belakang utama gelap (slate-900)
        "dark-card": "#1E293B", // Latar belakang kartu/section sekunder (slate-800)
        "light-bg": "#F8FAFC", // Latar belakang terang (slate-50)
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
