/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-green': '#77846a',
        'dark-green': '#2a4125',
        'light-beige': '#fef7e5',
        'dark-beige': '#f8ead0',
        'dark-brown': '#3d081b',
        'light-brown': '#d58c1e',
        'dark-grey': '#fcfdfc',
        'light-grey': '#c7cdc6',
      },
      fontFamily: {
        primary: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
