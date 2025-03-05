/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001010',
        secondary: "#aaa6c3",
        tertiary: "#202020",
        nav: "#383838",
        bg:'#1d1a1a'
      },
      screens:{
        'xs': '550px',
      }
    },
    dropShadow: {
      'section': '0px -20px 10px rgba(173, 173, 173, 0.5)',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Roboto Slab', 'serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'mansalva': ['Mansalva', 'cursive'],
      'hiMelody': ['Hi Melody', 'cursive'],
      'Pixelify' : ['Pixelify Sans', 'cursive'],
      'Orbitron' : ['Orbitron', 'sans-serif']
    }
  },
  plugins: [],
}

