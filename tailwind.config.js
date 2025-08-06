/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "100%",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'], 
        teko: ['Teko', 'sans-serif'],
        gridular: ['Gridular', 'cursive'],
        pptelegraf: ['Pptelegraf', 'sans-serif'],
      },
    },
  },
  plugins: [],
}