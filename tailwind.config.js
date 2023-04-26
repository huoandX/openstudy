/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': {
        50: '#f7f8fa',
        300:'#f5f4f8',
        100: '#e3e3e3',
        400:'#ebedf0',
        // 暗黑模式的颜色
        200: '#d3d8de',
        // 暗黑模式的标题颜色
        tit: '#ebf3ff',
        // 暗黑模式的颜色
        text:'#e3e3e3',
        DEFAULT: '#ffffff',
      },
      'blue': {
        100: '#eaf2ff',
        200: '#338bff',
        DEFAULT: '#2a86ff', 
      },
      'gray': {
        100: '#3F536E',
        200: '#444950',
        300: '#242526',
          // 标题颜色
        400: '#0a274d',
        // 暗黑模式背景的颜色
        500: '#1b1b1d',

        DEFAULT: '#1c1e21',
      },
    },
  },
  plugins: [],
}