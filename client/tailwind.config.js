
 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         'Impact': ['Impact', 'sans-serif'],
         'Unbounded': ['Unbounded', 'sans-serif'],
      },
      colors:{
        'primary':'#DB0408', 
      },
      backgroundImage:{
        'main-image': "url('../../Images/webp/main.webp')",
      },
    },
  },
  plugins: [],
}