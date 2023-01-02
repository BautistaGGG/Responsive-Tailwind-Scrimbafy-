/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/index.html",
    "./src/iput.css"
  ],
  content: ["./**/*.html,js"],
  theme: {
    extend: {
      fontFamily: {
        Source: "'Source Sans Pro', sans-serif"
      }
    },
  },
  plugins: [],
}
