/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Quando', 'sans-serif'],
      serif: ['Quando', 'serif'],
    },
    extend: {
      colors: {
      'primary-color': '#0D1B2A',
      'dark-blue': '#1B263B',
      'blue': '#415A77',
      'light-blue': '#778DA9',
      'secondary': '#E0E1DD',
      'dark-secondary': '#EEE9C0',
      'accent': '#c6c5b9',
      'background': '#151515',
      'text': '#151515',
      'light': '#FDFDFF',
      'dark': '#151515',
    },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
  ],
}

