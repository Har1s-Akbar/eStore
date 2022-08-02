/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      'sm' : '240px',
      'lg' : '820px'
    },
    extend: {},
  },
  plugins: [],
}
