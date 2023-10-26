/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces : ['Fraunces', 'serif'],
        barlow : ['Barlow', 'sans']
      }, 
      screens: {
        'xl': '1280px',
        '2xl': '1536px',
      }
    }
  },
  plugins: [],
}

