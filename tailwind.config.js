/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue': {
        100:'#eaf2ff',
        DEFAULT: '#2a86ff',
      },
      'gray': {
        100:'#3F536E',
        DEFAULT: '#1c1e21',
      }
    },
  },
  plugins: [],
}