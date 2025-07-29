/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        Teko: ['Teko', 'sans-serif'],
        gridular: ['Gridular', 'cursive'],
        pptelegraf: ['Pptelegraf', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
