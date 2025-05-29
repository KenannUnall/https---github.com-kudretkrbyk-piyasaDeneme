/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        chakra: ["'Chakra Petch'", "sans-serif"], // ← burası eklendi
      },
      colors: {
        primary: "#14C2A3",
        dark: "#0c1226",
        secondary: "#141A31",
      },
    },
  },
  plugins: [],
};
