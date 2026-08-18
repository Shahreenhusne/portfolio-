/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A1931",
          800: "#1A3D63",
        },
        steel: {
          500: "#4A7FA7",
        },
        sky: {
          100: "#B3CFE5",
        },
        frost: {
          50: "#F6FAFD",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(74, 127, 167, 0.45)",
      },
    },
  },
  plugins: [],
};
