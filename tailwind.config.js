/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        tektur: ['Tektur', 'sans-serif'],
        gridular: ['Gridular', 'cursive'],
      },
    },
  },
  plugins: [],
}
