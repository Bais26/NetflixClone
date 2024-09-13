/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'archivo': ['Archivo Black', 'sans-serif'],
    },
    extend: {
      colors:{
        primary: '#000000',
        second: '#E50914',
        third: '#FFFFFF',
      },
       container:{
        center: true,
        padding: {
          default: "1rem",
          sm: '16px',
          md: '20px',
          lg: '24px',
          xl: '28px',
          '2xl': '32px',
        }
      }
    },
  },
  plugins: [],
}