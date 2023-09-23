/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#e3ae1e',
        secondary: '#454442',
        secondaryAccent: '#212120',
        background:'#000000'
      }
    },
  },
  plugins: [],
}
