/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.{tsx,ts,html}",
  ],
  theme: {
    extend: {
      colors: {
        lightYellow: "#FFF5E4",
        lightPink: "#FFE3E1",
        mediumPink: "#FFD1D1",
        deepPink: "#FF9494"
      }
    },
  },
  plugins: [],
}
