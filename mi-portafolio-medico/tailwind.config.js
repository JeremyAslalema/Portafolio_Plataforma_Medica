/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0077b6',
        'primary-blue-dark': '#005885',
        'secondary-blue': '#00b4d8',
        'accent-teal': '#48cae4',
        'light-blue': '#90e0ef',
        'very-light-blue': '#caf0f8',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}