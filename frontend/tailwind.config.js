/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'last':'350px',
      'fourHun':'400px',
      'FourFif':'450px',
      'SixHun':'600px',
      'NineHun':'900px',
    }
  },
  plugins: [],
}

