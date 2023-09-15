/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        body: ['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

