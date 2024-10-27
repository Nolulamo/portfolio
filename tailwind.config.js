/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,css}', // Adjust these paths as necessary
    './public/index.html',
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008080',
        secondary: '#FF6F61',
        background: '#F5F5F5',
      },
      height:{
        box: '189.6px',
      }
    },
  },
  plugins: [],
}

