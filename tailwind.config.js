/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./gatsby-browser.js",
    "./gatsby-ssr.js",
  ],
  theme: {
    extend: {
      colors: {
        bg950: "#0B0C10",
        bg900: "#121316",
        surface: "#171A1F",
        border: "#242833",
        text: "#F2F5F8",
        muted: "#A1A8B3",
        crimson: "#FF3B5C",
        cyan: "#33E1FF",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,.35)",
      },
      borderRadius: {
        xl2: "16px",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Urbanist", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
