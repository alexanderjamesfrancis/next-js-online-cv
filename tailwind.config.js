/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./componants/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back-wall': "url('/images/background3.jpg')"
      }
    },
  },
  plugins: [],
}
