/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "movie-bg": "url('./src/assets/bgmovie.jpg')",
      },
    },
  },
  plugins: [],
};
