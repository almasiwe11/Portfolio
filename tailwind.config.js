/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "rgb(255, 119, 0)",
        "gray-main": "#333639",
        "gray-text": "#94A3B8",
        "gray-light": "#f3f4f5",
        "gray-dark-text": "#423f3f",
      },
      fontFamily: {
        dm: "DM Sans, sans-serif",
        inter: "Inter Tight, sans-serif",
      },
    },
    screens: {
      sm: "480px",
      med: "570px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [],
}
